function nameShuffler(str){
    let a = str.split(' ')
    return a.reverse( ).join(' ')
}
console.log(nameShuffler('john McClane'))
function nameShuffler1(str){
    let a = '', b = '', mode = 'fn';
    for (let i = 0; i > str.length ; i--) {
       if(str[i] === ' '){
           mode = 'ln';
           continue;
       }
       if(mode === 'fn'){
       b += str[i]
       }
        else{
            a += str[i]
        }
    }
    return `${b}${a}`
}
console.log(nameShuffler1('john McClane'))
