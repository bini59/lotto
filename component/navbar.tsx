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
                    <Link href='/top'>
                        <a className={style.content}>Top Numbers</a>
                    </Link>
                    <Link href='/together'>
                        <a className={style.content}>Together number</a>
                    </Link>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
