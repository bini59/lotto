import {useState} from "react"
import Balls from "./component/balls";

const style = `
    .ball{
        border : 1px solid black;
        border-radius : 50%;
        width : 5vw;
        height: 5vw;
        
        display:flex;
        align-items: center;
        justify-content: center;

        margin-right: 3vw;

        font-size: 2vw;

    }
    .ball-yellow{background-color:yellow;border-color:yellow;}
    .ball-gray{background-color:gray;border-color:gray;}
    .ball-blue{background-color:blue;border-color:blue;}
    .ball-red{background-color:#f95454;border-color:#f95454;color:#525252;}
    .ball-green{background-color:green;border-color:green;}

    .ball-sect{
        display: flex;
        align-items: center;
        justify-content: center;

        height: 70vh;
    }
    .control-section{
        display: flex;
        align-items: center;
        justify-content: center;

        height: 30vh;
    }
    .chBtn{
        width: 10vw;
        height: 3vw;
        margin-right: 2vw;
        box-shadow: 2px 3px 0 rgb(0,0,0,0.3);
        border: 0;
    }
    .chBtn:hover{
        cursor:pointer;
        box-shadow: 1.5px 2px 0 rgba(0,0,0,0.3);
    }
    .chBtn:active{
        box-shadow: 1px 1px 0 rgb(0,0,0,0.3);
    }
`

const Index = ()=>{
    const [nums, setNums] = useState([1, 2, 3, 4, 5, 6, 7])
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
        setNums(t)
    }
    
    return(
        <>
            <Balls nums={nums} />
            <section className="control-section">
                <button className="chBtn" onClick={chN}>Button</button>
            </section>
            

            <style jsx>{style}</style>
        </>
    )
}


export default Index;