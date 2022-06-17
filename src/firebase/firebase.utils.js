
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';



const config = {
    apiKey: "AIzaSyB00iaLu2PBEHnYe27GvAUMVf18JhkGUuo",
    authDomain: "crown-2d51b.firebaseapp.com",
    projectId: "crown-2d51b",
    storageBucket: "crown-2d51b.appspot.com",
    messagingSenderId: "659292729098",
    appId: "1:659292729098:web:31e81d425cfb0b857554f3",
    measurementId: "G-FNLF3LG5LS"
};



firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();


const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);


export default firebase;

