import style from "../styles/ball.module.sass";

interface props {
    num: number;
}

const Ball = (props: props) => {
    let balltype: string;
    switch (Math.floor((props.num - 1) / 10)) {
        case 0:
            balltype = style.ball0;
            break;
        case 1:
            balltype = style.ball1;
            break;
        case 2:
            balltype = style.ball2;
            break;
        case 3:
            balltype = style.ball3;
            break;
        case 4:
            balltype = style.ball4;
            break;
        default:
            balltype = style.ball;
            break;
    }

    return (
        <div className={style.ball + " " + balltype}>
            <span className='num'>{props.num}</span>
        </div>
    );
};

export default Ball;
