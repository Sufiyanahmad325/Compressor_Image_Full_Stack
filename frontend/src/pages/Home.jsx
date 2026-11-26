
import { useState } from "react";
import Navbar from "../components/Navbar";
import ImageUploader from "../components/ImageUploader";
import CompressionOptions from "../components/CompressionOptions";

function Home() {
  const [targetSize, setTargetSize] = useState(100);
  const [customSize, setCustomSize] = useState("");

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

      <ImageUploader />

      <CompressionOptions
        targetSize={targetSize}
        setTargetSize={setTargetSize}
        customSize={customSize}
        setCustomSize={setCustomSize}
      />
    </>
  );
}

export default Home;
