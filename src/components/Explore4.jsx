import React, { useState } from "react";
import { ChevronRight, Home } from 'lucide-react';
import { service1, service2, service3, check } from "../assets";
import Section from "./Section";
import { Link } from "react-router-dom";
import { items } from "../constants";
import { GradientLight } from "./design/Benefits";
import ClipPath from "../assets/svg/ClipPath";
import sampleSize from "lodash/sampleSize";
import Footer from "./Footer";
import { brainwave } from "../assets";
import Slider from "react-slick";
import imgSrc1 from "../assets/photos/residential/residential1.jpeg";
import imgSrc2 from "../assets/photos/residential/residential2.jpeg";
import imgSrc3 from "../assets/photos/residential/residential3.jpeg";
import imgSrc4 from "../assets/photos/residential/residential4.jpeg";
import ScrollToTop from "./ScrollToTop";
import Swal from 'sweetalert2'
import WhatsappFeature from "./WhatsappFeature";

const ExploreFour = () => {
  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.onmouseenter = Swal.stopTimer;
      toast.onmouseleave = Swal.resumeTimer;
    }
  });
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "d237528a-98e8-4684-95b1-a63bf6e3c9da");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      Toast.fire({
        icon: "success",
        title: "Message sent successfully"
      });
    }
  };
  const handleClick = () => {
    window.scrollTo(0, 0);
  };
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    category: "",
    message: "",
  });
  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here
    console.log("Form submitted:", formData);
  };
  const services = [
    { id: 1, name: "Business Planning", description: "Strategic business planning and consultation services" },
    { id: 2, name: "Interior Harmony", description: "Creating balanced and peaceful living spaces" },
    { id: 3, name: "The Style Studio", description: "Modern design solutions for contemporary homes" },
    { id: 4, name: "The Design Collective", description: "Collaborative design approach for unique spaces" }
  ];
  const images = [
    imgSrc1,
    imgSrc2,
    imgSrc3,
    imgSrc4,
  ];

  return (
    <Section className="overflow-hidden" id="exploremoreresidential">
      <ScrollToTop />
      <WhatsappFeature/>
      <div className="min-h-screen w-[90%] mx-auto">
        {/* Hero Section with Background Image */}
        <div className="relative h-64 bg-gray-900">
          <img
            src={service1}
            alt="Modern architecture"
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40">
            <div className="container mx-auto px-6 h-full flex flex-col justify-center animate-slide-text items-center">
              <h1 className="text-white text-3xl md:text-4xl font-bold mb-4">Residential Design</h1>
              <div className="flex items-center text-gray-200">
                <Home size={16} className="mr-2" />
                <Link to="/#home" className="hover:underline cursor-pointer">
                  Home
                </Link> &nbsp;
                <ChevronRight size={16} className="mx-2" />
                <span>Service Details</span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="container mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Featured Project Image */}
            <div className="md:col-span-2">
              <Slider {...settings}>
                {images.map((image, index) => (
                  <div key={index} className="rounded-lg overflow-hidden shadow-lg">
                    <img
                      src={image}
                      alt={`Slide ${index + 1}`}
                      className="w-full h-[434px] object-cover"
                    />
                  </div>
                ))}
              </Slider>

            </div>

            {/* Services List */}
            <div className="space-y-4">
              {services.map((service) => (
                <div
                  key={service.id}
                  className="p-4 bg-white rounded-lg shadow hover:shadow-md transition-shadow duration-200 cursor-pointer "
                >
                  <div className="flex items-center justify-between ">
                    <div>
                      <h3 className="font-medium text-gray-900">{service.name}</h3>
                      <p className="text-sm text-gray-500">{service.description}</p>
                    </div>
                    {/* <ChevronRight className="text-gray-400" size={20} /> */}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Section 1: Our Capabilities */}
      <div className="max-w-5xl mx-auto mb-20 px-4 text-center md:text-left md:ml-[80px]">
        <h2 className="text-3xl font-bold mb-6">Our Capabilities</h2>
        <ul className="space-y-4">
          {[
            "Custom Home Designs: Spaces tailored to your lifestyle and needs.",
            "Balanced Aesthetics: A perfect blend of elegance and functionality.",
            "Space Optimization: Maximizing every inch for practical living.",
            "Premium Material Choices: Enhancing durability and visual appeal.",
            "Timeless Interiors: Designs that remain stylish for years to come."
          ].map((text, index) => (
            <li key={index} className="flex items-center space-x-3">
              <span className="text-yellow-500">
                {/* Replace with an actual icon library or custom SVG */}
                ✓
              </span>
              <span className="">{text}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Section 1: Our Approach */}
      <div className="max-w-5xl mx-auto mb-20 px-4 text-center md:text-left md:ml-[80px]">
        <h2 className="text-3xl font-bold mb-6">Our Approach</h2>
        <p className="text-lg leading-relaxed">
        We believe that residential design should be a harmonious mix of comfort, style, and practicality. Our process begins with understanding your vision and lifestyle, allowing us to craft personalized spaces that truly feel like home. From optimizing layouts to selecting high-quality finishes, we ensure every detail reflects your personality and preferences. Whether modern minimalism or classic charm, we deliver designs that stand the test of time while meeting the unique needs of your family.        </p>
      </div>



      {/* Section 1: Our Work Process */}
      <div className="max-w-5xl mx-auto mb-20 px-4 text-center md:text-left md:ml-[80px]">
        <h2 className="text-3xl font-bold mb-6">Our Work Process</h2>
        <ul className="space-y-4">
          {[
            "Initial Consultation: We begin with a detailed discussion to understand your preferences, lifestyle, and vision for your home.",
            "Personalized Design Concepts: Based on your input, we create custom design concepts that combine modern style with timeless elegance.",
            "Design Refinement: We work with you to refine the designs, ensuring they align with your vision and functionality needs.",
            "Material Selection: Our team assists in choosing the perfect materials, finishes, and furnishings to complement your design.",
            "Execution & Project Management: We oversee every detail, managing the project from start to finish, ensuring the highest quality work and adherence to timelines.",
            "Final Reveal: We complete the transformation with a final walkthrough to ensure everything is to your satisfaction, ready for you to enjoy."
          ].map((text, index) => (
            <li key={index} className="flex items-center space-x-3">
              <span className="text-yellow-500">
                {/* Replace with an actual icon library or custom SVG */}
                ✓
              </span>
              <span className="">{text}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Section 2: Related Service */}
      <div className="max-w-7xl mx-auto mt-16 container relative z-2">
        <h2 className="text-3xl font-bold mb-8">Related Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-10">
          {sampleSize(items, 3).map((item) => (
            <div
              className="block relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[24rem]"
              style={{
                backgroundImage: `url(${item.backgroundUrl})`,
                zIndex: 1,
              }}
              key={item.id}
            >
              <div className="relative z-2 flex flex-col min-h-[22rem] p-[2.4rem]">
                <h5 className="h5 mb-5">{item.title}</h5>
                <p className="body-2 mb-6 text-n-3">{item.text}</p>
                <div className="flex items-center mt-auto">
                  <img
                    src={item.iconUrl}
                    width={48}
                    height={48}
                    alt={item.title}
                    className="rounded-lg"
                  />
                  <Link
                    to={item.route}
                    onClick={handleClick}
                    className="ml-auto font-mono text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-indigo-500 to-purple-600 px-4 py-2 rounded-lg shadow-lg hover:from-purple-600 hover:to-indigo-500 hover:scale-105 transition duration-300 ease-in-out"
                  >
                    Explore more
                  </Link>
                </div>
              </div>
              {item.light && <GradientLight />}
              <div
                className="absolute inset-0.5 bg-n-8"
                style={{ clipPath: "url(#benefits)" }}
              >
                <div className="absolute inset-0 opacity-0 transition-opacity hover:opacity-10">
                  {item.imageUrl && (
                    <img
                      src={item.imageUrl}
                      width={380}
                      height={362}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>
              </div>
              <ClipPath />
            </div>
          ))}
        </div>
      </div>


      {/*Contact form */}
      <div className="max-w-2xl mx-auto p-6 rounded-lg shadow-lg">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-2">
            Have project in mind? Let's discuss
          </h2>
          <p className="text-gray-400">
            Get in touch with us to see how we can help you with your project
          </p>
        </div>

        <form onSubmit={onSubmit} className="space-y-6">
          <div>
            <label className="block font-medium mb-2">
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                className="w-full mt-1 px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent transition"
                required
              />
            </label>
          </div>
          <div className="input-box relative group">
            <label className="absolute left-4 md:left-6 transition-all duration-300 pointer-events-none text-sm md:text-base top-3 md:top-4 text-gray-400">

            </label>
            <input
              type="text"
              className="w-full mt-1 px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent transition"
              placeholder="Enter mobile number"
              name="number"
              required
              maxLength="10"
              pattern="\d{10}"
              onInput={(e) => {
                e.target.setCustomValidity(''); // Clear previous custom messages
                e.target.value = e.target.value.replace(/[^0-9]/g, '').slice(0, 10); // Enforce numeric input
              }}
              onInvalid={(e) => {
                e.target.setCustomValidity('Enter a valid 10-digit mobile number');
              }}
              onChange={(e) => {
                e.target.setCustomValidity(''); // Clear the message on valid input
              }}
            />

          </div>
          <div>
            <label className="block font-medium mb-2">
              <input
                type="text"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                className="w-full mt-1 px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent transition"
                required
                pattern="[a-zA-Z0-9._%+-]+@gmail\.com$"
                onInput={(e) => {
                  e.target.setCustomValidity(''); // Clear custom error messages
                }}
                onInvalid={(e) => {
                  e.target.setCustomValidity('Enter a valid Gmail address ending with @gmail.com');
                }}
                onBlur={(e) => {
                  const isValidGmail = /^[a-zA-Z0-9._%+-]+@gmail\.com$/.test(e.target.value);
                  if (!isValidGmail) {
                    e.target.setCustomValidity('Enter a valid Gmail address ending with @gmail.com');
                    e.target.reportValidity(); // Trigger error message
                  } else {
                    e.target.setCustomValidity('');
                  }
                }}
              />
            </label>
          </div>

          <div>
            <label className="block text-gray-100 font-medium mb-2">
              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="w-full mt-1 px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent transition"
              >
                <option value="" disabled>
                  Category
                </option>
                <option value="Furniture">Furniture</option>
                <option value="Interior Design">Interior Design</option>
                <option value="Architecture">Architecture</option>
                <option value="Custom Design">Custom Design</option>
              </select>
            </label>
          </div>


          <div>
            <label className="block font-medium mb-2">
              <textarea
                name="message"
                placeholder="Enter your message"
                value={formData.message}
                onChange={handleChange}
                className="w-full mt-1 px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent transition min-h-[120px] resize-y"
                required
              />
            </label>
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-500 text-gray-900 font-semibold py-3 px-6 rounded-md hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2 transition-colors duration-200"
          >
            Send Message
          </button>
        </form>
      </div>
      <Footer />
    </Section>

  );
};

export default ExploreFour;