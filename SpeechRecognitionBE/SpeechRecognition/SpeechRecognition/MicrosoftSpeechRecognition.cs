using Microsoft.Speech.AudioFormat;
using Microsoft.Speech.Recognition;
using System;
using System.Globalization;
using System.IO;
using System.Linq;
using System.Reflection;
using System.Diagnostics;
using System.Security.Cryptography;
using System.Collections.Generic;
using SpeechRecognition;
using Fleck;

namespace SpeechRecognition.SpeechRecognition
{
    class MicrosoftSpeechRecognition : IDisposable
    {
        public string recognizedText;
        private  string SpeechRecognitionLanguage = "en-US";
        private  SpeechRecognitionEngine mySpeechRecognitionEngine;
        private  Grammar myGrammar;
        bool completed;
        long milliseconds1, milliseconds2=0;
        FileStream fs;
        FileStream qw;
        int counter = 0;
        private long FileTime, RecoTime;
        PerformanceLogs TimeTakenToGenerateAFile = new PerformanceLogs();
        PerformanceLogs TimeTakenToRecognize=new PerformanceLogs();
        List<IWebSocketConnection> sockets;
        public MicrosoftSpeechRecognition()
        {
        }
        public void RecognizeSpeech(string x, List<IWebSocketConnection> sockets)
        {
            this.sockets = sockets;
            recognizedText = null;
            TimeTakenToGenerateAFile.StartTimer();
            //convert base 64 string to bytes
            byte[] a = Convert.FromBase64String(x);
            //write the bytes to a file
            fs=File.Create(@"D:\Temp\myFile2.wav");
            for(int i = 0; i < a.Length; i++)
            {
                fs.WriteByte(a[i]);
            }
            fs.Close();
            //fs.WriteAllBytes(@"D:\Temp\myFile2.wav", a);
            TimeTakenToGenerateAFile.StopTimer();
            FileTime = TimeTakenToGenerateAFile.PerfLog();
            Console.WriteLine("File overwritten");
            mySpeechRecognitionEngine = new SpeechRecognitionEngine(new CultureInfo(SpeechRecognitionLanguage));
            var soc = new SocketConnections();
            //change the parameter Stereo to Mono (depends the number of channels of the audio) Cordova media plugin : Mono, Cordova media capture plugin: Stereo

            qw = File.OpenRead(@"D:\Temp\myFile2.wav");
            
                mySpeechRecognitionEngine.SetInputToAudioStream(
                                         qw,
                                         new SpeechAudioFormatInfo(
                                          44100, AudioBitsPerSample.Sixteen, AudioChannel.Mono));

            
                myGrammar = CreateGrammerUsingGrammerBuilder();
                mySpeechRecognitionEngine.LoadGrammar(myGrammar);
                attachEvents();
                TimeTakenToRecognize.StartTimer();
                mySpeechRecognitionEngine.RecognizeAsync(RecognizeMode.Multiple);
            
            
        }

        private Grammar CreateGrammerUsingGrammerBuilder()
        {
            Choices choices = new Choices(new string[] { "hello", "pause", "play", "movie","play and stop"});
            Grammar grammar = new Grammar((GrammarBuilder)choices);
            grammar.Name = "sampleGrammer";
            return grammar;
        }
 
        private  Grammar LoadGrammerAsResource()
        {
            string GrammarPath = "SpeechRecognition.Grammar.IVA-grammar-GB-All.xml";
            Assembly assembly = Assembly.GetExecutingAssembly();
            Grammar grammar;

            using (Stream stream = assembly.GetManifestResourceStream(GrammarPath))
            {
                grammar = new Grammar(stream);
            }

            return grammar;
        }

        private void SpeechRecognizedHandler(
        object sender, SpeechRecognizedEventArgs e)
        {
            if (e.Result != null && e.Result.Text != null)
            {
               
                Console.WriteLine("  Recognized text =  {0}", e.Result.Text);
                recognizedText = e.Result.Text;
                TimeTakenToRecognize.StopTimer();
                RecoTime = TimeTakenToRecognize.PerfLog();
                Console.WriteLine("File Time " + FileTime);
                Console.WriteLine("Reco Time " + RecoTime);
               
            }
            else
            {
                Console.WriteLine("  Recognized text not available.");
            }
        }

        private void SpeechRejectedHandler(
        object sender, SpeechRecognitionRejectedEventArgs e)
        {
            Console.WriteLine("  ds{0}", e.Result);

        }

        // Handle the RecognizeCompleted event.  
        private void RecognizeCompletedHandler(
          object sender, RecognizeCompletedEventArgs e)
        {
           
            if (e.Error != null)
            {
                Console.WriteLine("  Error encountered, {0}: {1}",
                  e.Error.GetType().Name, e.Error.Message);
            }
            if (e.Cancelled)
            {
                Console.WriteLine("  Operation cancelled.");
            }
            if (e.InputStreamEnded)
            {
                Program a = new Program();
                if (recognizedText == null)
                {
                    recognizedText = "text not found";
                    Program.SendMessage(recognizedText,this.sockets);
                    Console.WriteLine("  End of stream encountered.");
                    qw.Close();
                    File.Delete(@"D:\Temp\myFile2.wav");
                }
                else
                {
                    Program.SendMessage(recognizedText, this.sockets);
                    Console.WriteLine("  End of stream encountered.");
                    qw.Close();
                    File.Delete(@"D:\Temp\myFile2.wav");
                }
                 
            }


            completed = true;

            
        }

        private void StartCompletedHandler(

         object sender, SpeechDetectedEventArgs e)
        {
            

            Console.WriteLine("Speech detected");

        }



        private void attachEvents()
        {
            mySpeechRecognitionEngine.SpeechRecognized +=
            new EventHandler<SpeechRecognizedEventArgs>(
            SpeechRecognizedHandler);


            mySpeechRecognitionEngine.RecognizeCompleted +=
            new EventHandler<RecognizeCompletedEventArgs>(RecognizeCompletedHandler);
        }



        public void Dispose()
        {
            
            mySpeechRecognitionEngine.SpeechRecognized -=
            new EventHandler<SpeechRecognizedEventArgs>(
             SpeechRecognizedHandler);
            mySpeechRecognitionEngine.Dispose();
            
        }
    }

}
