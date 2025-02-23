import HeaderSwiper from "../Header/Swiper";
import OurClient from "../OurClients/ourClient";
import ProductSection from "../OurProductSection/OurProductSection";

function OurProductsPage() {
  return (
    <>
    <div className="w-full flex flex-col items-center mt-20 lg:mb-10 mb-20">
            <div className="flex items-center w-full max-w-7xl px-4">
            <h2 className="mx-4 text-5xl  text-gray-800 font-[gurajada] ml-10">Our Products</h2>

            </div>

            <div className="mt-12 grid lg:grid-cols-3 grid-cols-2 md:grid-cols-3 xl:gap-16 gap-x-6 gap-y-16 w-full max-w-7xl px-12">
    {[
        { img: "img1.jpeg", title: "آلة تنظيف السبانخ التجارية للبيع" },
        { img: "img5.jpeg", title: "آلة تنظيف السبانخ التجارية للبيع" },
        { img: "img6.jpeg", title: "آلة تنظيف السبانخ التجارية للبيع" },
        { img: "img2.jpeg", title: "غسالة الخضار / موز تفاح خضار فواكه ساعة آلة تنظيف البنجر للبيع" },
        { img: "img3.jpeg", title: "آلة تنظيف غسالات الثوم المقشر التجارية" },
        { img: "img4.jpeg", title: "آلة تنظيف غسالة الهواء فقاعة الذرة الحلوة السعر" },
    ].map((item, index) => (
        <div
        key={index}
        className=" flex flex-col justify-between items-center h-full "
        >
        <img src={item.img} className="rounded-3xl xl:rounded-[40px]  shadow-[2px_2px_40px_2px_rgba(0,0,0,0.25)]" />
        <p className="text-center font-bold pt-3 flex-grow">{item.title}</p>
        <div className="w-full flex justify-center mt-6">
            <div className="bg-[#1D2736]  rounded-full xl:rounded-[45px] w-[10rem] text-white text-center px-4 py-2 xl:px-8 xl:py-2">
            More Details
            </div>
        </div>
        </div>
    ))}
    </div>

        </div>  </>
  );
}

export default OurProductsPage;
