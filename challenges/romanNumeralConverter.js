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
    let roman = ""
    let current = 0
    let next = null;
    let currentCode = ""
    let nextCode = null
    
    while(idx > 0) {
        idx--
        if(num == 0) break
    
        current = converterMap[idx][1]
        currentCode = converterMap[idx][0]

        const nextIdx = idx -1
    
        next = converterMap[nextIdx][1]
        nextCode = converterMap[nextIdx][0]


        if(num > next && num < current || nextIdx == 0 && num < 4) { // 40 && 10 | 4 && 1
        current = next
        currentCode = nextCode
        }
        if(num < current) continue

        if(num == current) {
            roman += currentCode
            break
        } else if(num == next) {
            roman += nextCode
            break
        }

        let rest = num % current //8
        let nx = num / current
        nx = Math.floor(nx)


        roman += multiplySring(nx , currentCode)
        num = rest
    }
    return roman;
}