import React from 'react'
import "./fotter.css"


function Footer() {
    return (
        <>
        <div className='footer-container'>
            <div className='fotter'>
                <div className="footer-Item">
                    <h4 className='title'>Vision</h4>
                    <p className='list-Item'>Creativity, Expression, & <br/> Exploration</p>
                </div>
                <div className="footer-Item">
                    <h4 className='title'>Pages</h4>
                    <ul className='footer-list'>
                        <li className='list-Item'>About Us</li>
                        <li className='list-Item'>Contact Us</li>
                        <li className='list-Item'>Terms and condition</li>
                        <li className='list-Item'>Privacy policy</li>
                        <li className='list-Item'>Refunds/Cancellations/Shipping Policy</li>
                        <li className='list-Item'>FAQ</li>
                    </ul>
                </div>
                <div className="footer-Item">
                    <h4 className='title'>My Accounts</h4>
                    <ul className='footer-list'>
                        <li className='list-Item'>Login</li>
                        <li className='list-Item'>Register</li>
                        <li className='list-Item'>Track Order</li>
                    </ul>
                </div>
                <div className="footer-Item">
                    <h4 className='title'>Follow us</h4>
                    <ul className='footer-list'>
                        <li className='list-Item'>Twitter</li>
                        <li className='list-Item'>Facebook</li>
                        <li className='list-Item'>YouTube</li>
                        <li className='list-Item'>Instagram</li>
                    </ul>

                </div>
            </div>
                <p className='copyright'>Copyright © 2023 KumarShop</p>
                </div>
        </>
    )
}

export default Footer


