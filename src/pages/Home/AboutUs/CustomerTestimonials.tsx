import React from 'react';

const testimonials = [
  {
    name: 'Alice Johnson',
    feedback: 'The quality of the fitness equipment is outstanding. It has made my workouts so much more effective and enjoyable.',
    imageUrl: 'https://via.placeholder.com/150'
  },
  {
    name: 'Mark Thompson',
    feedback: 'Excellent customer service and fast delivery. The accessories I purchased are top-notch and very durable.',
    imageUrl: 'https://via.placeholder.com/150'
  },
  {
    name: 'Emily Clark',
    feedback: 'I love the innovative features of the products. They’ve really helped me stay motivated and track my progress.',
    imageUrl: 'https://via.placeholder.com/150'
  }
];

const CustomerTestimonials = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-gray-800 text-center mb-8">Customer Testimonials</h2>
        <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-2">
          {testimonials.map((testimonial, i) => (
            <section key={i} className="px-2 py-10 md:px-0">
            <div className="mx-auto max-w-4xl">
              <div className="md:flex md:items-center md:justify-center md:space-x-14">
                <div className="relative h-48 w-48 flex-shrink-0">
                  <img
                    className="relative h-48 w-48 rounded-full object-cover"
                    src={testimonial.imageUrl}
                    alt={testimonial.name}
                  />
                </div>
      
                <div className="mt-10 md:mt-0">
                  <blockquote>
                    <p className="text-xl text-black">
                      {testimonial.feedback}
                    </p>
                  </blockquote>
                  <p className="mt-7 text-lg font-semibold text-black"> {testimonial.name} </p>
                </div>
              </div>
            </div>
          </section>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomerTestimonials;
