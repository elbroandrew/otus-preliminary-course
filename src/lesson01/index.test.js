import { sumAndMultiplyOutput, strSum, sumOfInputNumbers } from './index.js';

describe('exercise 1 sumAndMultiplyOutput', () => {

    it("returns 'obj.sum=5' and 'obj.mul=6' for numbers 2 and 3", () => {
        let obj = sumAndMultiplyOutput(2, 3);

        expect(obj.sum).toBe(5);
        expect(obj.mul).toBe(6);
    });

    //it('returns false for strings "str1" and "str2"')
})