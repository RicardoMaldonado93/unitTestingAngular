import { incrementNumber, divideNumbers } from "./number";

describe("Pruebas unitarias con 'Number'", ()=>{
    
    it("verificamos que si incrementamos un numero n sea n+1",()=>{
        const numberTest = 50;
        const result = incrementNumber(numberTest);

        expect( result ).toEqual(numberTest + 1);
    });

    it("verificamos que si incrementamos un numero n y este sea mayor a 100, retorne 100",()=>{
        const numberTest = 150;
        const result = incrementNumber(numberTest);

        expect( result ).toEqual(100);
    });

    it("verificamos que si dividimos un nro A menor al B este retorne un numero menor a 1 ",()=>{
        const numberA = 7;
        const numberB = 8;
        const result = divideNumbers(numberA,numberB);

        expect( result ).toBeLessThan(1);
    });

    it("verificamos que si dividimos un nro A mayor al B este retorne un numero mayor a 1 ",()=>{
        const numberA = 8;
        const numberB = 7;
        const result = divideNumbers(numberA,numberB);

        expect( result ).toBeGreaterThan(1);
    });

    it("verificamos que si dividimos un nro A por un B igual a 0 este de ERROR",()=>{
        const numberA = 8;
        const numberB = 0;
        const result = divideNumbers(numberA,numberB);

        expect( result ).toBe("ERROR!!!");
    });
});