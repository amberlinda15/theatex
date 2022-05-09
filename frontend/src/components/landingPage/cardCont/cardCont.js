import React from 'react';
import Card from './card';

import css from './cardCont.module.css';

const cardCont = props => {
    return(
        <div className={css.cardCont}>
            <h1>{props.head}</h1>
            <div className={css.cardContFlex}>
                {
                    props.movies && props.movies.length!=0 && props.movies.map(el => (
                        <Card movie={el}/>
                    ))
                }
            </div>
        </div>
    );
}

export default cardCont;