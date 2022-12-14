import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import {BotonActualizarComponent, BotonFormularioComponent, FormularioAutoComponent, TablaAutoComponent} from "../components";

const AutoPage = () => {
    const navigate = useNavigate();
    const handleOnClick = useCallback(()=> navigate("/Usuario", {}, [navigate]));
    return(
        <div>
            <FormularioAutoComponent/>
            <BotonFormularioComponent infoBoton={"Ir a Usuario"} handleOnClick={handleOnClick}/>
            <TablaAutoComponent/>
            <BotonActualizarComponent/>
        </div>
    );
}

export default AutoPage;