import axios from "axios";
import { RotatingLines } from "react-loader-spinner";
import { useQuery } from "react-query";
import HomeSlider from "../HomeSlider/HomeSlider";
import CategorySlider from "../CategorySlider/CategorySlider";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import { useContext, useState, useEffect } from "react";
import { CartContext } from "../../Context/CartContext";
import { WishContext } from "../../Context/WishContext";

const Home = () => {
  const { addProductToCart } = useContext(CartContext);
  const { addProductToWish } = useContext(WishContext);

  const [loading, setLoading] = useState(false);
  const [clickedButtons, setClickedButtons] = useState(() => {
    const saved = localStorage.getItem("clickedButtons");
    return saved ? JSON.parse(saved) : {};
  });

  // Add To Cart
  async function AddToCart(id) {
    setLoading(true);
    const data = await addProductToCart(id);
    console.log(data);

    if (data.status == "success") {
      toast.success(data.message);
      setLoading(false);
    } else {
      toast.error("error");
      setLoading(false);
    }
  }

  // Add To Wish
  async function AddToWish(id) {
    setLoading(true);
    const data = await addProductToWish(id);
    console.log(data);

    if (data.status == "success") {
      toast.success(data.message);
      setLoading(false);
      setClickedButtons((prev) => {
        const newClickedButtons = { ...prev, [id]: true };
        localStorage.setItem("clickedButtons", JSON.stringify(newClickedButtons));
        return newClickedButtons;
      });
    } else {
      toast.error("error");
      setLoading(false);
    }
  }

  async function getAllProduct() {
    return await axios.get("https://ecommerce.routemisr.com/api/v1/products");
  }

  const { isLoading, error, data, isFetching, refetch } = useQuery(
    "product",
    getAllProduct,
    {
      refetchOnMount: false,
      enabled: false,
    }
  );

  if (isLoading)
    return (
      <div className="h-screen bg-[#1A56DB] flex flex-wrap justify-center items-center">
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
    );

  return (
    <>
      {data != null ? (
        ""
      ) : (
        <div className="h-screen flex justify-center items-center w-full bg-blue-600">
          <div className="w-[90%] mx-auto text-center ">
            {/* Home Slider */}
            {/* WellCome Page */}
            <h1 className="mb-5 text-6xl font-bold ">ELSAQA E-commerce</h1>
            <h3 className="text-2xl font-bold mb-5">Wellcome to my website</h3>

            <div className="inline-flex rounded-md shadow-xs" role="group">
              <button
                onClick={refetch}
                type="button"
                className="px-6 py-3.5 font-bold text-4xl text-black hover:bg-black hover:text-white h focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="md:w-[90%] mx-auto">
        <HomeSlider />

        <CategorySlider />

        <div className="flex flex-wrap justify-center items-center">
          {data?.data.data.map(function (product, idx) {
            return (
              <div key={idx} className="w-full sm:w-1/2 md:w-1/4 lg:w-1/6 p-4">
                <div className="p-3 group hover:shadow-blue-700 hover:shadow-2xl transition-shadow hover:ease-in rounded-lg">
                  <Link to={`/productdetails/${product._id}`}>
                    <img className="w-full" src={product.imageCover} alt="" />
                    <h2 className="mt-3 text-blue-500 ">
                      {product.category.name}
                    </h2>
                    <h3 className="mt-3">
                      {product.title.split(" ").splice(0, 2).join(" ")}
                    </h3>
                    <div className="mt-3 flex flex-wrap justify-between items-center">
                      <div>
                        <h3>{product.price} EGP</h3>
                      </div>
                      <div>
                        <i className="fa-solid fa-star text-yellow-300"></i>{" "}
                        {product.ratingsAverage}
                      </div>
                    </div>
                  </Link>

                  <button
                    onClick={function () {
                      AddToWish(product._id);
                    }}
                    className={`w-full my-3 text-end ${
                      clickedButtons[product._id] ? "text-red-500" : ""
                    }`}
                  >
                    <i className={`fa-solid fa-heart text-2xl ${clickedButtons[product._id] ? "text-red-500" : "text-black"}`}></i>
                  </button>

                  <button
                    onClick={function () {
                      AddToCart(product._id);
                    }}
                    type="button"
                    className="opacity-0 group-hover:opacity-100 text-white w-full mt-3 text-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm justify-center py-2.5 inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    <svg
                      className="w-3.5 h-3.5 text-center me-2"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 18 21"
                    >
                      <path d="M15 12a1 1 0 0 0 .962-.726l2-7A1 1 0 0 0 17 3H3.77L3.175.745A1 1 0 0 0 2.208 0H1a1 1 0 0 0 0 2h.438l.6 2.255v.019l2 7 .746 2.986A3 3 0 1 0 9 17a2.966 2.966 0 0 0-.184-1h2.368c-.118.32-.18.659-.184 1a3 3 0 1 0 3-3H6.78l-.5-2H15Z" />
                    </svg>
                    Buy now
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Home;