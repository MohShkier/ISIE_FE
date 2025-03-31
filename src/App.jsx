import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer";
import NavBar from "./components/navbar/NavBar";
import Home from "./components/Pages/Home"
import ProductsPage from "./components/Pages/ProductsPage";
import CategoryPage from "./components/Pages/Category";
import ContactUsForm from "./components/Pages/ContactUsPage";
import AboutUs from "./components/AboutUs/AboutUs";
import ScrollToTop from "./components/ScrollToTop";
import CategoryDetails from "./components/Pages/CategoryDetails";
import ProductDetailsWrapper from "./components/SignleProduct/ProductDetailsWrapper";
import './i18n'; // Import the i18n configuration
import { LanguageProvider } from "./context/LanguageContext"; // Adjust path

function App() {
  return (
    <Router>
    <LanguageProvider>

    <ScrollToTop/>
    <div className="!bg-[#EEE]">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<CategoryPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/product-details/:id" element={<ProductDetailsWrapper />} />
        <Route path="/category-details/:id" element={<CategoryDetails />} />
        <Route path="/contactus" element={<ContactUsForm />} />
        <Route path="/about" element={<AboutUs />} />

      </Routes>
      <Footer />
    </div>
    </LanguageProvider>
  </Router>

  );
}

export default App;
