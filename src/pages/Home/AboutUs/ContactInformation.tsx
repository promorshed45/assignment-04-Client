import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const ContactInformation = () => {
  return (
    <section className="bg-gray-100 py-12 px-5 md:px-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-gray-800 text-center mb-8">Contact Us</h2>
        <div className="flex flex-col md:flex-row justify-around items-start">
          <div className="md:w-1/3 mb-8 md:mb-0">
            <h3 className="text-2xl font-semibold text-gray-700 mb-4">Our Address</h3>
            <p className="text-gray-600">123 Fitness Street</p>
            <p className="text-gray-600">Fit City, FC 12345</p>
            <p className="text-gray-600">Country</p>
          </div>
          <div className="md:w-1/3 mb-8 md:mb-0">
            <h3 className="text-2xl font-semibold text-gray-700 mb-4">Contact Information</h3>
            <p className="text-gray-600">Phone: (123) 456-7890</p>
            <p className="text-gray-600">Email: info@fitnesszone.com</p>
          </div>
          <div className="md:w-1/3">
            <h3 className="text-2xl font-semibold text-gray-700 mb-4">Business Hours</h3>
            <p className="text-gray-600">Saturday - Wednesday: 9:00 AM - 5:00 PM</p>
            <p className="text-gray-600">Thursday: 10:00 AM - 3:00 PM</p>
            <p className="text-gray-600">Friday: Closed</p>
          </div>
        </div>
        <div className="text-center mt-8">
          <h3 className="text-2xl font-semibold text-gray-700 mb-4">Get In Touch</h3>
          <p className="text-gray-600 mb-6">We'd love to hear from you! Whether you have questions, feedback, or need assistance, feel free to reach out to us.</p>
          <Button asChild>
            <Link to="mailto:info@fitnesszone.com" >
            Send Us an Email
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ContactInformation;
