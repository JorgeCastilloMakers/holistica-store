import { doc, getDoc, setDoc } from 'firebase/firestore'
import { db } from '../Firebase/firebaseConfig';
import {useAuth} from '../Context/AuthContext'

export const useUpload = (order) => {
  const { user } = useAuth();
  const userID = user.uid
  const userDocRef = doc(db, "users", userID);

  const uploadOrder = async (order) => {
    try {
      // Obtener el documento actual del usuario
      const userDoc = await getDoc(userDocRef);

      if (userDoc.exists()) {
        // Si el usuario ya tiene un documento, actualizar el campo "orders"
        const orders = userDoc.data().orders || [];
        orders.push(order);

        await setDoc(userDocRef, { orders }, { merge: true });
      } else {
        // Si el usuario no tiene un documento, crear uno nuevo
        await setDoc(userDocRef, { orders: [order] });
      }
    } catch (error) {
      console.error("Error con la carga de la orden", error);
    };
  }

  return uploadOrder;
}
