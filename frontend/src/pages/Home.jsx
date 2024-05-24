import React, {useContext} from 'react';
import Header from "../components/Header.jsx";
import {UserContext} from "../context/userContext.jsx";
import Navbar from "../components/Navbar.jsx";
import HomePrivate from "./HomePrivate.jsx";
import HomePublic from "./HomePublic.jsx";

function Home(props) {
    const {userInfo} = useContext(UserContext)
    const username = userInfo?._id;
    return (
        <div>

            {username? <HomePrivate /> : <HomePublic />}

        </div>
    );
}

export default Home;