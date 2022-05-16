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
    }
};
