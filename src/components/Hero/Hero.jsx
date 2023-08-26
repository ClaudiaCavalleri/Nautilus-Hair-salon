import React from "react";
import Quote from "../Quote/quote";
import Address from "../Address/Address";

export default function Hero () {
    return (
        <div className='flex flex-col'>
            <div className='py-4 my-4 text-center'>
              <h1 className='text-8xl font-bold'>Nautilus Hair salon</h1>
              <h4>by Captain Nemo</h4>
            </div>
            <Quote />
            <Address />
        </div>
    )
}