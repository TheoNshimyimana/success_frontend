import React from "react";
import { motion } from "framer-motion";

interface AlumniStory {
  name: string;
  achievement: string;
}

const alumni: AlumniStory[] = [
  { name: "Uwimana Marie", achievement: "Started her own business" },
  { name: "Jean Pierre", achievement: "Got promoted at work" },
  { name: "Habiba Hassan", achievement: "Became a digital trainer" },
  { name: "Karim Ndayisaba", achievement: "Improved family income" },
];

function AlumniSuccess() {
  return (
    <div className="w-full flex flex-col items-center py-20 px-4 bg-slate-50">
      <h2 className="text-4xl font-bold text-center mb-3">
        Alumni Success Stories
      </h2>
      <p className="text-center text-gray-600 max-w-2xl mb-16">
        Real transformations from our training program graduates.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 w-full max-w-5xl">
        {alumni.map((person, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            viewport={{ once: true }}
            className="bg-gray-50 rounded-2xl shadow-md p-10 flex flex-col items-center text-center border border-gray-200"
          >
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-emerald-600 to-rose-400 mb-6"></div>
            <h3 className="text-lg font-semibold mb-1">{person.name}</h3>
            <p className="text-gray-600 text-sm">{person.achievement}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
export default AlumniSuccess;