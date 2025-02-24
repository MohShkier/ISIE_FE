function ClientItem({ imgSrc, title }) {
    return (
        
        <div className="flex flex-col items-center bg-white rounded-[20px] xl:size-[15rem] shadow-[2px_2px_40px_2px_rgba(0,0,0,0.25)]">
            <img src={imgSrc} className="px-2 py-2 xl:px-3 xlpy-4" />
            <p className="text-center text-[#1D2736]  xl:text-[2rem] text-lg flex-grow flex items-center justify-center w-full">
                {title}
            </p>
        </div>
    );
}

export default ClientItem;
