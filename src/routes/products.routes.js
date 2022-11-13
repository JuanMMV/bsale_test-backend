import { Router } from "express";
import {
  getProducts,
  getCategories,
  getProductsForCategory,
  getProductsForName,
} from "../controllers/products.controller.js";

const router = Router();

router.get("/", getProducts);

router.get("/categories",getCategories)

router.get("/:category", getProductsForCategory);

router.post("/search/name", getProductsForName);

export default router;
