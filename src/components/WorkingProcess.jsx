import CompanyLogos from "./CompanyLogos";
import Heading from "./Heading";
import Section from "./Section";

const WorkingProcess = () => (
  <Section className="overflow-hidden" id="roadmap">
    <div className="container mx-auto md:pb-10 px-4 ml-10">
      {/* Heading */}
      {/* <Heading tag="h2" title="Our Latest Projects and Designs" /> */}

      {/* Contact Us Section */}
      <div className="flex flex-col items-center text-center md:text-left md:flex-row md:justify-between pt-8 space-y-12 md:space-y-0 md:space-x-12">

        {/* Get in Touch Form */}
        <div className="flex flex-col items-center md:items-start">
          <h2 className="text-3xl font-semibold mb-6">Get in touch with us</h2>
          <div className="flex justify-center md:justify-start items-center space-x-4 mb-6">
            <input
              type="email"
              placeholder="Enter email address"
              className="px-4 py-2 border border-gray-400 rounded-lg focus:outline-none bg-gray-800 placeholder-gray-400 w-64 md:w-auto"
            />
            <button className="px-5 py-2 bg-blue-500 rounded-lg hover:bg-blue-600 transition text-white">
              Contact Us →
            </button>
          </div>

          {/* Social Icons */}
          <div className="flex space-x-3">
            <a href="#"><i className="fab fa-facebook text-xl text-blue-600"></i></a>
            <a href="#"><i className="fab fa-twitter text-xl text-blue-400"></i></a>
            <a href="#"><i className="fab fa-vimeo text-xl text-blue-500"></i></a>
            <a href="#"><i className="fab fa-pinterest text-xl text-red-600"></i></a>
          </div>
        </div>

        {/* Contact Information */}
        <div className="flex flex-col md:flex-row justify-center md:justify-start items-center md:items-start space-y-8 md:space-y-0 md:space-x-12">

          {/* Support Team Contact */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start space-x-3 mb-4">
              <span className="bg-gray-800 p-4 rounded-full text-white text-lg font-semibold">Lg</span>
              <span className="text-2xl font-semibold text-gray-200">Company Name</span>
            </div>
            <p className="text-gray-400 text-base">Call to our support team</p>
            <p className="text-2xl font-bold mt-1 text-gray-100">+913456789</p>
          </div>

          {/* General Contact Details */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-semibold text-gray-200 mb-4">Contact Us</h3>
            <p className="text-lg">
              <a href="#"><i className="fas fa-phone"></i></a>
              <span className="font-bold ml-2 text-gray-100">+912345678</span>
            </p>
            <p className="text-lg mt-3">
              <a href="#"><i className="fas fa-envelope"></i></a>
              <span className="font-bold ml-2 text-gray-100">example@gmail.com</span>
            </p>
            <p className="text-lg mt-3">
              <a href="#"> <i className="fas fa-map-marker-alt"></i></a>
              <span className="font-bold ml-2 text-gray-100">Bangalore-50990</span>
            </p>
          </div>

        </div>

      </div>

    </div>
  </Section>
);

export default WorkingProcess;
