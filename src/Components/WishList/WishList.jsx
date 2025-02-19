import { useContext } from "react";
import { WishContext } from "../../Context/WishContext";
import { RotatingLines } from "react-loader-spinner";

const WishList = () => {
    const { products, loading, removeItem } = useContext(WishContext);

    if (loading) {
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
    }

    return (
        <div className="mx-auto md:w-[90%] p-5 mt-5 bg-slate-200">
            {products?.length === 0 ? (
                <h1 className="text-center text-3xl font-bold text-blue-700 py-5">
                    No Data To Display It
                </h1>
            ) : (
                <>
                    <h1 className="font-bold text-4xl text-[#0B50B9] mb-3">My Wish List</h1>
                    <div className="parent mt-3">
                        {products?.map(function (item, idx) {
                            const { imageCover, title, price } = item;
                            return (
                                <div
                                    key={idx}
                                    className="flex flex-wrap justify-center items-center pb-3 border-b-[1px] border-slate-500 border-dotted"
                                >
                                    <div className="w-1/6 p-4">
                                        <div>
                                            <img src={imageCover} className="w-full" alt={title} />
                                        </div>
                                    </div>
                                    <div className="w-4/6 p-4">
                                        <h2 className="text-3xl font-bold">{title.split(" ").splice(0, 2).join(" ")}</h2>
                                        <h3 className="my-3 text-[#0B50B9]">Price: {price} EGP</h3>
                                        <button
                                            onClick={() => removeItem(item._id)}
                                            className="text-white bg-red-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-[#0B50B9] dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                                        >
                                            <i className="fa-regular fa-trash-can m-1"></i>
                                            Remove
                                        </button>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </>
            )}
        </div>
    );
};

export default WishList;