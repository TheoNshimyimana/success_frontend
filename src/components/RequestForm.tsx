import React from "react";

export default function RequestServiceForm() {
  return (
    <div className="w-full flex flex-col  items-center py-10 px-4">
      <h1 className="text-3xl font-bold mb-2 text-center">Request a Service</h1>
      <p className="text-gray-600 mb-8 text-center max-w-xl">
        Submit your request and our team will get back to you within 24 hours.
      </p>

      <div className="w-full max-w-3xl bg-gray-100 shadow-md rounded-2xl border-l-4 border-l-[#0D7377] p-8">
        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Full Name */}
          <div className="flex flex-col">
            <label className="font-medium mb-1">Full Name *</label>
            <input
              type="text"
              className="border border-slate-300 rounded-xl p-3 focus:outline-none focus:ring focus:ring-teal-300"
              placeholder="Your name"
              required
            />
          </div>

          {/* Email */}
          <div className="flex flex-col">
            <label className="font-medium mb-1">Email *</label>
            <input
              type="email"
              className="border border-slate-300 rounded-xl p-3 focus:outline-none focus:ring focus:ring-teal-300"
              placeholder="your@email.com"
              required
            />
          </div>

          {/* Phone Number */}
          <div className="flex flex-col">
            <label className="font-medium mb-1">Phone Number *</label>
            <input
              type="text"
              className="border border-slate-300 rounded-xl p-3 focus:outline-none focus:ring focus:ring-teal-300"
              placeholder="+250 7XX XXX XXX"
              required
            />
          </div>

          {/* Organization */}
          <div className="flex flex-col">
            <label className="font-medium mb-1">Organization</label>
            <input
              type="text"
              className="border border-slate-300 rounded-xl p-3 focus:outline-none focus:ring focus:ring-teal-300"
              placeholder="Your organization (optional)"
            />
          </div>

          {/* Service Type */}
          <div className="flex flex-col md:col-span-2">
            <label className="font-medium mb-1">Service Type *</label>
            <select
              className="border border-slate-300 rounded-xl p-3 focus:outline-none focus:ring focus:ring-teal-300"
              required
            >
              <option value="">Select a service</option>
              <option value="consulting">Priting & Copying</option>
              <option value="development">Mobile Money & Banking</option>
              <option value="design">E-Govement Services</option>
              <option value="design">Data Entry & Analysis</option>
              <option value="design">Other</option>
            </select>
          </div>

          {/* Message */}
          <div className="flex flex-col md:col-span-2">
            <label className="font-medium mb-1">Message</label>
            <textarea
              rows={5}
              className="border border-slate-300 rounded-xl p-3 focus:outline-none focus:ring focus:ring-teal-300"
              placeholder="Tell us more about your request..."
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="md:col-span-2 flex justify-center mt-4">
            <button
              type="submit"
              className="bg-[#0D7377] text-white w-full py-2 px-10 rounded-xl hover:bg-teal-800 transition-all"
            >
              Submit Request
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
