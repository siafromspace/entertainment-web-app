import SearchIcon from "../assets/icon-search.svg"

const Search = () => {
    return (
        <div className="search-bar">
            <img src={SearchIcon} alt="" />
            <input type="text" />
        </div>
    );
}

export default Search;