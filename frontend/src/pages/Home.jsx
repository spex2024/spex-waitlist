import React from 'react';

import HomePublic from "./HomePublic.jsx";
import Navbar from "../components/Navbar.jsx";

function Home(props) {
    return (
        <div>
            <Navbar/>
             <HomePublic />

        </div>
    );
}

export default Home;