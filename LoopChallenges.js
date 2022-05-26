//Print odds 1-20
for (var i = 1; i < 20; i++) {
    if (i % 2 !== 0) console.log(i)
}


//Decreasing Multiples of 3
for (var i = 100; i > 0; i--) {
    if (i % 2 !== 0) console.log(i)
}

//Print the sequence
for (var i = 4; i > -4; i-=1.5) {
    console.log(i)
}

//Sigma
var sum=0
var s=""
for (var i = 1; i < 101; i++) {
    if(i<100) s+=i+" + "
    else s+=i
    sum+=i;
}
console.log(s)
console.log("=",sum)

//Factorial
var product=1
for (var i = 1; i < 13; i++) {
    product=product*i
    console.log(product+" * ");
}
console.log("=",product)
