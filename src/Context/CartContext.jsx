import axios from "axios"
import { createContext, useContext, useEffect, useState } from "react"
import { AuthContext } from "./AuthContext"





export const CartContext = createContext()

const CartContextProvider = ({ children }) => {

    const { token } = useContext(AuthContext)

    const [products, setProducts] = useState([])
    const [numOfItems, setNumOfItems] = useState(0)
    const [totalPrice, setTotalPrice] = useState(0)
    const [loading, setLoading] = useState(false)
    const [cartId, setCartId] = useState(null)


    // Add to cart

    async function addProductToCart(id) {
        try {
            const { data } = await axios.post("https://ecommerce.routemisr.com/api/v1/cart",
                {
                    productId: id
                },
                {
                    headers: {
                        token: localStorage.getItem('token')
                    }
                }
            )
            getUserCart()
            return data
        } catch (error) {
            console.log(error, "error from add product to cart from context");


        }
    }

    //get user cart

    async function getUserCart() {

        setLoading(true)
        try {
            const { data } = await axios.get("https://ecommerce.routemisr.com/api/v1/cart", {
                headers: {
                    token: localStorage.getItem("token")
                }
            })

            setNumOfItems(data.numOfCartItems)
            setProducts(data.data.products)
            setTotalPrice(data.data.totalCartPrice)
            setLoading(false)
            setCartId(data?.data?._id)


        } catch (error) {
            console.log(error, "error from get all cart ");

            setLoading(false)
        }

    }


    // UpdateCount

    async function updateCount(id, count) {

        try {

            const { data } = await axios.put(`https://ecommerce.routemisr.com/api/v1/cart/${id}`, {

                count: count

            }, {
                headers: {
                    token: localStorage.getItem('token')
                }
            })
            setNumOfItems(data.numOfCartItems)
            setProducts(data.data.products)
            setTotalPrice(data.data.totalCartPrice)



        } catch (error) {
            console.log(error, "error from update count from cart context ");


        }
    }

    // remove item 

    async function removeItem(id) {
        try {
            const { data } = await axios.delete(`https://ecommerce.routemisr.com/api/v1/cart/${id}`,
                {
                    headers: {
                        token: localStorage.getItem('token')
                    }
                }
            )

            setNumOfItems(data.numOfCartItems)
            setProducts(data.data.products)
            setTotalPrice(data.data.totalCartPrice)


        } catch (error) {
            console.log(error, "error from remove item from cart context ");


        }
    }

    // Clear All Cart

    async function clearCart() {

        try {
            const { data } = axios.delete(`https://ecommerce.routemisr.com/api/v1/cart`, {
                headers: {
                    token: localStorage.getItem('token')
                }
            })

            setNumOfItems(0)
            setProducts([])
            setTotalPrice(0)

        } catch (error) {
            console.log(error, "Error from clear cart from cart context ");

        }
    }

    useEffect(function () {
        if (token != null) {
            getUserCart()
        }

    }, [token])


    return (
        <CartContext.Provider value={
            {
                addProductToCart,
                products,
                numOfItems,
                totalPrice,
                loading,
                updateCount,
                removeItem,
                clearCart,
                cartId,
                setNumOfItems,
                setProducts,
                setTotalPrice
            }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider