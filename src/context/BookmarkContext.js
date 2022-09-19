import { createContext, useContext, useState } from "react";
import { AuthContext } from "./AuthContext";
import { MovieContext } from "./MovieContext";

export const BookmarkContext = createContext()

const BookmarkContextProvider = ({ children }) => {
    const { isAuth } = useContext(AuthContext)
    const { bookmarks, setBookmarks, data, tvSeries } = useContext(MovieContext)

    // data = data.forEach(d => {
    //     d.isBookmarked = false
    // })

    const addToBookmark = (id, section) => {
        // if (!isAuth) return alert("Please log in first!")
        section = section.map(d => {
            if (d.id === id && isAuth) {
                return {
                    ...d,
                    isBookmarked: true
                }
            } else if (d.id === id && !isAuth) {
                alert("Please log in")
            } else {
                return d
            }
        })
        console.log(section, tvSeries.current)
    }
    const removeFromBookmark = (id) => {
        // if (!isAuth) return alert("Please log in first!")
        data.map(d => {
            if (!isAuth) return alert("Please log in first!")
            return d.id === id ? {
                ...data,
                isBookmarked: false
            } : data
        })
    }


    return (
        <BookmarkContext.Provider value={{ addToBookmark, removeFromBookmark, data }}>
            {children}
        </BookmarkContext.Provider>
    );
}

export default BookmarkContextProvider;