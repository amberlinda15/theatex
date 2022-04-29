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
                    <li>profile</li>
                </ul>
            </div>
        </div>
    );
}

export default navBar;