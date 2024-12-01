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
import imgSrc1 from "../assets/photos/project1/projectone1.jpeg";
import imgSrc2 from "../assets/photos/project1/projectone2.jpeg";
import imgSrc3 from "../assets/photos/project1/projectone3.jpeg";
import imgSrc4 from "../assets/photos/project1/projectone4.jpeg";
import imgSrc5 from "../assets/photos/aboutus/bedroommastery.jpeg";
import imgSrc6 from "../assets/photos/aboutus/architecturedesign.jpeg";
import ScrollToTop from "./ScrollToTop";
import Swal from 'sweetalert2'
import WhatsappFeature from "./WhatsappFeature";

const ProjectOne = () => {
    const projectDetails = [
        { label: 'Location', value: 'Bengaluru' },
        { label: 'Client', value: 'Shashidar' },
        { label: 'Architect', value: 'Sun E-Vision Arch Team' },
        { label: 'Project', value: 'Interior' },
        { label: 'Duration', value: '4 Months' },
        { label: 'Completion', value: '15 Apr 2023' },
        { label: 'Share', value: 'Architectural, Business' }
    ];
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

    const images = [
        imgSrc1,
        imgSrc2,
        imgSrc3,
        imgSrc4,
    ];

    return (
        <Section className="overflow-hidden" id="project1">
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
                            <h1 className="text-white text-3xl md:text-4xl font-bold mb-4">Newze Home Interior</h1>
                            <div className="flex items-center text-gray-200">
                                <Home size={16} className="mr-2" />
                                <Link to="/#home" className="hover:underline cursor-pointer">
                                    Home
                                </Link> &nbsp;
                                <ChevronRight size={16} className="mx-2" />
                                <span>Project</span>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="max-w-6xl mx-auto p-6 mt-8">
                    <div className="flex flex-col md:flex-row md:gap-8 lg:px-8 sm:px-6 px-4">
                        {/* Left Section */}
                        <div className="flex-1 md:pr-8">
                            <h1 className="text-4xl font-bold mb-6">Interior Project</h1>
                            <p className="text-gray-400">
                                At Sun E-Vision Arch we specialize in creating spaces that merge functionality with aesthetics, reflecting the unique personality and needs of our clients. Our interior design projects are tailored to bring together comfort, style, and innovation, ensuring each space becomes a true extension of those who inhabit it.We are committed to combining modern design techniques with timeless elements to deliver a truly bespoke experience.

                            </p>
                            <p className="text-gray-400 mt-4">
                                From concept to completion, our focus remains on delivering personalized designs that seamlessly blend luxury, utility, and sustainability. Whether it's a cozy home or a dynamic office, we strive to exceed expectations, transforming ordinary spaces into extraordinary experiences.

                                Let us bring your vision to life with creativity, precision, and passion.We pay attention to every detail, ensuring that each element aligns perfectly with the overall vision                            </p>
                        </div>

                        {/* Right Section */}
                        <div className="bg-gray-900 rounded-xl shadow-lg p-6 w-full max-w-md mx-auto">
                            <h2 className="text-xl font-bold text-white mb-4 border-b border-gray-700 pb-2">
                                Project Details
                            </h2>
                            <div className="space-y-4">
                                {projectDetails.map((detail, index) => (
                                    <div
                                        key={index}
                                        className="flex justify-between items-center pb-2 border-b border-gray-700 last:border-b-0"
                                    >
                                        <span className="text-gray-300 font-medium w-1/3">{detail.label}:</span>
                                        <span className="text-white text-right w-2/3">{detail.value}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>



                {/* Main Content */}
                <div className="container mx-auto px-6 py-12">
                    <div className="w-[100%] ">
                        {/* Featured Project Image */}
                        <div className="md:col-span-2 rounded-lg overflow-hidden shadow-lg">
                            <Slider {...settings}>
                                {images.map((image, index) => (
                                    <div key={index} className="">
                                        <img
                                            src={image}
                                            alt={`Slide ${index + 1}`}
                                            className="w-[90%] h-[434px] object-cover mx-auto"
                                        />
                                    </div>
                                ))}
                            </Slider>
                        </div>
                    </div>
                </div>

            </div>

            {/*Our Startegies */}
            <div className="py-15">
                <div className="max-w-[82%] mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="lg:grid lg:grid-cols-2 lg:gap-8">
                        <div>
                            <h2 className="text-3xl font-extrabold">Our Strategies</h2>
                            <ul className="mt-8 space-y-4">
                                <li className="flex items-start">
                                    <div className="flex-shrink-0">
                                        <svg className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <p className="ml-3 text-base text-gray-400">
                                        Designs tailored to reflect our client's personality and vision.
                                    </p>
                                </li>
                                <li className="flex items-start">
                                    <div className="flex-shrink-0">
                                        <svg className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <p className="ml-3 text-base text-gray-400">
                                        We optimize every space with creative layouts and thoughtful planning.
                                    </p>
                                </li>
                                <li className="flex items-start">
                                    <div className="flex-shrink-0">
                                        <svg className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <p className="ml-3 text-base text-gray-400">
                                        Combining aesthetics and functionality to craft timeless interiors.
                                    </p>
                                </li>
                                <li className="flex items-start">
                                    <div className="flex-shrink-0">
                                        <svg className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <p className="ml-3 text-base text-gray-400">
                                        Using premium materials and finishes for a luxurious touch.
                                    </p>
                                </li>
                                <li className="flex items-start">
                                    <div className="flex-shrink-0">
                                        <svg className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <p className="ml-3 text-base text-green-500 font-bold">
                                        Collaborating closely to ensure every detail is aligned with your needs.
                                    </p>
                                </li>
                            </ul>
                        </div>
                        <div className="mt-12 lg:mt-0 bg-[#d1b093] p-8 rounded-lg shadow-lg">
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">
                                "Exceptional design and attention to detail! The team transformed our space into something truly stunning, balancing elegance and functionality perfectly. Their professionalism and creativity exceeded our expectations. Highly recommend them for anyone looking to bring their vision to life!"                            </h3>
                            <p className="text-gray-900 text-lg">
                                - Shasidar
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="py-15">
                <div className="max-w-[82%] mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="lg:grid lg:grid-cols-2 lg:gap-8">
                        <div>
                            <h2 className="text-3xl font-extrabold">Our approach</h2>
                            <p className="mt-6 text-base text-gray-400">
                                We believe in creating personalized spaces that seamlessly blend functionality and aesthetics.

                                Every project begins with a deep understanding of our client’s needs and aspirations.

                                Our team uses a collaborative process to ensure every design element aligns with the overall vision.

                                Attention to detail and premium craftsmanship are at the heart of everything we do.                            </p>
                        </div>
                        <div className="mt-12 lg:mt-0">
                            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                <div className="rounded-lg overflow-hidden">
                                    <img
                                        src={imgSrc5}
                                        alt="Interior living room"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="rounded-lg overflow-hidden">
                                    <img
                                        src={imgSrc6}
                                        alt="Exterior modern home"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="py-15">
                <div className="max-w-[82%] mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="lg:grid lg:grid-cols-2 lg:gap-8">
                        <div>
                            <h2 className="text-3xl font-extrabold">Received goals</h2>
                            <ul className="mt-8 space-y-4">
                                <li className="flex items-start">
                                    <div className="flex-shrink-0">
                                        <svg className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <p className="ml-3 text-base text-gray-400">
                                       Transform spaces into functional and aesthetically pleasing environments.
                                    </p>
                                </li>
                                <li className="flex items-start">
                                    <div className="flex-shrink-0">
                                        <svg className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <p className="ml-3 text-base text-gray-400">
                                        Ensure every design reflects the unique personality and vision of the client.
                                    </p>
                                </li>
                                <li className="flex items-start">
                                    <div className="flex-shrink-0">
                                        <svg className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <p className="ml-3 text-base text-gray-400">
                                        Deliver innovative solutions that balance creativity with practicality.
                                    </p>
                                </li>
                                <li className="flex items-start">
                                    <div className="flex-shrink-0">
                                        <svg className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <p className="ml-3 text-base text-gray-400">
                                       Maintain high standards of quality and attention to detail in every project.
                                    </p>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="text-3xl font-extrabold">Results</h2>
                            <ul className="mt-8 space-y-4">
                                <li className="flex items-start">
                                    <div className="flex-shrink-0">
                                        <svg className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <p className="ml-3 text-base text-gray-400">
                                        Delivered elegant and functional spaces that exceed client expectations.
                                    </p>
                                </li>
                                <li className="flex items-start">
                                    <div className="flex-shrink-0">
                                        <svg className="h-6 w-6 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <p className="ml-3 text-base text-gray-400">
                                       Enhanced the usability and aesthetics of each project with innovative designs.
                                    </p>
                                </li>
                                <li className="flex items-start">
                                    <div className="flex-shrink-0">
                                        <svg className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <p className="ml-3 text-base text-gray-400">
                                       Achieved seamless integration of style and practicality, creating timeless interiors.
                                    </p>
                                </li>
                                <li className="flex items-start">
                                    <div className="flex-shrink-0">
                                        <svg className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <p className="ml-3 text-base text-gray-400">
                                        Earned client satisfaction through attention to detail and superior craftsmanship.
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>


            <div id="discoverservices" className="max-w-[85%] max-w-7xl mx-auto mt-16 container relative z-2">
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

export default ProjectOne;