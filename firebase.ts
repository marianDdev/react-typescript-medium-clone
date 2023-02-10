import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyAtEFrsBerk1qYwN-upW97XH5Z3u7bw5Qo',
  authDomain: 'medium-clone-d6b5d.firebaseapp.com',
  projectId: 'medium-clone-d6b5d',
  storageBucket: 'medium-clone-d6b5d.appspot.com',
  messagingSenderId: '1060841374597',
  appId: '1:1060841374597:web:9557dc39724336abf5baec',
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
