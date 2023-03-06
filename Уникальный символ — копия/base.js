
// Тут в первом решении мы с помощью lastIndexOf пробегаемся с конца и если этот обьект не равен тому индексу где он изначально был тогда false
// И это означает что  буквы повторяются
function cut(str) {
    for(let i = 0; i < str.length; i++ ){
       const char = str[i]
        if(str.lastIndexOf(char)!== i){
            return false
        }
    }

return true

}

console.log(cut('qwerty'))

function cut(str) {
let set = new Set
    for(let i = 0; i < str.length;i++){
      let char = str[i]
        if(set.has(char)){
            return false
        }
        set.add(char)
    }
    return true
}

console.log(cut('qwertyy'))
function cut1(str) {
    return new Set(str).size === str.length

}
console.log(cut1('qwertyy'))