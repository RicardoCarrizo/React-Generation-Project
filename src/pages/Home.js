import React from "react";
import {TableComponent, TextComponent} from "../components";
//import autoDodgeWallpaper from "../assets/images/autoDodgeWallpaper";
const HomePage = () => {
    return(
        <div class="bg-img">
            <img class="bg-img" src="autoDodgeWallpaper.jpg" alt="Auto Fondo"></img>
            <TextComponent/>
            <TableComponent/>
        </div>
    );
}

export default HomePage;