
import { useEffect, useState } from "react";

function ImageUploader() {
    const [image, setImage] = useState(null);
    const [preview, setPreview] = useState("");

    // Image preview URL create karna
    useEffect(() => {
        if (!image) {
            setPreview("");
            return;
        }

        const imageUrl = URL.createObjectURL(image);
        setPreview(imageUrl);

        // Purani preview URL cleanup karna
        return () => URL.revokeObjectURL(imageUrl);
    }, [image]);

    // Image select karna
    const handleImageChange = (e) => {
        const selectedImage = e.target.files[0];

        if (!selectedImage) return;

        const allowedTypes = [
            "image/jpeg",
            "image/png",
            "image/webp",
        ];

        if (!allowedTypes.includes(selectedImage.type)) {
            alert("Please select JPG, PNG or WebP image.");
            e.target.value = "";
            return;
        }

        setImage(selectedImage);
    };

    // Image remove karna
    const removeImage = () => {
        setImage(null);
    };

    return (
        <div className="w-full max-w-2xl mx-auto mt-10 px-4">

            <div className="bg-white border-2 border-dashed border-purple-300 rounded-2xl p-5 sm:p-8 text-center">

                {!image ? (
                    <>
                        <div className="text-5xl mb-4">📁</div>

                        <h2 className="text-xl sm:text-2xl font-semibold text-gray-800">
                            Upload Your Image
                        </h2>

                        <p className="text-sm text-gray-500 mt-2">
                            Select JPG, PNG or WebP image
                        </p>

                        <label className="inline-block mt-6 bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg cursor-pointer transition">
                            Choose Image

                            <input
                                type="file"
                                accept="image/jpeg,image/png,image/webp"
                                onChange={handleImageChange}
                                className="hidden"
                            />
                        </label>
                    </>
                ) : (
                    <>
                        <h2 className="text-xl font-semibold text-gray-800 mb-5">
                            Selected Image
                        </h2>

                        <img
                            src={preview}
                            alt="Selected preview"
                            className="max-h-64 max-w-full mx-auto rounded-lg object-contain"
                        />

                        <p className="text-sm text-gray-600 mt-4 break-all">
                            {image.name}
                        </p>

                        <p className="text-sm text-gray-500 mt-1">
                            Size: {(image.size / 1024).toFixed(2)} KB
                        </p>

                        <button
                            onClick={removeImage}
                            className="mt-5 bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-lg transition"
                        >
                            Remove Image
                        </button>
                    </>
                )}

            </div>
        </div>
    );
}

export default ImageUploader;
