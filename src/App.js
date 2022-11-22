
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
import Developer from "./components/Pages/Developer/Developer";
import AddProduct from "./components/Pages/Developer/AddProduct";
import AllProduct from "./components/Pages/Developer/AllProduct";
import Orders from "./components/Pages/Developer/Orders";
import Delivered from "./components/Pages/Developer/Delivered";
import RunWay from "./components/Pages/Developer/RunWay";
import Role from "./components/Pages/Developer/Role";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Abc from "./components/Pages/others/Abc";

function App() {

  return (
    <div className="App bg-white">
      <Header></Header>
      <Routes>
        {/* default route  */}
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/abc" element={<Abc></Abc>}></Route>
        {/* for admin */}
        <Route path="/developer" element={<Developer></Developer>}>
          <Route index element={<RunWay></RunWay>}></Route>
          <Route path="add-product" element={<AddProduct></AddProduct>}></Route>
          <Route path="all-product" element={<AllProduct></AllProduct>}></Route>
          <Route path="orders" element={<Orders></Orders>}></Route>
          <Route path="delivered" element={<Delivered></Delivered>}></Route>
          <Route path="role" element={<Role></Role>}></Route>
        </Route>


        {/* user dashboard  */}
        <Route path="/dashboard" element={<Dashboard></Dashboard>}>
          <Route index element={<Profile></Profile>}></Route>
          <Route path="profile" element={<Profile></Profile>}></Route>
          <Route path="wishlist" element={<WishList></WishList>}></Route>
          <Route path="order-history" element={<OrderHistory></OrderHistory>}></Route>
          <Route path="save-cart" element={<SaveCart></SaveCart>}></Route>
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
      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
