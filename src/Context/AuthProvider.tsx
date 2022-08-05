import React, { useState } from "react";
import { auth } from '../firebase/config';
import { Spin } from "antd";

export const AuthContext = React.createContext('');

export default function AuthProvider() {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true)

    React.useEffect(() => {
        const unsubscribed = auth.onAuthStateChanged((user) => { 
            if (user) {
                const { displayName, email, uid, photoURL } = user;
                setUser({
                    displayName, 
                    email, 
                    uid, 
                    photoURL
                });
            }
        });

        return () => {
            unsubscribed();
        }
    }, [])

    return (
        // <AuthContext.Provider value={{ user }}>
        //     {isLoading ? <Spin style={{ position: 'fixed', inset: 0 }} /> : children}
        // </AuthContext.Provider>
        <div></div>
    );
}