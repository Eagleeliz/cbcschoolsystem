import { useState } from "react";
import registerImage from "../assets/register2.jpg";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { FaEye, FaEyeSlash } from "react-icons/fa";

type userRegisterForm = {
  firstName: string;
  lastName: string;
  contactPhone: string;
  email: string;
  password: string;
  confirmPassword: string;
  address: string;
};

const Register = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<userRegisterForm>();

  const passwordValue = watch("password");

  const onSubmit = (data: userRegisterForm) => {
    console.log("Form submitted:", data);

    // Simulate frontend-only success
    setMessage("✅ Registration successful! Redirecting to login...");
    setTimeout(() => {
      navigate("/login");
    }, 1500);
  };

  return (
    <>
      <Navbar />
      <section className="w-screen min-h-screen bg-sky-50 px-4 pt-5">
        <div className="bg-white rounded-xl shadow-md w-full max-w-[1000px] min-h-[65vh] grid grid-cols-1 md:grid-cols-2 overflow-hidden px-5 py-3 mx-auto items-center">
          {/* Left Image */}
    {/* Left Image (Visible on all screens, but styled differently) */}
<div className="block md:hidden mb-6">
  <img
    src={registerImage}
    alt="Register Illustration"
    className="w-full max-h-[250px] object-cover rounded-lg shadow-md"
  />
</div>

<div className="hidden md:block">
  <img
    src={registerImage}
    alt="Register Illustration"
    className="w-[500px] h-[500px] object-cover"
  />
</div>


          {/* Right Form */}
          <div className="p-8 md:p-12">
            <h2 className="text-3xl font-bold text-center text-blue-600 mb-6">
              Create Account
            </h2>

            {message && (
              <p
                className={`text-center mb-4 font-medium ${
                  message.startsWith("✅")
                    ? "text-green-600"
                    : "text-red-600"
                }`}
              >
                {message}
              </p>
            )}

            <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
              {/* First Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  First Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your first name"
                  className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-rose-500 text-gray-800 placeholder:text-gray-400"
                  {...register("firstName", {
                    required: "First Name is required",
                    minLength: {
                      value: 2,
                      message: "First Name must be at least 2 characters",
                    },
                  })}
                />
                {errors.firstName && (
                  <span className="text-red-500 text-sm">
                    {errors.firstName.message}
                  </span>
                )}
              </div>

              {/* Last Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Last Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your last name"
                  className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-rose-500 text-gray-800 placeholder:text-gray-400"
                  {...register("lastName", { required: "Last Name is required" })}
                />
                {errors.lastName && (
                  <span className="text-red-500 text-sm">
                    {errors.lastName.message}
                  </span>
                )}
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-rose-500 text-gray-800 placeholder:text-gray-400"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Invalid email format",
                    },
                  })}
                />
                {errors.email && (
                  <span className="text-red-500 text-sm">
                    {errors.email.message}
                  </span>
                )}
              </div>

              {/* Contact Phone */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Contact Phone
                </label>
                <input
                  type="tel"
                  placeholder="Enter your contact phone"
                  className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-rose-500 text-gray-800 placeholder:text-gray-400"
                  {...register("contactPhone", {
                    required: "Contact Phone is required",
                  })}
                />
                {errors.contactPhone && (
                  <span className="text-red-500 text-sm">
                    {errors.contactPhone.message}
                  </span>
                )}
              </div>

              {/* Address */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Address
                </label>
                <input
                  type="text"
                  placeholder="e.g., 842 Nyahururu"
                  className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-rose-500 text-gray-800 placeholder:text-gray-400"
                  {...register("address", {
                    required: "Address is required",
                    minLength: {
                      value: 5,
                      message: "Address must be at least 5 characters",
                    },
                  })}
                />
                {errors.address && (
                  <span className="text-red-500 text-sm">
                    {errors.address.message}
                  </span>
                )}
              </div>

              {/* Password */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Password
                </label>
                <div className="flex items-center gap-2">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    className="flex-1 border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-rose-500 text-gray-800 placeholder:text-gray-400"
                    {...register("password", { required: "Password is required" })}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword((prev) => !prev)}
                    className="text-gray-700 hover:text-rose-500"
                  >
                    {showPassword ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
                  </button>
                </div>
                {errors.password && (
                  <span className="text-red-500 text-sm">
                    {errors.password.message}
                  </span>
                )}
              </div>

              {/* Confirm Password */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Confirm Password
                </label>
                <div className="flex items-center gap-2">
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="Confirm your password"
                    className="flex-1 border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-rose-500 text-gray-800 placeholder:text-gray-400"
                    {...register("confirmPassword", {
                      required: "Confirm Password is required",
                      validate: (value) =>
                        value === passwordValue || "Passwords do not match",
                    })}
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword((prev) => !prev)}
                    className="text-gray-700 hover:text-rose-500"
                  >
                    {showConfirmPassword ? (
                      <FaEyeSlash size={20} />
                    ) : (
                      <FaEye size={20} />
                    )}
                  </button>
                </div>
                {errors.confirmPassword && (
                  <span className="text-red-500 text-sm">
                    {errors.confirmPassword.message}
                  </span>
                )}
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-rose-700 transition duration-300"
              >
                Register
              </button>
            </form>

            <p className="text-sm text-center mt-4 text-gray-700">
              Already have an account?{" "}
              <a
                href="/login"
                className="text-blue-600 font-semibold hover:underline"
              >
                Login here
              </a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Register;
