import video from '@/assets/image/video.mp4';
import slide2 from '@/assets/image/slider2.png';
import Autoplay from "embla-carousel-autoplay"


import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Link } from 'react-router-dom';
import { useRef } from 'react';

const HeroSection = () => {
  const plugin = useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })
  )

  return (
    <div className="w-full ">
      <Carousel 
      plugins={[plugin.current]}
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
      className="w-full">
        <CarouselContent>
        <CarouselItem>
            <section className="relative flex items-center h-screen">
              <video src={video} autoPlay muted loop className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent"></div>
              <div className="relative flex w-full h-full">
                <div className="flex flex-col justify-center p-8 md:p-16 w-full md:w-1/2 text-white z-10">
                  <div className='md:pl-10 space-y-10'>
                    <h1 className="text-6xl font-bold ">
                      Elevate Your <br />
                      <span className="text-red-500 py-20"> Fitness Journey </span>
                    </h1>
                    <p className="text-2xl"> Discover Premium Equipment and Accessories </p>
                    <Link to='/'>
                        <button className="my-10 inline-flex text-slate-950 cursor-pointer items-center text-base font-semibold white bg-gray-200 px-5 py-3.5 rounded-md">
                            Shop Now
                        </button>
                    </Link>
                    
                  </div>
                </div>
                <div className="hidden md:block md:w-1/2 h-full">
                  {/* Empty div for layout balance */}
                </div>
              </div>
            </section>
          </CarouselItem>

          <CarouselItem>
            <section className="relative flex items-center h-screen">
              <img src={slide2} alt="Descriptive Alt Text" className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent"></div>
              <div className="relative flex w-full h-full">
                <div className="flex flex-col justify-center p-8 md:p-16 w-full md:w-1/2 text-white z-10">
                  <div className='md:pl-10 space-y-10'>
                    <h1 className="text-6xl font-bold ">
                    Unleash Your  <br />
                      <span className="text-red-500 py-20"> Inner Athlete </span>
                    </h1>
                    <p className="text-2xl"> Top-Quality Gear for Ultimate Performance </p>
                    <Link to='/'>
                        <button className="my-10 inline-flex text-slate-950 cursor-pointer items-center text-base font-semibold white bg-gray-200 px-5 py-3.5 rounded-md">
                            Shop Now
                        </button>
                    </Link>
                    
                  </div>
                </div>
                <div className="hidden md:block md:w-1/2 h-full">
                  {/* Empty div for layout balance */}
                </div>
              </div>
            </section>
          </CarouselItem>
         
          
        </CarouselContent>
          
        <CarouselPrevious className='mx-auto ml-16 bg-rose-500 text-white border-none hover:text-rose-500'/>
        <CarouselNext className='mx-auto mr-16 bg-rose-500 text-white border-none hover:text-rose-500' />
      </Carousel>
    </div>
  );
};

export default HeroSection;