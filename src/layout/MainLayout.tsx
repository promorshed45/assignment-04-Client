import Category from "@/pages/Home/Category";
import HeroSection from "@/pages/Home/HeroSection";
import FeaturedProducts from "@/pages/Home/Product/FeaturedProducts";


const MainLayout = () => {
  return (
    <>
    <HeroSection/>
     <Category/>
     <FeaturedProducts/>
     </>
  );
};

export default MainLayout;
