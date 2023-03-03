import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Details from "./pages/Details";

import Header from "./components/Header";
import Error from "./pages/Error";
import Cart from "./pages/Cart";

function RoutesApp() {
    return(
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={ <Home/> }/>
                <Route path="/produtos/:id" element={ <Details/> }/>
                <Route path="/carrinho" element={ <Cart/> }/>

                <Route path="*" element={ <Error/> }/>
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesApp;