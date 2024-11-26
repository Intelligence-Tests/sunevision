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
import imgSrc1 from "../assets/roadmap/image-1.jpg";
import imgSrc2 from "../assets/roadmap/image-2.jpg";
import imgSrc3 from "../assets/roadmap/image-3.jpg";
import imgSrc4 from "../assets/roadmap/image-4.jpg";
import ScrollToTop from "./ScrollToTop";
import Swal from 'sweetalert2'
import Pricing from "./Pricing";
import WorkingProcess from "./WorkingProcess";

const AboutUs = () => {
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

    formData.append("access_key", "261c296e-a139-470e-b16e-39511476da4d");

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
    <Section className="overflow-hidden" id="exploremoreinterior">
      <ScrollToTop />
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
              <h1 className="text-white text-3xl md:text-4xl font-bold mb-4">About Us</h1>
              <div className="flex items-center text-gray-200">
                <Home size={16} className="mr-2" />
                <Link to="/#home" className="hover:underline cursor-pointer">
                  Home
                </Link> &nbsp;
                <ChevronRight size={16} className="mx-2" />
                <span>About</span>
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
            <div className="lg:grid lg:grid-cols-2 lg:gap-8">
              <div>
                <h2 className="text-3xl md:text-3xl font-extrabold mb-4 md:mb-8 leading-tight text-white font-grotesk sm:text-4xl">
                  We Offer You
                  <br />
                  <span className="relative inline-block mt-2">
                    <span className="relative z-10 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                      Comprehensive Design Solutions for Every Space
                    </span>
                  </span>
                </h2>
                <p className="mt-3 text-lg text-gray-500">
                  With over 2 years of experience, we specialize in crafting custom interior designs that blend style, comfort, and functionality.</p>
                <p className="mt-6 text-base text-gray-500">
                  Transform your living spaces into comfortable and stylish environments tailored to your unique tastes.Visualize your space before construction with detailed floor plans and realistic 3D renderings that bring your ideas to life.Create a home that reflects your personality, offering comfort, practicality, and timeless style.  Our commitment is to deliver high-quality, bespoke designs that align with your lifestyle and goals, making your space a true reflection of your vision.
                </p>
                <div className="mt-8">
                  <a
                    href="#"
                    className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-purple-600 hover:to-indigo-500"
                  >
                    Discover More
                  </a>

                </div>
              </div>
              <div className="mt-12 lg:mt-0">
                <div className="aspect-w-4 aspect-h-3 sm:aspect-w-3 sm:aspect-h-2">
                  <img
                    className="object-cover shadow-lg rounded-lg"
                    src={service1}
                    alt="Interior Design"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col min-h-screen">
          <header className="bg-gray-900 text-white py-4 px-6">
            <h1 className="text-2xl font-bold">Latest Designs</h1>
          </header>
          <main className="flex-1 py-8 px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className=" rounded-lg shadow-lg card">
                <img src={service1} className="rounded-t-lg card-image" />
                <div className="p-6">
                  <h2 className="text-2xl font-bold mb-4">Architecture Design</h2>
                  <p>Explore our innovative architecture designs that blend form and function.</p>
                </div>
              </div>
              <div className=" rounded-lg shadow-lg card">
                <img src={service1} className="rounded-t-lg card-image" />
                <div className="p-6">
                  <h2 className="text-2xl font-bold mb-4">Modern Building</h2>
                  <p>Discover our cutting-edge modern building designs that redefine urban landscapes.</p>
                </div>
              </div>
              <div className="rounded-lg shadow-lg card">
                <img src={service1} className="rounded-t-lg card-image" />
                <div className="p-6">
                  <h2 className="text-2xl font-bold mb-4">Bedroom Design Mastery</h2>
                  <p>Let us help you transform your bedroom into a peaceful haven where comfort meets elegance.</p>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>



      {/* Section 2: Related Service */}
      <div className="max-w-7xl mx-auto mt-16 container relative z-2">
        <h2 className="text-3xl font-bold mb-8">Services We Provide</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-10">
          {items.map((item) => (
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

      <Pricing/>
      <WorkingProcess />

      {/*Contact form */}
      {/* <div className="max-w-2xl mx-auto p-6 rounded-lg shadow-lg">
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
      </div> */}
      <Footer />
    </Section>

  );
};

export default AboutUs;