import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../../styles/navbar.css";
import { MenuList } from "./MenuItems";

const Navbar = () => {
    const [menuClicked, setMenuClicked] = useState(false);

    const menuList = MenuList.map(({ url, title }, index) => {
        return (
            <NavLink
                exact
                to={url}
                key={index}
                className="navbar-link"
                activeClassName="active"
            >
                {title}
            </NavLink>
        );
    });

    const handleMenuclick = () => {
        setMenuClicked(!menuClicked);
    };
    return (
        <nav>
            <div className="logo">
                Video<font>Chat</font>
            </div>
            <FontAwesomeIcon
                icon={menuClicked ? faTimes : faBars}
                className="navbar-menu-bars"
                onClick={handleMenuclick}
            />
            <ul className={menuClicked ? "menu-list" : "menu-list close"}>
                {menuList}
            </ul>
        </nav>
    );
};

export default Navbar;
