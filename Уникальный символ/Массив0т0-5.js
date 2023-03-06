function flatten(a,b) {
const res = [];
    for(let i = a; i <=b; i++){
         res.push(i);
    }
    return res
}

console.log(flatten(1,5))