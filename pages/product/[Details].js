import React from "react";
import { useRouter } from "next/router";
import useId from "../../hooks/useId";
import { useDispatch } from "react-redux";
import { addCart, getProducts } from "../../actions";
import Navbar from "../../components/Navbar";
import { useState } from "react";
import { useEffect } from "react";



function Details() {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getProducts());
        dispatch(addCart());
    }, []);

    const router = useRouter()
    const { Details } = router.query
    const { product, review } = useId(Details)

    const [newReview, setReview] = useState({
        comment: "",
        stars: 0,
        product: Details,
    })

    async function handleSubmit(e) {
        e.preventDefault();
        const response = await fetch('https://wines-db.herokuapp.com/reviews', {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newReview)
        })
        const data = await response.json()
        alert('Review added')
        setReview({
            comment: "",
            stars: 0,
            product:"",
        })
    }

    const handleChange = (e) => {
        setReview({
            ...newReview,
            [e.target.name]: e.target.value,
        })
    }

    console.log(Details)

    return (
        <div>
            <Navbar />
            <div className="flex justify-evenly m-10">  {/*   flex justify-center */}
                <div>

                    <div className="flex content-center card w-96 border border-red-700">
                        <figure>
                            <img src={product?.picture} className="h-96 w-auto " />
                        </figure>
                        <div className="card-body ">
                            <h2 className="card-title"> {product?.name}
                                <div className="badge mx-2 badge-primary">Wines</div>
                            </h2>
                            <h2>Brand: {product.brand}</h2>
                            <p>Description: {product?.description}</p>
                            <h1 className="mt-2">Stock:{product?.stock}</h1>
                            <div className="justify-center card-actions">
                                {/* {product?.stock === 0 ? <h2 style={{color: 'red'}}>There is no stock available</h2> : {}} */}
                                <button className="btn btn-primary" disabled={product.stock === 0} onClick={() => dispatch(addCart({
                                    priceDis: product.price,
                                    name: product.name,
                                    img: product.picture,
                                    id: product.id,
                                    q: 1,
                                }))}>Add to cart</button>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="flex p-10 flex-col">

                    <div className="flex flex-col w-full justify-center align-middle">
                        <div className="grid h-20 card bg-red-100 rounded-box place-items-center">
                            <h6>Category: Red</h6>
                            <h6>Brand: Vino</h6>
                            <h6>Tag: Merlot</h6>
                        </div>
                        <div className="divider">Making of the wine</div>
                        <div className="grid card bg-red-100 rounded-box place-items-center p-3">
                            <p>Grapes were harvested in the early morning hours to ensure the fruit arrived at the winery at cool temperatures.
                                We pressed the grapes as whole clusters and allowed the juice to settle for 24 hours before a gentle gravity transfer to French Oak barrels.
                                After 100% native yeast fermentation, the wine continued to mature in-barrels: 100% French oak, 20% new for 14 months to allow the true expression of the vintage and varietal to stand out.</p>
                        </div>
                    </div>

                    <div className="divider mt-5">Reviews</div>

                    <form onSubmit={handleSubmit}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text badge mx-2 badge-accent">Tell us your thoughts</span>
                            </label>
                            <textarea name="comment" value={newReview.comment} onChange={(e) => handleChange(e)} className="textarea h-24 textarea-bordered textarea-primary" placeholder="About the product..."></textarea>
                            <label>
                                <span className="label-text badge mx-2 badge-primary">Out of 5 ⭐</span>
                            </label>
                            <input type="number" min="0" max="5" name="stars" placeholder="number of stars" value={newReview.stars} onChange={(e) => handleChange(e)} style={{width: '50px'}}/>
                            <button type="submit" className="btn btn-accent" disabled={!newReview.comment}>Add your review</button>
                        </div>
                    </form>



                    <div className="flex flex-col w-full justify-center align-middle pt-5">
                        <div className="grid card bg-red-100 rounded-box place-items-center p-3">

                            <div className="grid grid-cols-2 align-middle">
                                {review.msg ? "This product hasn't been reviewed yet" : review.reviews?.map(r => (
                                    <div className="my-2 ml-2">
                                        <div className="max-w-sm rounded-sm border border-gray-200 bg-white shadow-lg">
                                            <div className="text-right p-4">
                                                <span className="text-xs text-gray-500 tracking-widest uppercase">few weeks ago</span>
                                            </div>

                                            <div className="flex items-center relative mb-10">
                                                <div className="border-t border-gray-200 z-20 w-full"></div>
                                            </div>

                                            <div>
                                                {"⭐".repeat(r.stars)}
                                            </div>


                                            <div className="px-8 pb-4">
                                                <h2 className="text-gray-800 text-xl font-bold">Gabo's opininon-</h2>
                                                <p className="text-gray-600 text-xs">
                                                    {r.comment}
                                                </p>
                                            </div>
                                        </div>
                                    </div>)
                                )}
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div>

    );
}

export default Details;
