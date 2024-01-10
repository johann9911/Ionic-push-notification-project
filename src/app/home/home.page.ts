import { Component } from '@angular/core';
import { Capacitor } from '@capacitor/core';
import {
  FirebaseMessaging,
  GetTokenOptions,
  Notification,
} from '@capacitor-firebase/messaging';
import { masivPushWebService } from 'npm-masivwebservicetest';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public token = '';
  public service;
  public currentplatform = '';

  constructor() {
    this.currentplatform = Capacitor.getPlatform();
    let envpush =
      this.currentplatform === 'android'
        ? environment.pushAndroidEnv
        : this.currentplatform === 'ios'
        ? environment.pushIosEnv
        : environment.pushWebEnv;
    this.service = new masivPushWebService(
      envpush.externalApplicationId,
      envpush.platform
    );
    //Esto es para recibir notificaciones android y ios
    FirebaseMessaging.addListener('notificationReceived', async (event) => {
      console.log('notificationReceived: ', { event });
      console.log('data: ' + JSON.stringify(event.notification));
      alert('Push received: ' + JSON.stringify(event.notification));
      this.registerEventReceive(event.notification.data);
    });
    FirebaseMessaging.addListener(
      'notificationActionPerformed',
      async (event) => {
        console.log('notificationActionPerformed: ', { event });
        this.registerEventOpen(event.notification.data);
      }
    );
    //Esto es para recibir notificaciones web primer plano
    if (Capacitor.getPlatform() === 'web') {
      navigator.serviceWorker.addEventListener(
        'message',
        async (event: any) => {
          console.log(' message: ', { event });
          var notificaciondata = event.data.data;
          const notification = new Notification(notificaciondata.title, {
            body: notificaciondata.body,
            data: notificaciondata,
          });
          this.registerEventReceive(notificaciondata);
          notification.onclick = async (event) => {
            const clickedNotification = event.currentTarget as Notification;
            console.log('notification clicked: ', { event });
            if (clickedNotification && clickedNotification.data) {
              const notificationData = clickedNotification.data;
              this.registerEventOpen(notificationData);
            }
          };
        }
      );
    }
  }

  public async requestPermissions(): Promise<void> {
    await FirebaseMessaging.requestPermissions();
  }

  public async getToken(): Promise<void> {
    const options: GetTokenOptions = {
      vapidKey: environment.firebaseConfig.vapidKey,
    };
    console.log('Entro a gettoekn...');
    if (this.currentplatform === 'web') {
      options.serviceWorkerRegistration =
        await navigator.serviceWorker.register('firebase-messaging-sw.js');
      console.log('registrado');
    }
    console.log(this.service);
    const { token } = await FirebaseMessaging.getToken(options);
    this.token = token;
    let respGetToken = await this.service.registerToken(this.token);
    console.log('token enviado: ' + token);
    console.log('Registrando celular...');
    console.log('Response management-api-token: ', respGetToken);
    this.handleRegisterCellphone();
  }

  async handleRegisterCellphone() {
    let phoneNumber = '3505776166';
    let respRegisterPhone = await this.service.registerPhone(
      this.token,
      phoneNumber
    );
    console.log('Response RegisterPhone: ', respRegisterPhone);
  }

  async registerEventReceive(notificaciondata) {
    try {
      let respEventReceived = await this.service.registerEventReceived(
        notificaciondata
      );
      console.log('Response EventReceived: ', respEventReceived);
    } catch (e) {
      console.log('Error: ', e);
    }
  }

  async registerEventOpen(notificaciondata) {
    try {
      let respEventOpened = await this.service.registerEventOpened(
        notificaciondata
      );
      console.log('Response EventOpened: ', respEventOpened);
    } catch (e) {
      console.log('Error: ', e);
    }
  }
}
