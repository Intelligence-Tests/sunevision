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
const ExploreOne = () => {
  const handleClick = () => {
    window.scrollTo(0, 0);
  };
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    category: "Furniture",
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

  return (
    <Section className="overflow-hidden" id="exploremore">
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
              <h1 className="text-white text-3xl md:text-4xl font-bold mb-4">Home Interior Design</h1>
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
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img
                  src={service1}
                  alt="Modern house design"
                  className="w-full h-[434px] object-cover"

                />
              </div>

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
      <div className="max-w-5xl ml-[100px] mb-20">
        <h2 className="text-3xl font-bold mb-6">Our Capabilities</h2>
        <ul className="space-y-4">
          {[
            "Custom Tailored Designs: Spaces that reflect your unique style.",
            "Functional Layouts: Combining practicality with aesthetic appeal.",
            "Premium Material Selection: High-quality finishes for lasting elegance.",
            "Seamless Execution: Efficient and timely project delivery.",
            "Modern & Timeless Themes: Designs that never go out of style."
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
      <div className="max-w-5xl ml-[100px] mb-20">
        <h2 className="text-3xl font-bold mb-6">Our Approach</h2>
        
      </div>


      {/* Section 1: Our Work Process */}
      <div className="max-w-5xl ml-[100px]">
        <h2 className="text-3xl font-bold mb-6">Our Work Process</h2>
        <ul className="space-y-4">
          {[
            
            
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
      <div className="max-w-6xl mx-auto mt-16">
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
                  <a
                    href={item.route}
                    onClick={handleClick}
                    className="ml-auto font-mono text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-indigo-500 to-purple-600 px-4 py-2 rounded-lg shadow-lg hover:from-purple-600 hover:to-indigo-500 hover:scale-105 transition duration-300 ease-in-out"
                  >
                    Explore more
                  </a>
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
      <div className="max-w-2xl mx-auto p-6  rounded-lg shadow-lg">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-2">
          Have project in mind? Let's discuss
        </h2>
        <p className="text-gray-400">
          Get in touch with us to see how we can help you with your project
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block font-medium mb-2">
            Your Name
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full mt-1 px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent transition"
              required
            />
          </label>
        </div>

        <div>
          <label className="block font-medium mb-2">
            Your Email
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full mt-1 px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent transition"
              required
            />
          </label>
        </div>

        <div>
          <label className="block text-gray-100 font-medium mb-2">
            Category
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="w-full mt-1 px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent transition"
            >
              <option value="Furniture">Furniture</option>
              <option value="Interior Design">Interior Design</option>
              <option value="Architecture">Architecture</option>
            </select>
          </label>
        </div>

        <div>
          <label className="block font-medium mb-2">
            Message
            <textarea
              name="message"
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

export default ExploreOne;