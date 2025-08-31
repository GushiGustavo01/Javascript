//for in array e conjunto.

let nome1 = ["Gustavo", "Kelen", "Mia", "Kirion","Tapioca"];


for(let i in nome1){
    console.log(i);
    console.log(nome1[i]);

}

let nome2= ["Gustavo", "Kelen", "Mia", "Kirion","Tapioca"];


for(let i in nome2){
    console.log(i);
    console.log(nome2[i]);
sdsd
if(nome2[i] == "Gustavo" || nome2[i] == "gustavo"){
    console.log(i);
    
}
   
}

let conjunt = {nome: "Gustavo", idade: 25, cidade:"Recife", bairro:"Pina" };


for(let chave in conjunt){
console.log(chave);
console.log(conjunt[chave]);
}