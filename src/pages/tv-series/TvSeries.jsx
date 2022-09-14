import Navbar from "../../components/Navbar";
import Search from "../../components/Search";
import Card from "../../components/Card";
import { useContext } from "react";
import { MovieContext } from "../../context/MovieContext";

const TvSeries = () => {
    const { tvSeries } = useContext(MovieContext)
    return (
        <section>
            <Navbar />
            <div className="container">
                <Search />
                <div>
                    <h3 className="heading">TV Series</h3>
                    <div className="card-wrapper">
                        {tvSeries.current && tvSeries.current.map(data => {
                            return <Card key={data.id} image={data.poster_path} title={data.name} releaseDate={data.first_air_date} mediaType={`TV Series`} />
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default TvSeries