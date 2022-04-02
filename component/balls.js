import {useEffect, useState, useRef} from "react"

const log = console.log


const Balls = (props)=>{

    const [nums, setNums] = useState([1, 2, 3, 4, 5, 6, 7])
    const [curr_nums, setCurrent] = useState(0);
    const [final_num, setFinal] = useState([])
    

    const chN = ()=>{
        var t = []
        for(var i = 0; i < 7; i++){
            var x = 0;
            do{
                var ss = true
                x = Math.ceil(Math.random()*44);
                for(var i = 0; i < t.length; i++){
                    if(x == t[i]) ss=false
                }
            } while(!ss);
            t.push(x);
        }
        t.sort((a, b)=>{return a-b})
        setFinal(t);
    }

    useEffect(()=>{
        chN()
        log(final_num)
    }, [])

    useEffect(()=>{
        if(props.trigger){
            var i = 0
            const count = setInterval(()=>{
                
                var x = Math.ceil(Math.random()*44);
                let t = [...nums]
                t[curr_nums] = x;
                setNums(t);
                if(i >= 100) {
                    clearInterval(count)
                    setCurrent(curr_nums+1)

                    t[curr_nums] = final_num[curr_nums]
                    props.setTrigger(false)
                    if(curr_nums < 6) props.setTrigger(true)
                    if(curr_nums == 6){
                        chN()
                        setCurrent(0)
                    }
                }
                else i+=7;
            }, 60)
            return ()=>{clearInterval(count)}
        }
    }, [props.trigger])

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