import { loadStripe } from "@stripe/stripe-js";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addCart, getProducts, wishList } from "../actions";
// import Filters from "../components/Filters";
import useCart from "../hooks/useCart";
import LandingPage from "../components/LandingPage";
import Navbar from "../components/Navbar";
import useActionCart from "../hooks/useActionCart";
import Footer from "../components/Footer";

export default function Home() {
  const dispatch = useDispatch();

  const stripePromise = loadStripe(
    process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
  );

  useEffect(() => {
    const query = new URLSearchParams(window.location.search);
    if (query.get("success")) {
      useActionCart(null, "finished", 'stripe');
      useCart();
    }
    if (query.get("canceled")) {
      useActionCart(null, "cancelled");
      useCart();
    }
  }, []);

  useEffect(() => {
    dispatch(getProducts());
    dispatch(addCart());
    dispatch(wishList())
  }, []);

  return (
    <main>
      <Navbar />
      <LandingPage />
      <Footer />
    </main>
  );
}
