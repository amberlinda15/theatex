import React, { useState } from 'react';
import Navbar from './navBar/navBar';
import CardCont from './cardCont/cardCont';

import css from './landingPage.module.css';

const LandingPage = () => {

    const [navlinks,setNavlinks] = useState([
        {name:"home",link:"./home"},
        {name:"locations",link:"./home"},
    ]);

    return(
        <div>
            <Navbar links={navlinks}/>
            <div className={css.banner_cont}>
                <div className={`${css.row} ${css.flexCont}`}>
                    <div className={css.bannerText}>
                        <h1>theatex</h1>
                        <h2>Now manage all your movies from one place.</h2>
                    </div>
                </div>
            </div>
            <CardCont head="now showing"/>
            <CardCont head="coming soon"/>
        </div>
    );
}

export default LandingPage;