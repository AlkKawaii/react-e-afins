import { createContext, useState } from 'react';

export const FavoritesContext = createContext({
    favorite: [],
    setFavorite: () => {},
});
FavoritesContext.displayName = 'Favorites';

export default function FavoritesProvider({ children }) {
    const [favorite, setFavorite] = useState([]);
    return (
        <FavoritesContext.Provider value={{ favorite, setFavorite }}>
            {children}
        </FavoritesContext.Provider>
    );
}