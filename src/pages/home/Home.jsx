import Navbar from "../../components/Navbar";
import Search from "../../components/Search";
import Recommended from "./Recommended";
import Trending from "./Trending";

const Home = () => {
    return (
        <section>
            <Navbar />
            <div className="container">
                <Search />
                <Trending />
                <Recommended />
            </div>
        </section>
    );
}

export default Home;