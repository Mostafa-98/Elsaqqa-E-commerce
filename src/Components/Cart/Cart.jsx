import { useContext } from "react"
import { CartContext } from "../../Context/CartContext"
import { RotatingLines } from "react-loader-spinner"
import { Link } from "react-router-dom"

const Cart = () => {

  const { products, totalPrice, loading, updateCount, removeItem, clearCart } = useContext(CartContext)

  console.log(products);


  if (loading) {

    return <div className="h-screen bg-[#1A56DB] flex flex-wrap justify-center items-center">
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
  }
  return (
    <div className="mx-auto md:w-[90%] p-5 mt-5 bg-slate-200">
      {products?.length == 0 ? <h1 className="text-center text-3xl font-bold text-blue-700 py-5"> No Data To Display It</h1> :

        <>

          <h1 className="font-bold text-2xl text-[#0B50B9] mb-3">Shop Cart :</h1>
          <h3 className="font-mono text-[#0B50B9]">Totla Price :{totalPrice} EGP </h3>

          <button onClick={clearCart} className="text-white mt-3 bg-red-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-[#0B50B9] dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
            <i className="fa-regular fa-trash-can m-1"></i>
            Clear  Cart
          </button>

          <Link to={'/payment'}  className="text-white mt-3 bg-[#0B50B9] hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-[#0B50B9] dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
            <i className="fa-regular fa-trash-can m-1"></i>
            Payment
          </Link>
          <div className="parent mt-3">

            {/* mapping  */}
            {products?.map(function (item, idx) {
              return <div key={idx} className=" flex flex-wrap justify-center items-center pb-3 border-b-[1px] border-slate-500 border-dotted">
                {/* img  */}
                <div className="w-1/6 p-4">
                  <div>
                    <img src={item.product.imageCover} className="w-full" alt="" />
                  </div>
                </div>
                {/* content  */}
                <div className="w-4/6 p-4">
                  <h2 className="text-3xl font-bold  ">{item.product.title} </h2>
                  <h3 className="my-3 text-[#0B50B9]">Price :{item.price} EGP</h3>


                  <button onClick={() => removeItem(item.product._id)} className="text-white  bg-red-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-[#0B50B9] dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                    <i className="fa-regular fa-trash-can m-1"></i>
                    Remove
                  </button>
                </div>
                {/* count  */}
                <div className="w-1/6 ">
                  <div className="inline-flex rounded-md shadow-xs">
                    <button onClick={() => updateCount(item.product._id, item.count + 1)} href="#" aria-current="page" className="px-4 py-2 text-sm font-medium text-blue-700 bg-white border border-gray-200 rounded-s-lg hover:bg-gray-100 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white">
                      +
                    </button>
                    <a href="#" className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border-t border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white">
                      {item.count}
                    </a>
                    <button onClick={() => updateCount(item.product._id, item.count - 1)} href="#" className="px-4 py-2 text-sm font-medium text-blue-700 bg-white border border-gray-200 rounded-e-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white">
                      -
                    </button>
                  </div>
                </div>
              </div>
            })}

          </div>
        </>
      }
    </div>
  )
}

export default Cart