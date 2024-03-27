import { Router } from "express";

import {  findUserById, updateUserNow } from "../controllers/users.controller.js";
const router = Router();

router.get(
  "/:idUser", findUserById
);
router.put("/premium/:uid", updateUserNow);


export default router;