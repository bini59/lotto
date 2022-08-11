import { NextApiRequest, NextApiResponse } from "next"
import excuteQuery from '../../lib/db'

export default async (req: NextApiRequest, res: NextApiResponse) => {
    try {
            console.log("req nom", req.body)
            const result = await excuteQuery({
            query: "INSERT INTO user(`id`, `password`, `name`, `email`, `order`) VALUES(?, ?, ? ,? ,?)",
            values: [req.body.id, req.body.password, req.body.name, req.body.email, 50],
        });
        console.log( "regist result : ",result );
    } catch ( error ) {
        console.log( error );
    }
}