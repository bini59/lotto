import { useCallback, useEffect, useState } from "react";

import styles from "../styles/selectNum.module.sass";

interface props {
    num: number;
    type: number;
    setfe: (i: number, type: number) => void;
}

const Num = (props: props) => {
    const [style, setStyle] = useState<string>(styles.number + " ");

    const selNum = useCallback((target: Element) => {
        if (target.classList.length != 2) {
            if (document.getElementById("fix")?.hasAttribute("active")) {
                props.setfe(props.num - 1, 1);
                setStyle(styles.number + " " + styles.fix_number);
            } else if (document.getElementById("exclude")?.hasAttribute("active")) {
                props.setfe(props.num - 1, -1);
                setStyle(styles.number + " " + styles.exclude_number);
            }
        } else {
            if (document.getElementById("fix")?.hasAttribute("active")) {
                if (target.classList[1] != styles.fix_number) {
                    props.setfe(props.num - 1, 1);
                    setStyle(styles.number + " " + styles.fix_number);
                } else {
                    props.setfe(props.num - 1, 0);
                    setStyle(styles.number);
                }
            } else if (document.getElementById("exclude")?.hasAttribute("active")) {
                if (target.classList[1] != styles.exclude_number) {
                    props.setfe(props.num - 1, -1);
                    setStyle(styles.number + " " + styles.exclude_number);
                } else {
                    props.setfe(props.num - 1, 0);
                    setStyle(styles.number);
                }
            } else {
                props.setfe(props.num - 1, 0);
                setStyle(styles.number);
            }
        }
    }, [props]);

    useEffect(() => {
        if (props.type == 2) {
            setStyle(styles.number + " " + styles.active);
        } else if (props.type == 0) {
            setStyle(styles.number);
        }
    }, [props.type]);

    return (
        <div className={style} onClick={(e) => selNum(e.target as Element)}>
            {props.num}
        </div>
    );
};

export default Num;
