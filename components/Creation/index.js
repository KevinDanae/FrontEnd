import React from "react";
import { useState } from "react";


const Creation = () => {
    const fetch = require('node-fetch');
    const [nuevoProd, setNuevoProd] = useState({
        name: "",
        description: "",
        brand:"",
        price: "",
        year: "",
        rating: "",
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
            brand:"",
            price: "",
            year: "",
            rating: "",
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
        <div className="flex flex-col">

            <form onSubmit={handleSubmit}>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name:</span>
                    </label>
                    <input type="text" name="name" onChange={(e) => handleChange(e)} placeholder="Name" value={nuevoProd.name} className="input input-bordered" required />
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Description:</span>
                    </label>
                    <textarea type="textarea" name="description" onChange={(e) => handleChange(e)} placeholder="Description" value={nuevoProd.description} className="input input-bordered" />
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Brand:</span>
                    </label>
                    <input type="text" name="brand" onChange={(e) => handleChange(e)} placeholder="Description" value={nuevoProd.brand} className="input input-bordered" />
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Price:</span>
                    </label>
                    <input type="text" name="price" onChange={(e) => handleChange(e)} placeholder="Price" value={nuevoProd.price} className="input input-bordered" required />
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Year:</span>
                    </label>
                    <input type="number" name="year" onChange={(e) => handleChange(e)} placeholder="Year" value={nuevoProd.year} className="input input-bordered" required />
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Rating:</span>
                    </label>
                    <input type="text" name="rating" placeholder="rating" className="input input-bordered" value={nuevoProd.rating} onChange={(e) => handleChange(e)}/>
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Stock:</span>
                    </label>
                    <input type="number" name="stock" placeholder="stock" className="input input-bordered" value={nuevoProd.stock} onChange={(e) => handleChange(e)}/>
                </div>

                <label>
                    Image:
                    <input type="file" name="picture" onChange={(e) => handleChange(e)} multiple />
                </label>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Category:</span>
                    </label>
                    <input type="text" name="category" placeholder="Category" className="input input-bordered" value={nuevoProd.category} onChange={(e) => handleChange(e)}/>
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Subcategory:</span>
                    </label>
                    <input type="text" name="subcategory" placeholder="Subcategory" className="input input-bordered" value={nuevoProd.subcategory} onChange={(e) => handleChange(e)}/>
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Grape:</span>
                    </label>
                    <input type="text" name="grape" placeholder="Grape" className="input input-bordered" value={nuevoProd.grape} onChange={(e) => handleChange(e)}/>
                </div>


                <button className='btn btn-primary ml-24' type='submit'>Add Product</button>

            </form>


        </div>
    )
}

export default Creation;