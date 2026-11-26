import Navbar from "../components/Navbar";

function Contact() {
  return (
    <>
    <Navbar/>
    <section className="min-h-screen bg-gray-50 py-5 px-4">
      <div className="max-w-3xl mx-auto">

        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-gray-900">
            Contact Us
          </h1>

          <p className="text-gray-600 mt-4">
            Have a question or suggestion? We'd love to hear from you.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 sm:p-8">

          <form className="space-y-5">
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Your Name
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-purple-500"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Email Address
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-purple-500"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Subject
              </label>
              <input
                type="text"
                placeholder="Enter subject"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-purple-500"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Message
              </label>
              <textarea
                rows="5"
                placeholder="Write your message..."
                className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-purple-500 resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 rounded-lg transition"
            >
              Send Message
            </button>
          </form>

        </div>
      </div>
    </section>
    </>
  );
}

export default Contact;
