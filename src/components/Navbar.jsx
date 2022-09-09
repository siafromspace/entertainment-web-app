import { NavLink } from "react-router-dom";
import Logo from "../assets/logo.svg"
import NavHome from "../assets/icon-nav-home.svg"
import NavMovies from "../assets/icon-nav-movies.svg"
import NavTvSeries from "../assets/icon-nav-tv-series.svg"
import Auth from "../assets/icon-auth.svg"

const Navbar = () => {
    return (
        <nav>
            <img className="logo" src={Logo} alt="logo" />
            <div className="nav-links">
                <NavLink to="/">
                    <img src={NavHome} alt="home" />
                </NavLink>
                <NavLink to="/">
                    <img src={NavMovies} alt="movies" />
                </NavLink>
                <NavLink to="/">
                    <img src={NavTvSeries} alt="tv shows" />
                </NavLink>
            </div>
            <NavLink to="/login">
                <img src={Auth} alt="auth" />
            </NavLink>
        </nav>
    );
}

export default Navbar;