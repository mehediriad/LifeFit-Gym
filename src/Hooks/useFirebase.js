import { useEffect, useState } from "react"
import initAuthentication from '../Utilites/Firebase/Firebase.init';
import { getAuth, signInWithPopup, GoogleAuthProvider, GithubAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";


initAuthentication();

const useFirebase = () => {
   
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    const auth = getAuth()
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const signInUsingGoogle = () => {
       
        setIsLoading(true);
        return signInWithPopup(auth, googleProvider)
            
            .catch(error => {
                setError(error.message);
            })
            .finally(() => setIsLoading(false));
    }
    

    const signInUsingGithub = () => {
        signInWithPopup(auth, githubProvider)
            .then(result => {
                setUser(result.user);
            })
    }

    const logout = () => {
        setIsLoading(true);
        signOut(auth)
            .then(() => {
                setUser({});
            })
            .finally(() => setIsLoading(false));
    }

    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({})
            }
            setIsLoading(false);
        })
    }, []);

    return {
        user,
        error,
        isLoading,
        signInUsingGoogle,
        signInUsingGithub,
        logout
    }
}

export default useFirebase;