import { NavLink } from "react-router-dom";
import Logo from "../assets/logo.svg"
import { ReactComponent as NavHome } from "../assets/icon-nav-home.svg"
import { ReactComponent as NavMovies } from "../assets/icon-nav-movies.svg"
import { ReactComponent as NavTvSeries } from "../assets/icon-nav-tv-series.svg"
import { ReactComponent as NavBookmark } from "../assets/icon-nav-bookmark.svg"
import { ReactComponent as Auth } from "../assets/icon-auth.svg"
import User from "../assets/image-avatar.png"
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
    const { isAuth } = useContext(AuthContext)
    const active = (link) => (link.isActive ? "active-link" : "not-active")

    return (
        <nav>
            <img className="logo" src={Logo} alt="logo" />
            <div className="nav-links">
                <NavLink to="/" className={active} >
                    <NavHome />
                </NavLink>
                <NavLink to="/movies" className={active}>
                    <NavMovies />
                </NavLink>
                <NavLink to="/tvseries" className={active}>
                    <NavTvSeries />
                </NavLink>
                {isAuth && <NavLink to="/bookmarks" className={active}>
                    <NavBookmark />
                </NavLink>}
            </div>
            <NavLink to="/login" className={active}>
                {isAuth ? <img src={User} alt="user" /> : <Auth />}
            </NavLink>
        </nav>
    );
}

export default Navbar;