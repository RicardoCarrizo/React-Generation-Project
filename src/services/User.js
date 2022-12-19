import axios from "axios";

import { url} from "./Config";

const addUser = async(usuario)=>{
    //esta const recibe la respuesta de la api, pór ej la parte de abajo del postman que trae el request
    //concatena url localhost:8080 + /user, cuando se envia el body se pone , usuario. Si uno concatena es con +
    const res= await axios.post(url+"/user", usuario);
    console.log(res);
    return res.data;
}

//cuando viene del pathvariable osea la url pide el id, se concatena y  pone  + id
//esto seria la url + id
const getUser = async(id)=>{
    const res= await axios.get(url+"/user/"+ id);
    console.log(res)
    return res.data;
}
const editUser = async(usuario)=>{
    const res = await axios.put(url+"/user", usuario);
    console.log(res);
    return res.data;
}

const deleteUser = async(id)=>{
    const res =  await axios.delete(url+"/deleteUser/"+id);
    console.log(res);
    return res.data;
}

const getAllUsers = async()=>{
    const res = await axios.get(url + "/allUser")
    console.log(res)
    return res.data;
}

export {addUser, editUser, getUser, deleteUser, getAllUsers};
