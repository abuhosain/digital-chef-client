import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';
import {  createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
export const AuthContext = createContext(null)
const AuthProvider = ({children}) => {
    // const user = 'abu hosain';
    const  [user, setUser] = useState(null);
    const auth = getAuth(app);
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const loginUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    const google = (provider) => {
        return signInWithPopup(auth, provider)
    };
    const gitHub = (provider) => {
        return signInWithPopup(auth, provider)
    }
    const logOut = () => {
        // setLoading(true);
        return signOut(auth);
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, loggedUser => {
            console.log('logged auth user inside', loggedUser);
            setUser(loggedUser);
            // setLoading(false);
        });
        return () => {
            unsubscribe();
        }
    },[])
    const authInfo = {
        user,
        createUser,
        loginUser,
        google,
        gitHub,
        logOut
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider> 
    );
};

export default AuthProvider;