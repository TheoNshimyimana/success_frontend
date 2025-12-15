import React from "react";
import { motion } from "framer-motion";

function GetInTouch() {
  return (
    <section className="w-full bg-gradient-to-r mb-10 from-[#0D7377] to-[#46928E] py-24 flex flex-col items-center text-center px-4">
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-white font-bold text-2xl md:text-3xl lg:text-4xl"
      >
        Ready to Transform Your <br className="hidden md:block" /> Community?
      </motion.h2>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="text-white/90 text-base md:text-lg max-w-2xl mt-4"
      >
        Join thousands of satisfied clients who have already benefited from our
        digital empowerment services.
      </motion.p>

      {/* Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
        className="mt-8 flex flex-col sm:flex-row gap-4"
      >
        <button className="bg-white text-sm text-teal-700 font-medium px-6 py-2 rounded-md shadow-md hover:bg-gray-100 transition">
          Request TobiServe Service
        </button>

        <button className="border border-white text-white text-sm font-medium px-6 py-2 rounded-md hover:bg-white hover:text-teal-700 transition">
          Get in Touch
        </button>
      </motion.div>
    </section>
  );
}
export default GetInTouch;
