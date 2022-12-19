import React, {useState, useEffect } from "react";

const initialUsuario={
    id:"",
    name:"",
    lastname:"",
    correo:""
    
};

const FormularioUsuarioComponent = ({userAdd, usuarioEditado, setUsuarioEditado, userEdit}) => {
    const[usuario, setState] = useState(initialUsuario);
    const{id, name, lastname, correo} = usuario;

    useEffect(()=>{
        if(usuarioEditado!=null){
            setState(usuarioEditado)
        }else{
            setState({
                id:"",
                name:"",
                lastname:"",
                correo:""
    
            });

        }
    },[usuarioEditado]);
  
        const handleInputChange =(e)=>{
            //funcion llama cada vez que cambiamos algun campo del form, si cambio lo actualiza segun el value, y mantiene los anteriores q no fueron modificados.
            const changedFormValue = {
                ...usuario,
                [e.target.name]:e.target.value
            }
            setState(changedFormValue)
        }
    return (
<div class ="container border border-dark p-3 bg-white bg-gradient ">
        {/* <h4 class="text-center fst-WorkSans">Registro de usuario</h4> */}
        <form>
        {usuarioEditado!==null ? <h1>Editar Usuario</h1>:<h1>Ingrese Usuario</h1>}
        
        <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Numero:</label>
            <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
            name="id"
            value={id}
            onChange={handleInputChange}
            disabled
            />
        </div>
        <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label text-decoration-underline">Nombre:</label>
            <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
            name="name"
            value={name}
            onChange={handleInputChange}
            />
        </div>
        <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Apellido:</label>
            <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
            name="lastname"
            value={lastname}
            onChange={handleInputChange}
            />
        </div>
        <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Email:</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
            name="correo"
            value={correo}
            onChange={handleInputChange}
            />
        </div>
        
       
        {usuarioEditado !== null ? (
          <button
            type="button"
            class="btn btn-success"
            onClick={() => userEdit(usuario)}
          >
            Editar usuario
          </button>
        ) : (
          <button
            type="button"
            class="btn btn-success"
            onClick={() => userAdd(usuario)}
          >
            Ingresar usuario
          </button>
        )}
        {usuarioEditado !== null ? (
          <button
            type="button"
            class="btn btn-danger"
            onClick={() => setUsuarioEditado(null)}
          >
            Cancelar
          </button>
        ) : (
          <></>
        )}


        </form>
        </div>

    );
}

export default FormularioUsuarioComponent;