import React from "react";
import { useRouter } from "next/router";
import useId from "../../hooks/useId";

function Details() {
    const router = useRouter()
    const { Details } = router.query
    const { product } = useId(Details)
    console.log(Details)
    return (

        <div>
            

            <div className="flex w-full justify-center">
                <div className="flex content-center card bordered w-96">
                    <figure>
                        <img src={product[0]?.picture}/>
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title"> {product[0]?.name}
                            <div className="badge mx-2 badge-primary">Wine</div>
                        </h2>
                        <p>{product[0]?.description}</p>
                        <p>Stock:{product[0]?.stock}</p>
                        <div className="justify-center card-actions">
                            <button className="btn btn-primary">Add to cart</button>
                        </div>
                    </div>
                </div>

            </div>





            <div class="flex flex-col w-full">
                <div class="grid h-20 card bg-red-100 rounded-box place-items-center">
                    <h6>Category: Red</h6>
                    <h6>Brand: Vino</h6>
                    <h6>Tag: Merlot</h6>
                </div>
                <div class="divider">Making of the wine</div>
                <div class="grid card bg-red-100 rounded-box place-items-center">
                    <p>Grapes were harvested in the early morning hours to ensure the fruit arrived at the winery at cool temperatures.
                        We pressed the grapes as whole clusters and allowed the juice to settle for 24 hours before a gentle gravity transfer to French Oak barrels.
                        After 100% native yeast fermentation, the wine continued to mature in-barrels: 100% French oak, 20% new for 14 months to allow the true expression of the vintage and varietal to stand out</p>
                </div>
            </div>




        </div>


    )
}

export default Details;