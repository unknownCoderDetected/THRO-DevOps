import LearnExpenseParameters from '../models/LearnExpenseParameters';
import { PersonalAttitudeOptions } from '../validators/const/PersonalAttitudeOptions';
import { ExamTypeOptions } from '../validators/const/ExamTypeOptions';
import { TheoryAmountOptions } from '../validators/const/TheoryAmountOptions';

export default class LearnExpenseService {

    public calculate(learnExpenseParameters: LearnExpenseParameters): number|boolean {
        const theoryAmountFactor = this.getTheoryAmountFactor(learnExpenseParameters.theoryAmount);
        const examTypeFactor = this.getExamTypeFactor(learnExpenseParameters.examType);
        const personalAttitudeFactor = this.getPersonalAttitudeFactor(learnExpenseParameters.personalAttitude);
        const totalReadTime = learnExpenseParameters.lectureScriptCount / 6;
        const completeFactor = (theoryAmountFactor + examTypeFactor + personalAttitudeFactor) / 3;
        return totalReadTime * completeFactor;
    }

    public getPersonalAttitudeFactor(personalAttitude: string): number {
        switch (personalAttitude) {
            case PersonalAttitudeOptions.DEMOTIVATED:
                return 1.5;
            case PersonalAttitudeOptions.MOTIVATED:
                return 1.0;
            case PersonalAttitudeOptions.EXCITED:
                return 0.5;
        }
    }

    public getTheoryAmountFactor(theoryAmount: string): number {
        switch (theoryAmount) {
            case TheoryAmountOptions.LOW:
                return 0.5;
            case TheoryAmountOptions.MEDIUM:
                return 1.0;
            case TheoryAmountOptions.HIGH:
                return 1.5;
        }
    }

    public getExamTypeFactor(examType: string): number {
        switch (examType) {
            case ExamTypeOptions.WRITTEN:
                return 1.0;
            case ExamTypeOptions.ORAL:
                return 1.5;
        }
    }

}