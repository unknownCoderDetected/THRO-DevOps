import {Request, Response} from 'express';
import {autoInjectable} from 'tsyringe';
import LearnExpenseService from '../services/LearnExpenseService';
import LearnExpenseParameters from '../models/LearnExpenseParameters';
import LearnExpenseParametersValidator from '../validators/LearnExpenseParametersValidator';

@autoInjectable()
export default class LearnExpenseController {
    learnExpenseService: LearnExpenseService;

    constructor(learnExpenseService?: LearnExpenseService) {
        this.learnExpenseService = learnExpenseService;
    }

    validateInput = (request: Request, response: Response, next: any) => {
        const learnExpenseParameters: LearnExpenseParameters = request.body;
        const isValid = LearnExpenseParametersValidator.validate(learnExpenseParameters);
        if (isValid === false) {
            response.status(400).json('Validation failed has failed. Make sure you are following the API specification.');
            return;
        }
        next();
    }
    calculateLearnExpense = (request: Request, response: Response) => {
        const learnExpenseParameters: LearnExpenseParameters = request.body;
        const result = this.learnExpenseService.calculate(learnExpenseParameters);
        if (result === false) {
            return response.status(400).send();
        }
        response.status(200).json(result);
    }
}