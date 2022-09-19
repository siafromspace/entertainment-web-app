import Navbar from "../../components/Navbar";
import Search from "../../components/Search";
import Card from "../../components/Card";
import { useContext } from "react";
import { MovieContext } from "../../context/MovieContext";

const Movie = () => {
    const { movies } = useContext(MovieContext)
    return (
        <section>
            <Navbar />
            <div className="container">
                <Search />
                <div>
                    <h3 className="heading">Movies</h3>
                    <div className="card-wrapper">
                        {movies.current && movies.current.map(data => {
                            return <Card key={data.id} id={data.id} image={data.poster_path} title={data.title} releaseDate={data.release_date} mediaType={`movie`} />
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Movie