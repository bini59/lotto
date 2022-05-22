import { NextApiRequest, NextApiResponse } from "next";

let tempData = {
    one: [
        [1, 57],
        [2, 54],
        [3, 53],
        [4, 50],
        [5, 58],
        [6, 53],
    ],
    two: [
        [1, 2, 13],
        [2, 5, 3],
        [3, 4, 7],
    ],
    three: [
        [1, 2, 3, 4],
        [2, 5, 6, 2],
    ],
    four: [[1, 2, 3, 4, 1]],
    five: [[1, 2, 3, 4, 6, 1]],
    six: [],
};

export default (req: NextApiRequest, res: NextApiResponse) => {
    let a = req.body;
    for (var i = 0; i < 6; i++) {
        tempData.one[i][0] = a[i] + 1;
    }

    res.status(200).send(tempData);
};
