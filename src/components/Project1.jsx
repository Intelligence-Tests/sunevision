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

const ProjectOne = () => {
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

    const images = [
        imgSrc1,
        imgSrc2,
        imgSrc3,
        imgSrc4,
    ];

    return (
        <Section className="overflow-hidden" id="project1">
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

                    </div>
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