import { createContext, useState } from 'react'

// context is a JS object
const FavoritesContext = createContext({
    favorite: [],
    totalFavorite: 0,
    addFavorite: (favoriteMeetup) => {},
    removeFavorite: (meetupId) => {},
    itemIsFavorite: (meetupId) => {},
});


export function FavoriteContextProvider(props){
    const [userFavorites, setUserFavorites] = useState([]);

    function addFavoriteHandler(favoriteMeetup){
        setUserFavorites((prevUserFavorite) => {
            return prevUserFavorite.concat(favoriteMeetup);
        })
    }

    function removeFavoriteHandler(meetupId){
        setUserFavorites(prevUserFavorite => {
            return prevUserFavorite.filter(meetup => meetup.id !== meetupId);
        })
    }

    function itemIsFavoriteHandler(meetupId){
        return userFavorites.some((meetup) => meetup.id === meetupId);
    }

    const context = {
        favorite: userFavorites,
        totalFavorite: userFavorites.length,
        addFavorite: addFavoriteHandler,
        removeFavorite: removeFavoriteHandler,
        itemIsFavorite: itemIsFavoriteHandler,
    }

    return (
        <FavoritesContext.Provider value={context}>
            {props.children}
        </FavoritesContext.Provider>
    );
}

export default FavoritesContext;