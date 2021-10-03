import Search from "../Search";
import React, { useState, useEffect } from "react";
import Cart from "../Cart";
import { useDispatch, useSelector } from "react-redux";
import { login, signup } from "../../actions"
import Link from "next/link"
import useCart from "../../hooks/useCart";


const Navbar = () => {
  const dispatch = useDispatch();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const logout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
  };

  const tokenRedux = useSelector(state => state.token);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
    }
  }, [tokenRedux]);


  const [formData, setFormData] = useState(true);
  const [userSignup, setUserSignup] = useState({
    mail: "",
    name: "",
    lastName: "",
    username: "",
    password: "",
  })

  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const handleChangeSignup = (e) => {
    setUserSignup({ 
      ...userSignup, 
      [e.target.name]: e.target.value });
  }; 
  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    dispatch(login(user));
    useCart();
  }
  const handleSubmitSignup = (e) => {
    dispatch(signup(userSignup));
  }



  return (
    <>
      <div className="navbar mb-10 shadow-md">
        <div className="flex-1 px-2 mx-2 navbar-start">
          <Link href="/">
            <span className="text-lg font-bold cursor-pointer">
              <i className="fas fa-user-md pr-3"></i>Wines
            </span>

          </Link>
        </div>
        <div className="px-2 navbar-center">
          <Search />
        </div>
        <div className="flex-none px-2 lg:flex md:flex sm:flex navbar-end">
          <div className="dropdown dropdown-hover dropdown-left">
            <button className="btn btn-square px-8 btn-ghost mr-2 ">
              Cart
            </button>
            <div
              tabIndex="0"
              className="p-2 shadow menu dropdown-content bg-base-100 rounded-box w-72"
            >
              <Cart />
            </div>
          </div>
          {isLoggedIn ? (
            <>
           <div className="flex-none">
           <button className="btn btn-square btn-ghost">
             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current">     
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path>                     
             </svg>
           </button>
         </div> 
         <div className="flex-none">
           <div className="avatar">
             <div className="rounded-full w-10 h-10 m-2">
               <img src="https://i.pravatar.cc/500?img=41"/>
             </div>
           </div>
        </div>
        <div className="flex-none">
          <button 
          className="btn btn-primary"
          onClick={logout}
          >
          
            LOGOUT
          </button>
        </div>
          </>
          ) : (
            <>
            <label htmlFor="my-modal-2" className="btn btn-primary modal-button">
            LOGIN/SIGNUP
          </label>
          <input type="checkbox" id="my-modal-2" className="modal-toggle" />
        {formData ? (
          <div className="modal">
            <div className="modal-box">
              <div className="modal-action flex-col">
                <div className="form-control">
                  <h1 className="text-center text-2xl font-bold text-primary">
                    LOGIN
                  </h1>

                  <label className="label">
                    <span className="label-text font-bold mt-2">E-mail</span>
                  </label>
                  <input
                    type="text"
                    placeholder="E-mail"
                    className="input input-primary input-bordered"
                    value={user.username}
                    name="username"
                    onChange={handleChange}
                  />
                  <label className="label">
                    <span className="label-text font-bold">Password</span>
                  </label>
                  <input
                    type="password"
                    placeholder="Password"
                    className="input input-primary input-bordered"
                    value={user.password}
                    name="password"
                    onChange={handleChange}
                  />

                  <label
                    htmlFor="my-modal-2"
                    className="btn mt-2"
                    disabled={user.username === "" || user.password === ""}
                    onClick={handleSubmit}
                  >
                    Login
                  </label>
                  <label
                    htmlFor="my-modal-2"
                    className="btn bg-black  mt-2 hover:bg-white hover:text-black duration-150"
                  >
                    <img
                      className="w-5 h-5 mr-2"
                      src="https://img.icons8.com/fluency/48/000000/google-logo.png"
                    /><a href="http://wines-db.herokuapp.com/auth/google">Login with Google</a>
                  </label>
                <p>You don't have an account? <button 
                onClick={() => setFormData(false)}
                className="link link-secondary"
                >Sign up</button></p>
                  <label
                    htmlFor="my-modal-2"
                    className="btn btn-secondary mt-2"
                  >
                    Close
                  </label>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="modal">
          <div className="modal-box">
            <div className="modal-action flex-col">
              <div className="form-control">
                <h1 className="text-center text-2xl font-bold text-primary">
                  SIGN UP
                </h1>
                <label className="label">
                  <span className="label-text font-bold mt-2">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  className="input input-primary input-bordered"
                  value={userSignup.name}
                  name="name"
                  onChange={handleChangeSignup}
                />
                <label className="label">
                  <span className="label-text font-bold mt-2">Lastname</span>
                </label>
                <input
                  type="text"
                  placeholder="Lastname"
                  className="input input-primary input-bordered"
                  value={userSignup.lastName}
                  name="lastName"
                  onChange={handleChangeSignup}
                />
                <label className="label">
                  <span className="label-text font-bold mt-2">Username</span>
                </label>
                <input
                  type="text"
                  placeholder="Username"
                  className="input input-primary input-bordered"
                  value={userSignup.username}
                  name="username"
                  onChange={handleChangeSignup}
                />
                <label className="label">
                  <span className="label-text font-bold mt-2">E-mail</span>
                </label>
                <input
                  type="text"
                  placeholder="E-mail"
                  className="input input-primary input-bordered"
                  value={userSignup.mail}
                  name="mail"
                  onChange={handleChangeSignup}
                />
                <label className="label">
                  <span className="label-text font-bold">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="Password"
                  className="input input-primary input-bordered"
                  value={userSignup.password}
                  name="password"
                  onChange={handleChangeSignup}
                />

                <label
                  htmlFor="my-modal-2"
                  className="btn mt-2"
                  disabled={userSignup.username === "" || userSignup.password === "" || userSignup.name === "" || userSignup.lastName === "" || userSignup.mail === ""}
                  onClick={handleSubmitSignup}
                >
                  Sign Up
                </label>
                <label
                  htmlFor="my-modal-2"
                  className="btn bg-black  mt-2 hover:bg-white hover:text-black duration-150"
                >
                  <img
                    className="w-5 h-5 mr-2"
                    src="https://img.icons8.com/fluency/48/000000/google-logo.png"
                  /><a href="http://wines-db.herokuapp.com/auth/google">Sign up with Google</a>
                </label>
              <p>You have an account? <button
              onClick={() => setFormData(true)}
              className="link link-secondary"
              >Login</button></p>
                <label
                  htmlFor="my-modal-2"
                  className="btn btn-secondary mt-2"
                >
                  Close
                </label>
              </div>
            </div>
          </div>
        </div>
        )}
        </>
    )}
        </div>
      </div>
      
    </>
  );
};

export default Navbar;