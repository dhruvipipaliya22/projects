import multer from "multer";
import fs from "fs";
import path from "path";

const uploadsDir = path.join(process.cwd(), "uploads");
if (!fs.existsSync(uploadsDir)) {
    fs.mkdirSync(uploadsDir, { recursive: true });
}

const storage = multer.diskStorage(
    {
        destination: (req, file, cd) => {
            cd(null, uploadsDir)
        },
        filename: (req, file, cd) => {
            cd(null, Date.now() + '_' + file.originalname)
        }
    }
);

const fileFilter = (req, file, cd) => {
    if (file.mimetype.startsWith("image/")) cd(null, true);
    else cd(new Error("Only image allowed"), false);
};

export const upload = multer({ storage, fileFilter });