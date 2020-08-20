const {repair, fail, success, get} = require('./enhancer.js');

// test away!
describe("enchancer", () => {
    describe("repair(item) method that accepts an item object and returns a new item with the durability restored to 100", () => {
        it("Should accept an object that return durability = 100 ", () => {
            expect(repair({
                name: "game1",
                enhancement: 20,
                durability: 0-100,
            }))
            .toEqual({
                name: "game1",
                enhancement: 20,
                durability:100,
            });
        });
    });
    describe("success(item) method that accepts an item object and returns a new item object modified according to the rules defined by the client for enhancement success", () => {
        it("The item's should enhancement increased by 1", () => {
            
            let newItem = {
                name: "game1",
                enhancement: 10,
                durability:100,
            };
            let successed = success(newItem)
            let expectation = newItem.enhancement+1;
            expect(successed.enhancement).toBe(expectation)
        
        })
        it("If the item enhancement level is 20, the enhancement level is not changed.", () => {
            let newItem = {
                name: "game1",
                enhancement: 20,
                durability:100,
            };
            let successed = success(newItem)
            expect(successed.enhancement).toBe(20)
        })

        it("The durability of the item is not changed.", () => {
            let newItem = {
                name: "game1",
                enhancement: 20,
                durability:100,
            };
            let successed = success(newItem)
            expect(newItem.durability).toBe(successed.durability)
        })
    })  
    describe("a fail(item) method that accepts an item object and returns a new item object modified according to the rules defined by the client for enhancement failure.", () => {
       it("If the item's enhancement is less than 15, the durability of the item is decreased by 5.", () => {
            let newItem = {
                name: "game1",
                enhancement: 10,
                durability:100,
            };
            let failed = fail(newItem);
            let expectation = newItem.durability - 5
            expect(failed.durability).toBe(expectation)
       })
       it("If the item's enhancement is 15 or more, the durability of the item is decreased by 10", () => {
            let newItem = {
                name: "game1",
                enhancement: 15,
                durability:100,
            };
            let failed = fail(newItem);
            let expectation = newItem.durability - 10;

            expect(failed.durability).toBe(expectation);
        })
        it("If the item's enhancement level is greater than 16, the enhancement level decreases by 1 (17 goes down to 16, 18 goes down to 17).", () => {
            let newItem = {
                name: "game1",
                enhancement: 17,
                durability:100,
            };
            let failed = fail(newItem);

            expect(failed.enhancement).not.toBe(enhancement);
        })
    })
})  
