import { Blog } from "../../blog";


export default function handler(req,res){
    res.status(200).json(Blog)
}