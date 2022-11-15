
// carosel css 
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import { Route, Routes } from 'react-router';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Pages/Home/Home';

function App() {

  return (
    <div className="App bg-white">
      <Header ></Header>
      <Routes>
        <Route path="/" element={<Home ></Home>}></Route>
        <Route path="/about" element={<li>this is about</li>}></Route>
        <Route path="/contact" element={<li>this is contact</li>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
