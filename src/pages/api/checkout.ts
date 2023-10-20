import { stripe } from "@/lib/stripe";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { priceID } = req.body;
    if (req.method != 'POST') {
  return res.status(405).json({ error: "Method not allowed." });
}
    if (!priceID) {
        return res.status(400).json({error:'Price not found.'})
    }
    const sucess = `${process.env.NEXT_URL}/sucess`;
    const cancel = `${process.env.NEXT_URL}/`;
    const checkoutSession = await stripe.checkout.sessions.create({
        success_url: sucess,
        cancel_url: cancel,
        mode: "payment",
        line_items: [{
            price: priceID,
            quantity:1,
        }],
    })
    return res.status(201).json({
        checkoutUrl:checkoutSession.url,
    })
}