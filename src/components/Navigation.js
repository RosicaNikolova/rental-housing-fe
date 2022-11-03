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
        },
        {
            id: 3,
            path: "/login",
            text: "Login"
        },
        {
            id: 4,
            path: "/register",
            text: "Register"
        },
        {
            id: 5,
            path: "/createProperty",
            text: "Create Property"
        },
        {
            id: 6,
            path: "/Property",
            text: "Property"
        },
        {
            id: 7,
            path: "/RequestsPage",
            text: "Requests"
        }

    ]

    return (
        <nav>
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