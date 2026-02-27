import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import WishlistContext from "./components/WishlistContext.jsx";
import CartContext from "./components/CartContext.jsx";
import Root from "./pages/Root.jsx";
import AuthLayout from "./pages/AuthLayout.jsx";
import HomePage from "./pages/Homepage.jsx";
import SignUp from "./pages/SignUp.jsx";
import Login from "./pages/Login.jsx";
import Wishlist from "./pages/WishList.jsx";
import Cart from "./pages/Cart.jsx";
import Checkout from "./pages/Checkout.jsx";
import Account from "./pages/Account.jsx";
import About from "./pages/About.jsx";

const router = createBrowserRouter([
  {
    element: <Root />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "wishlist", element: <Wishlist /> },
      { path: "cart", element: <Cart /> },
      { path: "checkout", element: <Checkout /> },
      { path: "account", element: <Account /> },
      { path: "About", element: <About /> },
    ],
  },
  {
    element: <AuthLayout />,
    children: [
      { path: "login", element: <Login /> },
      { path: "signup", element: <SignUp /> },
    ],
  },
]);

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <WishlistContext>
      <CartContext>
        <RouterProvider router={router} />
      </CartContext>
    </WishlistContext>
  </StrictMode>,
);
