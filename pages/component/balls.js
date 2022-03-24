const Balls = (props)=>{

    const nums = props.nums;
    const ball = nums.map((n, i)=>{
        let color = ""
    
        if( n<11)
            color = "yellow"
        else if( n < 21)
            color = "blue";
        else if( n < 31)
            color = "red";
        else if( n < 41)
            color = "gray";    
        else if( n < 46)
            color = "green";
            

        return(
            <div className={"ball"+" ball-"+color} key={"ball"+i}>{n}</div>
        )
    })

    return(
        <section className="ball-sect">{ball}</section>
    )
}


export default Balls;