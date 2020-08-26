import * as firebase from "firebase";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDxsimgLLjPZzWVWqEy6nQqwaGQG-FKIdM",
  authDomain: "reactnative-621d3.firebaseapp.com",
  databaseURL: "https://reactnative-621d3.firebaseio.com",
  projectId: "reactnative-621d3",
  storageBucket: "reactnative-621d3.appspot.com",
  appId: "1:995282751617:android:4ed2b05f4cdb167115bd80",
  measurementId: "995282751617",
};

firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();
