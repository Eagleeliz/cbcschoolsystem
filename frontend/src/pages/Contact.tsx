import { useForm } from "react-hook-form";
import { toast, Toaster } from "sonner";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    console.log("Form Data:", data);
    toast.success("Message sent successfully!");
    reset();
  };

  return (
    <>
    <Navbar/>
    <section className="bg-gray-100 py-16 px-6 min-h-screen flex flex-col items-center justify-center">
      <Toaster position="top-center" richColors />
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-5xl bg-white rounded-2xl shadow-md shadow-blue-200 p-8 w-full"
      >
        <h2 className="text-4xl font-bold text-blue-600 text-center mb-4">
          Contact Us
        </h2>
        <p className="text-center text-lg text-gray-600 mb-10">
          Have questions or feedback? We'd love to hear from you.
        </p>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Contact Information */}
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <FaEnvelope className="text-blue-600 text-2xl" />
              <p className="text-gray-700">cbcinfor@gmail.com</p>
            </div>
            <div className="flex items-center gap-4">
              <FaPhone className="text-blue-600 text-2xl" />
              <p className="text-gray-700">+254 705135534</p>
            </div>
            <div className="flex items-center gap-4">
              <FaMapMarkerAlt className="text-blue-600 text-2xl" />
              <p className="text-gray-700">Nyahururu, Kenya</p>
            </div>

            <div className="mt-10">
              <img
                src="https://images.unsplash.com/photo-1665586510498-4d2e5d29e2f4?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=
                format&fit=crop&q=80&w=880"
                alt="School classroom"
                className="rounded-xl shadow-lg"
              />
            </div>
          </div>

          {/* Contact Form */}
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-5 bg-gray-50 rounded-xl p-6 shadow-inner"
          >
            <div>
              <label className="block text-gray-700 mb-2">Full Name</label>
              <input
                type="text"
                {...register("name", { required: true })}
                placeholder="Your Name"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
              />
              {errors.name && (
                <span className="text-red-500 text-sm">Name is required</span>
              )}
            </div>

            <div>
              <label className="block text-gray-700 mb-2">Email</label>
              <input
                type="email"
                {...register("email", { required: true })}
                placeholder="you@example.com"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
              />
              {errors.email && (
                <span className="text-red-500 text-sm">Email is required</span>
              )}
            </div>

            <div>
              <label className="block text-gray-700 mb-2">Message</label>
              <textarea
                {...register("message", { required: true })}
                placeholder="Type your message here..."
                rows={5}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
              ></textarea>
              {errors.message && (
                <span className="text-red-500 text-sm">
                  Message is required
                </span>
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 hover:shadow-blue-400 shadow-md transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </motion.div>
    </section>
    <Footer/>
    </>
  );
};

export default Contact;
