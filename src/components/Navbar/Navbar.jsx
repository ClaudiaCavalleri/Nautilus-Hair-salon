import React from "react";
import Scissors from "../../assets/scissors.png"

export default function Navbar() {
    return(
        <nav className="flex flex-row justify-between p-4 w-screen h-1/10 bg-transparent text-white">
            <div>
                <img src={Scissors} alt="scissors_logo" width='30px'/>
            </div>
            <div>
                <h4>Nautilus Hair Salon</h4>
            </div>
        </nav>
    )
}

