import React , {useEffect, useState} from 'react'
import app from './firebase'

export const AuthoContext = React.createContext();

export const AuthoProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState(null);
   
    useEffect(() => {
        app.auth().onAuthStateChanged(setCurrentUser);
    },[]);

    return (
        <AuthoContext.Provider
            value={{
                currentUser
            }
        }
        >
            {children}
        </AuthoContext.Provider>
    )

}