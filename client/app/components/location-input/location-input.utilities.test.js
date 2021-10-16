const location_input_utilities = require("./location-input.utilities")
// @ponicode
describe("location_input_utilities.validate", () => {
    test("0", () => {
        let callFunction = () => {
            location_input_utilities.validate("Elio")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            location_input_utilities.validate("elio@example.com")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            location_input_utilities.validate("t")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            location_input_utilities.validate(" ")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            location_input_utilities.validate("_")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            location_input_utilities.validate(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})
