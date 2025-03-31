import HeaderSwiper from "../Header/Swiper";
import OurClient from "../OurClients/ourClient";
import ProductSection from "../OurProductSection/OurProductSection";
import OurProductsPage from "../OurProductsPage/OurProductsPage";
import { useTranslation } from "react-i18next";
import { useLanguage } from '../../context/LanguageContext';
import { Link } from 'react-scroll';
function ProductsPage() {
  const { t } = useTranslation();
  const { language } = useLanguage();
  return (
    <>



      <OurProductsPage />
    </>

  );
}

export default ProductsPage;
