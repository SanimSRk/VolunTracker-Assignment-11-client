// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCs015tOUqP5Tw5KVkUNL2mSOBFLiks7DM',
  authDomain: 'volunteers-eb06b.firebaseapp.com',
  projectId: 'volunteers-eb06b',
  storageBucket: 'volunteers-eb06b.appspot.com',
  messagingSenderId: '521469743501',
  appId: '1:521469743501:web:cad09511c59c009c846dc4',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
