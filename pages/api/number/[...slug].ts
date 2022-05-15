import { NextApiRequest, NextApiResponse } from "next";

interface NumberJSON {
    topNumbers: Array<Array<number>>;
    lowNumbers: Array<Array<number>>;
    frequency: object;
}

let num: NumberJSON = require("../../../data/numbers").num;

export default (req: NextApiRequest, res: NextApiResponse) => {
    const { slug } = req.query;

    if (slug[0] == "top") {
        res.status(200).json(num.topNumbers);
    } else if (slug[0] == "low") {
        res.status(200).json(num.lowNumbers);
    }
};
