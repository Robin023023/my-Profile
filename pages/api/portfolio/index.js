import { portfolio } from "../../portfolio";


export default function handler(req,res){
    res.status(200).json(portfolio)
}