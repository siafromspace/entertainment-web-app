import { createContext, useState } from "react";
import {
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signInWithEmailAndPassword
} from "firebase/auth";
import { auth } from "../firebase-config.js";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext()

const AuthContextProvider = (props) => {
    const [signupEmail, setSignupEmail] = useState("");
    const [signupPassword, setSignupPassword] = useState("");
    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");
    const [isAuth, setIsAuth] = useState(false)
    const navigate = useNavigate()

    // const [user, setUser] = useState({});
    // onAuthStateChanged(auth, (currentUser) => {
    //     setUser(currentUser);
    // });

    const signup = async () => {
        try {
            const user = await createUserWithEmailAndPassword(
                auth,
                signupEmail,
                signupPassword
            );
            setIsAuth(true)
            navigate("/login")
            alert("Sign Up Successful!")
            console.log(user);
        } catch (error) {
            console.log(error.message);
        }
    };

    const login = async () => {
        try {
            const user = await signInWithEmailAndPassword(
                auth,
                loginEmail,
                loginPassword
            );
            setIsAuth(true)
            navigate("/")
            alert("Login Successful!")
            console.log(user);
        } catch (error) {
            console.log(error.message);
        }
    };
    return (
        <AuthContext.Provider value={{ login, signup, setSignupEmail, signupEmail, setSignupPassword, signupPassword, setLoginEmail, loginEmail, setLoginPassword, loginPassword, isAuth }}>
            {props.children}
        </AuthContext.Provider>
    );
}

export default AuthContextProvider;