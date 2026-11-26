
import { useState } from "react";
import Navbar from "../components/Navbar";
import ImageUploader from "../components/ImageUploader";
import CompressionOptions from "../components/CompressionOptions";

function Home() {
  const [targetSize, setTargetSize] = useState(100);
  const [customSize, setCustomSize] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);

  const handleCompress = () => {
    if (!selectedImage) {
      alert("Please select an image first.");
      return;
    }

    const finalSize =
      targetSize === "custom" ? customSize : targetSize;

    if (!finalSize || Number(finalSize) <= 0) {
      alert("Please enter a valid target size.");
      return;
    }

    console.log("Selected Image:", selectedImage);
    console.log("Target Size:", finalSize, "KB");
  };

  return (
    <>
      <Navbar />

      <section className="text-center py-10 px-4">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">
          Compress Images Easily
        </h1>

        <p className="mt-3 text-gray-600">
          Reduce image size without losing quality.
        </p>
      </section>

      <ImageUploader
        image={selectedImage}
        setImage={setSelectedImage}
      />

      <CompressionOptions
        targetSize={targetSize}
        setTargetSize={setTargetSize}
        customSize={customSize}
        setCustomSize={setCustomSize}
      />

      <div className="text-center mt-8 mb-10 px-4">
        <button
          onClick={handleCompress}
          className="bg-purple-600 hover:bg-purple-700 text-white font-semibold px-8 py-3 rounded-lg transition"
        >
          Compress Image
        </button>
      </div>
    </>
  );
}

export default Home;
