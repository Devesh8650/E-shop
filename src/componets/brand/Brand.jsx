import React from 'react'
import "./brand.css"
import data from "./images"

function Brand() {
    return (
        <>
            <div className="container">
                <h2 className='heading'>Select Your Brand</h2>
                <div className="brand_img_name">
                    {
                        data.map((item) => (
                          <>  <img src={item.imageUrl} key={item.id} alt=''  />
                         </>
                        ))
                    }
                </div>
            </div>
    
        </>

    )
}

export default Brand