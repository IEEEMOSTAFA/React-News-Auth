import { createContext, useEffect, useState } from "react";
import {
    createUserWithEmailAndPassword,
    getAuth,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signOut
} from "firebase/auth";
import app from "../firebase/firebase.config";

// Create AuthContext
export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // Function to create user
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    // Function to log out user
    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    };

    // Listen to authentication state changes
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log("User state changed:", currentUser);
            setUser(currentUser);
            setLoading(false)
        });

        // Cleanup subscription on component unmount
        return () =>{ 
            unSubscribe();
        } 
    }, []);

    // Auth information to provide
    const authInfo = { user,
         createUser,
          signIn,
           logOut,
           loading
        };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
