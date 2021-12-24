// import firebase from "firebase/app";
// import "firebase/firestore"

// const firebaseConfig = {
//   apiKey: "AIzaSyCYPDwLVXfUtCL33ESlvpe9_DvH0pbj83U",
//   authDomain: "proyecto-react-2bcc5.firebaseapp.com",
//   projectId: "proyecto-react-2bcc5",
//   storageBucket: "proyecto-react-2bcc5.appspot.com",
//   messagingSenderId: "98913946360",
//   appId: "1:98913946360:web:156168bc882c333825490d"
// };

// const app = firebase.initializeApp(firebaseConfig);

// export const firestore = firebase.firestore(app)
import firebase from "firebase/app"
import "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyC0chXACYKTbnxlAf7G0iJ_uCXc6pKlXGE",
  authDomain: "holandes-errante.firebaseapp.com",
  projectId: "holandes-errante",
  storageBucket: "holandes-errante.appspot.com",
  messagingSenderId: "122240213164",
  appId: "1:122240213164:web:4235d0c34bf044cf8b7f09"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const firestore = firebase.firestore(app)