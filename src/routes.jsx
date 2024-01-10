import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Page/Home/Home";
import Watch from "./Page/Watch/watch";

function AppRoutes(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <Home /> }></Route>
                <Route path="/watch" element={ <Watch /> }></Route>
                {/* estou passando duas Props
                path onde eu estou definindo o ponto de partida/ raiz e o element onde eu defindo onde quero chegar */}
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes