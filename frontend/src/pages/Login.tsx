import { useState } from "react";
import loginImage from "../assets/login1.jpg";
import { useForm } from "react-hook-form";
import { toast, Toaster } from "sonner";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Navbar from "../components/Navbar";

type LoginForm = {
  email: string;
  password: string;
};

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm<LoginForm>();

  const onSubmit = (data: LoginForm) => {
    // Simulate checking credentials (no backend)
    if (data.email === "test@example.com" && data.password === "123456") {
      toast.success("Login successful!");
      setTimeout(() => {
        window.location.href = "/dashboard"; // mock redirect
      }, 1000);
    } else {
      toast.error("Invalid email or password!");
    }
  };

  return (
    <>
      <Toaster richColors position="top-right" />
      <Navbar />

      <section className="w-screen min-h-screen bg-sky-50 px-4 pt-16">
        <div
          className="bg-white rounded-xl shadow-md 
          w-full max-w-[1000px] min-h-[65vh] 
          grid grid-cols-1 md:grid-cols-2 
          overflow-hidden px-6 py-6 mx-auto items-center"
        >
          {/* Left Side Image */}
         {/* Left Side Image (Visible on all screens, but styled differently) */}
<div className="block md:hidden mb-6">
  <img
    src={loginImage}
    alt="Login Illustration"
    className="w-full max-h-[250px] object-cover rounded-lg shadow-md"
  />
</div>

<div className="hidden md:block">
  <img
    src={loginImage}
    alt="Login Illustration"
    className="h-full w-full object-cover"
  />
</div>


          {/* Right Side Form */}
          <div className="p-8 md:p-12">
            <h2 className="text-3xl font-bold text-center text-sky-600 mb-6">
              Login to Your Account
            </h2>

            <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Enter a valid email",
                    },
                  })}
                  className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-sky-200 text-gray-800 placeholder:text-gray-400"
                />
                {errors.email && (
                  <span className="text-red-500 text-sm">
                    {errors.email.message}
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
                    {...register("password", {
                      required: "Password is required",
                      minLength: {
                        value: 6,
                        message: "Password must be at least 6 characters",
                      },
                    })}
                    className="flex-1 border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-sky-200 text-gray-800 placeholder:text-gray-400"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword((prev) => !prev)}
                    className="text-gray-600 hover:text-sky-500"
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

              {/* Submit */}
              <button
                type="submit"
                className="w-full bg-sky-500 text-white py-3 rounded-lg font-semibold hover:bg-sky-700 transition duration-300"
              >
                Login
              </button>
            </form>

            <p className="text-sm text-center mt-4 text-gray-700">
              Don't have an account?{" "}
              <a
                href="/register"
                className="text-sky-600 font-semibold hover:underline"
              >
                Register here
              </a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
