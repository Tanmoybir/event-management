import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { auth } from "../Firebase/firebase.config";

export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider();


const AuthProvider = ({ children }) => {

    const [user,setUser] = useState(null)
    const [loading,setLoading] = useState(true)


//   Google Login 
const googleLogin = () => {
    setLoading(true)
   return signInWithPopup(auth,googleProvider)
}

// Sign Up
const createUser = (email,password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password)
}

// Sign in user
const signIn = (email,password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth,email,password)
}

const logOut = () => {
    setLoading(true)
    return signOut(auth)
}

// Observer
useEffect(() =>{
    onAuthStateChanged(auth, (user) => {
        setUser(user)
        setLoading(false)
    })
},[])

const authInfo = {
    googleLogin,
    createUser,
    signIn,
    logOut,
    user,
    loading
}

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;