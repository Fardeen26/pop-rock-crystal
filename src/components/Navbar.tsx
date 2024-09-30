const Navbar = () => {
  return (
    <nav className="w-full text-white flex justify-between items-center pb-3 pt-16 px-12 max-sm:px-4 h-20">
      
      <div className="w-[47%] cursor-pointer">
        <a href="#" aria-label="Home">
          <img
            src="/logo.png"
            alt="Brand Logo"
            height={200}
            width={200}
            className="max-sm:w-[200px]"
          />
        </a>
      </div>

      <div className="w-[30%] max-sm:hidden">
        <ul className="flex gap-14 text-lg cursor-pointer">
          <li className="hover:text-black transition-colors duration-200">
            <a href="#">Home</a>
          </li>
          <li className="hover:text-black transition-colors duration-200">
            <a href="#">Shop</a>
          </li>
          <li className="hover:text-black transition-colors duration-200">
            <a href="#">About Us</a>
          </li>
          <li className="hover:text-black transition-colors duration-200">
            <a href="#">Help</a>
          </li>
        </ul>
      </div>

      <div className="cursor-pointer">
        <a href="#" aria-label="Shopping Cart">
          <img
            src="/cart-logo.png"
            alt="Cart"
            width={60}
            height={60}
            className="max-sm:w-[50px]"
          />
        </a>
      </div>
      
    </nav>
  );
};

export default Navbar;
