import Movie from "../assets/icon-category-movie.svg"
import TV from "../assets/icon-category-tv.svg"
import BookmarkEmpty from "../assets/icon-bookmark-empty.svg"
import BookmarkFull from "../assets/icon-bookmark-full.svg"
import Play from "../assets/icon-play.svg"
import { useContext } from "react"
import { MovieContext } from "../context/MovieContext"
import { BookmarkContext } from "../context/BookmarkContext"

const Card = ({ image, title, releaseDate, mediaType, airDate, name, id, isBookmarked }) => {
    const { IMAGE_BASE_URL } = useContext(MovieContext)
    const { addToBookmark, removeFromBookmark, data } = useContext(BookmarkContext)
    const type = mediaType === "movie" ? "Movie" : "TV Series"
    const imageIcon = mediaType === "movie" ? Movie : TV

    // const toggleBookmark = () => {
    //     data.map(d => {
    //         return d.isBookmarked = false ? addToBookmark(id) : removeFromBookmark(id)
    //     })
    // }

    const bookmarkImg = isBookmarked ? BookmarkFull : BookmarkEmpty
    return (
        <div>
            <div className="card-img">
                <img src={`${IMAGE_BASE_URL}${image}`} alt="" className="film-img" />
                <div className="bookmark-icon">
                    <img src={bookmarkImg} alt="" onClick={() => addToBookmark(id, section)} />
                </div>
                <div className="overlay">
                    <div className="play-container">
                        <img src={Play} alt="" />
                        <p>Play</p>
                    </div>
                </div>
            </div>
            <div className="card-text">
                <p>
                    <span className="span-one">{releaseDate && releaseDate}{airDate && airDate} • <img src={imageIcon} alt="" /> {type} • PG</span>
                    <span className="span-two">{title && title}{name && name}</span>
                </p>
            </div>
        </div>
    );
}

export default Card;