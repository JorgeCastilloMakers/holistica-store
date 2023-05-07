import { createContext, useContext } from 'react'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from 'firebase/auth'
import { auth, db } from '../Firebase/firebaseConfig';
import { doc, getDoc, setDoc, updateDoc } from 'firebase/firestore'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'

export const AuthContext = createContext({
  user: {
    uid: null,
    email: null,
    name: null,
    lastname: null,
    country: null,
    state: null,
    address: null,
    profilePicture: null,
    orders: []
  },
  login: () => { },
  logout: () => { }
});

export const useAuth = () => {
  const context = useContext(AuthContext)
  return context;
}




export const AuthContextProvider = (props) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true)
  const [userAuth, setUserAuth] = useState()
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
    const userData = docSnap.data();
    setUserAuth(user.user.uid)
    setUser({
      uid: user.uid,
      email: user.email,
      ...userData
    });

    return userData;
  };

  const logOut = () => {
    Swal.fire({
      text: '¿Estas seguro que deseas cerrar la sesión?',
      confirmButtonText: "Aceptar",
      confirmButtonColor: "#a80202",
      showCancelButton: true,
      cancelButtonText: "Cancelar"
    }).then(res => {
      if (res.isConfirmed) {
        signOut(auth);
        setUser(null);
        navigate('/');
      } else {
        return
      }
    })
  };

  const updateProfile = async (name, lastname, country, state, address, picture) => {
    const userRef = doc(db, 'users', userAuth);
    await updateDoc(userRef, {
      name: name,
      lastname: lastname,
      country: country,
      state: state,
      address: address,
      profilePicture: picture
    });
    return
  };


  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const docRef = doc(db, "users", `/${user.uid}`);
        getDoc(docRef)
          .then((doc) => {
            if (doc.exists()) {
              const userData = doc.data();
              setUser(userData);
              setUserAuth(user.uid)
              setLoading(false);
            }
          })
          .catch((error) => {
            console.log("Error getting document:", error);
          });
      } else {
        setUser(null);
        setLoading(false);
      }
    });

    return unsubscribe;
  }, []);


  return (
    <AuthContext.Provider value={{ login, user, logOut, loading, signUp, updateProfile, userAuth }}>
      {props.children}
    </AuthContext.Provider>
  )
}


export default AuthContextProvider;