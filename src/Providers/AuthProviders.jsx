// import React from 'react';
import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../Firebase/firebase.config";

export const AuthContext = createContext(null);

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const AuthProviders = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // for create user
    const CreateUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // for login user
    const LoginUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    // for log out user
    const LogOutUser = () => {
        setLoading(true);
        return signOut(auth);
    }

    useEffect(() => {
        const Unsubcribe = onAuthStateChanged(auth, (LoggedUser) => {
            console.log(LoggedUser);
            setUser(LoggedUser);
            setLoading(false);
        })
        return () => {
            Unsubcribe();
        }
    }, []);

    // user profile update
    const UpdateUserData = (user, name, photo) => {
        setLoading(true);
        return updateProfile(user, name, photo);
    }

    // google sign in
    const GoogleSignIn = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

    const authInfo = {
        user,
        CreateUser,
        LoginUser,
        LogOutUser,
        UpdateUserData,
        GoogleSignIn,
        loading
    };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;