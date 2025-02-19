import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";

export const WishContext = createContext();

const WishContextProvider = ({ children }) => {
    const { token } = useContext(AuthContext);

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);

    // Add to WishList
    async function addProductToWish(id) {
        try {
            const { data } = await axios.post(
                "https://ecommerce.routemisr.com/api/v1/wishlist",
                {
                    productId: id,
                },
                {
                    headers: {
                        token: localStorage.getItem("token"),
                    },
                }
            );
            getUserWish();
            return data;
        } catch (error) {
            console.log(error, "error from add product to wishlist from context");
        }
    }

    // Get user wishlist
    async function getUserWish() {
        setLoading(true);
        try {
            const { data } = await axios.get(
                "https://ecommerce.routemisr.com/api/v1/wishlist",
                {
                    headers: {
                        token: localStorage.getItem("token"),
                    },
                }
            );

            console.log("Wishlist data:", data.data); // تأكد من جلب البيانات
            setProducts(data.data);
            setLoading(false);
        } catch (error) {
            console.log(error, "error from get all wishlist ");
            setLoading(false);
        }
    }

    // Remove item from wishlist
    async function removeItem(id) {
        try {
            await axios.delete(
                `https://ecommerce.routemisr.com/api/v1/wishlist/${id}`,
                {
                    headers: {
                        token: localStorage.getItem("token"),
                    },
                }
            );

            // تحديث الحالة بعد حذف المنتج
            setProducts((prevProducts) =>
                prevProducts.filter((product) => product._id !== id)
            );
        } catch (error) {
            console.log(error, "error from remove item from wishlist context ");
        }
    }

    useEffect(() => {
        if (token != null) {
            getUserWish();
        }
    }, [token]);

    return (
        <WishContext.Provider
            value={{
                addProductToWish,
                products,
                loading,
                removeItem,
            }}
        >
            {children}
        </WishContext.Provider>
    );
};

export default WishContextProvider;