import multer from "multer";
import cloudinary from "cloudinary";
import cloudinaryStorage from "multer-storage-cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

const storage = cloudinaryStorage({
  cloudinary,
  folder: "TheChallenger",
  allowedFormats: ["jpg", "png"],
  filename: (req, file, cb) => {
    cb(undefined, `User ${req.body.email}`);
  }
});

export default multer({ storage });
