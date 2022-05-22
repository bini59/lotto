import { randomInt } from "crypto";
import { useEffect, useState } from "react";
import styles from "../styles/selectNum.module.sass";

import Num from "./num";

const log = console.log;

const data: number[][] = [
    [1, 2, 3, 4, 5, 6],
    [7, 8, 9, 10, 11, 12],
    [13, 14, 15, 16, 17, 18],
    [19, 20, 21, 22, 23, 24],
    [25, 26, 27, 28, 29, 30],
    [31, 32, 33, 34, 35, 36],
    [37, 38, 39, 40, 41, 42],
    [43, 44, 45],
];

const Nums = () => {
    const [selected, setSelected] = useState(0);
    const [nums, setNums] = useState<JSX.Element[]>([]);
    const [element, setElement] = useState<React.MouseEvent<HTMLDivElement, MouseEvent> | null>(
        null
    );
    const [fenum, setFe] = useState<Array<number>>([
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    ]);

    const changeFe = (i: number, type: number) => {
        let x = [...fenum];
        x[i] = type;
        setFe(x);
    };

    useEffect(() => {
        if (element) {
            const target = element?.target as HTMLDivElement;
            if (selected == 6 && !target.classList.contains(styles.active)) {
                alert("You can't select more than 6 numbers");
                return;
            }
            if (target.classList.contains(styles.active)) {
                target.classList.remove(styles.active);
                setSelected(selected - 1);
            } else {
                target.classList.add(styles.active);
                setSelected(selected + 1);
            }
        }
    }, [element]);

    const createRandomNumber = () => {
        let fix: number[] = [];
        let randomNumber: number[] = [];
        let fetemp: number[] = [...fenum];
        for (var i = 0; i < 45; i++)
            if (fetemp[i] == 1) fix.push(i);
            else if (fetemp[i] == 2) fetemp[i] = 0;

        while (randomNumber.length + fix.length != 6) {
            let temp: number = Math.floor(Math.random() * 45);
            if (fetemp[temp] != 0 || randomNumber.indexOf(temp) != -1) continue;
            else randomNumber.push(temp);
        }

        randomNumber.forEach((e) => (fetemp[e] = 2));
        console.log(fetemp);
        setFe(fetemp);
        // setSelected(6);
        return randomNumber;
    };

    useEffect(() => {
        let res: JSX.Element[] = [];
        for (let i = 0; i < 8; i++) {
            var temp = [];
            for (let j = 0; j < data[i].length; j++) {
                temp.push(
                    <Num
                        key={"n" + data[i][j]}
                        num={data[i][j]}
                        type={fenum[data[i][j] - 1]}
                        setfe={changeFe}
                    />
                );
            }
            res.push(
                <div key={`num_row_${i}`} className={styles.number_row}>
                    {temp}
                </div>
            );
        }
        setNums(res);
    }, [fenum]);

    const selButtonToggle = (tar: Element, style: string) => {
        tar.toggleAttribute("active");
        if (tar.classList.length == 2) tar.classList.add(style);
        else tar.classList.remove(tar.classList[2]);

        if (tar.nextElementSibling?.classList.length == 3) {
            tar.nextElementSibling?.classList.remove(tar.nextElementSibling?.classList[2]);
            tar.nextElementSibling?.toggleAttribute("active");
        }

        if (tar.previousElementSibling?.classList.length == 3) {
            tar.previousElementSibling?.classList.remove(tar.previousElementSibling?.classList[2]);
            tar.previousElementSibling?.toggleAttribute("active");
        }
    };

    useEffect(() => {
        log("init random number" + selected);
    }, []);

    return (
        <section className={styles.num_section}>
            <div className='num_title'>Lotto number selection</div>
            <section className={styles.num_selects}>
                <div
                    id='fix'
                    className={styles.select_btn + " " + styles.fix_btn}
                    onClick={(e) => selButtonToggle(e.target as Element, styles.fix_active)}
                >
                    고정 수
                </div>
                <div
                    id='exclude'
                    className={styles.select_btn + " " + styles.exclude_btn}
                    onClick={(e) => selButtonToggle(e.target as Element, styles.exclude_active)}
                >
                    제외 수
                </div>
            </section>
            <button onClick={createRandomNumber}>Re-Select</button>
            <section className={styles.numbers}>{nums}</section>
        </section>
    );
};

export default Nums;
