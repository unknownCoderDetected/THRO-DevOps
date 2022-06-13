import LearnExpenseParametersValidator from "../../validators/LearnExpenseParametersValidator";

describe('Testing LearnExpenseParametersValidators', () => {
    test('Invalid Personal Attitude', () => {
       const learnExpenseParameters = {
           examType: 'oral',
           lectureScriptCount: 100,
           personalAttitude: 'fail',
           theoryAmount: 'medium',
       };
       expect(LearnExpenseParametersValidator.validate(learnExpenseParameters)).toBe(false)
    });
    test('Valid Personal Attitude', () => {
       const learnExpenseParameters = {
           examType: 'oral',
           lectureScriptCount: 100,
           personalAttitude: 'motivated',
           theoryAmount: 'medium',
       };
       expect(LearnExpenseParametersValidator.validate(learnExpenseParameters)).toBe(true)
    });
    test('Invalid Exam Type', () => {
        const learnExpenseParameters = {
            examType: 'fail',
            lectureScriptCount: 100,
            personalAttitude: 'motivated',
            theoryAmount: 'medium',
        };
        expect(LearnExpenseParametersValidator.validate(learnExpenseParameters)).toBe(false)
    });
    test('Valid Exam Type', () => {
        const learnExpenseParameters = {
            examType: 'oral',
            lectureScriptCount: 100,
            personalAttitude: 'motivated',
            theoryAmount: 'medium',
        };
        expect(LearnExpenseParametersValidator.validate(learnExpenseParameters)).toBe(true)
    });
    test('Invalid Theory Amount', () => {
        const learnExpenseParameters = {
            examType: 'oral',
            lectureScriptCount: 100,
            personalAttitude: 'motivated',
            theoryAmount: 'fail',
        };
        expect(LearnExpenseParametersValidator.validate(learnExpenseParameters)).toBe(false)
    });
    test('Valid Theory Amount', () => {
        const learnExpenseParameters = {
            examType: 'oral',
            lectureScriptCount: 100,
            personalAttitude: 'motivated',
            theoryAmount: 'medium',
        };
        expect(LearnExpenseParametersValidator.validate(learnExpenseParameters)).toBe(true)
    });
    test('Invalid Lecture Script Count', () => {
        const learnExpenseParameters = {
            examType: 'oral',
            lectureScriptCount: -1,
            personalAttitude: 'motivated',
            theoryAmount: 'medium',
        };
        expect(LearnExpenseParametersValidator.validate(learnExpenseParameters)).toBe(false)
    });
    test('Valid Lecture Script Count', () => {
        const learnExpenseParameters = {
            examType: 'oral',
            lectureScriptCount: 100,
            personalAttitude: 'motivated',
            theoryAmount: 'medium',
        };
        expect(LearnExpenseParametersValidator.validate(learnExpenseParameters)).toBe(true)
    });
});