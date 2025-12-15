import { Send } from "lucide-react";

export default function ContactFormSection() {
  return (
    <section className="bg-[#f7eeee] py-20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* LEFT – FORM */}
        <div>
          <h2 className="text-3xl font-bold text-[#064a57] mb-2">
            Send us a Message
          </h2>
          <p className="text-gray-600 mb-8">
            Fill out the form below and we will get back to you as soon as
            possible.
          </p>

          <form className="space-y-5">
            {/* Name */}
            <div>
              <label className="block text-sm font-medium mb-1">Name</label>
              <input
                type="text"
                placeholder="Your name"
                className="w-full border border-gray-200 bg-white rounded-lg px-4 py-2 focus:outline-none focus:ring-1 focus:ring-green-600"
              />
            </div>

            {/* Email & Phone */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">Email</label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-full border border-gray-200 bg-white rounded-lg px-4 py-2 focus:outline-none focus:ring-1 focus:ring-green-600"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Phone</label>
                <input
                  type="text"
                  placeholder="+250 XXX XXX XXX"
                  className="w-full border border-gray-200 bg-white py-2 rounded-lg px-4  focus:outline-none focus:ring-1 focus:ring-green-600"
                />
              </div>
            </div>

            {/* Subject */}
            <div>
              <label className="block text-sm font-medium mb-1">Subject</label>
              <select className="w-full border border-gray-200 bg-white rounded-lg px-4 py-2 focus:outline-none focus:ring-1 focus:ring-green-600">
                <option>Select a subject</option>
                <option>ICT Services</option>
                <option>Digital Training</option>
                <option>Support</option>
              </select>
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-medium mb-1">Message</label>
              <textarea
                rows={5}
                placeholder="Tell us about your inquiry..."
                className="w-full border border-gray-200 bg-white rounded-lg px-4 py-3 focus:outline-none focus:ring-1 focus:ring-green-600"
              />
            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-full bg-[#3F9137] text-white py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-green-800"
            >
              Send Message <Send size={16} />
            </button>
          </form>
        </div>

        {/* RIGHT – MAP & HOURS */}
        <div className="space-y-6">
          <div>
            <h2 className="text-2xl font-bold text-[#064a57] mb-2">
              Office Location
            </h2>
            <p className="text-gray-600 mb-4">
              Visit us at our office in Kigali, Rwanda.
            </p>

            {/* MAP */}
            <div className="rounded-xl overflow-hidden shadow-md border border-gray-400">
              <iframe
                title="Kigali Map"
                src="https://www.google.com/maps?q=Kigali,Rwanda&output=embed"
                className="w-full h-80 border-0"
                loading="lazy"
              ></iframe>
            </div>
          </div>

          {/* BUSINESS HOURS */}
          <div className="border border-gray-200  rounded-xl p-6 bg-white">
            <h3 className="font-bold text-lg text-[#064a57] mb-4">
              Business Hours
            </h3>

            <div className="space-y-2 text-sm text-gray-600">
              <div className="flex justify-between">
                <span>Monday - Friday:</span>
                <span>8:00 AM - 5:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Saturday:</span>
                <span>9:00 AM - 1:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Sunday:</span>
                <span>Closed</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
