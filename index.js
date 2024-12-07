function number(num){
    for(let i=2;i<num;i++){
        if(num%i===0){
            return false
        }
    }
    return true
}
console.log(number(25));
function evenOdd(num){
    if(num%2==0) return true;
return false;
}
console.log(evenOdd(22));