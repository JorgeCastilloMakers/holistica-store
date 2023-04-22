import { db } from '../Firebase/firebaseConfig.js';
import { collection, getDocs } from 'firebase/firestore';

export const getProducts = async () => {
    const querySnapshot = await getDocs(collection(db, "products"));
    const docs = [];
    querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
    });
    return docs;
};