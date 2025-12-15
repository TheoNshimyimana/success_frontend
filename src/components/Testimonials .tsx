import React from "react";

export default function Testimonials() {
  const clients = [
    {
      initials: "JM",
      name: "Jean Mukiza",
      role: "Entrepreneur",
      message:
        "Success Tech Lab transformed my business with their digital training and startup support. Highly recommended!",
    },
    {
      initials: "MU",
      name: "Marie Uwase",
      role: "IT Manager",
      message:
        "Their ICT services are reliable and professional. They've been instrumental in our digital transformation.",
    },
    {
      initials: "DN",
      name: "David Nkusi",
      role: "Youth Leader",
      message:
        "The youth programs are amazing. They're truly empowering the next generation of innovators.",
    },
  ];

  return (
    <section className="w-full bg-[#F5E9EC] py-20">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-teal-900">
          What Our Clients Say
        </h2>
        <p className="text-gray-700 text-lg mt-3">
          Real stories from businesses and individuals we've helped transform.
        </p>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-8 mt-14">
          {clients.map((client, index) => (
            <div
              key={index}
              className="bg-white p-7 rounded-xl shadow-sm border border-gray-200 text-left"
            >
              {/* Top Section */}
              <div className="flex items-center gap-4 mb-5">
                {/* Initials bubble */}
                <div className="w-12 h-12 rounded-full bg-green-700 text-white flex items-center justify-center font-bold">
                  {client.initials}
                </div>

                <div>
                  <h3 className="font-semibold text-teal-900">{client.name}</h3>
                  <p className="text-sm text-gray-600">{client.role}</p>
                </div>
              </div>

              {/* Message */}
              <p className="text-gray-700 italic leading-relaxed">
                "{client.message}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
