// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextApiRequest, NextApiResponse } from "next"
export default function handler(req, res) {
  //next js api response sending of delivery orders in json
  res.status(200).json({ product_name: "", product_price: "", product_quantity: "", product_total: "", product_image: "", product_id: "",  shipping_id:"", route_map:["",""]})
  

}
