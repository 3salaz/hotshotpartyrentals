import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
  apiKey: "AIzaSyDlOp9oe4Oc98ASZSy-LAMdNaRxhntuECw",
  authDomain: "hotshotpartyrentals-70927.firebaseapp.com",
  projectId: "hotshotpartyrentals-70927",
  storageBucket: "hotshotpartyrentals-70927.appspot.com",
  messagingSenderId: "955486539318",
  appId: "1:955486539318:web:4f9598d7e6f70693949297",
  measurementId: "G-87L7SK09XR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);

