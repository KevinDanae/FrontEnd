const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  let { name, total, images } = req.query;
  images = images.split(',')
  console.log(images);
  if (req.method === "POST") {

    try {
      const product = await stripe.products.create({
        name,
        images,
      });

      const price = await stripe.prices.create({
        product: product.id,
        unit_amount: total * 100,
        currency: "usd",
      });

      // Create Checkout Sessions from body params.
      const session = await stripe.checkout.sessions.create({
        customer_email: "kevin.danaea@gmail.com",
        submit_type: "pay",
        shipping_rates: ["shr_1JeSAfKm2FjzweAPtW4IKzlj"],
        shipping_address_collection: {
          allowed_countries: ["MX", "AR"],
        },
        line_items: [
          {
            price: price.id,
            quantity: 1,
          },
        ],
        payment_method_types: ["card"],
        mode: "payment",
        allow_promotion_codes: true,
        success_url: `${req.headers.origin}/?success=true&session_id={CHECKOUT_SESSION_ID}&payment=stripe`,
        cancel_url: `${req.headers.origin}/?canceled=true`,
      });
      console.log(session)
      res.redirect(303, session.url);
    } catch (err) {
      res.status(err.statusCode || 500).json(err.message);
    }
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method Not Allowed");
  }
}
