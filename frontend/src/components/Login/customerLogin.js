import React,{Fragment, useState} from 'react'
import { useParams,useLocation, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { DATABASEPORT } from '../otherComponents/globalKeys'
import axios from 'axios'
import Login from './login'
import Loader from '../otherComponents/loader/Loader'

import css from './login.module.css'

const CustomerLogin = () => {

    const navigate = useNavigate()
    const location = useLocation()

    const [type,setType] = useState(useParams().type)
    const [loginErr,setLoginErr] = useState(false)
    const {
        register,
        handleSubmit,
        formState:{errors}
    } = useForm()

    const loginHandler = obj => {
        const custToken = localStorage.getItem("custToken")
        if(custToken){return}
        const value = {...obj}
        const request = {
            id: value.userId,
            password: value.password
        }

        axios.post(`http://localhost:${DATABASEPORT}/login`,request)
        .then(function (response) {
            if(response.status == 200){
                localStorage.setItem("custToken",response.data)
                type == "payment" ? navigate("/moviedetails/selectseats/payment"+location.search) :navigate("/"+location.search)
                setLoginErr(false)
            }
        })
        .catch(function (error) {
            setLoginErr(true)
        });
    }

    const registerHandler = obj => {
        const value = {...obj}
        const request = {
            cust_name: value.custName,
            phone_number: value.mobileNum,
            email: value.email,
            password: value.password
        }

        axios.post(`http://localhost:${DATABASEPORT}/register`,request)
        .then(function (response) {
            navigate("/custLogin"+location.search)
            setType("")
            document.location.reload()
        })
        .catch(function (error) {
            console.log(error.config);
        });
    }

    return(
        <Fragment>
            <Login 
            loginHandler = {loginHandler} 
            registerHandler = {registerHandler} 
            type={type}
            register={register}
            handleSubmit={handleSubmit}
            loginErr = {loginErr}
            />
        </Fragment>
    );
}

export default CustomerLogin;