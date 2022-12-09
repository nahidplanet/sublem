
// carosel css 
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Route, Routes } from 'react-router';
import './App.css';
import Home from './components/Pages/Home/Home';
import NotFoundPage from "./components/Shared/NotFoundPage";

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

// category product page 
import RequireAuth from "./components/Shared/RequireAuth";
import AllHomeFurniture from "./components/Pages/ProductCategory/HomeFurniture/AllHomeFurniture";
import HomeBed from "./components/Pages/ProductCategory/HomeFurniture/HomeBed";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import HomeCurtains from "./components/Pages/ProductCategory/HomeFurniture/HomeCurtains";
import HomeCarpets from "./components/Pages/ProductCategory/HomeFurniture/HomeCarpets";
import HomeSofa from "./components/Pages/ProductCategory/HomeFurniture/HomeSofa";
import HomeWallpaper from "./components/Pages/ProductCategory/HomeFurniture/HomeWallpaper";
import HomeBedMattress from "./components/Pages/ProductCategory/HomeFurniture/HomeBedMattress";
import AllOfficeFurniture from "./components/Pages/ProductCategory/OfficeFurniture/AllOfficeFurniture";
import OfficeCurtains from "./components/Pages/ProductCategory/OfficeFurniture/OfficeCurtains";
import OfficeCarpets from "./components/Pages/ProductCategory/OfficeFurniture/OfficeCarpets";
import OfficeSofa from "./components/Pages/ProductCategory/OfficeFurniture/OfficeSofa";
import OfficeWallpaper from "./components/Pages/ProductCategory/OfficeFurniture/OfficeWallpaper";
import OfficeBed from "./components/Pages/ProductCategory/OfficeFurniture/OfficeBed";
import OfficeBedMattress from "./components/Pages/ProductCategory/OfficeFurniture/OfficeBedMattress";
import AllArabicFurniture from "./components/Pages/ProductCategory/ArabicFurniture/AllArabicFurniture";
import ArabicCurtains from "./components/Pages/ProductCategory/ArabicFurniture/ArabicCurtains";
import ArabicCarpets from "./components/Pages/ProductCategory/ArabicFurniture/ArabicCarpets";
import ArabicSofa from "./components/Pages/ProductCategory/ArabicFurniture/ArabicSofa";
import ArabicWallpaper from "./components/Pages/ProductCategory/ArabicFurniture/ArabicWallpaper";
import ArabicBed from "./components/Pages/ProductCategory/ArabicFurniture/ArabicBed";
import ArabicBedMattress from "./components/Pages/ProductCategory/ArabicFurniture/ArabicBedMattress";
import ServiceCabinet from "./components/Pages/ProductCategory/OurService/ServiceCabinet";
import ServiceGypsum from "./components/Pages/ProductCategory/OurService/ServiceGypsum";
import ServicePanting from "./components/Pages/ProductCategory/OurService/ServicePanting";
import AllService from "./components/Pages/ProductCategory/OurService/AllService";


function App() {

  return (
    <div className="App bg-white">
      <Header></Header>
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


        {/* home category  */}
        <Route path="/home-category" element={<AllHomeFurniture></AllHomeFurniture>}></Route>
        <Route path="home-category/curtains" element={<HomeCurtains></HomeCurtains>}></Route>
        <Route path="home-category/carpets" element={<HomeCarpets></HomeCarpets>}></Route>
        <Route path="home-category/sofa" element={<HomeSofa></HomeSofa>}></Route>
        <Route path="home-category/wallpaper" element={<HomeWallpaper></HomeWallpaper>}></Route>
        <Route path="home-category/bed" element={<HomeBed></HomeBed>}></Route>
        <Route path="home-category/bed_mattress" element={<HomeBedMattress></HomeBedMattress>}></Route>
        <Route path="home-category/sofa" element={<HomeSofa></HomeSofa>}></Route>
        {/* office category  */}
        <Route path="office-category" element={<AllOfficeFurniture></AllOfficeFurniture>}></Route>
        <Route path="office-category/curtains" element={<OfficeCurtains></OfficeCurtains>}></Route>
        <Route path="office-category/carpets" element={<OfficeCarpets></OfficeCarpets>}></Route>
        <Route path="office-category/sofa" element={<OfficeSofa></OfficeSofa>}></Route>
        <Route path="office-category/wallpaper" element={<OfficeWallpaper></OfficeWallpaper>}></Route>
        <Route path="office-category/bed" element={<OfficeBed></OfficeBed>}></Route>
        <Route path="office-category/bed_mattress" element={<OfficeBedMattress></OfficeBedMattress>}></Route>
        {/* arabic category  */}
        <Route path="arabic-category/" element={<AllArabicFurniture></AllArabicFurniture>}></Route>
        <Route path="arabic-category/curtains" element={<ArabicCurtains></ArabicCurtains>}></Route>
        <Route path="arabic-category/carpets" element={<ArabicCarpets></ArabicCarpets>}></Route>
        <Route path="arabic-category/sofa" element={<ArabicSofa></ArabicSofa>}></Route>
        <Route path="arabic-category/wallpaper" element={<ArabicWallpaper></ArabicWallpaper>}></Route>
        <Route path="arabic-category/bed" element={<ArabicBed></ArabicBed>}></Route>
        <Route path="arabic-category/bed_mattress" element={<ArabicBedMattress></ArabicBedMattress>}></Route>
        {/* service category  */}
        <Route path="service-category/" element={<AllService></AllService>}></Route>
        <Route path="service-category/cabinets" element={<ServiceCabinet></ServiceCabinet>}></Route>
        <Route path="service-category/gypsum" element={<ServiceGypsum></ServiceGypsum>}></Route>
        <Route path="service-category/painting" element={<ServicePanting></ServicePanting>}></Route>
        {/* wrong route  */}
        <Route path="*" element={<NotFoundPage></NotFoundPage>}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
