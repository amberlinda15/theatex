import React from 'react';

import css from './Loader.module.css';

const loader = () => (
    <div className={css.loader_cont}>
        <span className={css.loader}></span>
    </div>
);

export default loader;