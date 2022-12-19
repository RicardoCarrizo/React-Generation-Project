import React, { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import {BotonFormularioComponent, FormularioUsuarioComponent,TablaUsuarioComponent} from "../components";
import { getAllUsers, addUser, editUser, deleteUser } from "../services/User";
const usuario1=[
    {
    nombre: 'josep',
    apellido: 'joestar',
    correo: 'ji@mail.com',
    numero: '20863258'
    },
    {
    nombre: 'sep',
    apellido: 'star',
    correo: 'sep@mail.com',
    numero: '17355258'
    },
    {
        nombre: 'x',
        apellido: 'd',
        correo: 'xd@mail.com',
        numero: '25355258'
    },
];
const UsuarioPage = () => {
    const navigate = useNavigate();
    const handleOnClick = useCallback(()=> navigate("/Auto", {}, [navigate]));
    //en este momento state vale lo mismo que usuario1
    //la funcion por dentro genera funcion setteadora que permitira cambiar datos usuario 1
    //sin afectarlo directamente (setState)
    const [state, setState] = useState(usuario1);
    const [usuarioEditado, setUsuarioEditado] = useState(null);

    //
    useEffect(()=>{
        getUsers();
    },[])


    const getUsers = async()=>{
        const usuariosBD = await getAllUsers();
        setState(usuariosBD);
    }

    const userAdd = async(usuarioAgregado)=>{
        //en esta linea se agrega usuario a la bbdd
        const usuarioBD = await addUser(usuarioAgregado);
        //aqui actualizaremos la tabla
        getUsers();
    }

    const userEdit = async(usuarioEditado) =>{
        const usuarioBD = await editUser(usuarioEditado);
        getUsers();
      }
    
      const userDelete = async(idUsuario)=>{
        const usuarioBD = await deleteUser(idUsuario);
        getUsers();
      }
    

/* 
    const userDelete=(numeroUsuario)=>{
        const changeUser= state.filter(usuario => usuario.numero !== numeroUsuario);
        //al momento de ocupar serstate cambiara el valor temporal de mis usuarios
        setState(changeUser)
    }
     */
//se coomenta esta funcion porque ahora usaremos una desde la api
    /* const userAdd = (usuario)=>{
        const addUsuario = [
            //Manten datos de user y agrega lo nuevo que entrego acá
            ...state, usuario
        ]
        setState(addUsuario);
    }; */

/*     
    const userEdit=(usuarioEditado)=>{
        const editUser = state.map(usuario =>(usuario.numero === usuarioEditado.numero ? usuarioEditado:usuario))
        setState(editUser);
    }
 */
    return(
        <div class="container mt-3">
         <div class="row">
        <div class="col">
            <FormularioUsuarioComponent userAdd={userAdd} usuarioEditado={usuarioEditado} setUsuarioEditado={setUsuarioEditado} userEdit={userEdit}/>
            </div>
            </div>
            {/* <BotonSendComponent/> */}
            {/* <TablaUsuarioComponent/> */}
            <div class="row">
        <div class="col">
            <TablaUsuarioComponent usuarios={state} deleteUser={userDelete} setUsuarioEditado={setUsuarioEditado}/>
            {/* <BotonFormularioComponent infoBoton={"Eliminar Usuario"} handleOnClick={deleteUser(set.numero)}/> */}
            {/* <BotonActualizarComponent/> */}
        </div>
        </div>
            
            <BotonFormularioComponent infoBoton={"Ir a Auto"} handleOnClick={handleOnClick}/>
            
        </div>
    )
}

export default UsuarioPage;