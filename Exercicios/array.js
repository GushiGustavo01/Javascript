//for in array e conjunto.

let nome1 = ["Gustavo", "Kelen", "Mia", "Kirion","Tapioca"];


for( let nome of nome1){

    console.log(nome);

}

let nome2= ["Gustavo", "Kelen", "Mia", "Kirion","Tapioca"];



console.log(``);
console.log(nome2[1]);
console.log(nome2[2]);
console.log(nome2[3]);
console.log(nome2[4]);


for(let i in nome2){
    console.log(i);
    console.log(nome2[i]);

if(nome2[i] == "Gustavo" || nome2[i] == "gustavo"){
    console.log(i);
    
}
   
}

let conjunt = {nome: "Gustavo", idade: 25, cidade:"Recife", bairro:"Pina" };


for(let chave in conjunt){
console.log(chave);
console.log(conjunt[chave]);
}