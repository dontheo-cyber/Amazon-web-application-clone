import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
  RouterProvider,
} from "react-router-dom";
import { productsData } from "./api/Api";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
// import Carts from "./pages/Carts";
import Checkout from "./pages/Checkout";
import Home from "./pages/Home";
import Registration from "./pages/Registration";
import Signin from "./pages/Signin";

const Layout =()=>{
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} loader={productsData}></Route>
        {/* <Route path="/carts" element={<Carts/>}></Route> */}

        
      </Route>
      <Route path="/signin" element={<Signin/>}></Route>
      <Route path="/registration" element={<Registration/>}></Route>
      <Route path="/checkout" element={<Checkout/>}></Route>

      </Route>
    )
  );
  return (
    <div className="font-bodyFont bg-gray-100">
<RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
