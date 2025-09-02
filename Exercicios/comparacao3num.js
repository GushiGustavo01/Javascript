let n1 = 3;
let n2 = 5;
let n3 = 8;


if(n1 > n2 && n1 > n3){

    console.log(`${n1} é o maior número.`)

}else if(n2 > n1 && n2 > n3){

    console.log(`${n2} é o maior número.`)

}else if(n3 > n1 && n3 > n2){

    console.log(`${n3} é o maior número.`)

} else{
    console.log("existe números iguais.")
} 

    
if(n1 < n2 && n1 < n3){

    console.log(`${n1} é o menor número.`)

}else if(n2 < n1 && n2 < n3){

    console.log(`${n2} é o menor número.`)

}else if(n3 < n1 && n3 < n2){

    console.log(`${n3} é o menor número.`)
}else{
    console.log("Existe números iguais.")
}


let maior = Math.max( n1, n2, n3);
let menor = Math.min( n1, n2, n3);

console.log(maior);
console.log(menor);