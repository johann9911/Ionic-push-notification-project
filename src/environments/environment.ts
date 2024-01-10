import {
  WEB_PLATFORM,
  ANDROID_PLATFORM,
  IOS_PLATFORM,
} from 'npm-masivwebservicetest';
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebaseConfig: {
    apiKey: 'AIzaSyBKPiK9IshLMWYT9odAmT8XQ4wfLc30oW8',
    authDomain: 'masivianpush.firebaseapp.com',
    databaseURL: 'https://masivianpush.firebaseio.com',
    projectId: 'masivianpush',
    storageBucket: 'masivianpush.appspot.com',
    messagingSenderId: '962904260310',
    appId: '1:962904260310:web:53a611753ac32e2c93d377',
    measurementId: 'G-L52ZKBZX3N',
    vapidKey:
      'BJS9dIOM7YC0sBs_4BJE-krf8hmAUcEnnLP-OwYZE7PcQZp5rED8AaTIP6RElwR2ccIuQiOXfkGj4QMhdOIskCc',
  },
  pushWebEnv: {
    externalApplicationId: '1:962904260310:web:53a611753ac32e2c93d377',
    platform: WEB_PLATFORM,
  },
  pushAndroidEnv: {
    externalApplicationId: '1:962904260310:android:b3bf68b954bd84ad93d377',
    platform: ANDROID_PLATFORM,
  },
  pushIosEnv: {
    externalApplicationId: '',
    platform: IOS_PLATFORM,
  },
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
