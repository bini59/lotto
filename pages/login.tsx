import Navbar from "../component/navbar";
import Link from "next/link";


import style from "../styles/login.module.sass";

const Login = () => {
    return (
        <>
            <Navbar />
            <section className={style.login_section}>
                <div><div className={style.login_input_text}>아이디 </div>: <input type="text"/><br/></div>
                <div><div className={style.login_input_text}>비밀번호</div>: <input type="password" /></div>
                
                <div>
                    <button>로그인</button>
                    <Link href="/register"><button>회원가입</button></Link>
                </div>
            </section>
        </>
    );
};

export default Login;