import multer from "multer";
import { Request } from "express";
import path from "path";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const dest =
      file.fieldname === "profile_image"
        ? "public/uploads/profile-images"
        : "public/uploads/cover-images";
    cb(null, dest);
  },
  filename: function (req, file, cb) {
    const ext = path.extname(file.originalname);
    const uniqueName = `${Date.now()}-${Math.round(Math.random() * 1e9)}${ext}`;
    cb(null, uniqueName);
  },
});

const fileFilter = (
  req: Request,
  file: Express.Multer.File,
  cb: multer.FileFilterCallback
) => {
  const allowed = ["image/jpeg", "image/png", "image/jpg"];
  if (allowed.includes(file.mimetype)) cb(null, true);
  else cb(new Error("Wrong file format"));
};

export const imageUpload = multer({
  storage,
  fileFilter,
  limits: { fileSize: 10 * 1024 * 1024 }, // 10 MB
});
