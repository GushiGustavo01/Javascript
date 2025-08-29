// Dados primitivos:

//STRINGS: TEXTO
//NUMBER: NÚMEROS
//BOOLEAN: VERDADEIRO/FALSO
//NULL: AUSENCIA DE VALOR
//UNDEFINED: VARIAVEL SEM VALOR DEFINIDO
//SYMBOL: INDENTIFICADOR UNICO
//BIGINT: NUMERO INTEIROS GIGANTES

let texto = "Olá, mundo!";
let numero = 42;
let ativo = true;
let vazio = null;
let indefinido;
let simbolo = Symbol("id");
let grande = 123456789012345678901234567890n;

console.log(typeof texto);      // string
console.log(typeof numero);     // number
console.log(typeof ativo);      // boolean
console.log(typeof vazio);      // object (curiosidade do JS)
console.log(typeof indefinido); // undefined
console.log(typeof simbolo);    // symbol
console.log(typeof grande);     // bigint