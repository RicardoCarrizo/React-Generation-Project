import React from "react";

const TablaUsuarioComponent = ({ usuarios, deleteUser, setUsuarioEditado }) => {
    return (
        <div class="container border border-dark p-3 bg-white bg-gradient ">
            <table class="table">
                <thead>

                    <tr>
                        <th scope="col">Nombre</th>
                        <th scope="col">Apellido</th>
                        <th scope="col">Numero</th>
                        <th scope="col">Email</th>
                        <th scope="col">Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {/* //Iteramos usuarios con .map, a cada 
                        elemento de usuarios lo llamaremos usuario y 
                            realizaremos lo siguiente => */}
                    {usuarios.map((usuario) => (
                        <tr>
                            <td>
                                {usuario.nombre}
                            </td>
                            <td>
                                {usuario.apellido}
                            </td>
                            <td>
                                {usuario.numero}
                            </td>
                            <td>
                                {usuario.correo}      {/*----------email? ------ */}
                            </td>
                    <td>
                        <button
                            type="button"
                            class="btn btn-primary"
                            onClick={() => {
                                deleteUser(usuario.numero);
                            }}
                        >
                            Eliminar
                        </button>
                        <button
                            type="button"
                            class="btn btn-primary"
                            onClick={() => {
                                setUsuarioEditado(usuario);
                            }}
                        >
                            Editar
                        </button>
                    </td>
                        </tr>
                    ))}

                </tbody>
            </table>
        </div>
    );
};

export default TablaUsuarioComponent;