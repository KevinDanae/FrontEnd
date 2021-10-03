import React from "react";
import { useState } from "react";
import Navbar from "../Navbar";


const Creation = () => {
    const fetch = require('node-fetch');
    
    const [nuevoProd, setNuevoProd] = useState({
        name: "",
        description: "",
        brand: "",
        price: "",
        year: "",
        stock: 0,
        picture: "",
        category: "",
        subcategory: "",
        grape: "",
    })

    async function handleSubmit(e) {
        e.preventDefault();
        const response = await fetch('https://wines-db.herokuapp.com/product', {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(nuevoProd)
        })
        const data = await response.json()
        alert('Product ok')
        setNuevoProd({
            name: "",
            description: "",
            brand: "",
            price: "",
            year: "",
            stock: 0,
            picture: "",
            category: "",
            subcategory: "",
            grape: "",
        })
    }

    const handleChange = (e) => {
        setNuevoProd({
            ...nuevoProd,
            [e.target.name]: e.target.value,
        })
    }

    return (
        <div>
            <Navbar />
            <div className="flex flex-col w-screen border border-white ">
                <div className="flex justify-center">
                    <div className="flex justify-center bg-purple-50 p-5 shadow-2xl rounded-lg ">
                        <form onSubmit={handleSubmit}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="badge mx-2 badge-primary">Name:</span>
                                </label>
                                <input type="text" name="name" onChange={(e) => handleChange(e)} placeholder="The name of your product..." value={nuevoProd.name} className="input input-bordered border border-red-500" required />
                            </div>

                            <label className="block mt-4">
                                <span className="badge mx-2 badge-primary">Category</span>
                                <select className=" form-select mt-1 block w-full border border-red-500 rounded-lg" onChange={(e) => handleChange(e)} name="category">
                                    <option name="category" value="wines" >Wine</option>
                                    <option name="category" value="beers" >Beer</option>
                                    <option name="category" value="whisky" >Whisky</option>
                                </select>
                            </label>

                            <div className="form-control">
                                <label className="label">
                                    <span className="badge mx-2 badge-primary">Description:</span>
                                </label>
                                <textarea type="textarea" name="description" onChange={(e) => handleChange(e)} placeholder="A brief summary of the product for the potential customer..." value={nuevoProd.description} className="input input-bordered border border-red-500" />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="badge mx-2 badge-primary">Brand:</span>
                                </label>
                                <input type="text" name="brand" onChange={(e) => handleChange(e)} placeholder="Name of the brand/company" value={nuevoProd.brand} className="input input-bordered border border-red-500" />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="badge mx-2 badge-primary">Price:</span>
                                </label>
                                <input type="text" name="price" onChange={(e) => handleChange(e)} placeholder="Price(without discounts)" value={nuevoProd.price} className="input input-bordered border border-red-500" required />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="badge mx-2 badge-primary">Year:</span>
                                </label>
                                <input type="number" name="year" onChange={(e) => handleChange(e)} placeholder="(only for wine category)" value={nuevoProd.year} className="input input-bordered border border-red-500" />
                            </div>


                            <div className="form-control">
                                <label className="label">
                                    <span className="badge mx-2 badge-primary">Stock:</span>
                                </label>
                                <input type="number" name="stock" placeholder="Stock available for purchase" className="input input-bordered border border-red-500" value={nuevoProd.stock} onChange={(e) => handleChange(e)} />
                            </div>

                            <label>
                                Image:
                                <input type="file" name="picture" className="m-5" onChange={(e) => handleChange(e)} multiple />
                            </label>


                            <div className="form-control">
                                <label className="label">
                                    <span className="badge mx-2 badge-primary">Subcategory:</span>
                                </label>
                                <input type="text" name="subcategory" placeholder="Subcategory" className="input input-bordered border border-red-500" value={nuevoProd.subcategory} onChange={(e) => handleChange(e)} />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="badge mx-2 badge-primary">Grape:</span>
                                </label>
                                <input type="text" name="grape" placeholder="Grape" className="input input-bordered border border-red-500" value={nuevoProd.grape} onChange={(e) => handleChange(e)} />
                            </div>

                            <button className='btn btn-primary ' type='submit'>Add Product</button>

                        </form>


                    </div>

                </div>
            </div>
        </div>
    )
}

export default Creation;