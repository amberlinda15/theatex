import React, { Fragment, useEffect, useState } from 'react'

import css from './backdrop.module.css'

const BackdropComp = props => {

    const [show,setShow] = useState(true)

    const setShowHandler = () => {
        setShow(false)
    }

    useEffect(() => {
        setShow(props.show)
    },[props.show])

    return(
        show && <Fragment>
            <div style={{...props.styleBack}} className={css.backdrop} onClick={props.disableBack ? () => {} : setShowHandler}></div>
            <div className={css.backdrop_comp} style={{...props.style}}>
                {props.children}
            </div>
        </Fragment>
    )
}

export default BackdropComp