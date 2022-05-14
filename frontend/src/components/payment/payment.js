import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import paytm_link from '../../img/amber_paytm_link.jpeg'
import BackdropComp from '../otherComponents/backdrop/backdropComp'
import { useForm } from 'react-hook-form'

import css from './payment.module.css'
import { useLocation, useNavigate } from 'react-router-dom'

const Payment = () => {

    const [showContactForm,setShowContactForm] = useState(true)
    const location = useLocation()
    const navigate = useNavigate()

    const {
        register,
        handleSubmit,
        formState:{errors}
    } = useForm()
    const onSubmitHandler = data => {
        setShowContactForm(false)
        console.log(data)
    }

    const submitFormHandler = () => {
        setShowContactForm(false)
    }

    useEffect(() => {
        if(!localStorage.getItem("custToken")){
            navigate(`/custLogin/payment`+location.search)
        }
    },[])

    return(
        <div className={css.main_cont}>
            <h1>make your payment</h1>
            <div className={css.paytm_link_cont}>
                <img src={paytm_link}/>
            </div>
            <Link to="/moviedetails/selectseats/payment/ack">
                <button>confirm payment</button>
            </Link>
            {false && <BackdropComp disableBack={true} styleBack={{opacity:"0.8"}} show={showContactForm}>
                <div className={css.main_form_cont}>
                    <h1>Contact details
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className={`bi bi-x-circle-fill ${css.closeBtn}`} viewBox="0 0 16 16">
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"/>
                    </svg>
                    </h1>
                    <hr/>
                    <form onSubmit={handleSubmit(onSubmitHandler)}>
                        <div className={css.form_fields_cont}>
                            <p>Email address</p>
                            <input type="email" placeholder="email" {...register('email',{required:true})}/>
                        </div>
                        <div className={css.form_fields_cont}>
                            <p>Mobile number</p>
                            <input type="text" placeholder="mobile number" {...register('mob_num',{required:true})}/>
                        </div>
                        <div className={css.form_fields_cont}>
                            <button type='submit' >Submit</button>
                        </div>
                    </form>
                </div>
            </BackdropComp>}
        </div>
    )
}

export default Payment