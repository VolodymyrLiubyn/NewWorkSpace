import { Router } from "express";

import InfoController from "../controllers/InfoController.js";

const router = new Router()

router.post('/posts', InfoController.create)
router.get('/posts', InfoController.getAll)
router.get('/posts/:id', InfoController.getOne)
router.put('/posts', InfoController.update)
router.delete('/posts/:id', InfoController.delete)

export default router;
