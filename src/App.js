
// carosel css 
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Route, Routes } from 'react-router';
import './App.css';
import Home from './components/Pages/Home/Home';
import NotFoundPage from "./components/Shared/NotFoundPage";

import ArabicFurniture from './components/Pages/ArabicFurniture/ArabicFurniture'
import OfficeFurniture from './components/Pages/OfficeFurniture/OfficeFurniture'
import HomeFurniture from './components/Pages/HomeFurniture/HomeFurniture'
import OurService from './components/Pages/OurService/OurService'
import Dashboard from "./components/Pages/Dashboard/Dashboard";
import Login from "./components/Shared/Login";
import SingUp from "./components/Shared/SingUp";
import SingleProduct from "./components/Pages/others/SingleProduct";

import Profile from "./components/Pages/Dashboard/Profile";
import WishList from "./components/Pages/Dashboard/WishList";
import OrderHistory from "./components/Pages/Dashboard/OrderHistory";
import SaveCart from "./components/Pages/Dashboard/SaveCart";

import AdminDashboard from "./components/Admin/AdminDashboard";
import AdminIndex from "./components/Admin/AdminIndex";
import AddProduct from "./components/Admin/AddProduct/AddProduct";
import AllProducts from "./components/Admin/AllProducts/AllProducts";
import Orders from "./components/Admin/Orders/Orders";
import Users from "./components/Admin/Users/Users";
import AdminLogin from "./components/Admin/AdminLogin/AdminLogin";
// import RequireAdmin from "./components/Admin/RequireAdmin";
import RequireAuth from "./components/Shared/RequireAuth";
// import Header from "./components/Header/Header";

function App() {

  return (
    <div className="App bg-white">
      {/* <Header></Header> */}

      <Routes>
        {/* default route  */}
        <Route path="/" element={<Home></Home>}></Route>

        {/* for admin panel  */}
        <Route path="/developer/login" element={<AdminLogin></AdminLogin>}></Route>
        {/* <Route path="/developer" element={<RequireAdmin><AdminDashboard></AdminDashboard></RequireAdmin>}>
          <Route index element={<RequireAdmin><AdminIndex></AdminIndex></RequireAdmin>}></Route>
          <Route path="add-product" element={<RequireAdmin><AddProduct></AddProduct></RequireAdmin>}></Route>
          <Route path="all-product" element={<RequireAdmin><AllProducts></AllProducts></RequireAdmin>}></Route>
          <Route path="all-order" element={<RequireAdmin><Orders></Orders></RequireAdmin>}></Route>
          <Route path="all-user" element={<RequireAdmin><Users></Users></RequireAdmin>}></Route>
        </Route> */}
        <Route path="/developer" element={<AdminDashboard></AdminDashboard>}>
          <Route index element={<AdminIndex></AdminIndex>}></Route>
          <Route path="add-product" element={<AddProduct></AddProduct>}></Route>
          <Route path="all-product" element={<AllProducts></AllProducts>}></Route>
          <Route path="all-order" element={<Orders></Orders>}></Route>
          <Route path="all-user" element={<Users></Users>}></Route>
        </Route>


        {/* user dashboard  */}
        <Route path="/dashboard" element={<RequireAuth><Dashboard></Dashboard></RequireAuth>}>
          <Route index element={<RequireAuth><Profile></Profile></RequireAuth>}></Route>
          <Route path="profile" element={<RequireAuth><Profile></Profile></RequireAuth>}></Route>
          <Route path="wishlist" element={<RequireAuth><WishList></WishList></RequireAuth>}></Route>
          <Route path="order-history" element={<RequireAuth><OrderHistory></OrderHistory></RequireAuth>}></Route>
          <Route path="save-cart" element={<RequireAuth><SaveCart></SaveCart></RequireAuth>}></Route>
        </Route>

        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/singup" element={<SingUp></SingUp>}></Route>
        <Route path="/single-product" element={<SingleProduct></SingleProduct>}></Route>


        {/* categories routes */}
        <Route path="arabic" element={<ArabicFurniture></ArabicFurniture>}></Route>
        <Route path="arabic/:id" element={<SingleProduct></SingleProduct>}></Route>
        <Route path="office" element={<OfficeFurniture></OfficeFurniture>}></Route>
        <Route path="homes" element={<HomeFurniture></HomeFurniture>}></Route>
        <Route path="services" element={<OurService></OurService>}></Route>
        {/* wrong route  */}
        <Route path="*" element={<NotFoundPage></NotFoundPage>}></Route>
      </Routes>
      {/* <Footer></Footer> */}
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
