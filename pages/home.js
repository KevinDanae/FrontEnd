import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCart, getProducts } from "../actions";
import Cards from "../components/Cards";
import Filters from "../components/Filters";
import Carousel from "../components/Carousel";
import Navbar from "../components/Navbar";

export default function Home() {
  const token = useSelector((state) => state.token);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
    dispatch(addCart());
  }, [token]);

  return (
    <main>
      <Navbar />
      <Filters />
      <Carousel />
      <Cards />
    </main>
  );
}
