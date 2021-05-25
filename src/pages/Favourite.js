import { useContext } from 'react';
import FavoritesContext from '../store/favourite-context';
import MeetupList from '../components/meetups/MeetupList';

function Favourite(){
    const favoritesCtx = useContext(FavoritesContext)

    let content;

    if (favoritesCtx.totalFavorite === 0){
        content = <p>You got no favourite item yet. Start adding some!</p>
    }else {
        content = <MeetupList meetups={favoritesCtx.favorite} />
    }

    return(
        <section>
            <h1>My Favorites</h1>
            {content}
        </section>
    );
}

export default Favourite;