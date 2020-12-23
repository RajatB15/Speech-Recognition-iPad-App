using Fleck;
using SpeechRecognition.SpeechRecognition;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Text;
using System.Threading.Tasks;

namespace SpeechRecognition
{
     class SocketConnections
    {
        private string hostName;
        private string myIP;
        private string address;
        private List<IWebSocketConnection> sockets = new List<IWebSocketConnection>();
        private WebSocketServer server;
        public string ReceivedMessage=null;
        public bool ConnectionStatus = false;
        MicrosoftSpeechRecognition x;

        public SocketConnections()
        {
            hostName = Dns.GetHostName(); // Retrive the Name of HOST  
            Console.WriteLine(hostName);
            myIP = Dns.GetHostByName(hostName).AddressList[0].ToString(); // Get the IP
            Console.WriteLine("My IP Address is :" + myIP);
            address = "ws://" + myIP + ":8080"; //create a websocket address
            Console.WriteLine("Speech Recognition is running at {0}", address);
            x = new MicrosoftSpeechRecognition();


        }


        public void GetSocketsToWork()
        {
            while (!ConnectionStatus)
            {
                server = new WebSocketServer(address);
                server.Start(socket =>
                {
                    socket.OnOpen = () =>
                    {
                        Console.WriteLine("Connection open.");
                        sockets.Add(socket);
                        SendMessage("Connection Open");
                    };
                    socket.OnClose = () =>
                    {
                        ConnectionStatus = false;
                        Console.WriteLine("Connection closed.");
                        sockets.Remove(socket);
                       // SendMessage("Connection Closed");
                    };
                    socket.OnMessage = message =>
                    {
                       // Console.WriteLine(message);
                        ReceivedMessage = message;
                        ConnectionStatus = true;
                       // x.RecognizeSpeech(message,sockets);
                        
                    };
                    socket.OnError = err =>
                     {
                         Console.WriteLine("Something wrong with the connection");
                         Console.WriteLine("Error message :" + err);
                     };
                });
            }
            
        }

        public void SendMessage(string mess)
        {
            if (x.recognizedText != null)
            {
                sockets.ToList().ForEach(s => s.Send(x.recognizedText));
                Console.WriteLine("Message: " + x.recognizedText + " sent to front end");
            }
            else
            {
                sockets.ToList().ForEach(s => s.Send(mess));
                Console.WriteLine("Message: " + mess + " sent to front end");
            }
            
        }
    }
}
