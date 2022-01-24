import firebase from 'firebase/app';
import 'firebase/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyCW1k3AvF5cdKHJs7Az7rlWf_4T_0YRM28",
    authDomain: "agro-app-c5b6f.firebaseapp.com",
    projectId: "agro-app-c5b6f",
    storageBucket: "agro-app-c5b6f.appspot.com",
    messagingSenderId: "140231520617",
    appId: "1:140231520617:web:c40754d5fd9e3abdc10df8"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);
const timestamp = firebase.firestore.FieldValue.serverTimestamp()

export { timestamp }
export default firebaseApp.firestore();