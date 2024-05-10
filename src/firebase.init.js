import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBjVJnW85GrRjnVGc1cSIvjvB7DD-ilEA4",
  authDomain: "furrever-pawfect.firebaseapp.com",
  projectId: "furrever-pawfect",
  storageBucket: "furrever-pawfect.appspot.com",
  messagingSenderId: "906237685291",
  appId: "1:906237685291:web:e470b793d718bc738ac46e",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
