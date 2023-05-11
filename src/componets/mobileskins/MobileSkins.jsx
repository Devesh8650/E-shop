import React from 'react'
import "./mobile.css"
// import data from "./data"

function MobileSkins({data,heading}) {
    return (
        <>
            <div className="container">
                <h2 className='heading'>{heading}</h2>
                <div className="mobile_skins_images">
                    {
                       data && data.map((i) => (
                            <>
                                <div className='overlay'>
                                    <img src={i.imageUrl} key={i.id} alt="" />
                                    <div className="name">
                                        <p>{i.name}</p>
                                        <p>{i.price}</p>
                                    </div>
                                    <div class="middle">
                                        <div class="text">Select Your device</div>
                                    </div>
                                </div>
                            </>
                        ))
                    }


                </div>
            </div>

        </>
    )
}

export default MobileSkins