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
            <form method="post" action="/api/auth/callback/credentials">
                <input name="csrfToken" type="hidden" defaultValue={csrfToken} />
                <label>
                    Username
                    <input name="username" type="text" />
                </label>
                <label>
                    Password
                    <input name="password" type="password" />
                </label>
                <button type="submit">Sign in</button>
            </form>
            <button onClick={()=>{setTemp(<Regist />)}}>Register</button>
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