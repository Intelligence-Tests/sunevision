import React from 'react';
import { MapPin, Phone, Mail, Clock, CheckCircle, ArrowRight } from 'lucide-react';
import Section from "./Section";
import Swal from 'sweetalert2'
const WorkingProcess = () => {
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
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [focusedField, setFocusedField] = React.useState(null);
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [isSubmitted, setIsSubmitted] = React.useState(false);

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 2000);
  };

  return (
    <Section className="overflow-hidden" id="contactus">
      <div className="relative min-h-screen w-[90%] mx-auto">
        <div className="relative py-16 md:py-32 px-4">
          <div className="max-w-7xl mx-auto font-sora">
            {/* Header Section */}
            <div className="text-center mb-12 md:mb-24">
              <div className="inline-block mb-4 md:mb-6">
                <div className="flex items-center justify-center space-x-2 bg-gray-900/50 rounded-full px-4 md:px-6 py-2 md:py-3 shadow-lg backdrop-blur-xl">
                  <span className="relative flex h-2 md:h-3 w-2 md:w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 md:h-3 w-2 md:w-3 bg-blue-500"></span>
                  </span>
                  <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent font-grotesk text-sm md:text-base font-semibold">
                    24/7 Support Available
                  </span>
                </div>
              </div>
              <h2 className="text-3xl md:text-6xl font-bold mb-4 md:mb-8 leading-tight text-white font-grotesk">
                Let's Create Something
                <br />
                <span className="relative inline-block mt-2">
                  <span className="relative z-10 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                    Extraordinary Together
                  </span>
                </span>
              </h2>
              <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                Turn your vision into reality with our expert team. We're here to help you create
                something amazing that exceeds your expectations.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-start">
              {/* Contact Form */}
              <div className="relative order-2 lg:order-1">
                <form onSubmit={onSubmit} className="relative bg-gray-900/50 rounded-3xl shadow-2xl p-6 md:p-10 backdrop-blur-xl border border-gray-800">
                  <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-6 md:mb-8 font-grotesk">
                    Contact Form
                  </h2>
                  <div className="space-y-6 md:space-y-8">
                    <div className="input-box relative group">
                      <label className="absolute left-4 md:left-6 transition-all duration-300 pointer-events-none text-sm md:text-base top-3 md:top-4 text-gray-400">

                      </label>
                      <input
                        type="text"
                        className="field w-full bg-gray-800/50 px-4 md:px-6 py-3 md:py-4 rounded-xl border-2 border-gray-700 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all duration-300 outline-none peer text-white text-sm md:text-base"
                        placeholder="Enter your name"
                        name="name"
                        required
                      />
                    </div>
                    <div className="input-box relative group">
                      <label className="absolute left-4 md:left-6 transition-all duration-300 pointer-events-none text-sm md:text-base top-3 md:top-4 text-gray-400">

                      </label>
                      <input
                        type="text"
                        className="field w-full bg-gray-800/50 px-4 md:px-6 py-3 md:py-4 rounded-xl border-2 border-gray-700 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all duration-300 outline-none peer text-white text-sm md:text-base"
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
                    <div className="input-box relative group">
                      <label className="absolute left-4 md:left-6 transition-all duration-300 pointer-events-none text-sm md:text-base top-3 md:top-4 text-gray-400">

                      </label>
                      <input
                        type="text"
                        className="field w-full bg-gray-800/50 px-4 md:px-6 py-3 md:py-4 rounded-xl border-2 border-gray-700 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all duration-300 outline-none peer text-white text-sm md:text-base"
                        placeholder="Enter your email"
                        name="email"
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

                    </div>
                    <div className="input-box relative group">
                      <label className="absolute left-4 md:left-6 transition-all duration-300 pointer-events-none text-sm md:text-base top-3 md:top-4 text-gray-400">

                      </label>
                      <textarea
                        name="message"
                        rows="4"
                        className="field mess w-full bg-gray-800/50 px-4 md:px-6 py-3 md:py-4 rounded-xl border-2 border-gray-700 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all duration-300 outline-none resize-none peer text-white text-sm md:text-base"
                        placeholder="Enter your message"
                        required
                      ></textarea>
                    </div>
                    <button
                      type="submit"
                      className="group w-full relative inline-flex items-center justify-center px-6 md:px-8 py-3 md:py-4 text-sm md:text-base font-bold overflow-hidden rounded-xl transition-all duration-300 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600"
                    >
                      <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-white rounded-full group-hover:w-80 group-hover:h-80 opacity-10"></span>
                      <span className="relative flex items-center text-white font-grotesk">
                        Send Message
                      </span>
                    </button>
                  </div>
                </form>
              </div>


              <div className="space-y-8">
                {/* Main Image Card */}
                <div className="relative group">
                  <div className="relative h-[180px] rounded-3xl overflow-hidden transform group-hover:scale-[1.02] transition-all duration-500">
                    <img
                      src="/api/placeholder/800/600"
                      className="w-full h-full object-cover transform scale-110 group-hover:scale-125 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600/90 to-purple-600/90"></div>
                    <div className="absolute inset-0 p-8 flex flex-col justify-end">
                      <h3 className="text-3xl font-bold text-white mb-3 font-grotesk">Let's Connect</h3>
                      <p className="text-lg text-white/90">Ready to transform your ideas into reality? We're just a message away.</p>
                    </div>
                  </div>
                </div>


                {/* Contact Info Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                  {[
                    {
                      icon: <MapPin className="h-5 w-5 md:h-6 md:w-6" />,
                      title: "Visit Us",
                      details: ["Basaveshwarnagar", "Bangalore, Karnataka"],
                      gradient: "from-blue-500 to-blue-600"
                    },
                    {
                      icon: <Phone className="h-5 w-5 md:h-6 md:w-6" />,
                      title: "Call Us",
                      details: ["+91 1234567890", "Mon-Fri 9AM-6PM"],
                      gradient: "from-purple-500 to-purple-600"
                    },
                    {
                      icon: <Mail className="h-5 w-5 md:h-6 md:w-6" />,
                      title: "Email Us",
                      details: ["prakyath13@gmail.com",],
                      gradient: "from-pink-500 to-pink-600"
                    },
                    {
                      icon: <Clock className="h-5 w-5 md:h-6 md:w-6" />,
                      title: "Working Hours",
                      details: ["Mon-Fri: 9AM-6PM", "Weekend: By Appointment"],
                      gradient: "from-indigo-500 to-indigo-600"
                    }
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="group bg-gray-900/50 backdrop-blur-xl rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 border border-gray-800"
                    >
                      <div
                        className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${item.gradient} text-white mb-4 group-hover:scale-110 transition-transform duration-300`}
                      >
                        {item.icon}
                      </div>
                      <h4 className="text-lg font-semibold text-white mb-2 font-grotesk">
                        {item.title}
                      </h4>
                      {item.details.map((detail, idx) => (
                        <p
                          key={idx}
                          className="text-gray-400 break-words overflow-wrap break-word"
                        >
                          {detail}
                        </p>
                      ))}
                    </div>
                  ))}
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default WorkingProcess;
