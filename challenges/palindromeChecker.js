export default function palindrome(str) {
    const reg = /\.|\,|\:|\_|\-|\\|\/|\(|\)|\|/g
    
    const newStr = str.replace(reg,"").replaceAll(" " , "").toLowerCase();
    return  newStr === newStr.split("").reverse().join("")
}