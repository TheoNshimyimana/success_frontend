import { Phone, Mail, MapPin } from "lucide-react";
import Footer from "../components/Footer";
import ContactFormSection from "../components/ContactFormSection";

export default function ContactSection() {
  return (
    <>
      <section className="w-full">
        {/* TOP DARK HEADER */}
        <div className="bg-[#064a57] py-20">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-white text-4xl font-bold mb-4">Contact Us</h2>
            <p className="text-gray-200 max-w-xl">
              Get in touch with our team. We are here to help and answer any
              questions you may have.
            </p>
          </div>
        </div>

        {/* WHITE CARD SECTION */}
        <div className="bg-slate-50 py-20">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* PHONE */}
            <div className="border border-gray-200 bg-white rounded-xl p-8 text-center">
              <div className="w-14 h-14 mx-auto flex items-center justify-center bg-slate-200 rounded-lg mb-4">
                <Phone className="text-green-700 size-8 " />
              </div>
              <h3 className="font-bold text-[#00485C] text-lg">Phone</h3>
              <p className="text-green-700 font-semibold mt-2">
                +250 788 123 456
              </p>
            </div>

            {/* EMAIL */}
            <div className="border border-gray-200 bg-white rounded-xl p-8 text-center">
              <div className="w-14 h-14 mx-auto flex items-center justify-center bg-slate-200 rounded-lg mb-4">
                <Mail className="text-green-700 size-8 " />
              </div>
              <h3 className="font-bold text-[#00485C] text-lg">Email</h3>
              <p className="text-green-700 mt-2 font-semibold">info@stlab.rw</p>
            </div>

            {/* ADDRESS */}
            <div className="border border-gray-200 bg-white rounded-xl p-8 text-center">
              <div className="w-14 h-14 mx-auto flex items-center justify-center bg-slate-200 rounded-lg mb-4">
                <MapPin className="text-green-700 size-8 " />
              </div>
              <h3 className="font-bold text-[#00485C] text-lg">Address</h3>
              <p className="text-gray-600 font-semibold mt-2">Kigali, Rwanda</p>
            </div>
          </div>
        </div>
      </section>
      <ContactFormSection />
      <Footer />
    </>
  );
}
