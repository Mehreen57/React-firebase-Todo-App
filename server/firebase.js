import * as firebase from 'firebase'
import 'firebase/firestore';

const firebaseConfig = { 
    apiKey: "AIzaSyAC8v1WdcGVLNInJDcC9cgHPcJj1MZoKQ8",
    authDomain: "mehreens-app.firebaseapp.com",
    databaseURL: "https://mehreens-app.firebaseio.com",
    projectId: "mehreens-app",
    storageBucket: "mehreens-app.appspot.com",
    appId: "1:1074253196339:android:394b6f553f9a7021038746",
    measurementId: "1074253196339"
 }

firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();
