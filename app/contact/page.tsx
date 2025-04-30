"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function ContactPage() {
  const [success, setSuccess] = useState(true);
  const [error, setError] = useState(false);
  const text = "Say Hello";

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 py-6">
        {/* TEXT CONTAINER */}
        <div className="h-1/3 lg:h-full lg:w-1/2 flex items-center justify-center text-6xl">
          <div>
            {text.split("").map((letter, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: index * 0.1,
                }}
              >
                {letter}
              </motion.span>
            ))}
            😊
          </div>
        </div>
        {/* FORM CONTAINER */}
        <form className="min-h-[60%] lg:h-full lg:w-1/2 bg-red-50 rounded-xl text-xl flex flex-col gap-8 justify-center sm:p-8 lg:p-12">
          <span>Dear Niki Dev,</span>
          <textarea
            rows={4}
            className="bg-transparent border-b-2 border-b-black outline-none resize-none"
          />
          <span>My email is:</span>
          <input
            type="text"
            className="bg-transparent border-b-2 border-b-black outline-none"
          />
          <span>Regards</span>
          <button className="bg-purple-200 font-semibold text-gray-600 p-4">
            Send
          </button>
          {success && <span className="text-green-600 font-semibold text-lg">Your message has been sent successfully!</span>}
          {error && <span className="text-red-600 font-semibold text-lg">Something went wrong!</span>}
        </form>
      </div>
    </motion.div>
  );
}
