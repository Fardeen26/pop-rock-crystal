import Footer from './components/Footer';
import Hero from './components/Hero';
import Info from './components/Info';
import Navbar from './components/Navbar';
import Products from './components/Products';
import './App.css';

function App() {
  return (
    <>
      <div className="bg-[#75CCEB] relative h-fit pb-28 max-lg:pb-28 max-md:pb-20 max-sm:pb-20 spacer layer1">
        <Navbar />
        <Hero />
        <div className="flex justify-center mt-16 max-lg:mt-16 max-md:mt-12 max-sm:mt-8">
          <img src="/scroll.png" alt="Scroll to next section" width={150} />
        </div>
      </div>
      
      <Products />
      <Info />
      <Footer />
    </>
  );
}

export default App;
