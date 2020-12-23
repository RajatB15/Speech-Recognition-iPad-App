using Microsoft.AspNet.SignalR;
using Microsoft.Owin.Cors;
using Owin;
using SpeechRecognition.Hubs;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SpeechRecognition
{
    class Startup
    {

        public void Configuration(IAppBuilder app)
        {
            app.UseCors(CorsOptions.AllowAll);

            var hubConfiguration = new HubConfiguration
            {
                EnableDetailedErrors = true
            };

            AppDomain.CurrentDomain.Load(typeof(SpeechRecognitionHub).Assembly.FullName);
            app.MapSignalR(hubConfiguration);
        }
    }
}
