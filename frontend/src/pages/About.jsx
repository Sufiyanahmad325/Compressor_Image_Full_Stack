import Navbar from "../components/Navbar";

function About() {
  return (
    <>
    <Navbar/>
    <section className="min-h-screen bg-gray-50 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-900">
          About Compressify
        </h1>

        <p className="text-center text-gray-600 mt-6 max-w-2xl mx-auto">
          Compressify helps you reduce image file sizes quickly and easily
          while maintaining good image quality.
        </p>

        <div className="mt-12 bg-white rounded-2xl shadow-sm p-8">
          <h2 className="text-2xl font-semibold text-purple-600">
            Why Choose Compressify?
          </h2>

          <p className="text-gray-600 mt-4 leading-7">
            Upload your image, choose your desired target size,
            compress it and download your image easily.
          </p>
        </div>
      </div>
    </section>
    </>
  );
}

export default About;
