import React from "react";
import Image from "../../assets/images/store.png"
import "./navbar.css"

function Navbar() {
    return (
        <>
            <div className="nav-list">
                <div className="left">
                    <img className="logoImg" src={Image} alt="" />
                </div>
                <div className="center">
                    <ul className="list">
                        <li className="listItem">Marvel Skins
                            <ul className="dropdown">
                                <li className="dropdown-Item"><a href="#" >Mobile</a></li>
                                <li className="dropdown-Item"><a href="#" >Laptop</a></li>
                            </ul>
                        </li>
                        <li className="listItem">Mobile Skins
                            <ul className="dropdown">
                                <li className="dropdown-Item"><a href="#">iPhone</a>
                                    <ul className="dropdown-List">
                                        <li className="dropdown-List-Item">iPhone 14 Pro Max</li>
                                        <li className="dropdown-List-Item">iPhone 14 Pro</li>
                                        <li className="dropdown-List-Item"> iPhone 14 Plus</li>
                                        <li className="dropdown-List-Item"> iPhone 14</li>
                                        <li className="dropdown-List-Item">  iPhone 13 Pro Max</li>
                                        <li className="dropdown-List-Item">  iPhone 13 Pro</li>
                                        <li className="dropdown-List-Item">  iPhone 13</li>
                                        <li className="dropdown-List-Item">  iPhone 13 Mini</li>
                                        <li className="dropdown-List-Item">  See More...</li>
                                    </ul>
                                </li>
                                <li className="dropdown-Item"><a href="#" >Samsung</a>
                                    <ul className="dropdown-List" style={{ marginTop: "4rem" }}>
                                        <li className="dropdown-List-Item">Samsung Galaxy S23 Ultra (New)</li>
                                        <li className="dropdown-List-Item"> Samsung Galaxy S23 Plus (New)</li>
                                        <li className="dropdown-List-Item"> Samsung Galaxy S23 (New)</li>
                                        <li className="dropdown-List-Item"> Samsung Galaxy S22 Ultra</li>
                                        <li className="dropdown-List-Item"> Samsung Galaxy S22 Plus</li>
                                        <li className="dropdown-List-Item"> Samsung Galaxy S22</li>
                                        <li className="dropdown-List-Item"> Samsung Galaxy Z Fold 4</li>
                                        <li className="dropdown-List-Item"> Samsung Galaxy Z Fold2</li>
                                        <li className="dropdown-List-Item"> See More...</li>
                                    </ul>
                                </li>
                                <li className="dropdown-Item"><a href="#" >Oneplus</a>
                                    <ul className="dropdown-List" style={{ marginTop: "6rem" }}>
                                        <li className="dropdown-List-Item">OnePlus 11 (New)</li>
                                        <li className="dropdown-List-Item">OnePlus 11R (New)</li>
                                        <li className="dropdown-List-Item">OnePlus 10 Pro</li>
                                        <li className="dropdown-List-Item">OnePlus 10R</li>
                                        <li className="dropdown-List-Item">OnePlus 9 Pro</li>
                                        <li className="dropdown-List-Item">OnePlus 9RT</li>
                                    </ul>
                                </li>
                                <li className="dropdown-Item"><a href="#" >Pixel</a>
                                    <ul className="dropdown-List" style={{ marginTop: "8rem" }}>
                                        <li className="dropdown-List-Item">Pixel 7</li>
                                        <li className="dropdown-List-Item">Pixel 7 Pro</li>
                                        <li className="dropdown-List-Item">Pixel 6</li>
                                        <li className="dropdown-List-Item">Pixel 6 Pro</li>
                                        <li className="dropdown-List-Item">Pixel 5</li>

                                    </ul>
                                </li>
                                <li className="dropdown-Item"><a href="#" >Nothing</a>
                                    <ul className="dropdown-List" style={{ marginTop: "10rem" }}>
                                        <li className="dropdown-List-Item">Nothing Phone 1</li>
                                    </ul>
                                </li>
                                <li className="dropdown-Item"><a href="#" >Asus</a>
                                <ul className="dropdown-List" style={{ marginTop: "12rem" }}>
                                <li className="dropdown-List-Item">Asus Rog Phone 5</li>
                                <li className="dropdown-List-Item">Asus Rog Phone 3</li>
                                <li className="dropdown-List-Item">Asus Rog Phone 2</li>                                
                                </ul>
                                </li>
                                <li className="dropdown-Item"><a href="#" >Xiaomi</a></li>
                                <li className="dropdown-Item"><a href="#" >POCO</a></li>
                                <li className="dropdown-Item"><a href="#" >realme</a></li>
                                <li className="dropdown-Item"><a href="#" >iQOO</a></li>
                                <li className="dropdown-Item"><a href="#" >OPPO</a></li>
                                <li className="dropdown-Item"><a href="#" >Vivo</a></li>
                            </ul>
                        </li>
                        <li className="listItem">Laptops Skins
                            <ul className="dropdown">
                                <li className="dropdown-Item"><a href="#" >Mackbook</a></li>
                                <li className="dropdown-Item"><a href="#" >Windows</a></li>
                            </ul>
                        </li>
                        <li className="listItem">Skin Collections
                            <ul className="dropdown">
                                <li className="dropdown-Item"><a href="#">Dark</a></li>
                                <li className="dropdown-Item"><a href="#">Cyberforce</a></li>
                                <li className="dropdown-Item"><a href="#">Into the Woods</a></li>
                                <li className="dropdown-Item"><a href="#">Retro Funk</a></li>
                                <li className="dropdown-Item"><a href="#">The Ripple</a></li>
                                <li className="dropdown-Item"><a href="#">Wanderlust</a></li>
                                <li className="dropdown-Item"><a href="#">Messed It</a></li>
                                <li className="dropdown-Item"><a href="#">Sky is not the Limit</a></li>
                            </ul>
                        </li>
                        <li className="listItem">How to Apply</li>
                        <li className="listItem">Track order</li>
                        <li className="listItem">Login</li>

                    </ul>
                </div>
                <div className="right">
                    <div className="rightIcon">
                        <i className="searchIcon fa-sharp fa-solid fa-magnifying-glass"></i>
                        <i class="cartIcon fa-solid fa-cart-shopping"></i>
                    </div>
                </div>
            </div>
        </>
    );
    }

export default Navbar;



