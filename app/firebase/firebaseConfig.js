import { initializeApp , getApps} from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"



const firebaseConfig = {
    apiKey:process.env.apiKey,
    authDomain: process.env.authDomain,
    projectId: process.env.projectId,
    storageBucket: process.env.storageBucket,
    messagingSenderId:process.env.messagingSenderId,
    appId: process.env.appId,
    measurementId: process.env.measurementId
  };
let app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
let db = getFirestore(app)
let auth = getAuth(app)

export {app,db,auth}