import ProductImgSwiper from "./ProductsImgSwiper";

function SimilarProducts() {
    return (
        <>
            <div className="w-full flex flex-col items-center mt-20 lg:mb-10 mb-20">
                <div className="flex items-center w-full max-w-7xl px-4">
                    <div className="flex-grow border-t border-gray-400"></div>
                    <h2 className="mx-4 text-5xl  text-gray-800 font-[gurajada]">Similar Products</h2>
                    <div className="flex-grow border-t border-gray-400"></div>

                </div>

                <div className="mt-12 grid lg:grid-cols-3  sm:grid-cols-2 grid-cols-1  gap-16 w-full max-w-7xl px-12">
                    {[
                        { img: "img1.jpeg", title: "آلة تنظيف السبانخ التجارية للبيع" },
                        { img: "img5.jpeg", title: "آلة تنظيف السبانخ التجارية للبيع" },
                        { img: "img6.jpeg", title: "آلة تنظيف السبانخ التجارية للبيع" },
                      
                    ].map((item, index) => (
                        <div
                            key={index}
                            className=" flex flex-col justify-between items-center h-full "
                        >
                            <img src={item.img} className="rounded-3xl xl:rounded-[40px] shadow-[2px_2px_40px_2px_rgba(0,0,0,0.25)]" />
                            <p className="text-center font-bold pt-3 flex-grow">{item.title}</p>
                            <div className="w-full flex justify-center mt-6">
                                <div className="bg-[#1D2736]  rounded-full xl:rounded-[45px] w-[10rem] text-white text-center px-4 py-2 xl:px-8 xl:py-2">
                                    More Details
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="w-full max-w-7xl px-12 flex justify-center mt-10 ">
          <div className="border-[#1D2736] border-[1px] cursor-pointer ] 
          rounded-[45px] w-[10rem]  transition-all duration-300 text-black hover:text-white hover:bg-[#1D2736] text-center px-8 text-[16px] py-2 hover:scale-110">
          <p className="text-center">Show More</p> 
          </div>
        </div>
            </div>
        </>
    );
}

export default SimilarProducts;

