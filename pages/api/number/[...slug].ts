import { NextApiRequest, NextApiResponse } from "next";

interface NumberJSON {
    topNumbers: Array<Array<number>>;
    lowNumbers: Array<Array<number>>;
    frequency: object;
    with2: Array<Array<number>>;
    with3: Array<Array<number>>;
    with4: Array<Array<number>>;
    with5: Array<Array<number>>;
}

let num: NumberJSON = require("../../../data/numbers").num;

const generateRandomNumber = (Remain:number[])=>{
    let top = num.topNumbers;

    let result:number[] = Remain;

    const getRandomRemain = (remain:number)=>{
        let res:number[] = []

        let ranTop = Math.floor(Math.random() * top.length);;
        while(result.indexOf(top[ranTop][0]) != -1){
            ranTop = Math.floor(Math.random() * top.length);;
        }

        const getRandomfromWith = (n:number[][], x:number)=>{
            for(var i = 0; i < n.length; i++) {
                if(n[i].indexOf(x) != -1){
                    for(var j = 0; j < n[i].length; j++){
                        if(result.indexOf(n[i][j]) != -1){
                            return [];
                        }
                    }
                    return n[i];
                } 
            }
            return [];
        }

        let r = 0;
        for(var i= 0; i < 3-(5-remain); i++){
            r += Math.floor(Math.random() * 2);
        }

        switch (r) {
            case 0:
                res = getRandomfromWith(num.with2, top[ranTop][0]).slice(1, 3);
                break;
            case 1:
                res = getRandomfromWith(num.with3, top[ranTop][0]).slice(1, 4);
                break;
            case 2:
                res = getRandomfromWith(num.with4, top[ranTop][0]).slice(1, 5);
                break;
            case 3:
                res = getRandomfromWith(num.with5, top[ranTop][0]).slice(1, 6);
                break;
            default:
                break;
        }


        return res;
    }

    while(result.length < 5){
        result = [...result, ...getRandomRemain(5-result.length)];
    }
    if(result.length == 5){
        let tmp = Math.floor(Math.random() * top.length);
        while(result.indexOf(top[tmp][0]) != -1){
            tmp = Math.floor(Math.random() * top.length);
        }
        result.push(top[tmp][0]);
    }
    return result;
}

export default (req: NextApiRequest, res: NextApiResponse) => {
    const { slug } = req.query;

    if (slug[0] == "top") {
        res.status(200).json(num.topNumbers);
    } else if (slug[0] == "low") {
        res.status(200).json(num.lowNumbers);
    } else if (slug[0] == "frequency") {
        if (slug[1] == "2") {
            res.status(200).json(num.with2);
        } else if (slug[1] == "3") {
            res.status(200).json(num.with3);
        } else if (slug[1] == "4") {
            res.status(200).json(num.with4);
        } else if (slug[1] == "5") {
            res.status(200).json(num.with5);
        }
    } else if (slug[0] == "random") {
        let exclude: number[] = req.body.exclude;
        let fix:number[] = req.body.fixed;

        let temp: number[] = generateRandomNumber(fix)
        while (temp.filter(x => exclude.includes(x)).length != 0) {
            temp = generateRandomNumber(fix)
        }
        res.status(200).json({
            random : temp
        });
    }

};
