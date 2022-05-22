import { useEffect, useState } from "react";
import Ballcover from "./ballcover";

import styles from "../styles/analyze.module.sass";

interface props {
    numbers: number[];
}

interface res {
    one: number[][];
    two: number[][];
    three: number[][];
    four: number[][];
    five: number[][];
    six: number[][];
}

const Analyze = (props: props) => {
    const [nums, setNums] = useState<JSX.Element[]>([]);

    useEffect(() => {
        const temp = async () => {
            let url = "/api/rate";
            const response: res = await (
                await fetch(url, {
                    method: "POST", // *GET, POST, PUT, DELETE 등
                    mode: "cors", // no-cors, *cors, same-origin
                    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
                    credentials: "same-origin", // include, *same-origin, omit
                    headers: {
                        "Content-Type": "application/json",
                    },
                    redirect: "follow", // manual, *follow, error
                    referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
                    body: JSON.stringify(props.numbers), // body의 데이터 유형은 반드시 "Content-Type" 헤더와 일치해야 함
                })
            ).json();
            let one = [];
            for (var i = 0; i < response.one.length; i++) {
                var info: number[][] = [];
                for (var j = 0; j < response.one[i].length - 1; j++) {
                    var temp: number[] = [];
                    temp.push(response.one[i][j]);
                    temp.push(j * 2);
                    info.push(temp);
                }
                one.push(
                    <Ballcover
                        // Key값 조정해줘야함
                        key={"analyze" + Math.random() * 1000}
                        rate={(100 * response.one[i][1]) / 1006}
                        nowRound={1006}
                        numinfo={info}
                        fix={2}
                    />
                );
            }
            setNums(one);
        };

        temp();
    }, [props.numbers]);

    return (
        <section className={styles.analyze_section}>
            <div>
                <h3>번호 분석</h3>
            </div>
            <section className={styles.analyze_num}>{nums}</section>
        </section>
    );
};

export default Analyze;
