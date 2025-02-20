import express from "express";
import { authenticate } from "../middleware/authenticate.js";
import  { createOrder, getUserOrders } from "../controller/order.controller.js";
const router = express.Router();



router.post('/order', authenticate, createOrder)
router.get('/order', authenticate, getUserOrders)

export default  router