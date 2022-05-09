import React,{ Fragment, useState } from 'react';
import { useParams } from 'react-router-dom'
import logo from '../../img/theatex_logo.png'
import { useForm } from 'react-hook-form'
import { DATABASEPORT } from '../otherComponents/globalKeys'
import axios from 'axios'

import css from './login.module.css'

const Login = () => {

    const [type,setType] = useState(useParams().type)
    const {
        register,
        handleSubmit,
        formState:{errors}
    } = useForm()

    const loginHandler = value => {
        // console.log(value)
        const request = {
            id: value.userId,
            password: value.password
        }

        axios({
            method: 'post',
            url: `http://localhost:3000/login`,
            headers:{"Content-type":"application/json"},
            body: request
          })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error.config);
          });
    }

    return(
        <div className={css.login_cont}>
            <div className={css.left_cont}>
                <div className={css.left_child_cont}>
                    <img src={logo}/>
                    <p>Login to your account and gain access to all the features</p>
                </div>
            </div>
            <div className={css.right_cont}>
                <div className={css.right_child_cont}>
                    <h3>{type ? type : "login"}</h3>
                    <form onSubmit={handleSubmit(loginHandler)}>
                        {
                            type == "register"? <Fragment>
                                <div className={css.form_element_cont}>
                                    <label>First name</label>
                                    <input type="text" placeholder='first name'/>
                                </div>
                                <div className={css.form_element_cont}>
                                    <label>mobile number</label>
                                    <input type="number" placeholder='mobile number'/>
                                </div>
                            </Fragment>:""
                        }
                        <div className={css.form_element_cont}>
                            <label>User id</label>
                            <input type="text" placeholder='user id' {...register("userId",{required:true})} required/>
                        </div>
                        <div className={css.form_element_cont}>
                            <label>Password</label>
                            <input type="password" placeholder='password' {...register("password",{required:true})} required/>
                        </div>
                        <button className={css.submitBtn} type='submit'>Login now</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;