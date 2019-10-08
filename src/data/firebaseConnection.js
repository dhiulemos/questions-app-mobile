import firebase from 'firebase';
import firebaseConfig from './api_keys.json';

firebase.initializeApp(firebaseConfig);

export default firebase;
