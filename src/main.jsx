import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import WishlistContext from "./components/WishlistContext.jsx"; // ✅ صح

import Root from "./pages/Root.jsx";
import HomePage from "./pages/Homepage.jsx";
import SignUp from "./pages/SignUp.jsx";
import Login from "./pages/Login.jsx";
import Wishlist from "./pages/WishList.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "signup", element: <SignUp /> },
      { path: "login", element: <Login /> },
      { path: "wishlist", element: <Wishlist /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <WishlistContext>
      <RouterProvider router={router} />
    </WishlistContext>
  </StrictMode>
);
