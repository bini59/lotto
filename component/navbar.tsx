import Link from "next/link";
import style from "../styles/navbar.module.sass";
const Navbar = () => {
    // navigation bar not use bootstrap
    // React
    return (
        <>
            <nav className={style.navbar}>
                <div className={style.navbar_content}>
                    <Link href='/'>
                        <a className={style.content}>번호 선택</a>
                    </Link>
                    <Link href='/top'>
                        <a className={style.content}>잘나오는 수</a>
                    </Link>
                    <Link href='/together'>
                        <a className={style.content}>이웃 수</a>
                    </Link>
                </div>
                <div className={style.navbar_content + " " + style.navbar_login}>
                    <Link href='/login'><a className={style.content}>로그인</a></Link>
                </div>
                
            </nav>
        </>
    );
};

export default Navbar;
