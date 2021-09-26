import React from "react";
import { useRouter } from "next/router";
import useId from "../../hooks/useId";
import { useDispatch } from "react-redux";
import { addCart } from "../../actions";
import Navbar from "../../components/Navbar";



function Details() {
<<<<<<< HEAD
    const dispatch = useDispatch()
    const router = useRouter()
    const { Details } = router.query
    const { product, review } = useId(Details)
    console.log(review)
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
                            <p>{product?.description}</p>
                            <p>Stock:{product?.stock}</p>
                            <div className="justify-center card-actions">
                                <button className="btn btn-primary" onClick={() => dispatch(addCart({
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

                    <div className="flex flex-col w-full justify-center align-middle pt-5">
                        <div className="grid card bg-red-100 rounded-box place-items-center p-3">

                            <div className="grid grid-cols-2 align-middle">
                                {review.msg === 'El prodcuto no tiene reviews' ? "This product hasn't been reviewed yet" : review.reviews?.map(r => (
                                    <div className="my-2 ml-2">
                                        <div className="max-w-sm rounded-sm border border-gray-200 bg-white shadow-lg">
                                            <div className="text-right p-4">
                                                <span className="text-xs text-gray-500 tracking-widest uppercase">few weeks ago</span>
                                            </div>

                                            <div className="flex items-center relative mb-10">
                                                <div className="border-t border-gray-200 z-20 w-full"></div>

                                            </div>
                                            <div className="px-8 pb-4">
                                                <h2 className="text-gray-800 text-xl font-bold">Featuring Gabo</h2>
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

=======
  const dispatch = useDispatch();
  const router = useRouter();
  const { Details } = router.query;
  const { product } = useId(Details);
  return (
    <div>
      <Navbar />
      <div className="flex justify-evenly m-10">
      
            {" "}
            {/*   flex justify-center */}
            <div>
              <div className="flex content-center card w-96 border border-red-700">
                <figure>
                  <img src={product?.picture} className="h-96 w-full " />
                </figure>
                <div className="card-body ">
                  <h2 className="card-title">
                    {" "}
                    {product?.name}
                    <div className="badge mx-2 badge-primary">Wine</div>
                  </h2>
                  <p>{product?.description}</p>
                  <p>Stock:{product?.stock}</p>
                  <div className="justify-center card-actions">
                    <button
                      className="btn btn-primary"
                      onClick={() =>
                        dispatch(
                          addCart({
                            priceDis: product.price,
                            name: product.name,
                            img: product.picture,
                            id: product.id,
                            q: 1,
                          })
                        )
                      }
                    >
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex p-10">
              <div className="flex flex-col w-full justify-center align-middle">
                <div className="grid h-20 card bg-red-100 rounded-box place-items-center">
                  <h6>Category: Red</h6>
                  <h6>Brand: Vino</h6>
                  <h6>Tag: Merlot</h6>
                </div>
                <div className="divider">Making of the wine</div>
                <div className="grid card bg-red-100 rounded-box place-items-center">
                  <p>
                    Grapes were harvested in the early morning hours to ensure
                    the fruit arrived at the winery at cool temperatures. We
                    pressed the grapes as whole clusters and allowed the juice
                    to settle for 24 hours before a gentle gravity transfer to
                    French Oak barrels. After 100% native yeast fermentation,
                    the wine continued to mature in-barrels: 100% French oak,
                    20% new for 14 months to allow the true expression of the
                    vintage and varietal to stand out
                  </p>
                </div>
              </div>
            </div>
          </div>
>>>>>>> 3619edd1f8303ee98f79d48d3734eb64f2fbe241
        </div>
      
  );
}

export default Details;
