import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

function Error() {
  return (
    <div className="py-10 bg-base-100 min-h-screen flex flex-col justify-center items-center">
      <div className="text-center">
        <p className="text-base font-semibold text-red-500">404</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-green-400 sm:text-5xl">
          Page not found
        </h1>
        <p className="mt-4 text-base leading-7 text-gray-600">
          Sorry, we couldn&apos;t find the page you&apos;re looking for.
        </p>

        <div className="mt-6 flex items-center justify-center gap-x-4">
          <Link
            to="/"
            className="inline-flex items-center bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition text-sm font-semibold"
          >
            <ArrowLeft size={16} className="mr-2" />
            Go back
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Error;
