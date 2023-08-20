import React from "react";
import SocialButton from "../SocialButton/SocialButton";
import FBlogo from '../../assets/fb-logo-white.png';
import Instagramlogo from '../../assets/instagram-logo-white.png';
import TikToklogo from '../../assets/tiktok-logo-white.png';
import Pinterestlogo from '../../assets/pinterest-logo-white.png';

export const socialMedia = [
    {
        id: 0,
        name: 'Facebook',
        link: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        icon: FBlogo,
    },
    {
        id: 1,
        name: 'Instagram',
        link: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        icon: Instagramlogo,
    },
    {
        id: 2,
        name: 'Tik Tok',
        link: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        icon: TikToklogo,
    },
    {
        id: 3,
        name: 'Pinterest',
        link: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        icon: Pinterestlogo,
    },
]

export default function Contacts() {
    const social = socialMedia.map(item => {
        return <SocialButton 
            key = {item.id}
            item = {item}
        />
    });

    return(
        <>
            <div className='flex flex-col'>
                <h3>Our contacts:</h3>
                <p>+00 555 45 54 55</p>
                <div className='flex flex-col py-6'>
                    <h4>Follow us:</h4>
                    <div >
                        {social}
                    </div>
                </div>
            </div>
        </>
    )
}