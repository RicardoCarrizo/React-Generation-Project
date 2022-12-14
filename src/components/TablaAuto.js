import React from "react";

const TablaAutoComponent = () => {
    return (
        <div class ="container border border-dark p-3 bg-white bg-gradient ">
        <table class="table">
        <thead>
            <tr>
                <th scope="col"></th>
                <th scope="col">Marca</th>
                <th scope="col">Modelo</th>
                <th scope="col">Patente</th>
                <th scope="col">Precio</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <th scope="row">1</th>
                <td>Toyota</td>
                <td>Yaris sport</td>
                <td>kp-4585</td>
                <td>$ 10.000.000</td>
                <div class="dropdown">
                    <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Modificar
                    </button>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="#">Borrar</a></li>
                    </ul>
                </div>

            </tr>
            <tr>
                <th scope="row">1</th>
                <td>Ford</td>
                <td>Ecosport</td>
                <td>WD-4585</td>
                <td>$ 13.000.000</td>
                <div class="dropdown">
                    <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Modificar
                    </button>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="#">Borrar</a></li>
                    </ul>
                </div>

            </tr>
            <tr>
                <th scope="row">1</th>
                <td>Subaru</td>
                <td>Impreza</td>
                <td>JK-4585</td>
                <td>$ 18.000.000</td>
                <div class="dropdown">
                    <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Modificar
                    </button>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="#">Borrar</a></li>
                    </ul>
                </div>

            </tr>
        </tbody>
    </table>
    </div>
    );
    }

export default TablaAutoComponent;