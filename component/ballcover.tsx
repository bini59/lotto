import { useEffect, useState } from "react";

import style from "../styles/ballcover.module.sass";
import Ball from "./ball";

interface props {
    rate: number;
    nowRound: number;
    numinfo: Array<Array<number>>;
    fix: number; // 소수점 자리수 표시 개수
}

const Ballcover = (props: props) => {
    const frequency: number = Math.round(props.nowRound * 6 * props.rate * 0.01);
    const [balls, setBalls] = useState<JSX.Element[]>([]);
    const [coverStyle, setCoverStyle] = useState<string>(style.ballRate); 

    // set balls JSX
    useEffect(() => {
        let temp: JSX.Element[] = []
        for (var i: number = 0; i < props.numinfo.length; i++) {
            temp.push(
                <Ball key={props.numinfo[i][0] + props.numinfo[i][1]} num={props.numinfo[i][0]} />
            );
        }
        setBalls(temp);
    }, []);

    // set cover style
    useEffect(() => {
        switch (props.numinfo.length) {
            case 2:
                setCoverStyle(coverStyle + " " + style.ballRate2);
                break;
            case 3:
                setCoverStyle(coverStyle + " " + style.ballRate3);
                break;
            case 4:
                setCoverStyle(coverStyle + " " + style.ballRate4);
                break;
            case 5:
                setCoverStyle(coverStyle + " " + style.ballRate5);
                break;
            default:
                break;
        }
    }, [])


    return (
        <section className={coverStyle}>
            <section className={style.ballSection}>{balls}</section>
            <section className={style.rateInfo}>
                <div className={style.frequency}>{frequency}번 등장</div>
                <div className={style.rate}>등장 확률 : {props.rate.toFixed(props.fix)}%</div>
            </section>
        </section>
    );
};

export default Ballcover;
