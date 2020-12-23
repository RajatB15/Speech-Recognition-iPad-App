using Microsoft.AspNet.SignalR;
using Microsoft.AspNet.SignalR.Hubs;
using SpeechRecognition.SpeechRecognition;
using System;
using System.IO;
using System.Linq;

namespace SpeechRecognition.Hubs
{
    [HubName("SpeechRecognitionHub")]
    public class SpeechRecognitionHub : Hub
    {
        private MicrosoftSpeechRecognition speechService = new MicrosoftSpeechRecognition();
        public void RecognizeSpeech()
        {
           
         
        }
    }
}
