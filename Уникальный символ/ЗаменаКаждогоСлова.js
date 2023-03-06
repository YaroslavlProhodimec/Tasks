function toFreud(a) {

    return !a ? '' : a.split(' ').map(el=>'sex' ).join(' ')
}

console.log(toFreud(' '))
function toFreud(a) {
    let res = a.split('')
    if(a === ' '){
        return a
    }
    for (let i = 0; i <a.length; i++) {
        res[i] = ('sex')
    }
  return   res.join(' ')
}

console.log(toFreud(' fafa fa faw faww faw fa f'))