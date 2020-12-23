using Microsoft.AspNet.SignalR;
using Microsoft.Owin.Cors;
using Microsoft.Owin.Hosting;
using Microsoft.Owin.Logging;
using Owin;
using SpeechRecognition.SpeechRecognition;
using System;
using System.Net;
using System.Net.Sockets;
using System.Text;
using Fleck;
using System.Windows;
using System.Collections.Generic;
using System.Linq;

namespace SpeechRecognition
{

    class Program
    {
        
        static void Main(string[] args)
        {
            var hostName = Dns.GetHostName(); // Retrive the Name of HOST  
            Console.WriteLine(hostName);
            var myIP = Dns.GetHostByName(hostName).AddressList[0].ToString(); // Get the IP
            Console.WriteLine("My IP Address is :" + myIP);
            var address = "ws://" + myIP + ":8080"; //create a websocket address
            Console.WriteLine("Speech Recognition is running at {0}", address);
            var x = new MicrosoftSpeechRecognition();
            List<IWebSocketConnection> sockets = new List<IWebSocketConnection>();
            var server = new WebSocketServer(address);
            server.Start(socket =>
            {
                socket.OnOpen = () =>
                {
                    Console.WriteLine("Connection open.");
                    sockets.Add(socket);
                    Program.SendMessage("Connection Open",sockets);
                };
                socket.OnClose = () =>
                {
                   
                    Console.WriteLine("Connection closed.");
                    sockets.Remove(socket);
                  // SendMessage("Connection Closed");
                };
                socket.OnMessage = message =>
                {
                    
                    x.RecognizeSpeech(message,sockets);

                };
                socket.OnError = err =>
                {
                    Console.WriteLine("Something wrong with the connection");
                    Console.WriteLine("Error message :" + err);
                };
            });
            while(x.recognizedText == null) { }
            
            ////Establish a new socket connection
            //SocketConnections soc = new SocketConnections();
            //soc.GetSocketsToWork();
            
            Console.ReadLine();

        }

        private static void StartSpeechRecognitionApp()
        {
            
        }
        public static void SendMessage(string mess, List<IWebSocketConnection> sockets)
        {

            sockets.ToList().ForEach(s => s.Send(mess));
            Console.WriteLine("Message: " + mess + " sent to front end");


        }

    }

}
