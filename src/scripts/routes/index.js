import express from 'express';
import customerRoutes from '../models/customer/customer-router';

const router = express.Router();

router.get('/health', (req, res) => {
    res.send('OK')
})

router.use('/customers', customerRoutes);
//router.use('orders', orderRoutes);

export default router;