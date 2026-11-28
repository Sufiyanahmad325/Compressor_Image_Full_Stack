
import mongoose from "mongoose";

const compressionSchema = new mongoose.Schema(
    {
        originalSize: {
            type: Number,
            required: true
        },

        compressedSize: {
            type: Number,
            default: null
        },

        format: {
            type: String,
            enum: ["jpeg", "png", "webp"],
            required: true
        },

        targetSize: {
            type: Number,
            required: true
        },

        status: {
            type: String,
            enum: ["success", "failed"],
            default: "success"
        }
    },
    {
        timestamps: true
    }
);

const Compression = mongoose.model(
    "Compression",
    compressionSchema
);

export default Compression;
