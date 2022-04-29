import React, { useState } from 'react';
import NavBar from '../landingPage/navBar/navBar';

const MovieDetails = () => {

    const [navlinks,setNavlinks] = useState([
        {name:"home",link:"./home"},
        {name:"locations",link:"./home"},
    ]);

    return(
        <div>
            <NavBar links={navlinks}/>
        </div>
    );
}

export default MovieDetails;