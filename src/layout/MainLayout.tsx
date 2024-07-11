import Benefit from "@/pages/Home/Benefit";
import Category from "@/pages/Home/Category";
import HeroSection from "@/pages/Home/HeroSection";
import ImageGallery from "@/pages/Home/ImageGallery";
import FeaturedProducts from "@/pages/Home/Product/FeaturedProducts";


const MainLayout = () => {
  return (
    <>
    <HeroSection/>
     <Category/>
     <FeaturedProducts/>
     <Benefit/>
     <ImageGallery/>
     </>
  );
};

export default MainLayout;
