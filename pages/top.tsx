import { NextPage } from "next";
import { useEffect, useState } from "react";

import Ball from "../component/ball";
import Ballcover from "../component/ballcover";
import Navbar from "../component/navbar";

import style from "../styles/top.module.sass";

const log = console.log;

const Top: NextPage = () => {
    const [topnums, setTopnums] = useState<JSX.Element[]>([]);

    useEffect(() => {
        const a = async () => {
            let tmp: JSX.Element[] = [];
            const res: number[][] = await (await fetch("/api/number/top")).json();
            for (var i = 0; i < res.length; i++) {
                tmp.push(
                    <Ballcover
                        key={res[i][0] + res[i][1] + "cover"}
                        balls={[<Ball key={res[i][0] + res[i][1]} num={res[i][0]} />]}
                        rate={res[i][1]}
                        nowRound={1003}
                    />
                );
            }
            setTopnums(tmp);
        };
        a();
    }, []);

    return (
        <>
            <Navbar />
            <div className={style.container}>
                <span className={style.title}>가장 많이 나온 번호</span>
                <section className={style.topN}>{topnums}</section>
            </div>
        </>
    );
};

export default Top;
