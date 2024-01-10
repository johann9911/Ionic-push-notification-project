import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.masivian.pushtest2',
  appName: 'capApp',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  }
};

export default config;
