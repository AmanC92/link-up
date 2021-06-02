import React from "react";
import { NavLink } from "react-router-dom";
import "../../styles/navbar.css";
import { MenuList } from "./MenuItems";

const Navbar = () => {
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

    return (
        <nav>
            <div className="logo">
                Video<font>Chat</font>
            </div>
            <ul className="menu-list">{menuList}</ul>
        </nav>
    );
};

export default Navbar;
