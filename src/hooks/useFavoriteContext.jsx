import { useContext } from 'react';
import { FavoritesContext } from '../contexts/Favorites';

export function useFavoriteContext() {
    const { favorite, setFavorite } = useContext(FavoritesContext);

    function addFavorite(newFav) {
        let newFavorites = [...favorite];
        if (!newFavorites.some((element) => element.id === newFav.id)) {
            newFavorites.push(newFav);

            return setFavorite(newFavorites);
        }
        newFavorites = newFavorites.filter((fav) => fav.id !== newFav.id);
        return setFavorite([...newFavorites]);
    }

    return {favorite, addFavorite};
}
