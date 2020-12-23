using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Diagnostics;


namespace SpeechRecognition
{
    class PerformanceLogs
    {
        Stopwatch timer=new Stopwatch();
        public long TimeInMS;
        public PerformanceLogs()
        {
            
        }

        public void StartTimer()
        {
            timer.Start();
        }

        public void StopTimer()
        {
            timer.Stop();
        }

        public long PerfLog()
        {
            TimeInMS = timer.ElapsedMilliseconds;
            return TimeInMS;
        }


    }
}
