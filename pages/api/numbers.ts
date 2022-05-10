import { NextApiRequest, NextApiResponse } from "next";

let topNum = require("../../data/numbers");

export default (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method == "GET") {
        res.status(200).json(topNum);
    }
};
