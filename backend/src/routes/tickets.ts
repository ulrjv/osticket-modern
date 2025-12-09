import { Router } from 'express';
import * as ticketsController from '../controllers/ticketsController';

const router = Router();

router.get('/', ticketsController.getTickets);
router.post('/bulk-update', ticketsController.bulkUpdateTickets);
router.get('/export', ticketsController.exportTickets);

export default router;
