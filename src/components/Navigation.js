import React from "react"
import {NavLink} from "react-router-dom"

function Navigation() {

    const links = [
        {
            id: 1,
            path: "/properties",
            text: "Rental Properties"
        },
        {
            id: 2,
            path: "/users",
            text: "Users"
        }
    ]

    return (
        <nav className="navbar">
            <ul>
                {links.map(link => {
                    return (
                        <li key={link.id}>
                            <NavLink to={link.path}>
                                {link.text}
                            </NavLink>
                            {/* Add NavLink here */}
                        </li>
                    )
                })}
            </ul>
        </nav>
    )
}

export default Navigation;