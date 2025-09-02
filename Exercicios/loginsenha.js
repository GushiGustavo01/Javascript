let login = false;
let senha = true;


if(login === true && senha === true){
        console.log("Acesso permitido, Verde!!");
} else if (login === true && senha === false){
    console.log("Sua senha foi digitada errada");
}else if (login === false && senha === true){
        console.log("Seu login foi digitado errado!!");
}else{
    console.log("Seu login e sua senha foram digitadas erradas,VERMELHO!");
}