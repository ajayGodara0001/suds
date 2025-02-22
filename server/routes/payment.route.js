import express from "express";
import { authenticate } from "../middleware/authenticate.js";
import { createPaymentOrder, getPayments, verifyPayment } from "../controller/payment.controller.js";
const router = express.Router();


router.post('/create-order',authenticate, createPaymentOrder)
router.post('/verify-payment', authenticate, verifyPayment )
router.get('/get-payments', authenticate, getPayments )

export default  router