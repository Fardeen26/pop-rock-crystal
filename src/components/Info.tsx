import './info.css';
import { linearBg } from '../utils/LinearColor';

const Info = () => {
  return (
    <div className="relative h-screen max-xl:h-fit flex spacer2 layer2 max-xl:flex-wrap mt-16 max-xl:mt-12 pb-12">
      {/* Left Section */}
      <div className="w-[55%] flex items-center max-xl:w-full max-xl:justify-center">
        <div className="flex flex-col px-5 items-end max-xl:items-center">
          <h2 className="text-4xl font-googleSansLight text-[#31546D] font-semibold tracking-wide max-md:text-3xl">
            BEST PRICE
          </h2>
          <h1 className="text-[70px] max-md:text-[60px] max-sm:text-[40px] mt-2 font-googleSans text-[#31546D] font-bold tracking-wider">
            Agate Phone Grip
          </h1>
          <div className="flex gap-8 items-center mt-12 font-googleSans">
            <span className="text-3xl max-sm:text-3xl line-through text-[#75CCEB]">$44.50</span>
            <span className="text-6xl max-sm:text-5xl font-semibold text-[#E35B3E]">$19.50</span>
          </div>
          <p className="pl-72 max-xl:pl-0 max-xl:text-center text-end mt-6 text-lg text-[#31546D] font-googleSansLight max-sm:text-lg">
            These Pop Rock Crystal grip tops can be swapped with other tops depending on your mood, outfit, nails, phone case, holiday, etc.! Just gently squeeze the sides to remove and swap out with another color or design!
          </p>
          <a href="#">
            <button
              className="mt-12 py-4 px-12 rounded-2xl text-base font-semibold text-white transition-all"
              style={linearBg}
            >
              BUY NOW
            </button>
          </a>
        </div>
      </div>

      {/* Right Section - Circular Image Section */}
      <div className="w-[45%] flex justify-center items-center max-xl:w-full max-xl:mt-12 max-xl:mb-10">
        <div className="w-[700px] h-[700px] max-xl:w-[600px] max-xl:h-[600px] max-sm:h-[350px] max-sm:w-[350px] rounded-full flex justify-center items-center" style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)' }}>
          <div className="w-[550px] h-[550px] max-xl:w-[450px] max-xl:h-[450px] max-sm:h-[250px] max-sm:w-[250px] bg-white shadow-xl rounded-full flex justify-center items-center border">
            <div className="w-[350px] h-[350px] max-xl:w-[250px] max-xl:h-[250px] max-sm:h-[100px] max-sm:w-[100px] bg-white shadow-2xl rounded-full flex justify-center items-center border">
              <img
                src="/hero-image.png"
                alt="Agate Phone Grip"
                className="hover:scale-110 transition-all cursor-pointer w-72 h-w-72 max-sm:h-[80px] max-sm:w-[80px]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
