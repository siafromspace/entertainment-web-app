import Logo from "../../assets/logo.svg"
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { useContext } from "react";

const Signup = () => {
    const { signup, setSignupEmail, signupEmail, setSignupPassword, signupPassword } = useContext(AuthContext)
    const handleSubmit = (e) => {
        e.preventDefault()
        signup()
    }
    return (
        <div className="form">
            <img src={Logo} alt="logo" className="logo" />
            <form onSubmit={handleSubmit}>
                <h2>Sign Up</h2>
                <input type="email" placeholder="Email Address" value={signupEmail} onChange={(e) => setSignupEmail(e.target.value)} />
                <input type="password" placeholder="Password" value={signupPassword} onChange={(e) => setSignupPassword(e.target.value)} />
                <button>Create An Account</button>
                <p>Already have an account? <Link to="/login">Login</Link></p>
            </form>
        </div>
    );
}

export default Signup;