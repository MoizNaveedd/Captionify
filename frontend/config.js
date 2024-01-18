import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage"; // Correct import statement for getStorage

const firebaseConfig = {
  apiKey: "AIzaSyAq5rUN5eiuEFkWgdepf08oiHB4g-8aeGI",
  authDomain: "crudimages-8a405.firebaseapp.com",
  projectId: "crudimages-8a405",
  storageBucket: "crudimages-8a405.appspot.com",
  messagingSenderId: "790611071068",
  appId: "1:790611071068:web:a1655f57eab7ec7e5b9699",
  measurementId: "G-GML6LL6M4J"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const imageDb = getStorage(app);
export default imageDb;
    