import SearchIcon from "../assets/icon-search.svg"

const Search = () => {
    return (
        <div className="search-bar">
            <img src={SearchIcon} alt="" />
            <input type="text" className="search-input" placeholder="Search for movies or tv series" />
        </div>
    );
}

export default Search;