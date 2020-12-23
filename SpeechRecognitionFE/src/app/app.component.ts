import { Component, ChangeDetectorRef } from '@angular/core';
import { ViewChild, ElementRef } from '@angular/core';

declare const startRe: any;
declare const stopRe: any;
declare const playRe: any;
declare const status: any;
declare const onDeviceReady: any;
declare const messages: any;
declare const command: any;
declare const duration_of_record: any;
declare const connectionStatus: any;
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent {
    //@ViewChild('abcde') abcde: ElementRef;
    recording_available: boolean = false;
    connected: boolean = false;
    Status = status;
    Command = 'waiting for command';
    count = 0;
    counter = 0;
    stop = true;
    constructor(private ref: ChangeDetectorRef) { }

    ngOnInit() {
        this.Status = "getting ready";


        onDeviceReady().then(() => {
            this.connected = true;
            this.Status = "Ready to listen";
            this.Command = "Waiting for command";
            this.NLPToggle();
        });


    }

    initiateRecording() {
        this.Status = "Recording...";

        startRe().then(() => {
            this.recording_available = true;
            this.Status = "finished recording";
            this.Command = command;
            this.checkToRepeat();
        });


    }

    checkToRepeat() {
        if (this.stop == false || connectionStatus ==false) { }
        else { this.initiateRecording(); }
    }
    
    stopRecording() {
        console.log("stop reco is running");
        this.Status = "Voice Recognition Stoppped";
        this.stop = false;
        /*
       stopRe().then(()=>{
           this.Status= "Voice Recognition Stoppped";
           this.Command="Slide the speech recognition button on to recive voice commands";
       });
       */

    }

    playRecording() {
        playRe();
    }

    NLPToggle() {
        this.counter = this.counter + 1;
        console.log(this.counter);
        if (this.counter % 2 == 0) {
            this.stopRecording();

        }
        else {
            this.initiateRecording();
            this.stop = true;
        }

    }



}
