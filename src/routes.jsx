import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./page/Home/Home";
import Watch from "./page/Watch/Watch";
import PageNotFound from "./page/PageNotFound";
import Search from "./page/Search/Search";
import Favorites from "./page/Favorites/Fovorites";
import FavoritesProvider from "./contexts/Favorites";

function AppRoutes(){
    return(
        <BrowserRouter>
            <FavoritesProvider>
                <Routes>
                    <Route path="/" element={ <Home /> }></Route>
                    
                    <Route path="/watch/:id" element={ <Watch /> }></Route>

                    <Route path="/search" element={ <Search /> }></Route>

                    <Route path="/favorites" element={ <Favorites /> }></Route>
                    
                    <Route path="*" element={ <PageNotFound/> }></Route>
                    
                    {/* estou passando duas Props
                    path onde eu estou definindo o ponto de partida/ raiz e o element onde eu defindo onde quero chegar */}
                    {/* path="*" siginifica que se eu acessar qualquer coisa diferente das duas rotas que eu ja defini ele vai para page not found */}

                    {/* path="/watch/:id"  estou passando um parametro de id para a rota */}
                </Routes>
            </FavoritesProvider>
        </BrowserRouter>
    )
}

export default AppRoutes