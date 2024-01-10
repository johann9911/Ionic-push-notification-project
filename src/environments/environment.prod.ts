import {
  WEB_PLATFORM,
  ANDROID_PLATFORM,
  IOS_PLATFORM,
} from 'npm-masivwebservicetest';

export const environment = {
  production: true,
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
