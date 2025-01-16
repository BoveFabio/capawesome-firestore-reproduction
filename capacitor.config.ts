import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.reproduction.capawesomefirestore',
  appName: 'capawesome-firestore-reproduction',
  webDir: 'dist',
  server: {
    cleartext: true,
    url: "http://[your local IP]:5173"
  }
};

export default config;
