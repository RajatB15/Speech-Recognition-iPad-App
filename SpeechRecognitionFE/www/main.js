(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* The switch - the box around the slider */\n.switch {\n    position: relative;\n    display: inline-block;\n    width: 60px;\n    height: 34px;\n  }\n/* Hide default HTML checkbox */\n.switch input {\n    opacity: 0;\n    width: 0;\n    height: 0;\n  }\n/* The slider */\n.slider {\n    position: absolute;\n    cursor: pointer;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    background-color: rgb(252, 0, 0);\n    transition: .4s;\n  }\n.slider:before {\n    position: absolute;\n    content: \"\";\n    height: 26px;\n    width: 26px;\n    left: 4px;\n    bottom: 4px;\n    background-color: white;\n    transition: .4s;\n  }\ninput:checked + .slider {\n      \n    background-color: rgb(82, 243, 33);\n  }\ninput:focus + .slider {\n    box-shadow: 0 0 1px rgb(82, 243, 33);\n  }\ninput:checked + .slider:before {\n    -webkit-transform: translateX(26px);\n    transform: translateX(26px);\n  }\n/* Rounded sliders */\n.slider.round {\n    border-radius: 34px;\n  }\n.slider.round:before {\n    border-radius: 50%;\n    \n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsMkNBQTJDO0FBQzNDO0lBQ0ksa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQixXQUFXO0lBQ1gsWUFBWTtFQUNkO0FBRUEsK0JBQStCO0FBQy9CO0lBQ0UsVUFBVTtJQUNWLFFBQVE7SUFDUixTQUFTO0VBQ1g7QUFFQSxlQUFlO0FBQ2Y7SUFDRSxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLE1BQU07SUFDTixPQUFPO0lBQ1AsUUFBUTtJQUNSLFNBQVM7SUFDVCxnQ0FBZ0M7SUFFaEMsZUFBZTtFQUNqQjtBQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxZQUFZO0lBQ1osV0FBVztJQUNYLFNBQVM7SUFDVCxXQUFXO0lBQ1gsdUJBQXVCO0lBRXZCLGVBQWU7RUFDakI7QUFFQTs7SUFFRSxrQ0FBa0M7RUFDcEM7QUFFQTtJQUNFLG9DQUFvQztFQUN0QztBQUVBO0lBQ0UsbUNBQW1DO0lBRW5DLDJCQUEyQjtFQUM3QjtBQUVBLG9CQUFvQjtBQUNwQjtJQUNFLG1CQUFtQjtFQUNyQjtBQUVBO0lBQ0Usa0JBQWtCOztFQUVwQiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogVGhlIHN3aXRjaCAtIHRoZSBib3ggYXJvdW5kIHRoZSBzbGlkZXIgKi9cbi5zd2l0Y2gge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgd2lkdGg6IDYwcHg7XG4gICAgaGVpZ2h0OiAzNHB4O1xuICB9XG4gIFxuICAvKiBIaWRlIGRlZmF1bHQgSFRNTCBjaGVja2JveCAqL1xuICAuc3dpdGNoIGlucHV0IHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHdpZHRoOiAwO1xuICAgIGhlaWdodDogMDtcbiAgfVxuICBcbiAgLyogVGhlIHNsaWRlciAqL1xuICAuc2xpZGVyIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjUyLCAwLCAwKTtcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IC40cztcbiAgICB0cmFuc2l0aW9uOiAuNHM7XG4gIH1cbiAgXG4gIC5zbGlkZXI6YmVmb3JlIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBoZWlnaHQ6IDI2cHg7XG4gICAgd2lkdGg6IDI2cHg7XG4gICAgbGVmdDogNHB4O1xuICAgIGJvdHRvbTogNHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogLjRzO1xuICAgIHRyYW5zaXRpb246IC40cztcbiAgfVxuICBcbiAgaW5wdXQ6Y2hlY2tlZCArIC5zbGlkZXIge1xuICAgICAgXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDgyLCAyNDMsIDMzKTtcbiAgfVxuICBcbiAgaW5wdXQ6Zm9jdXMgKyAuc2xpZGVyIHtcbiAgICBib3gtc2hhZG93OiAwIDAgMXB4IHJnYig4MiwgMjQzLCAzMyk7XG4gIH1cbiAgXG4gIGlucHV0OmNoZWNrZWQgKyAuc2xpZGVyOmJlZm9yZSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjZweCk7XG4gICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgyNnB4KTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjZweCk7XG4gIH1cbiAgXG4gIC8qIFJvdW5kZWQgc2xpZGVycyAqL1xuICAuc2xpZGVyLnJvdW5kIHtcbiAgICBib3JkZXItcmFkaXVzOiAzNHB4O1xuICB9XG4gIFxuICAuc2xpZGVyLnJvdW5kOmJlZm9yZSB7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIFxuICB9Il19 */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"text-align:center\">\n    <h1>BACKEND DRIVEN NLP PROTOTYPE</h1>\n  <label class=\"switch\">\n    <input #abcde type=\"checkbox\" (click)=\"NLPToggle()\">\n    <span class=\"slider round\"  ></span>\n  </label>\n  \n    <br/>\n    <br/>\n    <h2 *ngIf=\"Status\">STATUS</h2>\n    <p *ngIf=\"Status\">{{Status}}</p>\n    <h2>COMMAND</h2>\n    <p>{{Command}}</p> \n    <button (click)=\"playRecording()\" class=\"btn btn-primary\" > Play Recording </button>\n  \n    \n</div>\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent(ref) {
        this.ref = ref;
        //@ViewChild('abcde') abcde: ElementRef;
        this.recording_available = false;
        this.connected = false;
        this.Status = status;
        this.Command = 'waiting for command';
        this.count = 0;
        this.counter = 0;
        this.stop = true;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.Status = "getting ready";
        onDeviceReady().then(function () {
            _this.connected = true;
            _this.Status = "Ready to listen";
            _this.Command = "Waiting for command";
            _this.NLPToggle();
        });
    };
    AppComponent.prototype.initiateRecording = function () {
        var _this = this;
        this.Status = "Recording...";
        startRe().then(function () {
            _this.recording_available = true;
            _this.Status = "finished recording";
            _this.Command = command;
            _this.checkToRepeat();
        });
    };
    AppComponent.prototype.checkToRepeat = function () {
        if (this.stop == false || connectionStatus == false) { }
        else {
            this.initiateRecording();
        }
    };
    AppComponent.prototype.stopRecording = function () {
        console.log("stop reco is running");
        this.Status = "Voice Recognition Stoppped";
        this.stop = false;
        /*
       stopRe().then(()=>{
           this.Status= "Voice Recognition Stoppped";
           this.Command="Slide the speech recognition button on to recive voice commands";
       });
       */
    };
    AppComponent.prototype.playRecording = function () {
        playRe();
    };
    AppComponent.prototype.NLPToggle = function () {
        this.counter = this.counter + 1;
        console.log(this.counter);
        if (this.counter % 2 == 0) {
            this.stopRecording();
        }
        else {
            this.initiateRecording();
            this.stop = true;
        }
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _services_signal_r_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/signal-r.service */ "./src/app/services/signal-r.service.ts");
/* harmony import */ var _services_signal_r_window_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/signal-r-window.service */ "./src/app/services/signal-r-window.service.ts");
/* harmony import */ var ngx_countdown_timer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-countdown-timer */ "./node_modules/ngx-countdown-timer/ngx-countdown-timer.umd.js");
/* harmony import */ var ngx_countdown_timer__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(ngx_countdown_timer__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], ngx_countdown_timer__WEBPACK_IMPORTED_MODULE_7__["CountdownTimerModule"].forRoot(), _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"]
            ],
            providers: [
                _services_signal_r_service__WEBPACK_IMPORTED_MODULE_5__["SignalRService"], { provide: _services_signal_r_window_service__WEBPACK_IMPORTED_MODULE_6__["SignalrWindow"], useValue: window }
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/services/signal-r-window.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/services/signal-r-window.service.ts ***!
  \*****************************************************/
/*! exports provided: SignalrWindow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignalrWindow", function() { return SignalrWindow; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var SignalrWindow = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](SignalrWindow, _super);
    function SignalrWindow() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return SignalrWindow;
}(Window));



/***/ }),

