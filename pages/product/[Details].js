import React from "react";
import { useRouter } from "next/router";
import useId from "../../hooks/useId";
import { useDispatch } from "react-redux"
import { addCart } from "../../actions";
import Navbar from "../../components/Navbar";

function Details() {
    const dispatch = useDispatch()
    const router = useRouter()
    const { Details } = router.query
    const { product } = useId(Details)
    return (
        <div>
            <Navbar />
            <div className="flex justify-evenly m-10">  {/*   flex justify-center */}

                <div>

                    <div className="flex content-center card w-96 border border-red-700">
                        <figure>
                            <img src={product[0]?.picture} className="h-96 w-full " />
                        </figure>
                        <div className="card-body ">
                            <h2 className="card-title"> {product[0]?.name}
                                <div className="badge mx-2 badge-primary">Wine</div>
                            </h2>
                            <p>{product[0]?.description}</p>
                            <p>Stock:{product[0]?.stock}</p>
                            <div className="justify-center card-actions">
                                <button className="btn btn-primary" onClick={() => dispatch(addCart({
                                    priceDis: product[0].price,
                                    name: product[0].name,
                                    img: product[0].picture,
                                    id: product[0].id,
                                    q: 1,
                                }))}>Add to cart</button>
                            </div>
                        </div>
                    </div>

                </div>


                <div className="flex p-20">

                    <div className="flex flex-col w-full justify-center align-middle">
                        <div className="grid h-20 card bg-red-100 rounded-box place-items-center">
                            <h6>Category: Red</h6>
                            <h6>Brand: Vino</h6>
                            <h6>Tag: Merlot</h6>
                        </div>
                        <div className="divider">Making of the wine</div>
                        <div className="grid card bg-red-100 rounded-box place-items-center">
                            <p>Grapes were harvested in the early morning hours to ensure the fruit arrived at the winery at cool temperatures.
                                We pressed the grapes as whole clusters and allowed the juice to settle for 24 hours before a gentle gravity transfer to French Oak barrels.
                                After 100% native yeast fermentation, the wine continued to mature in-barrels: 100% French oak, 20% new for 14 months to allow the true expression of the vintage and varietal to stand out</p>
                        </div>
                    </div>


                </div>

            </div>




        </div>
    )
}

export default Details;