const reverseSeq = n => {
    let lengthArray = n
    let array = []
    for (let i = 1; i <= lengthArray; i++) {
        array.push(i)
    }
    return array.reverse()
}
console.log(reverseSeq(5))
const reverseSeq1 = n => {
    let array = []
    for (let i = n; i > 0 ; i--) {
        array.push(i)
    }
    return array
}
console.log(reverseSeq1(5))