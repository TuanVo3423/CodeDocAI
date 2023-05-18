import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.example.app',
  appName: 'codeDocAI',
  webDir: 'public',
  bundledWebRuntime: false,
  server: {
    url: 'http://192.168.1.30:3001',
    cleartext: true,
  },
};

export default config;
