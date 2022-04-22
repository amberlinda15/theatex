import React from 'react';
import poster from '../../../img/poster.jpg';

import css from './cardCont.module.css';

const card = props => {
    return(
        <div className={css.card} 
        style={{
            background:`linear-gradient(rgba(0, 0, 0, 0.178),rgba(0, 0, 0, 0.43)),url(${poster})`,
            backgroundSize:"cover",
            backgroundPosition:"center",
            backgroundRepeat:"no-repeat"
        }}>
            <h3>Doctor strange 2<br/><span>multiverse of madness</span></h3>

        </div>
    );
}

export default card;