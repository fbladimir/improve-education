import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth"; 
import { getStorage } from "firebase/storage"; 




const firebaseConfig = {
  apiKey: "AIzaSyCc_VnNxpKoVuJTDGsj3Wx2xNsE4WSYNtg",
  authDomain: "improve-education-b6b88.firebaseapp.com",
  projectId: "improve-education-b6b88",
  storageBucket: "improve-education-b6b88.appspot.com",
  messagingSenderId: "863584615",
  appId: "1:863584615:web:70ae8317b3c4fd4c1b6fc2",
  measurementId: "G-NDYM6FY0L6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app); 

export const storage = getStorage(); 

export const provider = new GoogleAuthProvider(); 

export default app; 


