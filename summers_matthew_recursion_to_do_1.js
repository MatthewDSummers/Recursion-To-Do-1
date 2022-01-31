function recursiveSigma(num){
    num = Math.floor(num)

    if(num<0){
        return 0
    }
    if(num<=1){
        return num
    }

    return num + recursiveSigma(num -1)
}

function rFact(num){
    if(num==0){
        return 1
    }
    if(num==1){
        return num
    }
    if(num % 2 != 0){
        num = Math.trunc(num)
    }
    return num * rFact(num -1)
}

console.log("rSigma 5 is", recursiveSigma(5))
console.log("rSigma 2.5 is", recursiveSigma(2.5))
console.log("rSigma -1 is", recursiveSigma(-1),"\n")

console.log("rFact of 0 is", rFact(0))
console.log("rFact of 3 is", rFact(3))
console.log("rFact of 6.5 is", rFact(6.5),"\n")