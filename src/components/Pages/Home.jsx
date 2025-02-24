import HeaderSwiper from "../Header/Swiper";
import OurClient from "../OurClients/ourClient";
import ProductSection from "../OurProductSection/OurProductSection";
import { useState, useEffect } from "react";
import axios from "axios"
function Home() {


  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/home", {
          withCredentials: true, // Allows cookies/session handling if needed
        });
        setData(response.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);
  return (
    <>
     <HeaderSwiper/>
`      <ProductSection/>
    </>
  );
}

export default Home;
