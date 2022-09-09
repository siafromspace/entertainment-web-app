import Logo from "../../assets/logo.svg"
import { Link } from "react-router-dom";

const Signup = () => {
    return (
        <div className="form">
            <img src={Logo} alt="logo" className="logo" />
            <form>
                <h2>Sign Up</h2>
                <input type="email" placeholder="Email Address" />
                <input type="password" placeholder="Password" />
                <button>Create An Account</button>
                <p>Already have an account? <Link to="/login">Login</Link></p>
            </form>
        </div>
    );
}

export default Signup;