import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"



const CustomerTestimonials = () => {
  return (
    <section className="py-16 px-5 md:px-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-gray-800 text-center mb-8">Customer Testimonials</h2>
        

        <Carousel className="w-full">
        <CarouselContent className="-ml-1 gap-5">
          {testimonials.map((testimonial, i) => (
            <CarouselItem key={i} className="-ml-4 md:basis-1/2 lg:basis-1/3">
            <section className="bg-gray-100 py-4">
            <div className=" mx-auto">
              <div className="flex flex-col items-center w-full space-y-8 rounded-md lg:h-full p-2 lg:p-4 dark:bg-gray-50 dark:text-gray-800">
                <img src={testimonial.imageUrl} alt="" className="size-40 rounded-full dark:bg-gray-500 border-4 border-rose-700" />
                <blockquote className="max-w-lg text-lg italic font-medium text-center">"Et, dignissimos obcaecati. Recusandae praesentium doloribus vitae? Rem unde atque mollitia!"</blockquote>
                <div className="text-center dark:text-gray-600">
                  <p className="text-lg">Leroy Jenkins</p>
                </div>
                
              </div>
            </div>
          </section>
          </CarouselItem>
          ))}
          </CarouselContent>
      <CarouselPrevious className="-mr-10 bg-slate-950 text-white" />
      <CarouselNext className="bg-slate-950 text-white"/>
    </Carousel>
      </div>
    </section>
  );
};

export default CustomerTestimonials;


const testimonials = [
  {
    name: 'Alice Johnson',
    feedback: 'The quality of the fitness equipment is outstanding. It has made my workouts so much more effective and enjoyable.',
    imageUrl: 'https://i.ibb.co/YDxP7Jd/jonathan-borba-9-Mmy-SMZ42-PI-unsplash.jpg'
  },
  {
    name: 'Mark Thompson',
    feedback: 'Excellent customer service and fast delivery. The accessories I purchased are top-notch and very durable.',
    imageUrl: 'https://i.ibb.co/XLR46Bg/omid-armin-89poi2a-VXX0-unsplash.jpg'
  },
  

  {
    name: 'Alice Johnson',
    feedback: 'The quality of the fitness equipment is outstanding. It has made my workouts so much more effective and enjoyable.',
    imageUrl: 'https://i.ibb.co/YDxP7Jd/jonathan-borba-9-Mmy-SMZ42-PI-unsplash.jpg'
  },
  {
    name: 'Mark Thompson',
    feedback: 'Excellent customer service and fast delivery. The accessories I purchased are top-notch and very durable.',
    imageUrl: 'https://i.ibb.co/XLR46Bg/omid-armin-89poi2a-VXX0-unsplash.jpg'
  },
  {
    name: 'Emily Clark',
    feedback: 'I love the innovative features of the products. They’ve really helped me stay motivated and track my progress.',
    imageUrl: 'https://i.ibb.co/wRYsH7H/Screenshot-1.png'
  }
];