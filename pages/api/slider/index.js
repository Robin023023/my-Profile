import { carouselSlide } from "../../carouselSlide"

export default function handler(req,res){
    res.status(200).json(carouselSlide)
}