function sumOfDifferences(arr) {
   const res = arr.sort((a,b)=>b-a)
    let sum = 0
    for (let i = 1; i < res.length; i++) {
      sum += res[i-1]-res[i]

    }
return sum
}
console.log(sumOfDifferences([1, 2, 10]))