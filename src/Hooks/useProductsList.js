import { useState, useEffect } from 'react';
import { db } from '../Firebase/firebaseConfig.js';
import { collection, getDocs } from 'firebase/firestore';

export const useProductsList = () => {
  const [productsList, setProductsList] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const querySnapshot = await getDocs(collection(db, "products"));
      const docs = [];
      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });
      setProductsList(docs);
    };
    getProducts();
  }, []);

  return productsList;
};
