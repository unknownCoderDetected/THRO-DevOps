import LearnExpenseService from "../../services/LearnExpenseService";
import {PersonalAttitudeOptions} from "../../validators/const/PersonalAttitudeOptions";
import {TheoryAmountOptions} from "../../validators/const/TheoryAmountOptions";
import {ExamTypeOptions} from "../../validators/const/ExamTypeOptions";

const learnExpenseService: LearnExpenseService = new LearnExpenseService();

describe('LearnExpenseService Test', () => {
    test('getPersonalAttitudeFactor', () => {
       const demotivatedFactor = learnExpenseService.getPersonalAttitudeFactor(PersonalAttitudeOptions.DEMOTIVATED);
       const motivatedFactor = learnExpenseService.getPersonalAttitudeFactor(PersonalAttitudeOptions.MOTIVATED);
       const excitedFactor = learnExpenseService.getPersonalAttitudeFactor(PersonalAttitudeOptions.EXCITED);
       expect(demotivatedFactor).toBe(1.5);
       expect(motivatedFactor).toBe(1.0);
       expect(excitedFactor).toBe(0.5);
    });
    test('getTheoryAmountFactor', () => {
       const lowFactor = learnExpenseService.getTheoryAmountFactor(TheoryAmountOptions.LOW);
       const mediumFactor = learnExpenseService.getTheoryAmountFactor(TheoryAmountOptions.MEDIUM);
       const highFactor = learnExpenseService.getTheoryAmountFactor(TheoryAmountOptions.HIGH);
       expect(lowFactor).toBe(0.5);
       expect(mediumFactor).toBe(1.0);
       expect(highFactor).toBe(1.5);
    });
    test('getExamTypeFactor', () => {
        const writtenFactor = learnExpenseService.getExamTypeFactor(ExamTypeOptions.WRITTEN);
        const oralFactor = learnExpenseService.getExamTypeFactor(ExamTypeOptions.ORAL);
        expect(writtenFactor).toBe(1.0);
        expect(oralFactor).toBe(1.5);
    })
})