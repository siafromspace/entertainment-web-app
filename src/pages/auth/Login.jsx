import Logo from "../../assets/logo.svg"
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { useContext } from "react";

const Login = () => {
    const { login, setLoginEmail, loginEmail, setLoginPassword, loginPassword } = useContext(AuthContext)
    const handleSubmit = (e) => {
        e.preventDefault()
        login()
    }
    return (
        <div className="form">
            <img src={Logo} alt="logo" className="logo" />
            <form onSubmit={handleSubmit}>
                <h2>Login</h2>
                <input type="email" placeholder="Email Address" value={loginEmail} onChange={(e) => setLoginEmail(e.target.value)} />
                <input type="password" placeholder="Password" value={loginPassword} onChange={(e) => setLoginPassword(e.target.value)} />
                <button>Log Into Your Account</button>
                <p>Don't have an account? <Link to="/signup">Sign Up</Link></p>
            </form>
        </div>
    );
}

export default Login;