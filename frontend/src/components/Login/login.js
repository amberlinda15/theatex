import React,{ Fragment, useState } from 'react';
import { useParams, Link } from 'react-router-dom'
import logo from '../../img/theatex_logo.png'


import css from './login.module.css'

const Login = props => {

    const [showPassword,setShowPassword] = useState(false)
    const [type,setType] = useState(props.type)


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
                    <form onSubmit={props.handleSubmit(type != "register" ? props.loginHandler : props.registerHandler)}>
                        {
                            type == "register" ?<Fragment><div className={css.form_element_cont}>
                                <label>Customer name</label>
                                <input type="text" placeholder='customer name' {...props.register("custName",{required:true})}/>
                            </div>
                            <div className={css.form_element_cont}>
                                <label>mobile number</label>
                                <input type="number" placeholder='mobile number' {...props.register("mobileNum",{required:true})}/>
                            </div>
                            <div className={css.form_element_cont}>
                                <label>Email</label>
                                <input type="email" placeholder='Email' {...props.register("email",{required:true})} required/>
                            </div>
                        </Fragment>:""
                        }
                        {type != "register" ? <div className={css.form_element_cont}>
                            <label>User id</label>
                            <input type="text" placeholder='user id' {...props.register("userId",{required:true})} required/>
                        </div>:""}
                        <div className={css.form_element_cont}>
                            <label>Password</label>
                            <div className={css.password_cont}>
                                <input type={showPassword ? "text" : "password"} placeholder='password' {...props.register("password",{required:true})} required/>
                                {!showPassword ? <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16"
                                onClick={() => setShowPassword(!showPassword)}>
                                <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>
                                <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>
                                </svg>
                                :<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-slash" viewBox="0 0 16 16"
                                onClick={() => setShowPassword(!showPassword)}>
                                <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z"/>
                                <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z"/>
                                <path d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12-.708.708z"/>
                              </svg>}
                            </div>
                        </div>
                        {props.loginErr && <p className={css.errMsg}>Invalid user id or password</p>}
                        {!(type == "register") ? <Link className={css.register_link} to="/custLogin/register" onClick={() => setType("register")}>New user. Register?</Link>:""}
                        <button className={css.submitBtn} type='submit'>{type != "register" ? "Login now" : "Register now"}</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;