import { Router } from "express";
const router = Router();

import * as propertyCtrl from "../controllers/property.controller";
import { authJwt } from "../middlewares";

router.get("/", propertyCtrl.getProperties);

router.get("/:propertyId", propertyCtrl.getPropertyById);

router.post(
  "/",
  [authJwt.verifyToken, authJwt.isModerator],
  propertyCtrl.createProperty
);

router.put(
  "/:propertyId",
  [authJwt.verifyToken, authJwt.isModerator],
  propertyCtrl.updatePropertyById
);

router.delete(
  "/:productId",
  [authJwt.verifyToken, authJwt.isAdmin],
  propertyCtrl.deletePropertyById
);

export default router;