/***/ "./src/app/services/signal-r.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/signal-r.service.ts ***!
  \**********************************************/
/*! exports provided: ConnectionState, SignalRService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConnectionState", function() { return ConnectionState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignalRService", function() { return SignalRService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _signal_r_window_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./signal-r-window.service */ "./src/app/services/signal-r-window.service.ts");




var ConnectionState;
(function (ConnectionState) {
    ConnectionState[ConnectionState["Connecting"] = 1] = "Connecting";
    ConnectionState[ConnectionState["Connected"] = 2] = "Connected";
    ConnectionState[ConnectionState["Reconnecting"] = 3] = "Reconnecting";
    ConnectionState[ConnectionState["Disconnected"] = 4] = "Disconnected";
})(ConnectionState || (ConnectionState = {}));
var SignalRService = /** @class */ (function () {
    function SignalRService(window) {
        this.window = window;
        this.serverResponseSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.connectedSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        if (this.window.$ === undefined || this.window.$.hubConnection === undefined) {
            throw new Error('The variable \"$\\" or the .hubConnection() function are not defined...' +
                'please check the SignalR scripts have been loaded properly');
        }
    }
    SignalRService.prototype.start = function () {
        this.hubConnection = this.window.$.hubConnection('http://172.31.98.142:8083/speech');
        // this.hubConnection.url = 'http://localhost:9000/signalr';
        this.stateChangeHandlers();
        this.hubProxy = this.hubConnection.createHubProxy('SpeechRecognitionHub');
        this.attachClientHandlers();
        return this.startConnection();
    };
    SignalRService.prototype.startConnection = function () {
        var _this = this;
        this.hubConnection.start()
            .done(function () {
            _this.connectedSubject.next(true);
        })
            .fail(function (error) {
            _this.connectedSubject.error(false);
        });
        return this.connectedSubject;
    };
    SignalRService.prototype.stateChangeHandlers = function () {
        var _this = this;
        this.hubConnection.stateChanged(function (state) {
            var newState = ConnectionState.Connecting;
            switch (state.newState) {
                case _this.window.$.signalR.connectionState.connecting:
                    newState = ConnectionState.Connecting;
                    break;
                case _this.window.$.signalR.connectionState.connected:
                    newState = ConnectionState.Connected;
                    break;
                case _this.window.$.signalR.connectionState.reconnecting:
                    newState = ConnectionState.Reconnecting;
                    break;
                case _this.window.$.signalR.connectionState.disconnected:
                    newState = ConnectionState.Disconnected;
                    break;
            }
        });
    };
    SignalRService.prototype.attachClientHandlers = function () {
        var _this = this;
        this.hubProxy.on('onTextRecieved', function (response) {
            _this.serverResponseSubject.next(response);
        });
    };
    SignalRService.prototype.getServerResponseObservable = function () {
        return this.serverResponseSubject.asObservable();
    };
    SignalRService.prototype.publish = function (serviceName, params) {
        this.hubProxy.invoke(serviceName, params);
    };
    SignalRService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_signal_r_window_service__WEBPACK_IMPORTED_MODULE_3__["SignalrWindow"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_signal_r_window_service__WEBPACK_IMPORTED_MODULE_3__["SignalrWindow"]])
    ], SignalRService);
    return SignalRService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/administrator/Documents/ProjectAngularRecordx/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map