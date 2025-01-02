import { Header } from '@/components/Header';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

export default function Contact() {
  return (
    <>
      <Header />
      <div className="mt-20 min-h-screen bg-gradient-to-r from-blue-100 to-green-50 py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Section */}
          <div className="text-center mb-12">
            <h1 className="md:text-4xl text-2xl font-bold text-gray-800 mb-4 lora">
              Get in Touch with Us!
            </h1>
            <p className="text-gray-600 mt-4 md:text-lg text-sm max-w-lg mx-auto">
              Have any questions or feedback? We&apos;d love to hear from you! Reach out via the form or the contact information below.
            </p>
          </div>

          {/* Form Section */}
          <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-2xl p-8 transform transition duration-500 hover:scale-105 hover:shadow-2xl">
            <form className="space-y-6">
              {/* Name Field */}
              <div>
                <label className="block text-gray-700 font-semibold mb-2" htmlFor="name">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Enter your name"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-teal-500 focus:outline-none transition"
                  required
                />
              </div>

              {/* Email Field */}
              <div>
                <label className="block text-gray-700 font-semibold mb-2" htmlFor="email">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-teal-500 focus:outline-none transition"
                  required
                />
              </div>

              {/* Message Field */}
              <div>
                <label className="block text-gray-700 font-semibold mb-2" htmlFor="message">
                  Your Message
                </label>
                <textarea
                  id="message"
                  placeholder="Enter your message"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-teal-500 focus:outline-none transition"
                  required
                ></textarea>
              </div>

              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  className="w-full bg-teal-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-teal-700 transition duration-300 transform hover:scale-105"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>

          {/* Contact Information Section */}
          <div className="mt-12 text-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Contact Information</h2>

            {/* Contact Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Email Card */}
              <div className="bg-white rounded-xl shadow-lg p-6 transform transition duration-300 hover:scale-105 hover:shadow-2xl">
                <div className="flex justify-start items-center space-x-4 text-gray-600">
                  <FaEnvelope className="text-teal-600 " />
                  <a
                    href="mailto:support@example.com"
                    className="text-teal-600 hover:underline transition duration-300 md:text-lg text-sm"
                  >
                    support@example.com
                  </a>
                </div>
              </div>

              {/* Phone Card */}
              <div className="bg-white rounded-xl shadow-lg p-6 transform transition duration-300 hover:scale-105 hover:shadow-2xl">
                <div className="flex justify-start items-center space-x-4 text-gray-600">
                  <FaPhone className="text-teal-600" />
                  <a
                    href="tel:+123456789"
                    className="text-teal-600 hover:underline transition duration-300 md:text-lg text-sm"
                  >
                    +123 456 789
                  </a>
                </div>
              </div>

              {/* Address Card */}
              <div className="bg-white rounded-xl shadow-lg p-6 transform transition duration-300 hover:scale-105 hover:shadow-2xl">
                <div className="flex justify-start items-center space-x-4 text-gray-600">
                  <FaMapMarkerAlt className="text-teal-600 " />
                  <span className="text-gray-800 md:text-lg text-sm">123 Street, Karachi, Pakistan</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer>
        <div className="pl-9 w-full h-[80px] flex justify-center items-center bg-[#343A40] sm:text-center">
          <h3 className="lora font-normal text-[16px] text-[#E5E5E5] flex flex-col text-center md:ml-32">
            2024 | rehmanarain481@gmail.com
            <br className="lora font-normal text-[12px] cursor-pointer text-[#E5E5E5]" />
            Follow Now
          </h3>
        </div>
      </footer>
    </>
  );
}
