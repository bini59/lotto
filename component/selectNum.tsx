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
    const [selected, setSelected] = useState(0);
    const [nums, setNums] = useState<JSX.Element[]>([]);
    const [element, setElement] = useState<React.MouseEvent<HTMLDivElement, MouseEvent> | null>(
        null
    );

    // const toggleActive = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    //     const target = e.target as HTMLDivElement;
    //     log("toggle function" + selected);
    //     if (selected == 6 && !target.classList.contains(styles.active)) {
    //         alert("You can't select more than 6 numbers");
    //         return;
    //     }
    //     if (target.classList.contains(styles.active)) {
    //         target.classList.remove(styles.active);
    //         setSelected(selected - 1);
    //     } else {
    //         target.classList.add(styles.active);
    //         setSelected(selected + 1);
    //     }
    // };

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
        let randomNumber: number[] = [];
        for (let i = 0; i < 6; i++) {
            var temp: number = Math.floor(Math.random() * 45 + 1);
            while (randomNumber.includes(temp)) {
                temp = Math.floor(Math.random() * 45 + 1);
            }
            randomNumber.push(temp);
        }
        setSelected(6);
        return randomNumber;
    };

    const applyNumber = (numbers: number[]) => {
        let res: JSX.Element[] = [];
        for (let i = 0; i < 8; i++) {
            var temp = [];
            for (let j = 0; j < data[i].length; j++) {
                var b = numbers.includes(i * 6 + j)
                    ? `${styles.active} ${styles.number}`
                    : styles.number;
                temp.push(
                    <div
                        key={"number" + i * 7 + j}
                        className={b}
                        onClick={(e) => {
                            setElement(e);
                        }}
                    >
                        {data[i][j]}
                    </div>
                );
            }
            res.push(
                <div key={`num_row_${i}`} className={styles.number_row}>
                    {temp}
                </div>
            );
        }
        setNums(res);
    };

    useEffect(() => {
        applyNumber(createRandomNumber());
        log("init random number" + selected);
    }, []);

    return (
        <>
            <section className={styles.num_section}>
                <div className='num_title'>Lotto number selection</div>
                <button
                    onClick={(e) => {
                        applyNumber(createRandomNumber());
                    }}
                >
                    Re-Select
                </button>
                <section className={styles.numbers}>{nums}</section>
            </section>
        </>
    );
};

export default Nums;
