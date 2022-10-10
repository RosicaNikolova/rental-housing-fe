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
        <nav className="navbar navbar-expand-sm bg-primary navbar-dark">
            <ul className="navbar-nav">
                {links.map(link => {
                    return (
                        <li className="nav-item" key={link.id}>
                            <NavLink className="nav-link active" to={link.path}>
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