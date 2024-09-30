const Hero = () => {
  return (
    <section className="text-white flex justify-between mt-28 max-md:mt-10 max-sm:mt-0 flex-wrap max-xl:justify-center">
      <div className="w-[1000px] h-full py-5 pl-16 max-sm:pl-4 pr-5 flex justify-center items-center">
        <div className="h-[60vh] flex flex-col justify-center max-lg:items-center">
          <h3 className="text-4xl font-googleSans max-sm:text-[28px]">Welcome to</h3>
          <h1 className="text-[70px] max-lg:text-[70px] max-md:text-[50px] max-sm:text-[30px] font-semibold font-googleSans tracking-wider">
            Pop Rock Crystal Shop!
          </h1>
          <p className="text-xl mt-12 pr-96 max-lg:pr-0 max-sm:text-lg text-black font-thin font-googleSansLight opacity-90">
            Here you will find unique phone accessories, crystals, jewelry and more. Free shipping inside the U.S. and our phone grips come with a limited warranty. Enjoy!
          </p>
          <div className="flex mt-8 gap-12 max-sm:gap-4 items-center">
            <a href="#">
              <button className="bg-white text-[#227493] py-4 px-12 max-sm:px-5 max-sm:py-2 rounded-2xl text-lg max-sm:text-base font-googleSans hover:bg-gray-200">
                SHOP NOW
              </button>
            </a>
            <a href="#">
              <button className="bg-transparent text-xl text-[#227493] font-googleSansLight font-semibold hover:underline">
                About Us
              </button>
            </a>
          </div>
        </div>
      </div>
      <div className="w-[400px] px-12 max-sm:px-2 z-50 flex justify-end max-[1300px]:justify-center max-[1300px]:w-full">
        <div className="flex flex-col items-center relative">
          <span className="absolute text-white bg-[#8A93E5] font-googleSans text-[16px] max-sm:text-[14px] tracking-wide py-3 max-sm:py-2 left-0 max-sm:left-0 top-20 max-xl:top-36 max-sm:top-28 px-8 max-sm:px-4 rounded-r-2xl">
            New lot
          </span>

          <div className="bg-white flex flex-col justify-center items-center h-[80vh] max-md:h-[70vh] max-sm:h-[50vh] w-[36vw] max-xl:w-[50vw] max-lg:w-[60vw] max-md:w-[70vw] max-sm:w-[80vw] max-xl:mt-12 rounded-[60px] shadow-2xl">
            <img
              src="/hero-image.png"
              alt="Featured product: Crystal Agate Phone Grip"
              width={350}
              height={400}
              className="hover:scale-110 transition-all cursor-pointer max-md:h-[400px] max-md:w-[450px] max-sm:h-[250px] max-sm:w-[250px]"
            />
            <div className="flex flex-col items-center mt-12 max-sm:mt-0">
              <hr className="bg-[#F2F2F2] h-[2px] w-36 mb-2 rounded-xl" />
              <p className="text-black text-xl z-30 uppercase font-googleSansLight font-semibold tracking-wider max-sm:text-sm">
                <span className="opacity-50">Crystal Agate Phone Grip</span>
                <span className="text-[#227493] font-googleSans font-extrabold"> - $18.99</span>
              </p>
            </div>
          </div>
          <div className="flex justify-center mt-8">
            <img src="/slider.png" alt="Product slider" width={330} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
