import Navbar from "../../components/Navbar";
import { Outlet } from "react-router-dom";

const Home = () => {
    return (
        <section>
            <Navbar />
            <div>
                <Outlet />
            </div>
        </section>
    );
}

export default Home;