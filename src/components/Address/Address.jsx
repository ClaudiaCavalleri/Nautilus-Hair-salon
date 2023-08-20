import React from "react";

export default function Address() {
    return(
        <>
            <div className='py-6 text-xl '>
                <address>J. Verne street, Twenty thousand leagues under the sea, 00</address>
                <div className='text-sm text-slate-200 cursor-pointer underline hover:text-cyan-500'>
                    <p><a href='https://goo.gl/maps/6NGGgfpUH3DKCaPn7' target='_blank'>View on Maps</a></p>
                </div>
            </div>
        </>
    )
}