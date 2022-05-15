import { NextPage } from "next";
import { useEffect, useState } from "react";
import Ball from "../component/ball";
import Navbar from "../component/navbar";

const log = console.log;

const Top: NextPage = () => {
    const [topnums, setTopnums] = useState<JSX.Element[]>([]);

    useEffect(() => {
        const a = async () => {
            let tmp: JSX.Element[] = [];
            const res: number[][] = await (await fetch("/api/number/top")).json();
            for (var i = 0; i < res.length; i++) {
                tmp.push(<Ball key={res[i][0] + res[i][1]} num={res[i][0]} />);
            }
            setTopnums(tmp);
        };
        a();
    }, []);
    return (
        <>
            <Navbar />
            <div className='container'>{topnums}</div>
        </>
    );
};

export default Top;
