
// carosel css 
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

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

function App() {

  return (
    <div className="App bg-white">
    
      <Routes>
        {/* default route  */}
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/dashboard" element={<Dashboard></Dashboard>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/singUp" element={<SingUp></SingUp>}></Route>
        <Route path="/singleproduct" element={<SingleProduct></SingleProduct>}></Route>
        {/* categories routes */}
        <Route path="arabic" element={<ArabicFurniture></ArabicFurniture>}></Route>
        <Route path="office" element={<OfficeFurniture></OfficeFurniture>}></Route>
        <Route path="homes" element={<HomeFurniture></HomeFurniture>}></Route>
        <Route path="services" element={<OurService></OurService>}></Route>


        {/* wrong route  */}
        <Route path="*" element={<NotFoundPage></NotFoundPage>}></Route>
      </Routes>
    </div>
  );
}

export default App;
