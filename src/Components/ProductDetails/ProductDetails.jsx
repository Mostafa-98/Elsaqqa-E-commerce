
import { useParams } from "react-router-dom"
import { useQuery } from "react-query"
import axios from "axios"
import { RotatingLines } from "react-loader-spinner"
import { useContext, useState } from "react"
import { CartContext } from "../../Context/CartContext"
import toast from "react-hot-toast"
import { WishContext } from "../../Context/WishContext"
const ProductDetails = () => {

    const { id } = useParams()
    const { addProductToCart } = useContext(CartContext)


    const { addProductToWishList } = useContext(WishContext)

    const [loader, setLoader] = useState(false)

    async function addToWishList() {
        setLoader(true)
        const data = await addProductToWishList(id)

        console.log(data);

        if (data.status == "success") {
            toast.success(data.message)
            setLoader(false)
        }
        else {
            toast.error("error ")
            setLoader(false)
        }

    }


    const [loading, setLoading] = useState(false)


    async function AddToCart() {
        setLoading(true)
        const data = await addProductToCart(id)

        if (data.status == "success") {
            toast.success(data.message)

            setLoading(false)
        }
        else {
            toast.error("error")
            setLoading(false)
        }

    }



    const { data, isLoading } = useQuery(`/productdetails/${id}`, getProductDetails)

    async function getProductDetails() {
        return await axios.get(`https://ecommerce.routemisr.com/api/v1/products/${id}`)
    }



    if (isLoading) return <div className="h-screen bg-[#1A56DB] flex flex-wrap justify-center items-center">
        <RotatingLines
            visible={true}
            height="96"
            width="96"
            color="red"
            strokeWidth="5"
            animationDuration="0.75"
            ariaLabel="rotating-lines-loading"
            wrapperStyle={{}}
            wrapperClass=""
        />


    </div>
    return (
        <div className="md:w-[80%] mx-auto ">
            <div className="flex  flex-wrap justify-center items-center">
                <div className="w-full md:w-1/3 p-5">
                    <div>
                        <img src={data.data.data.imageCover} className="w-full" alt="" />
                    </div>
                </div>
                <div className="md:w-2/3 p-5 ">
                    <div>
                        <h1 className="text-3xl font-bold text-center mb-3">{data.data.data.title}</h1>
                        <p className="mb-3">Desc</p>
                        <h3>category</h3>

                        <div className=" mb-3 mt-3 flex flex-wrap justify-between items-center">
                            <div>
                                <h3>{data.data.data.price} EGP</h3>
                            </div>
                            <div>
                                <i className="fa-solid fa-star text-yellow-300"></i> {data.data.data.ratingsAverage}
                            </div>

                        </div>

                        <button onClick={addToWishList} className="  text-white w-full bg-black hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-[#0B50B9] dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                            {loader ? <i className="fa-solid fa-spinner fa-spin text-white"></i> : "Add To Wish List "}
                        </button>

                        <button onClick={AddToCart} className="text-white w-full bg-[#0B50B9] hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-[#0B50B9] dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                            {loading ? <i className="fa-solid fa-spinner fa-spin text-white"></i> : "Add To Cart "}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetails