import { useEffect, useState } from "react";
import styles from "../styles/selectNum.module.sass";

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
    const [nums, setNums] = useState<JSX.Element[]>([]);

    const toggleActive = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        const target = e.target as HTMLDivElement;
        target.classList.toggle(styles.active);
    };

    const createRandomNumber = () => {
        let randomNumber: number[] = [];
        for (let i = 0; i < 6; i++) {
            var temp = Math.floor(Math.random() * data[i].length);
            if (randomNumber.includes(data[i][temp])) {
                i--;
            } else {
                randomNumber.push(data[i][temp]);
            }
        }
        return randomNumber;
    };

    const applyRandomNumber = (numbers: number[]) => {
        let res: JSX.Element[] = [];
        for (let i = 0; i < 8; i++) {
            var temp = [];
            for (let j = 0; j < data[i].length; j++) {
                var b = numbers.includes(i * 6 + j)
                    ? `${styles.active} ${styles.number}`
                    : styles.number;
                temp.push(
                    <div key={"number" + i * 7 + j} className={b} onClick={toggleActive}>
                        {data[i][j]}
                    </div>
                );
            }
            res.push(<div className={styles.number_row}>{temp}</div>);
        }
        setNums(res);
    };

    useEffect(() => {
        applyRandomNumber(createRandomNumber());
    }, []);

    return (
        <>
            <section className={styles.num_section}>
                <div className='num_title'>Lotto number selection</div>
                <button onClick={() => applyRandomNumber(createRandomNumber())}>Re-Select</button>
                <section className={styles.numbers}>{nums}</section>
            </section>
        </>
    );
};

export default Nums;
