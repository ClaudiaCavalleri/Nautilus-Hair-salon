import React from "react";
import { socialMedia } from "../Contacts/Contacts";
import SocialButton from "../SocialButton/SocialButton";

export default function Footer() {
    const social = socialMedia.map(item => {
        return <SocialButton 
            key = {item.id}
            item = {item}
        />
    });

    return(
        <div className='flex flex-col items-center w-screen h-1/10 py-4 bg-transparent text-white'>
            <div className='flex flex-col justify-between'>
                <p>Nautilus Hair Salon</p>
                <button>{social}</button>
            </div>
            <small>Created by <a href='https://claudiacavalleri.netlify.app' target='_blank' className='cursor-pointer hover:text-cyan-500'>Claudia Cavalleri</a> © 2023</small>
        </div>
    )
}