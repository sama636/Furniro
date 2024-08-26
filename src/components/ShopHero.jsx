export default function ShopHero({ categoryId, categoryName }) {
    return(
        <div className="relative h-80 flex flex-col justify-center items-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('/src/assets/shop-hero-bg.jpeg')] bg-cover bg-center bg-no-repeat h-80 self-start opacity-50 filter blur-[1px]"></div>
            <h1 className="relative text-3xl lg:text-5xl lg:pb-4 font-medium leading-[72px] text-center text-black opacity-1">{categoryId ? categoryName : "Shop"}</h1>
            <p className="relative font-semibold lg:text-lg">Home {">"}  <span className="relative font-normal lg:text-lg">{categoryId ? categoryName : "Shop"}</span></p>
        </div>);
}

