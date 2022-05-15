import style from "../styles/ballcover.module.sass";

interface props {
    balls: JSX.Element[];
    rate: number;
    nowRound: number;
}

const Ballcover = (props: props) => {
    const frequency: number = Math.round(props.nowRound * 6 * props.rate * 0.01);

    return (
        <section className={style.ballRate}>
            <section className={style.ballSection}>{props.balls}</section>
            <section className={style.rateInfo}>
                <div className={style.frequency}>{frequency}번 등장</div>
                <div className={style.rate}>등장 확률 : {props.rate.toFixed(2)}%</div>
            </section>
        </section>
    );
};

export default Ballcover;
