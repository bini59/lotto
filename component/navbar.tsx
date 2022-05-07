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
                        <a className={style.content}>Home</a>
                    </Link>
                    <Link href='/about'>
                        <a className={style.content}>About</a>
                    </Link>
                    <Link href='/contact'>
                        <a className={style.content}>Contact</a>
                    </Link>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
