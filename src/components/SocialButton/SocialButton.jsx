import React from "react";

export default function SocialButton(props) {
    return (
        <>
            <button className='p-2 first:pl-0'>
                <a href={props.item.link} target='_blank'><img src={props.item.icon} width='25px'/></a>
            </button>
        </>
    )
}