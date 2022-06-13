import LearnExpenseParameters from "../models/LearnExpenseParameters";
import {PersonalAttitudeOptions} from "./const/PersonalAttitudeOptions";
import {TheoryAmountOptions} from "./const/TheoryAmountOptions";
import {ExamTypeOptions} from "./const/ExamTypeOptions";

export default class LearnExpenseParametersValidator {
    public static validate(learnExpenseParameters: LearnExpenseParameters): boolean {
        const validPersonalAttitude = Object.values(PersonalAttitudeOptions).includes(learnExpenseParameters.personalAttitude);
        const validTheoryAmount = Object.values(TheoryAmountOptions).includes(learnExpenseParameters.theoryAmount);
        const validExamType = Object.values(ExamTypeOptions).includes(learnExpenseParameters.examType);
        const validLectureScriptCount = learnExpenseParameters.lectureScriptCount !== null
            && learnExpenseParameters.lectureScriptCount > 0;
        return validExamType && validPersonalAttitude && validTheoryAmount && validLectureScriptCount;
    }
}