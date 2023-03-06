function finalGrade (e,p) {
    if(e>90 || p > 10 ){
        return 100}
    else if(e>75 || p >= 5 ) {
        return 90}
    else if(e>50 || p >= 2 ) {
        return 75}
    else if(e>0 || p > 0 ) {
        return 0
    }
    return 0
}

console.log(finalGrade(0, 2))