// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyB-Vgst21ysMkVCGTZ_YTz_1CTwSCgZq9E',
  authDomain: 'graphiql-app-30058.firebaseapp.com',
  projectId: 'graphiql-app-30058',
  storageBucket: 'graphiql-app-30058.appspot.com',
  messagingSenderId: '626494309197',
  appId: '1:626494309197:web:a8ab5cb0ad51bcccac6d04',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
