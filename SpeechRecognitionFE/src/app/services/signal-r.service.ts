import { Injectable, Inject } from '@angular/core';
import { Subject } from 'rxjs';
import { SignalrWindow } from './signal-r-window.service';




export enum ConnectionState {
  Connecting = 1,
  Connected = 2,
  Reconnecting = 3,
  Disconnected = 4
}
@Injectable()
export class SignalRService {
  private hubConnection: any;
  private hubProxy: any;
  private serverResponseSubject: Subject<any> = new Subject<any>();
  private connectedSubject: Subject<boolean> = new Subject<boolean>();

  constructor(
    @Inject(SignalrWindow) private window: SignalrWindow) {
    if (this.window.$ === undefined || this.window.$.hubConnection === undefined) {
      throw new Error('The variable \"$\\" or the .hubConnection() function are not defined...' +
        'please check the SignalR scripts have been loaded properly');
    }
  }

  start() {
    this.hubConnection = this.window.$.hubConnection('http://172.31.98.142:8083/speech');
  // this.hubConnection.url = 'http://localhost:9000/signalr';

    this.stateChangeHandlers();
    this.hubProxy = this.hubConnection.createHubProxy('SpeechRecognitionHub');
    this.attachClientHandlers();
    return this.startConnection();
  }

  private startConnection() {
    this.hubConnection.start()
      .done(() => {
        this.connectedSubject.next(true);
      })
      .fail((error: any) => {
        this.connectedSubject.error(false);
      });
    return this.connectedSubject;
  }

  stateChangeHandlers() {
    this.hubConnection.stateChanged((state: any) => {
      let newState = ConnectionState.Connecting;

      switch (state.newState) {
        case this.window.$.signalR.connectionState.connecting:
          newState = ConnectionState.Connecting;
          break;
        case this.window.$.signalR.connectionState.connected:
          newState = ConnectionState.Connected;
          break;
        case this.window.$.signalR.connectionState.reconnecting:
          newState = ConnectionState.Reconnecting;
          break;
        case this.window.$.signalR.connectionState.disconnected:
          newState = ConnectionState.Disconnected;
          break;
      }
    });
  }

  attachClientHandlers() {
    this.hubProxy.on('onTextRecieved', (response) => {
      this.serverResponseSubject.next(response);
    });
  }

  getServerResponseObservable() {
    return this.serverResponseSubject.asObservable();
  }

  publish(serviceName: string, params: string): void {
    this.hubProxy.invoke(serviceName, params);
  }
}
