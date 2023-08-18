import React from "react";
import style from "./Navbar.module.css"
import Scissors from "../../assets/scissors.png"

export default function Navbar() {
    return(
        <nav className={style.navbar__container}>
            <div className={style.navbar__img}>
                <img src={Scissors} alt="scissors_logo" width='30px'/>
            </div>
            <div className={style.navbar__title}>
                <h4>Nautilus Hair Salon</h4>
            </div>
        </nav>
    )
}

