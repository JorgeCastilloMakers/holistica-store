import { createContext, useContext } from 'react'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { auth, db } from '../Firebase/firebaseConfig';
import { collection, doc, getDocs, getDoc, setDoc } from 'firebase/firestore'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'



export const AuthContext = createContext();


export const useAuth = () => {
  const context = useContext(AuthContext)
  return context;
}

export const AuthContextProvider = (props) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate();

  const signUp = async (email, password, name, lastname, country, state, address) => {

    const newUser = await createUserWithEmailAndPassword(auth, email, password).then((currentUser) => { return currentUser })

    const docRef = doc(db, `users/${newUser.user.uid}`);

    let profilePicture = "https://img.freepik.com/free-photo/cyber-cat-with-giant-electro-flowers-sunrise-generative-ai_8829-2880.jpg?w=1380&t=st=1683291705~exp=1683292305~hmac=5da9ce0a704cb7098d65efdfd5cf5b7ba17967b5ec0491b4db4d012674d4881c"

    setDoc(docRef, { email: email, name: name, lastname: lastname, country: country, state: state, profilePicture: profilePicture, address: address, orders: [] })
  };

  const login = async (userFirebase) => {
    const { email, password } = userFirebase;
    const user = await signInWithEmailAndPassword(auth, email, password);
    const docRef = doc(db, "users", `/${user.user.uid}`);
    const docSnap = await getDoc(docRef);
    const name = docSnap.data().name;
    const lastname = docSnap.data().lastname;
    const country = docSnap.data().country;
    const state = docSnap.data().state;
    const address = docSnap.data().address;
    const profilePicture = docSnap.data().profilePicture;
    const orders = docSnap.data().orders;
    let userData = {
      uid: user.user.uid,
      email: user.user.email,
      name: name,
      lastname: lastname,
      country: country,
      state: state,
      address: address,
      profilePicture: profilePicture,
      orders: orders

    };
    setUser(userData)
    return userData;
  }

  const loginWithGoogle = async () => {
    const googleProvider = new GoogleAuthProvider();
    const userCredential = await signInWithPopup(auth, googleProvider)
    let userData = {
      uid: userCredential.user.uid,
      email: userCredential.user.email,
      name: userCredential.user.displayName,
      lastname: "",
      country: "",
      state: "",
      address: "",
      profilePicture: userCredential.user.photoURL,
      orders: []

    };
    setUser(userData)
    console.log(userData)
    return userData
  }

  const logOut = () => {
    if (window.confirm('¿Estas seguro que deseas cerrar la sesión?')) {
      signOut(auth)
      setUser(null)
      navigate('/')
    }
    return
  };

  useEffect(() => {
    onAuthStateChanged(auth, currentUser => {
      setUser(currentUser)
      setLoading(false)
    })
  }, []);



  return (
    <AuthContext.Provider value={{ login, loginWithGoogle, user, logOut, loading, signUp }}>
      {props.children}
    </AuthContext.Provider>
  )
}


export default AuthContextProvider;