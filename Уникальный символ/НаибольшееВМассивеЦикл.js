// class SmallestIntegerFinder {
//     findSmallestInt(args) {
//        return  args.reduce((a,b)=>a<b?a:b)
//     }
// }
//
// console.log(findSmallestInt[78,56,232,12,8])
function findSmallestInt(args) {
    let current = args[0]
    for(let i = 0;i<args.length;i++){
        if(current>args[i]){
            current =args[i]
        }

    }
    return current
}
console.log(findSmallestInt([78,56,232,12,0]))