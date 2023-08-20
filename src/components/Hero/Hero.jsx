import React from "react";
import Quote from "../Quote/quote";
import Address from "../Address/Address";
import style from "../Hero/Hero.module.css"

export default function Hero () {
    return (
        <div className={style.hero__container}>
            <div className={style.hero__title}>
              <h1>Nautilus Hair salon</h1>
              <h4>by Capitano Nemo</h4>
            </div>
            <Quote />
            <Address />
        </div>
    )
}