import Benefit from "@/pages/Home/Benefit";
import Category from "@/pages/Home/CategorySection";
import Gallery from "@/pages/Home/Gallery";
import HeroSection from "@/pages/Home/HeroSection";
import FeaturedProducts from "@/pages/Home/Product/FeaturedProducts";


const MainLayout = () => {
  return (
    <>
    <HeroSection/>
     <Category/>
     <FeaturedProducts/>
     <Benefit/>
     <Gallery/>
     </>
  );
};

export default MainLayout;
