import React from "react";
import style from "../Hero/Hero.module.css"

export default function Hero () {
    return (
        <div className={style.hero__container}>
            <div className={style.hero__title}>
              <h1>Nautilus Hair salon</h1>
              <h4>by Capitano Nemo</h4>
            </div>
            <div className={style.hero__quote}>
                <q>I tuoi capelli sono la corona che non togli mai.</q>
            </div>
        </div>
    )
}