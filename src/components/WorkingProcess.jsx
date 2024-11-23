
import Section from "./Section";
import React, { useState } from 'react';
import { Send, MapPin, Phone, Mail, Clock, ArrowRight, CheckCircle } from 'lucide-react';

const WorkingProcess = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [focusedField, setFocusedField] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <Section className="overflow-hidden" id="contactus">
   <div className="realtive min-h-screen w-[90%] mx-auto">
      {/* Updated Dark Theme Background */}
      {/* <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full mix-blend-screen filter blur-3xl animate-blob"></div>
        <div className="absolute -bottom-8 left-0 w-96 h-96 bg-purple-500/10 rounded-full mix-blend-screen filter blur-3xl animate-blob animation-delay-4000"></div>
        <div className="absolute top-0 -right-4 w-96 h-96 bg-pink-500/10 rounded-full mix-blend-screen filter blur-3xl animate-blob animation-delay-2000"></div>
      </div> */}

      <div className="relative py-32 px-4">
        <div className="max-w-7xl mx-auto font-sora">
          {/* Header Section */}
          <div className="text-center mb-24">
            <div className="inline-block mb-6">
              <div className="flex items-center justify-center space-x-2 bg-gray-900/50 rounded-full px-6 py-3 shadow-lg backdrop-blur-xl">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
                </span>
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent font-grotesk font-semibold">
                  24/7 Support Available
                </span>
              </div>
            </div>
            <h2 className="text-6xl font-bold mb-8 leading-tight text-white font-grotesk">
              Let's Create Something
              <br />
              <span className="relative inline-block mt-2">
                <span className="relative z-10 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Extraordinary Together
                </span>
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Turn your vision into reality with our expert team. We're here to help you create 
              something amazing that exceeds your expectations.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Side - Contact Form */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 transform -skew-y-6 rounded-3xl blur-3xl"></div>
              <div className="relative bg-gray-900/50 rounded-3xl shadow-2xl p-10 backdrop-blur-xl border border-gray-800">
                <div className="relative">
                  <h3 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-8 font-grotesk">
                    Send us a Message
                  </h3>
                  <form onSubmit={handleSubmit} className="space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="relative group">
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          onFocus={() => setFocusedField('name')}
                          onBlur={() => setFocusedField(null)}
                          className="w-full bg-gray-800/50 px-6 py-4 rounded-xl border-2 border-gray-700 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all duration-300 outline-none peer text-white"
                          required
                        />
                        <label className={`absolute left-6 transition-all duration-300 pointer-events-none
                          ${(focusedField === 'name' || formData.name) 
                            ? '-top-3 text-sm text-blue-400 bg-gray-900 px-2' 
                            : 'top-4 text-gray-400'}`}>
                          Your Name
                        </label>
                      </div>

                      <div className="relative group">
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          onFocus={() => setFocusedField('email')}
                          onBlur={() => setFocusedField(null)}
                          className="w-full bg-gray-800/50 px-6 py-4 rounded-xl border-2 border-gray-700 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all duration-300 outline-none peer text-white"
                          required
                        />
                        <label className={`absolute left-6 transition-all duration-300 pointer-events-none
                          ${(focusedField === 'email' || formData.email) 
                            ? '-top-3 text-sm text-blue-400 bg-gray-900 px-2' 
                            : 'top-4 text-gray-400'}`}>
                          Your Email
                        </label>
                      </div>
                    </div>

                    <div className="relative group">
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('subject')}
                        onBlur={() => setFocusedField(null)}
                        className="w-full bg-gray-800/50 px-6 py-4 rounded-xl border-2 border-gray-700 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all duration-300 outline-none peer text-white"
                        required
                      />
                      <label className={`absolute left-6 transition-all duration-300 pointer-events-none
                        ${(focusedField === 'subject' || formData.subject) 
                          ? '-top-3 text-sm text-blue-400 bg-gray-900 px-2' 
                          : 'top-4 text-gray-400'}`}>
                        Subject
                      </label>
                    </div>

                    <div className="relative group">
                      <textarea
                        name="message"
                        rows="6"
                        value={formData.message}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('message')}
                        onBlur={() => setFocusedField(null)}
                        className="w-full bg-gray-800/50 px-6 py-4 rounded-xl border-2 border-gray-700 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all duration-300 outline-none resize-none peer text-white"
                        required
                      />
                      <label className={`absolute left-6 transition-all duration-300 pointer-events-none
                        ${(focusedField === 'message' || formData.message) 
                          ? '-top-3 text-sm text-blue-400 bg-gray-900 px-2' 
                          : 'top-4 text-gray-400'}`}>
                        Your Message
                      </label>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting || isSubmitted}
                      className={`group w-full relative inline-flex items-center justify-center px-8 py-4 font-bold overflow-hidden rounded-xl transition-all duration-300
                        ${isSubmitted 
                          ? 'bg-green-500 hover:bg-green-600' 
                          : 'bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600'}`}
                    >
                      <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-white rounded-full group-hover:w-80 group-hover:h-80 opacity-10"></span>
                      <span className="relative flex items-center text-white font-grotesk">
                        {isSubmitting ? (
                          <svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                        ) : isSubmitted ? (
                          <>
                            <CheckCircle className="w-5 h-5 mr-2" />
                            Message Sent!
                          </>
                        ) : (
                          <>
                            Send Message
                            <ArrowRight className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" />
                          </>
                        )}
                      </span>
                    </button>
                  </form>
                </div>
              </div>
            </div>

            {/* Right Side - Contact Information */}
            <div className="space-y-8">
              {/* Main Image Card */}
              <div className="relative group">
                <div className="relative h-[400px] rounded-3xl overflow-hidden transform group-hover:scale-[1.02] transition-all duration-500">
                  <img
                    src="/api/placeholder/800/600"
                    alt="Contact us"
                    className="w-full h-full object-cover transform scale-110 group-hover:scale-125 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600/90 to-purple-600/90"></div>
                  <div className="absolute inset-0 p-12 flex flex-col justify-end">
                    <h3 className="text-4xl font-bold text-white mb-4 font-grotesk">Let's Connect</h3>
                    <p className="text-xl text-white/90">Ready to transform your ideas into reality? We're just a message away.</p>
                  </div>
                </div>
              </div>

              {/* Contact Info Cards */}
              <div className="grid grid-cols-2 gap-6">
                {[
                  {
                    icon: <MapPin className="h-6 w-6" />,
                    title: "Visit Us",
                    details: ["Basaveshwarnagar", "Bangalore, Karnataka"],
                    gradient: "from-blue-500 to-blue-600"
                  },
                  {
                    icon: <Phone className="h-6 w-6" />,
                    title: "Call Us",
                    details: ["+91 1234567890", "Mon-Fri 9AM-6PM"],
                    gradient: "from-purple-500 to-purple-600"
                  },
                  {
                    icon: <Mail className="h-6 w-6" />,
                    title: "Email Us",
                    details: ["example1@gmail.com", "example2@gmail.com"],
                    gradient: "from-pink-500 to-pink-600"
                  },
                  {
                    icon: <Clock className="h-6 w-6" />,
                    title: "Working Hours",
                    details: ["Mon-Fri: 9AM-6PM", "Sat: By Appointment"],
                    gradient: "from-indigo-500 to-indigo-600"
                  }
                ].map((item, index) => (
                  <div key={index} className="group bg-gray-900/50 backdrop-blur-xl rounded-2xl p-6 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 border border-gray-800">
                    <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${item.gradient} text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      {item.icon}
                    </div>
                    <h4 className="text-lg font-semibold text-white mb-2 font-grotesk">{item.title}</h4>
                    {item.details.map((detail, idx) => (
                      <p key={idx} className="text-gray-400">{detail}</p>
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
