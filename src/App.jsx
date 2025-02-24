import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import BottomBar from "./components/BottomBar/BottomBar";
import Footer from "./components/Footer/Footer";
import HeaderSwiper from "./components/Header/Swiper";
import NavBar from "./components/navbar/NavBar";
import OurClient from "./components/OurClients/ourClient";
import ProductSection from "./components/OurProductSection/OurProductSection";
import Home from "./components/Pages/Home"
import ProductsPage from "./components/Pages/ProductsPage";
import CategoryPage from "./components/Pages/Category";
import ProductImgSwiper from "./components/SignleProduct/ProductsImgSwiper";
import ProductsDetails from "./components/SignleProduct/ProductsDetails";
import ContactUsForm from "./components/Pages/ContactUsPage";
import AboutUs from "./components/AboutUs/AboutUs";
function App() {
  return (
    <Router>
    <div className="!bg-[#EEE]">
      <NavBar />
      <BottomBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<CategoryPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/product-details/:id" element={<ProductsDetails />} />
        <Route path="/contactus" element={<ContactUsForm />} />
        <Route path="/about" element={<AboutUs />} />

      </Routes>
      <Footer />
    </div>
  </Router>

  );
}

export default App;
