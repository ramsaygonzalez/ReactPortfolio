import React from "react";
import { Link, useLocation } from "react-router-dom";

function NavTabs() {
    // We'll go into the Hooks API later, for now, we are just using some code
    // from the react-router docs (https://reacttraining.com/react-router/web/api/Hooks/uselocation)
    // This allows the component to check the route any time the user uses a link to navigate.
    const location = useLocation();

    return (

        <nav class="navbar navbar-expand-lg navbar-light">

            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText"
                aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarText">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item">
                        <Link to="/about" className={location.pathname === "/about" ? "nav-link active" : "nav-link"}>About</Link>
                    </li>
                    <li class="nav-item">
                        <Link to="/portfolio"
                            className={location.pathname === "/portfolio" ? "nav-link active" : "nav-link"}>Portfolio</Link>
                    </li>
                    <li class="nav-item">
                        <Link to="/contact"
                            className={location.pathname === "/contact" ? "nav-link active" : "nav-link"}>Contact</Link>
                    </li>
                </ul>
            </div>
        </nav >

    );
}

export default NavTabs;