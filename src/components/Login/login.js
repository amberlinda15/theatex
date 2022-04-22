import React from 'react';
import logo from '../../img/theatex_logo.png'

import css from './login.module.css'

const Login = () => {
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
                    <h3>Login</h3>
                    <form>
                        <div className={css.form_element_cont}>
                            <label>Email</label>
                            <input type="email" placeholder='email'/>
                        </div>
                        <div className={css.form_element_cont}>
                            <label>Password</label>
                            <input type="password" placeholder='password'/>
                        </div>
                        <button className={css.submitBtn} type='submit'>Login now</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;