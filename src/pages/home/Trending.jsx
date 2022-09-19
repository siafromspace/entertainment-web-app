import Movie from "../../assets/icon-category-movie.svg"
import TV from "../../assets/icon-category-tv.svg"
import BookmarkEmpty from "../../assets/icon-bookmark-empty.svg"
import BookmarkFull from "../../assets/icon-bookmark-full.svg"
import Play from "../../assets/icon-play.svg"
import { useContext } from "react"
import { MovieContext } from "../../context/MovieContext"
import { BookmarkContext } from "../../context/BookmarkContext"

const Trending = () => {
    const { trending } = useContext(MovieContext)
    return (
        <div className="trending">
            <h3 className="heading">Trending</h3>
            <div className="trends-wrapper">
                {trending.current && trending.current.map(data => {
                    return <Card key={data.id} image={data.backdrop_path} movieTitle={data.original_title} showTitle={data.name} releaseDate={data.release_date} airDate={data.first_air_date} mediaType={data.media_type} />
                })}
                {/* <Card />
                <Card />
                <Card />
                <Card /> */}
            </div>
        </div>
    );
}

export default Trending;

const Card = ({ image, movieTitle, showTitle, releaseDate, mediaType, airDate }) => {
    const { IMAGE_BASE_URL } = useContext(MovieContext)
    const { addToBookmark, isBookmarked, removeFromBookmark } = useContext(BookmarkContext)
    const type = mediaType === "movie" ? "Movie" : "TV Series"
    const imageIcon = mediaType === "movie" ? Movie : TV

    const bookmarkImg = isBookmarked ? BookmarkFull : BookmarkEmpty
    return (
        <div className="card-container">
            <div className="card-img">
                <img src={`${IMAGE_BASE_URL}${image}`} alt="" className="film-img" />
                <div className="bookmark-icon">
                    <img src={BookmarkEmpty} alt="" onClick={isBookmarked ? removeFromBookmark : addToBookmark} />
                </div>
                <div className="overlay">
                    <div className="play-container">
                        <img src={Play} alt="" />
                        <p>Play</p>
                    </div>
                </div>
                <div className="trends-card-text">
                    <p>
                        <span className="span-one">{releaseDate && releaseDate}{airDate && airDate} • <img src={imageIcon} alt="" /> {type} • PG</span>
                        <span className="span-two">{movieTitle && movieTitle}{showTitle && showTitle}</span>
                    </p>
                </div>
            </div>
        </div>
    )
}