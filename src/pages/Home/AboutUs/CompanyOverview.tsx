const CompanyOverview = () => {
  return (
    <section className="bg-white py-12 px-5 md:px-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-gray-800 text-center mb-8">Company Overview</h2>
        <div>
            <h3 className="text-2xl font-semibold text-gray-700 mb-4 ">Our History</h3>
            <p className="text-lg text-gray-600">
              Established in 2024, our company has been at the forefront of innovation in the fitness industry. Starting from a small store, we have grown into a globally recognized brand, known for our commitment to quality and customer satisfaction. Over the years, we have continually adapted to the latest trends and technological advancements to provide our customers with the best fitness equipment and accessories.
            </p>
          </div>
        <div className="grid gap-8 md:grid-cols-2 py-5">
          {/* Company History */}
          
          {/* Mission and Vision */}
          <div>
          <h3 className="text-2xl font-semibold text-gray-700 mb-4">Our Mission</h3>
            <p className="text-lg text-gray-600 mb-8">
              Our mission is to inspire and enable individuals to lead healthier and more active lives. We strive to deliver innovative and high-quality fitness products that empower our customers to achieve their fitness goals. We believe that fitness should be accessible to everyone, and we are dedicated to making that a reality.
            </p>
          </div>
          <div>
            
            <h3 className="text-2xl font-semibold text-gray-700 mb-4">Our Vision</h3>
            <p className="text-lg text-gray-600">
              Our vision is to be the leading global provider of fitness solutions, recognized for our commitment to excellence, innovation, and sustainability. We aim to build a community of fitness enthusiasts who share our passion for health and wellness. Through continuous improvement and a customer-centric approach, we aspire to make a lasting impact on the lives of people around the world.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyOverview;
