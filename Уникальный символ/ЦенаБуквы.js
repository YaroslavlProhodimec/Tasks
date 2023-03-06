function billboard(name, price = 30){
let res = 0
    for (let i = 0; i < name.length; i++) {
             res = res+price
    }
    return res
}
console.log(billboard('stk xf yyYvMktIxrEeZDpZmHGbUkfpbITbsCA hO hCJcYYmJNgJVnrj',30))

function billboard(name, price = 30){
  return name.repeat(price).length
}