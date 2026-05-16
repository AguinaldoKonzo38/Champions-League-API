import { Router } from "express";
import * as playersController from "../controller/players-controller.js";
import * as clubsController from "../controller/club-controller.js";

const router = Router()

router.get("/players", 
    playersController.getPlayer)

router.get("/players/:id", playersController.getPlayerById)

router.post("/players", playersController.postPlayer)

router.delete("/players/:id", playersController.deletePlayer)

router.patch("/players/:id", playersController.updatePlayer)

router.get("/clubs",clubsController.getClubs)

export default router