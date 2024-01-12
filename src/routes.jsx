import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Page/Home/Home";
import Watch from "./Page/Watch/watch";
import PageNotFound from "./Page/PageNotFound";
import Search from "./Page/Search/Search";
import Favorites from "./Page/Favorites/Fovorites";

function AppRoutes(){
    return(
        <BrowserRouter>
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
        </BrowserRouter>
    )
}

export default AppRoutes