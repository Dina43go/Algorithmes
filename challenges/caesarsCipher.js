const a = "ABCDEFGHIJKLM" ; const b = "NOPQRSTUVWXYZ"

export default function rot13(str) {

    const DECODE = str.split("").map(e=>{

        // if it not a letter retrun the character
        if(!/["A-Z"]/.test(e)) return e
      
        //if the letter is in a gives us his correspondence in b else (...)
        return a.includes(e)? b[a.search(e)] : a[b.search(e)]
    }).join("")
  
  return DECODE;
}