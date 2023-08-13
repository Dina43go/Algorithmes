let converterMap = [
    ["M" ,	1000],
    ["CM"	, 900],
    ["D" , 500],
    ["CD" ,	400],
    ["C" ,	100],
    ["XC" ,	90],
    ["L" ,	50],
    ["XL" ,	40],
    ["X" ,	10],
    ["IX" ,	9],
    ["V" ,	5],
    ["IV" ,	4],
    ["I" ,	1],
]
// reverse
converterMap = converterMap.reverse()

function multiplySring(n , code) {
    let sum = ""
    for(let i=0 ; i < n ; i++) {
        sum += code
    }
    return sum
}
  
export default function convertToRoman(num) {
    let idx = converterMap.length
    let output = ""
    let currentRomanCode = ""
    let currentRomanValue = 0
    let nextRomanCode = null
    let nextRomanValue = null;
    
    while(idx > 0) {
        idx--
        if(num == 0) break
    
        currentRomanCode = converterMap[idx][0]
        currentRomanValue = converterMap[idx][1]

        const nextIdx = idx - 1
        nextRomanValue = converterMap[nextIdx][1]
        nextRomanCode = converterMap[nextIdx][0]


        if(num > nextRomanValue && num < currentRomanValue || nextIdx == 0 && num < 4) { // 40 && 10 | 4 && 1
            currentRomanValue = nextRomanValue
            currentRomanCode = nextRomanCode
        }
        if(num < currentRomanValue) continue

        if(num == currentRomanValue) {
            output += currentRomanCode
            break
        } else if(num == nextRomanValue) {
            output += nextRomanCode
            break
        }

        let rest = num % currentRomanValue //8
        let nx = num / currentRomanValue
        nx = Math.floor(nx)


        output += multiplySring(nx , currentRomanCode)
        num = rest
    }
    return output;
}