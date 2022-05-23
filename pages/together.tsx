import { useCallback, useState } from "react";
import Ballcover from "../component/ballcover";
import Navbar from "../component/navbar";

import style from "../styles/together.module.sass";

const Together = () => {
    const [together, setTogether] = useState<JSX.Element[]>();
    const temp = async (With: number) => {
        let url = "/api/number/frequency/";
        url += With;
        let tmp: JSX.Element[] = [];
        const res: number[][] = await (await fetch(url)).json();
        for (var i = 0; i < res.length; i++) {
            let balls: Array<Array<number>> = [];
            let key: string = "cover" + res[i][0];
            for (var j = 0; j < With; j++) {
                balls.push([res[i][j + 1], j]);
                key += res[i][j + 1];
            }
            tmp.push(
                <Ballcover key={key} numinfo={balls} rate={res[i][0]} nowRound={1003} fix={6} />
            );
        }
        setTogether(tmp);
    };

    const click = useCallback(() => {
        let tmp =
            document.getElementById("with")?.children[
                document.getElementById("with")?.selectedIndex
            ]?.value;
        temp(tmp);
    }, [together]);
    
    return (
        <>
            <Navbar />
            <div className={style.container}>
                <section className={style.selectSection}>
                    <span className={style.selectTitle}>같이 잘 나오는 번호</span>
                    <br />
                    <section>
                        <select className={style.selectDropdown} id='with'>
                            <option value={2}>2 개</option>
                            <option value={3}>3 개</option>
                            <option value={4}>4 개</option>
                            <option value={5}>5 개</option>
                        </select>
                        <button className={style.selectButton} onClick={click}>
                            선택
                        </button>
                    </section>
                </section>
                {together}
            </div>
        </>
    );
};

export default Together;
