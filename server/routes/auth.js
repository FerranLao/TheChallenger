import express from "express";
import {
  signUp,
  login,
  userConfirmation,
  autoLogin
} from "../controllers/auth";
// import upload from "../cloudinary/cloudinary";

const router = express.Router();

router.get("/confirm/:validationCode", userConfirmation);

//Cuando front este listo añadir middleware upload.single("photo") para subir foto de perfil
router.post("/signUp", signUp);

router.post("/login", login);

router.post("/autolog", autoLogin);


module.exports = router;
