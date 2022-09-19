import { useContext } from "react";
import Card from "../../components/Card";
import { MovieContext } from "../../context/MovieContext";

const Recommended = () => {
    const { recommended } = useContext(MovieContext)
    return (
        <div>
            <h3 className="heading">Recommended For You</h3>
            <div className="card-wrapper">
                {recommended.current && recommended.current.map(data => {
                    return <Card key={data.id} id={data.id} image={data.backdrop_path} title={data.title} mediaType={data.media_type} name={data.name} releaseDate={data.release_date} airDate={data.first_air_date} />
                })}
            </div>
        </div>
    );
}

export default Recommended;