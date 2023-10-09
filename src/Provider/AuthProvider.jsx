import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { auth } from "../Firebase/firebase.config";

export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider();


const AuthProvider = ({ children }) => {

    const [user,setUser] = useState({})


//   Google Login 
const googleLogin = () => {
   return signInWithPopup(auth,googleProvider)
}

// Sign Up
const createUser = (email,password) => {
    return createUserWithEmailAndPassword(auth, email, password)
}

// Sign in user
const signIn = (email,password) => {
    return signInWithEmailAndPassword(auth,email,password)
}

const logOut = () => {
    return signOut(auth)
}

// Observer
useEffect(() =>{
    onAuthStateChanged(auth, (user) => {
        setUser(user)
    })
},[])

const authInfo = {
    googleLogin,
    createUser,
    signIn,
    logOut,
    user
}

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;