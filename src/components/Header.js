import React from "react";
import "./Header.css";
import teslaLogo from "../assets/teslaLogoSmall.svg";

const Header = () => {
    return (
        <div className="header">
            <div className="header-logo">
                <img src={teslaLogo} alt="Tesla Logo" />
            </div>
            <div className="header-nav">
                <p>Model S</p>
                <p>Model 3</p>
                <p>Model X</p>
                <p>Model Y</p>
                <p>Solar Roof</p>
                <p>Solar Panels</p>
            </div>
            <div className="header-menu">
                <p>Shop</p>
                <p>Account</p>
                <p>Menu</p>
            </div>
        </div>
    )
}

export default Header
