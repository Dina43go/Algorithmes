const cotes = [0.01, 0.05, 0.1, 0.5, 1, 5, 10, 20, 100];
export default function checkCashRegister(price, cash, cid) {
    let idx = cotes.length
    let monies = new Array()
    let customerRemaingMoney = cash - price

    if (customerRemaingMoney <= 0) throw new Error("Fonds insufisants")

    let reste = customerRemaingMoney
    let moneyInCashRegister = 0

    cid.forEach(e=>{moneyInCashRegister += e[1]})

    
    while (idx > 0) {
        idx--
        reste = parseFloat(reste).toFixed(2)

        if (reste <= 0) break;// reste === 0

        const allCurrentCureency = cid[idx][1];// hundred $ -> 100
        const currentCote = cotes[idx];

        if (reste < currentCote || allCurrentCureency == 0)continue;

        let nx = Math.floor(reste / currentCote) // 12.5 -> 12
        reste = reste % currentCote

        while ((nx * currentCote) > allCurrentCureency) {
            nx--
            reste += currentCote;
        }

        if (nx === 0) continue;// can't exchange with this currency

        monies.push([cid[idx][0], nx * currentCote])
    }



    if (moneyInCashRegister === customerRemaingMoney) {
        monies = monies.concat([["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])
        return {status: "CLOSED", change: [...monies] }
    }

    if (reste  > 0)
        return {status: "INSUFFICIENT_FUNDS",change: []}

    return {status: "OPEN",change: [...monies]};
}

