
function CompressionOptions({ targetSize, setTargetSize, customSize, setCustomSize }) {
  const sizes = [20, 50, 100, 200, 500];

  return (
    <div className="w-full max-w-2xl mx-auto mt-8 px-4">
      <div className="bg-white border border-gray-200 rounded-2xl p-5 sm:p-8">

        <h2 className="text-xl font-semibold text-gray-800">
          Choose Target Size
        </h2>

        <p className="text-sm text-gray-500 mt-2">
          Select your desired image size in KB.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-6">
          {sizes.map((size) => (
            <button
              key={size}
              onClick={() => setTargetSize(size)}
              className={`py-3 rounded-lg border font-medium transition ${
                targetSize === size
                  ? "bg-purple-600 text-white border-purple-600"
                  : "bg-white text-gray-700 border-gray-300 hover:border-purple-500"
              }`}
            >
              {size} KB
            </button>
          ))}

          <button
            onClick={() => setTargetSize("custom")}
            className={`py-3 rounded-lg border font-medium transition ${
              targetSize === "custom"
                ? "bg-purple-600 text-white border-purple-600"
                : "bg-white text-gray-700 border-gray-300 hover:border-purple-500"
            }`}
          >
            Custom
          </button>
        </div>

        {targetSize === "custom" && (
          <div className="mt-5">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Enter target size (KB)
            </label>

            <input
              type="number"
              min="1"
              value={customSize}
              onChange={(e) => setCustomSize(e.target.value)}
              placeholder="Example: 150"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-purple-500"
            />
          </div>
        )}

        <p className="text-xs text-gray-500 mt-4">
          Note: The final image size may vary slightly depending on image quality and dimensions.
        </p>

      </div>
    </div>
  );
}

export default CompressionOptions;
