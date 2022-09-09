import Logo from "../../assets/logo.svg"
import { Link } from "react-router-dom";

const Login = () => {
    return (
        <div className="form">
            <img src={Logo} alt="logo" className="logo" />
            <form>
                <h2>Login</h2>
                <input type="email" placeholder="Email Address" />
                <input type="password" placeholder="Password" />
                <button>Log Into Your Account</button>
                <p>Don't have an account? <Link to="/signup">Sign Up</Link></p>
            </form>
        </div>
    );
}

export default Login;