interface CardProps {
  title?: string;
  price?: number;
  imageUrl?: string;
  altText?: string;
  onBuyClick?: () => void;
}

const Card = ({ title, price, imageUrl, altText, onBuyClick }: CardProps) => {
  return (
    <div className="shadow-lg px-10 max-sm:px-6 py-12 max-sm:py-8 rounded-[40px] border hover:shadow-2xl transition-all cursor-pointer max-sm:w-full max-lg:px-16">
      <div className="flex justify-center">
        <img
          src={imageUrl}
          alt={altText}
          className="h-[30vh] w-[14vw] max-md:h-[40vh] max-md:w-[35vw] max-sm:w-[60vw] hover:scale-110 transition-all"
        />
      </div>
      <div className="flex flex-col items-center mt-4">
        <h2 className="text-xl max-sm:text-[22px] font-googleSansLight uppercase">
          {title}
        </h2>
        <p className="text-2xl font-bold text-[#227493]">{price}$</p>
      </div>
      <div className="flex justify-center mt-6">
        <button
          onClick={onBuyClick}
          className="bg-transparent border-[#75CCEB] text-[#75CCEB] border-4 py-3 px-12 rounded-2xl text-base font-semibold hover:bg-[linear-gradient(to_right,#75CCEB,#6DB4FF)] hover:text-white transition-all max-sm:px-8 max-sm:py-2 max-sm:text-base"
        >
          BUY NOW
        </button>
      </div>
    </div>
  );
};

Card.defaultProps = {
  title: 'Crystal Agate Phone Grip',
  price: 18.99,
  imageUrl: '/hero-image.png',
  altText: 'Phone grip product image',
  onBuyClick: () => alert('Purchase initiated!'),
};

export default Card;
