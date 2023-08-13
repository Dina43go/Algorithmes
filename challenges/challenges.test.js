import {expect , test , describe } from "vitest";
import rot13 from "./caesarsCipher.js";
import convertToRoman from "./romanNumeralConverter.js";

describe("Rot13" , function () {
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