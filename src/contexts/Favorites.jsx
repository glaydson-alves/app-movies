import { createContext, useContext, useState } from "react";
// createContext é um método da api do react para trabalhar com state no ambito glogal
export const FavoritesContext = createContext()
FavoritesContext.displayName = "MyFavorites"

export default function FavoritesProvider({ children }){
    const [ favorite, setFavorite ] = useState([])
    
    return (
        <FavoritesContext.Provider
            value={{ favorite, setFavorite }}
        >
            { children }
        </FavoritesContext.Provider>
    )
}

// Hook personalizado
export function useFavoriteContext(){
    const { favorite, setFavorite } = useContext(FavoritesContext)

    function addFavorite(newFavorite){
        // verificar se tem item favorito repetido
        const repeatedFavorite = favorite.some((item) => item.id === newFavorite.id)

        //nova lista recebe lista anterior
        let newList = [...favorite]

        // verificar se não tem repedido e adicionar o item na lista de favoritos
        if(!repeatedFavorite) {
            newList.push(newFavorite)
            return setFavorite(newList)
        }

        // se for repetido ele será retirado da lista

        newList = favorite.filter((favorit) => favorit.id !== newFavorite.id )
        return setFavorite(newList)
    
    }

    return {
        favorite,
        addFavorite
    }
}