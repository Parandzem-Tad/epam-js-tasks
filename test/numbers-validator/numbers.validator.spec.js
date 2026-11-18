const {describe,it} = require('mocha');
const {expect} = require('chai');
const NumbersValidator=require('../../app/numbers-validator.js');

describe('Numbersvalidator class tests', ()=>{
    let validator;

    beforeEach(() => {
        validator= new NumbersValidator();
    });


    describe('isNumberEven method tests', ()=>{
        it('should return true if number is even',()=>{
            const result= validator.isNumberEven(4);
            expect(result).to.be.true;
        });

        it('should throw an error if input is not a number', ()=>{
            expect(()=>{
                validator.isNumberEven('4');
            }).to.throw('[4] is not of type "Number"');
        });
    });



    describe('isAllNumbers method tests', ()=>{
        it('should return true if all elements are numbers',()=>{
            const result=validator.isAllNumbers([1,2,3,4]);
            expect(result).to.be.true;
        });
        it('should throw an error if input is not an array', ()=>{
            expect(()=>{
                validator.isAllNumbers('1,2,3');
            }).to.throw('[1,2,3] is not an array');
        });
    });


    describe('getEvenNumbersFromArray method tests',()=>{
        it('should return array of even numbers',()=>{
            const result= validator.getEvenNumbersFromArray([1,2,3,4,5,6]);
            expect(result).to.eql([2,4,6]);
        });

        it('should throw an error if getEvenNumbersFromArray is called with invalid data', ()=>{
            expect(()=>{
                validator.getEvenNumbersFromArray('4');
            }).to.throw('[4] is not an array of "Numbers');
        });

    });



    describe('isInteger method tests', ()=>{
        it('should return true if number is an integer', ()=>{
            const result= validator.isInteger(5);
            expect(result).to.be.true;
        });

        it('should throw an error if input is not a number', ()=>{
            expect(()=>{
                validator.isInteger('5');
            }).to.throw('is not a number');
        });

    });


});