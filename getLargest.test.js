

const getLargest = require("./getLargest");

describe("getLargest", () => {

    test("getLargest is a function", () =>{
        expect(typeof getLargest).toBe("function");
    })
    // console.log(getLargest);

    test("getLargest returns the largest value", () =>{
        const result = getLargest(1, 2, 3);

        expect(result).toEqual(3);
    })

    describe("It handles normal inputs successfully", () =>{

        each([
            [[1, 2, 3], 3]
            [[9, 8, 7], 9]
            [[12, 36, 19], 36]
        ]).test("", (arr, expected) => {
            expect(getLargest(arr).toEqual(expected));
        })

        //_____________same as____________

        // test("getLargest returns the largest value", () =>{
        //     const result = getLargest(1, 2, 3);
        //     expect(result).toEqual(3);
        // })

        // test("getLargest returns the largest value", () =>{
        //     const result = getLargest(1, 2, 3);
        //     expect(result).toEqual(3);
        // })
    })
})
