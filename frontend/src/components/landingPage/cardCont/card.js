import React from 'react';
import { Link } from 'react-router-dom';
import Backdrop from '../../otherComponents/backdrop/backdrop'

import css from './cardCont.module.css';

const card = props => {

    const poster = props.movie ? require(`../${props.movie.movie_poster}`) : ""

    return(
        props.movie ? <Link to="/moviedetails" className={css.card}
        style={{
            backgroundImage:`url('${poster}')`,
            backgroundSize:"contain",
            backgroundPosition:"center",
            backgroundRepeat:"no-repeat"
        }}>
            <Backdrop/>
            <h3>{props.movie.movie_name}<br/><span>description</span></h3>

        </Link>:""
    );
}

export default card;