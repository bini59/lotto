import styles from "../styles/selectNum.module.sass";

interface props {
    num: number;
}

const Num = (props: props) => {
    const selNum = (target: Element) => {
        let style = styles.number;
        if (target.classList.length != 2) {
            if (document.getElementById("fix")?.hasAttribute("active")) {
                style += " " + styles.fix_number;
            } else if (document.getElementById("exclude")?.hasAttribute("active"))
                style += " " + styles.exclude_number;
        } else {
            if (document.getElementById("fix")?.hasAttribute("active")) {
                if (target.classList[1] == styles.exclude_number) {
                    style += " " + styles.fix_number;
                }
            } else if (document.getElementById("exclude")?.hasAttribute("active")) {
                if (target.classList[1] == styles.fix_number) {
                    style += " " + styles.exclude_number;
                }
            }
        }
        target.className = style;
    };
    return (
        <div className={styles.number} onClick={(e) => selNum(e.target as Element)}>
            {props.num}
        </div>
    );
};

export default Num;
