document.addEventListener("deviceready", onDeviceReady, false);
var path;
var file = null;
var fileInBase64Format;
var status;
var media_rec;
var messages = null;
var command = null;
var perft0, perft1;
var perfarr = [];
var counter = 0;
var duration_of_record;
var connectionStatus;
//var src="cdvfile://localhost/myreco.wav";
var src = "cdvfile://localhost/temporary/myreco.wav";

function onDeviceReady() {
    duration_of_record = 3000;
    return new Promise((resolve, reject) => {
        media_rec = new Media(src, onSuccess, onFail);

        function onSuccess() {
            console.log('success');

        }

        function onFail() {
            console.log('failed');
        }
        //var wsUri="ws://172.18.164.65:8080";
        var wsUri = "ws://10.254.254.10:8080";
        //var wsUri = "ws://172.31.98.142:8080";
        //create a websockets
        websocket = new WebSocket(wsUri);
        websocket.binarytype = 'arraybuffer';
        websocket.onopen = function (event) {
            console.log(event);
            console.log("connection open");
            resolve();
            connectionStatus=true;
            //  deviceReadyPromise = null;
        }
        websocket.onmessage = function (event) {
            //console.log(event.data);
            messages = event.data;

        }

        websocket.onclose = function () {
            console.log("closing websocket");
            connectionStatus=false;
        }

        websocket.onerror = function (err) {
            console.log(err);
        }

        function onOpen() {
            console.log("abc");
        }

    })


}


function startRe() {
    return new Promise((resolve, reject) => {
        console.log("starting recording");
        media_rec.startRecord();
        setTimeout(() => {
            media_rec.stopRecord();
            console.log("recoding stopped");
            status = "processing the recording ...";
            resolveLocalFileSystemURL(src, function (entry) {

                var nativepath = entry.toURL();
                console.log('Native URI:' + nativepath);
                entry.file(function (file) {
                    var reader = new FileReader();
                    reader.onloadend = function (encodedFile) {
                        //console.log(this.result);
                        var src = encodedFile.target.result;
                        src = src.split("base64,");
                        fileInBase64Format = src[1];
                        perft0 = performance.now();
                        //console.log(fileInBase64Format);
                        websocket.send(fileInBase64Format);

                        //check 2
                        //while (command == null) {
                        // }
                        //check 1
                        websocket.onmessage = function (event) {
                            console.log(event.data);
                            command = event.data;
                            }
                            perft1 = performance.now();
                            console.log("perf whole: " +(perft1 - perft0) );
                            resolve();
                        
                    }
                    reader.readAsDataURL(file);

                });
            });


        }, duration_of_record);
    });
}

function stopRe() {
    return new Promise((resolve, reject) => {
        media_rec.stopRecord();
        resolve();
    });
}

function playRe() {
    media_rec.play();
};