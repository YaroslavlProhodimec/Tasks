function getAverage(marks){
    return Math.floor(marks.reduce((a,b)=>a+b/marks.length,0))
}

console.log(getAverage([1,5,87,45,8,8]))
function getAverage1(marks){
    let current = 0
    for (let i = 0; i < marks.length ; i++) {
        current += marks[i]

    }
    return  Math.floor(current/marks.length)
}


console.log(getAverage1([5,5,5]))
function getAverage2(marks){
    let current = 0
    marks.forEach(el => current += el)
    return  Math.floor(current/marks.length)
}

console.log(getAverage2([5,5,5]))