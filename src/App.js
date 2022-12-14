import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { HomePage, AutoPage, UsuarioPage } from "./pages";

//App es como un main, El app tendrá todas las URLS
const App =()=>{
    return(
        //desde el navegador 
        <BrowserRouter>
        {/* Vamos a tener distintas rutas */}
            <Routes>
                {/* Expecificamos cada ruta */}
                <Route path="/Home" element={<HomePage/>}/>
                <Route path="/Usuario" element={<UsuarioPage/>}/>
                <Route path="/Auto" element={<AutoPage/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App;
