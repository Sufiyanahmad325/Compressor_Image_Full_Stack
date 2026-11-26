
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10 px-4">
      <div className="max-w-7xl mx-auto">

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">

          {/* Brand */}
          <div>
            <h2 className="text-2xl font-bold text-purple-400">
              Compressify
            </h2>

            <p className="text-gray-400 mt-4 leading-7">
              Compress your images quickly and easily.
              Reduce file size while maintaining good image quality.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">
              Quick Links
            </h3>

            <div className="flex flex-col gap-3 text-gray-400">
              <Link to="/" className="hover:text-purple-400 transition">
                Home
              </Link>

              <Link to="/about" className="hover:text-purple-400 transition">
                About
              </Link>

              <Link to="/contact" className="hover:text-purple-400 transition">
                Contact
              </Link>
            </div>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold mb-4">
              Get In Touch
            </h3>

            <p className="text-gray-400">
              Have questions or suggestions?
            </p>

            <Link
              to="/contact"
              className="inline-block mt-3 text-purple-400 hover:text-purple-300 transition"
            >
              Contact Us →
            </Link>
          </div>

        </div>

        <div className="border-t border-gray-700 mt-10 pt-6 text-center">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Compressify. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
