"use client";

import { Send } from "lucide-react";
import { useState } from "react";

export default function ContactFormSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);

  const WEB3FORM_API_KEY = "e36a5b0e-6d6c-4dfe-8998-489c6c8d3647"; // replace with your Web3Form API key

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setSuccess(null);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORM_API_KEY,
          ...formData,
        }),
      });

      const data = await res.json();
      if (data.success) {
        setSuccess("Message sent successfully!");
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
      } else {
        setSuccess("Failed to send message. Please try again.");
      }
    } catch (err) {
      console.error(err);
      setSuccess("An error occurred. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

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

          <form className="space-y-5" onSubmit={handleSubmit}>
            {/* Name */}
            <div>
              <label className="block text-sm font-medium mb-1">Name</label>
              <input
                type="text"
                name="name"
                placeholder="Your name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full border border-gray-200 bg-white rounded-lg px-4 py-2 focus:outline-none focus:ring-1 focus:ring-green-600"
              />
            </div>

            {/* Email & Phone */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-200 bg-white rounded-lg px-4 py-2 focus:outline-none focus:ring-1 focus:ring-green-600"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Phone</label>
                <input
                  type="text"
                  name="phone"
                  placeholder="+250 XXX XXX XXX"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full border border-gray-200 bg-white py-2 rounded-lg px-4 focus:outline-none focus:ring-1 focus:ring-green-600"
                />
              </div>
            </div>

            {/* Subject */}
            <div>
              <label className="block text-sm font-medium mb-1">Subject</label>
              <select
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full border border-gray-200 bg-white rounded-lg px-4 py-2 focus:outline-none focus:ring-1 focus:ring-green-600"
              >
                <option value="">Select a subject</option>
                <option value="ICT Services">ICT Services</option>
                <option value="Digital Training">Digital Training</option>
                <option value="Support">Support</option>
              </select>
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-medium mb-1">Message</label>
              <textarea
                name="message"
                rows={5}
                placeholder="Tell us about your inquiry..."
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full border border-gray-200 bg-white rounded-lg px-4 py-3 focus:outline-none focus:ring-1 focus:ring-green-600"
              />
            </div>

            {/* Button */}
            <button
              type="submit"
              disabled={submitting}
              className="w-full bg-[#3F9137] text-white py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-green-800 transition"
            >
              {submitting ? "Sending..." : "Send Message"} <Send size={16} />
            </button>

            {success && (
              <p className="text-center text-sm text-green-600 mt-2">
                {success}
              </p>
            )}
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

            <div className="rounded-xl overflow-hidden shadow-md border border-gray-400">
              <iframe
                title="Kigali Map"
                src="https://www.google.com/maps?q=Kigali,Rwanda&output=embed"
                className="w-full h-80 border-0"
                loading="lazy"
              ></iframe>
            </div>
          </div>

          <div className="border border-gray-200 rounded-xl p-6 bg-white">
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
