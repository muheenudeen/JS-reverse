function FizzBuzz(n) {
    for(let i=1;i<n;i++){
        let output=''
        if(i%3===0) output+='fizz'
        if(i%5===0) output+='buzz'
    }
    return output
}