import React from "react";

function NavBar() {
    return (
        <navigation>
        <ul className="nav bg-light fixed-top">
            <li className="nav-item">
                <a className="nav-link" href="/">Google Books</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/search">Search</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/books">Saved</a>
            </li>
        </ul>
        </navigation>
    )
}

export default NavBar;