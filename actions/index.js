import axios from "axios";
import { cartGet } from "../helpers/cart";

export const getProducts = () => async (dispatch) => {
  const data = await fetch("https://wines-db.herokuapp.com/product");
  const info = await data.json();

  dispatch({
    type: "GET_PRODUCTS",
    payload: info,
  });
};

export const getByName = (name) => async (dispatch) => {
  const data = await fetch(
    `https://wines-db.herokuapp.com/product?name=${name}`
  );
  let info = await data.json();
  if (typeof info === "string") info = [];

  dispatch({
    type: "GET_PRODUCT",
    payload: info,
  });
};

export const signup = (userSignup) => async (dispatch) => {
  try {
    const response = await axios.post("https://wines-db.herokuapp.com/signup", {
      username: userSignup.username,
      password: userSignup.password,
      mail: userSignup.mail,
      name: userSignup.name,
      lastname: userSignup.lastName,
    });
    const data = await response.data;
    console.log(data);
    return dispatch({
      type: "SIGNUP",
      payload: data,
    });
  } catch (err) {
    console.log(err);
  }
};

export const getByCategory = (category) => async (dispatch) => {
  const data = await fetch(
    `https://wines-db.herokuapp.com/product?category=${category}`
  );
  let info = await data.json();
  if (typeof info === "string") info = [];

  dispatch({
    type: "GET_PRODUCT_CATEGORY",
    payload: info,
  });
};

export const login = (user) => async (dispatch) => {
  try {
    const response = await axios.post("http://wines-db.herokuapp.com/login", {
      username: user.username,
      password: user.password,
    });
    const data = await response.data;
    //guardar token en localstorage
    localStorage.setItem("token", data.token);
    localStorage.setItem("userId", data.user.id);
    return dispatch({
      type: "LOGIN",
      payload: data.token,
    });
  } catch (err) {
    console.log(err);
  }
};

export const addCart = (product) => async (dispatch) => {
  let array = [];
  if (localStorage.getItem("idCart") && localStorage.getItem("token")) {
    array = await cartGet(localStorage.getItem("userId"));
  } else {
    if (localStorage.getItem("cart") && !product) {
      array = localStorage.getItem("cart");
      array = JSON.parse(array);
    } else if (localStorage.getItem("cart")) {
      array = localStorage.getItem("cart");
      array = JSON.parse(array);

      let element = array.find((e) => e.id === product.id);
      if (element) {
        array = array.map((e) => {
          if (e.id === product.id) {
            e.q++;
            return e;
          } else {
            return e;
          }
        });
        localStorage.setItem("cart", JSON.stringify(array));
      } else {
        array.push(product);
        localStorage.setItem("cart", JSON.stringify(array));
      }
    } else if (!localStorage.getItem("cart") && !product) {
      array = [];
    } else {
      array.push(product);
      localStorage.setItem("cart", JSON.stringify(array));
    }
  }

  dispatch({
    type: "ADD_CART",
    payload: array,
  });
};

export const removeCart = (id, removeOne) => async (dispatch) => {
  let array = [];
  array = localStorage.getItem("cart");
  array = JSON.parse(array);

  if (removeOne) {
    array = array.map((e) => {
      if (e.id === id) {
        e.q = e.q - 1;
        return e;
      }
      return e;
    });

    array = array.filter((e) => e.q > 0);
  } else {
    array = array.filter((e) => e.id !== id);
  }
  localStorage.setItem("cart", JSON.stringify(array));

  dispatch({
    type: "REMOVE_CART",
    payload: array,
  });
};
