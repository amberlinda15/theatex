import React from 'react';
import Card from './card';

import css from './cardCont.module.css';

const cardCont = props => {
    return(
        <div className={css.cardCont}>
            <h1>{props.head}</h1>
            <div className={css.cardContFlex}>
                {
                    [...Array(15).keys()].map(el => (
                        <Card/>
                    ))
                }
            </div>
        </div>
    );
}

export default cardCont;