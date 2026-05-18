import express from "express";

import {
  getMenuItems,
  addMenuItem,
  deleteMenuItem,
} from "../controllers/menuController.js";

const router = express.Router();

router.get("/", getMenuItems);

router.post("/", addMenuItem);

router.delete("/:id", deleteMenuItem);

export default router;