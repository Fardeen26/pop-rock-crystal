import { FaSortDown } from "react-icons/fa";
import Card from "./Card";

const Products = () => {
  // Create an array for rendering product cards
  const cardCount = Array.from({ length: 8 });

  return (
    <div className="px-12 max-[1300px]:px-8 max-lg:px-4 max-sm:px-4">
      
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-6xl max-sm:text-4xl text-center font-googleSans text-[#31546D] font-semibold tracking-wider">
          All Products
        </h1>
        <hr className="bg-[#F2F2F2] h-1 w-24 mt-6 rounded-xl" />
      </div>

      <div className="flex text-xl gap-24 max-sm:gap-4 mt-16 max-xl:justify-center max-sm:flex-col">
        <div className="flex gap-2 items-center">
          <span className="opacity-50 font-googleSans text-[#31546D] font-bold">
            Filter:
          </span>
          <div className="flex items-center gap-2 font-googleSans text-[#31546D] tracking-widest text-lg font-bold">
            All Products <FaSortDown />
          </div>
        </div>

        <div className="flex gap-2 items-center">
          <span className="opacity-50 font-googleSans text-[#31546D] font-bold">
            Sort:
          </span>
          <div className="flex items-center gap-2 font-googleSans text-[#31546D] tracking-widest text-lg font-bold">
            Best Selling <FaSortDown />
          </div>
        </div>
      </div>

      {/* Product Cards Grid */}
      <div className="flex mt-20 flex-wrap gap-4 max-lg:gap-4 max-md:gap-y-5 max-[1300px]:justify-center">
        {cardCount.map((_, index) => (
          <Card key={index} />
        ))}
      </div>

      <div className="flex justify-center mt-20">
        <button className="bg-transparent border-[#75CCEB] text-[#75CCEB] border-[3px] py-3 px-10 rounded-2xl text-base font-semibold hover:bg-[linear-gradient(to_right,#75CCEB,#6DB4FF)] hover:text-white transition-all">
          View All
        </button>
      </div>
      
    </div>
  );
};

export default Products;
