import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from 'firebase/auth';
import { createContext, useEffect, useState } from 'react';
import auth from '../Firebase/Firebase.init';
import axios from 'axios';

export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [lodings, setLodings] = useState(true);
  const googleProvider = new GoogleAuthProvider();
  const createUser = (email, password) => {
    setLodings(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const updateUserProfile = (fullName, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: fullName,
      photoURL: photo,
    });
  };
  const singUsers = (email, password) => {
    setLodings(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const handileGoogleLogin = () => {
    setLodings(true);
    return signInWithPopup(auth, googleProvider);
  };
  const logOutUsers = () => {
    setUser(null);
    setLodings(false);
    axios
      .get(`https://bolunteer-server-site.vercel.app/logout`, {
        withCredentials: true,
      })
      .then(res => {
        console.log(res.data);
      });
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUsers => {
      // const currentUserEmail = currentUsers?.email || user.email;
      // const userEmail = { email: currentUserEmail };
      if (currentUsers) {
        setUser(currentUsers);
        setLodings(false);
      } else {
        setLodings(false);
      }
    });
    return () => unsubscribe;
  }, []);
  const info = {
    createUser,
    lodings,
    user,
    singUsers,
    updateUserProfile,
    logOutUsers,
    handileGoogleLogin,
  };

  return <AuthContext.Provider value={info}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
