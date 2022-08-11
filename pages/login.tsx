import Navbar from "../component/navbar";
import style from "../styles/login.module.sass";

import {getCsrfToken} from "next-auth/react"
import { useState } from "react";
import Regist from "../component/register";

const Login = ({ csrfToken }) => {
    const [temp, setTemp] = useState<JSX.Element>()

    return (
        <>
            {temp}
            <Navbar />
            <form className={style.login_section} method="post" action="/api/auth/callback/credentials">
                <input name="csrfToken" type="hidden" defaultValue={csrfToken} />
                <div className={style.login_title}>Login</div>
                <label className={style.input_label}>
                    Username
                    <input id="id_input" className={style.input_user_info} name="username" type="text" placeholder="username" />
                </label>
                <label className={style.input_label}>
                    Password
                    <input id="pass_input" className={style.input_user_info} name="password" type="password" placeholder="password"/>
                </label>
                <button className={style.login_button} type="submit">Sign in</button>
                <div className={style.login_forgot}>Forgot Password?</div>
                <div className={style.login_hr}>
                    <span className={style.login_hr_text}>OR</span>
                </div>
                <div className={style.sign_up_wrap}>
                    <a onClick={() => { setTemp(<Regist />) }} className={style.sign_up_link}>Need an account? SIGN UP</a>
                </div>
            </form>
        </>
    )
};

export async function getServerSideProps(context:any) {
    return {
        props: {
            csrfToken: await getCsrfToken(context),
        },
    }
}

export default Login;