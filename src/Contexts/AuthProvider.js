import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.config';



export const AuthContext = createContext();
const auth = getAuth(app)

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const userSignIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    const userLogout = () => {
        return signOut(auth)
    }

    const updateUser = (userInfo) => {
        return updateProfile(user, userInfo)
    }

    useEffect( () => {
        const unsubscribe = onAuthStateChanged(auth, createUser => {
            console.log('on state change', createUser)
            setUser(createUser);
        })
        return () => unsubscribe();
    },[])

    const authInfo = {
        user,
        createUser,
        userSignIn,
        userLogout,
        updateUser
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;