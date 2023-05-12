import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyB-Vgst21ysMkVCGTZ_YTz_1CTwSCgZq9E',
  authDomain: 'graphiql-app-30058.firebaseapp.com',
  projectId: 'graphiql-app-30058',
  storageBucket: 'graphiql-app-30058.appspot.com',
  messagingSenderId: '626494309197',
  appId: '1:626494309197:web:a8ab5cb0ad51bcccac6d04',
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
