import React from "react";
import BotonFormularioComponent from "./BotonFormulario";

const FormularioAutoComponent = () => {
    return (
        <div class ="container border border-dark p-3 bg-white bg-gradient ">
        <h4 class="text-center fst-WorkSans">Registro de auto</h4>
        <form>
        <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label text-decoration-underline">Marca:</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
        </div>
        <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Modelo:</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
        </div>
        <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Patente:</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
        </div>
        <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Precio:</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
        </div>
        </form>
        <BotonFormularioComponent infoBoton={"IrAutoDesdeFormAuto"}></BotonFormularioComponent>
        </div>
    );
}

export default FormularioAutoComponent;