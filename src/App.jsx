
import {  createHashRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Cart from './Components/Cart/Cart'
import Home from './Components/Home/Home'
import Category from './Components/Category/Category'
import Brand from './Components/Brand/Brand'
import Error from './Components/Error/Error'
import Login from './Components/Login/Login'
import Register from './Components/Register/Register'
import Layout from './Components/Layout/Layout'
import { Toaster } from 'react-hot-toast'
import AuthContextProvider from './Context/AuthContext'
import ProtectedRoute from './Components/ProtectedRoute/ProtectedRoute'
import { QueryClient, QueryClientProvider } from 'react-query'
import ProductDetails from './Components/ProductDetails/ProductDetails'
import CartContextProvider from './Context/CartContext'
import Payment from './Components/Payment/Payment'
import AllOrders from './Components/AllOrders/AllOrders'
import WishContextProvider from './Context/WishContext'
import WishList from './Components/WishList/WishList'
import ResetPassword from './Components/ResetPassword/ResetPassword'

function App() {

  const x = new QueryClient()

  const router = createHashRouter([

    {
      path: '', element: <Layout />, children: [
        { path: "/", element: <ProtectedRoute> <Home /> </ProtectedRoute> },
        { path: "/brand", element: <ProtectedRoute> <Brand />  </ProtectedRoute> },
        { path: "/cart", element: <ProtectedRoute> <Cart />  </ProtectedRoute> },
        { path: "/productdetails/:id", element: <ProtectedRoute> <ProductDetails />  </ProtectedRoute> },
        { path: "/category", element: <ProtectedRoute> <Category /> </ProtectedRoute> },
        { path: "/payment", element: <ProtectedRoute> <Payment /> </ProtectedRoute> },
        { path: "/allorders", element: <ProtectedRoute> <AllOrders /> </ProtectedRoute> },
        { path: "/wishlist", element: <ProtectedRoute> <WishList /> </ProtectedRoute> },

        { path: "*", element: <Error /> },
        { path: "login", element: <Login /> },
        { path: "resetpassword", element: <ResetPassword /> },
        { path: "/register", element: <Register /> },
      ]
    }



  ])





  return (
    <>


      <QueryClientProvider client={x}>
        <AuthContextProvider>
          <CartContextProvider>
            <WishContextProvider>
              <Toaster />
              < RouterProvider router={router} />
            </WishContextProvider>
          </CartContextProvider>
        </AuthContextProvider>
      </QueryClientProvider>

    </>
  )
}

export default App
