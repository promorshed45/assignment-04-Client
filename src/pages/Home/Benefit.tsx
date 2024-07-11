import { Bolt, Heart, Layers } from "lucide-react";


const Benefit = () => {
    return (
            <section className="bg-gray-100 py-20">
              <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto text-center mb-12">
                  <h2 className="text-4xl font-bold text-gray-800 mb-4">Benefits of Our Fitness Equipment</h2>
                  <p className="text-xl text-gray-600">Discover why our equipment stands out and enhances your fitness journey.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {/* Benefit Item 1 */}
                  <div className="bg-white rounded-lg shadow-md p-6">
                    <div className="text-center mb-4">
                    <Heart className="size-16 mx-auto text-rose-600 mb-4" />
                      <h3 className="text-xl font-bold text-gray-800 mb-2">Enhanced Performance</h3>
                    </div>
                    <p className="text-gray-600">Our equipment is designed to enhance your performance, making every workout more effective and rewarding.</p>
                  </div>
        
                  {/* Benefit Item 2 */}
                  <div className="bg-white rounded-lg shadow-md p-6">
                    <div className="text-center mb-4">
                    <Bolt className="size-16 mx-auto text-rose-600 mb-4" />
                      <h3 className="text-xl font-bold text-gray-800 mb-2">Durable and Reliable</h3>
                    </div>
                    <p className="text-gray-600">Built with high-quality materials, our equipment is durable and reliable, ensuring longevity and safety.</p>
                  </div>
        
                  {/* Benefit Item 3 */}
                  <div className="bg-white rounded-lg shadow-md p-6">
                    <div className="text-center mb-4">
                    <Layers className="size-16 mx-auto text-rose-600 mb-4" />
                      <h3 className="text-xl font-bold text-gray-800 mb-2">Versatile Options</h3>
                    </div>
                    <p className="text-gray-600">Explore a range of equipment options tailored to meet diverse fitness needs, from cardio to strength training.</p>
                  </div>
                </div>
              </div>
            </section>
    );
};

export default Benefit;