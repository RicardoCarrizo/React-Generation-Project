import React from "react";

const BotonFormularioComponent = ({infoBoton, handleOnClick}) => {
    return (
        <div class ="container p-3 bg-white bg-gradient ">
        <button type="button" 
        class="btn btn-secondary p-2 a-center"
        onClick={()=>{
            handleOnClick();
        }}
        >{infoBoton}</button>
        </div>
    );
}

export default BotonFormularioComponent;