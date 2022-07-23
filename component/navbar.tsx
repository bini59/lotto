import Link from "next/link";
import style from "../styles/navbar.module.sass";

import {useSession, signIn} from "next-auth/react"
import { ReactElement, useCallback, useEffect, useState } from "react";


// 임시로 로그아웃 기능
// 19번째 줄 signOut삭제 예쩡
import { signOut } from "next-auth/react"


const Navbar = () => {
    // navigation bar not use bootstrap
    // React

    const { data: session } = useSession();
    const [login, setLogin] = useState<ReactElement>();
    useEffect(useCallback(() => {
        if (session) setLogin(<span className={style.content} onClick={()=>signOut()}>프로필</span>)
        else setLogin(<span className={style.content} onClick={()=>signIn()}>로그인</span>)
    }, [session]),[session])

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
                <div className={style.navbar_content + " " + style.navbar_login}>{ login }</div>
                
            </nav>
        </>
    );
};

export default Navbar;
