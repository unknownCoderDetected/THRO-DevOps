import { Router } from 'express';
import LearnExpenseController from '../controllers/LearnExpenseController';

const learnExpenseRouter = Router()
const learnExpenseController = new LearnExpenseController();

learnExpenseRouter.use('/calculate', learnExpenseController.validateInput);
learnExpenseRouter.post('/calculate', learnExpenseController.calculateLearnExpense);

export default learnExpenseRouter;