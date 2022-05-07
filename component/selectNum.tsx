import { useEffect, useState } from "react";
import styles from "../styles/selectNum.module.sass";

const log = console.log;

const data = [
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
    const [nums, setNums] = useState<JSX.Element[]>([]);

    const toggleActive = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        const target = e.target as HTMLDivElement;
        target.classList.toggle(styles.active);
    };

    useEffect(() => {
        log("useEffect");
        let a: number = Math.floor(Math.random() * 7);
        let res: JSX.Element[] = [];
        for (let i = 0; i < 8; i++) {
            var temp = [];
            var b = a == i ? `${styles.active} ${styles.number}` : styles.number;
            for (let j = 0; j < data[i].length; j++) {
                temp.push(
                    <div key={"number" + i * 7 + j} className={b} onClick={toggleActive}>
                        {data[i][j]}
                    </div>
                );
            }
            res.push(<div className={styles.number_row}>{temp}</div>);
        }
        setNums(res);
    }, []);

    return (
        <>
            <section className={styles.num_section}>
                <div className='num_title'>Lotto number selection</div>
                <section className={styles.numbers}>{nums}</section>
            </section>
        </>
    );
};

export default Nums;
