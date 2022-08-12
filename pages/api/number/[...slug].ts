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

let check_r = [];
for (var i = 0; i < 5; i++) check_r.push(generateRandomNumber([]));
const check_random_g = (arr: number[]) => {
    for (var i = 0; i < check_r.length; i++) {
        var temp = 0;
        for (var j = 0; j < arr.length; j++) {
            if (check_r[i].indexOf(arr[j]) != -1) temp++;
            if(temp == 3) return false;
        }
    }
    return true;
}

let temp_arr = [];

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
        let fix: number[] = req.body.fixed;

        let temp: number[] = generateRandomNumber(fix)
        while (temp.filter(x => exclude.includes(x)).length != 0) {
            temp = generateRandomNumber(fix)
        }
        while (!check_random_g(temp)) {
            temp = generateRandomNumber(fix)
        }
        check_r = [...check_r.slice(1), temp];

        /// test code
        temp_arr.push(temp);
        var temp_ = 0;
        for (var i = 0; i < temp_arr.length-1; i++) {
            for (var j = 0; j < temp.length; j++) {
                if (temp_arr[i].indexOf(temp[j]) != -1) temp_++;
            }
        }
        console.log(temp_/temp_arr.length);
        //test code end

        res.status(200).json({
            random : temp
        });
    }

};
