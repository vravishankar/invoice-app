import express from 'express'
import controller from './customer-controller'

const router = express.Router();
//router.get('/', controller.customer_list)
router.route('/')
    .get((...args) => controller.find(...args))
    .post((...args) => controller.create(...args));

router.route('/:id')
    .get((...args) => {
        controller.findById(...args)
        console.log(...args)
    })
    .put((...args) => controller.update(...args))
    .delete((...args) => controller.remove(...args));

export default router;