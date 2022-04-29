import React from 'react';
import logo from '../../../img/theatex_logo.png';
import css from './navBar.module.css';

const navBar = props => {
    return(
        <div className={css.nav_cont}>
            <div className={css.row}>
                <div className={css.logoCont}>
                    <img src={logo}/>
                </div>
                <div className={css.logo_name_cont}>
                    <p >Theatex</p>
                </div>
                <ul className={css.navlink_cont}>
                    {props.links.map(el => <li>{el.name}</li>)}
                    <li className={css.profile_cont}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="#F0A500" className={`bi bi-person-circle ${css.profile_icon}`} viewBox="0 0 16 16">
                            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                            <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
                        </svg>
                        <div className={css.profile_dropdown}>

                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default navBar;