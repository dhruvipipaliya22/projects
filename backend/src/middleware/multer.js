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
            const uniqueSuffix = Date.now()+"-"+Math.round(Math.random()*1e9);
            cd(null,uniqueSuffix+path.extname(file.originalname));
        },
    }
);

export const upload = multer({ storage});