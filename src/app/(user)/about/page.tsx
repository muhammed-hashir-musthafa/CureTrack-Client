import Image from "next/image";
import React from "react";
import signupBg from "../../../../public/images/signupBg.png";

const About = () => {
  return (
    <div className="bg-black text-white min-h-screen">
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center max-w-7xl mx-auto p-8">
        <div className="md:w-1/2 relative h-64 md:h-auto overflow-hidden">
          <Image
            src={signupBg}
            alt="Doctor in background"
            width={500}
            height={500}
            objectFit="cover"
            objectPosition="center"
            className="rounded"
          />
        </div>

        <div className="md:w-1/2 mt-6 md:mt-0 md:ml-8">
          <h1 className="text-4xl font-bold mb-4">About Us</h1>
          <p className="text-lg leading-7 mb-4">
            Welcome to <span className="text-green-700">CURE-CONNECT</span>,
            your trusted partner in managing your healthcare needs conveniently
            and efficiently. At CURE-CONNECT, we understand the challenges
            individuals face when it comes to scheduling doctor appointments and
            managing their health records.
          </p>
          <p className="text-lg leading-7">
            CURE-CONNECT is committed to excellence in healthcare technology. We
            continuously strive to enhance our platform, integrating the latest
            advancements to improve user experience and deliver superior
            service.
          </p>
        </div>
      </section>

      {/* Vision Section */}
      <section className="bg-gray-900 py-8">
        <div className="max-w-7xl mx-auto p-8">
          <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
          <p className="text-lg leading-7">
            Our vision at <span className="text-green-700">CURE-CONNECT</span>{" "}
            is to create a seamless healthcare experience for every user. We aim
            to bridge the gap between patients and healthcare providers, making
            it easier for you to access the care you need, when you need it.
          </p>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto p-8">
          <h2 className="text-3xl font-bold mb-6 text-center">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-2 text-green-700">
                Efficiency:
              </h3>
              <p className="text-lg">
                Streamlined appointment scheduling that fits into your busy
                lifestyle.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-2 text-green-700">
                Convenience:
              </h3>
              <p className="text-lg">
                Access to a network of trusted healthcare professionals in your
                area.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-2 text-green-700">
                Personalization:
              </h3>
              <p className="text-lg">
                Tailored recommendations and reminders to help you stay on top
                of your health.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
