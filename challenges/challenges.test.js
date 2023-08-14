import {expect , test , describe } from "vitest";
import rot13 from "./caesarsCipher.js";
import convertToRoman from "./romanNumeralConverter.js";
import checkCashRegister from "./cashRegister.js";
import palindrome from "./palindromeChecker.js";
import telephoneCheck from "./telephoneNumberValidator.js";

describe("ceasars Cipher Rot13" , function () {
    test("test 1", ()=> {
        expect(rot13("SERR PBQR PNZC")).toBe("FREE CODE CAMP")
    })
    test("test 2", ()=> {
        expect(rot13("SERR CVMMN!")).toBe("FREE PIZZA!")
    })
    test("test 3", ()=> {
        expect(rot13("SERR YBIR?")).toBe("FREE LOVE?")
    })
    test("test 4", ()=> {
        expect(rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.")).toBe("THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.")
    })
});



describe("Roman Converter XXIV" , function () {
    test("test 1", ()=> {
        expect(convertToRoman(2)).toBe("II")
    })
    test("test 2", ()=> {
        expect(convertToRoman(29)).toBe("XXIX")
    })
    test("test 3", ()=> {
        expect(convertToRoman(68)).toBe("LXVIII")
    })
    test("test 4", ()=> {
        expect(convertToRoman(1004)).toBe("MIV")
    })

    test("test 4", ()=> {
        expect(convertToRoman(3999)).toBe("MMMCMXCIX")
    })
})

describe("Palindrome checker" , function () {
    test("test 1", ()=> {
        expect(palindrome("_eye")).toBe(true)
    })
    test("test 2", ()=> {
        expect(palindrome("A man, a plan, a canal. Panama")).toBe(true)
    })
    test("test 3", ()=> {
        expect(palindrome("not a palindrome")).toBe(false)
    })

    test("test 4", ()=> {
        expect(palindrome("five|\_/|four") ).toBe(false)
    })
})

describe("Telephone numeral Validtor" , function () {
    test("test 1", ()=> {
        expect(telephoneCheck("1 555-555-5555")).toBe(true)
    })
    test("test 2", ()=> {
        expect(telephoneCheck("(555)555-5555")).toBe(true)
    })
    test("test 3", ()=> {
        expect(telephoneCheck("555-5555")).toBe(false)
    })

    test("test 4", ()=> {
        expect(telephoneCheck("1 555)555-5555")).toBe(false)
    })
})

describe("Cash Register", function() {
    test("test 1" , ()=> {
        expect(checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]))
        .toStrictEqual({status: "OPEN", change: [["QUARTER", 0.5]]})
    })

    test("test 2" , ()=> {
        expect(checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]))
        .toStrictEqual({status: "OPEN", change: [["TWENTY", 60], ["TEN", 20], ["FIVE", 15], ["ONE", 1], ["QUARTER", 0.5], ["DIME", 0.2], ["PENNY", 0.04]]})
    })

    test("test 1" , ()=> {
        expect(checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]))
        .toStrictEqual({status: "CLOSED", change: [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]})
    })
})