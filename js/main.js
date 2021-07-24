/*var nome = "Bruno Prates";
var n1 = 5;
var n2 = 3;
var frase = "Japão é o melhor time do mundo";
//alert(nome + " tem " + idade + " anos");
//alert(idade + idade2);
console.log(nome);
console.log(frase.replace("Japão","Brasil"));
console.log(frase.toUpperCase());
console.log(n1 + n2);*/

/*var lista = ["Maça","Pera","Laranja"];
//console.log(lista);
//lista.push("Uva");
//lista.pop();
//console.log(lista.join(" | "));
console.log(lista.toString());*/

/*
//Dicionário
var frutas = [{nome:"maçã", cor:"Vermelha"},{nome:"Uva", cor:"Verde"}];
console.log(frutas[1].nome);*/

/* 
var idade = prompt("Qual sua idade");
if(idade >=18){
    alert("Maior de idade");
}else{
    alert("menor de idade");
}
var count = 0;
while(count <5){
    console.log(count);
    count++;
}
var count;
for(count=0;count<=5;count++){
    console.log(count);
}*/

/* 
var d = new Date();
alert(d.getMinutes()); */

/*
function soma(n1, n2){
    return n1 + n2;
}

function validaIdade(idade){
    
    var validar;
    if(idade >= 18){
        validar = true;
    }else{
        validar = false;
    }
    return validar;
}

var idade = prompt("Qual sua idade");
console.log(validaIdade(idade));
//alert(soma(5,10));*/

function botao(){
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar!</b>";
    //console.log(document.getElementById("agradecimento"));
    //alert("Obrigado por clicar!");
}

function redirecionar(){
    window.open("https://www.google.com.br/");
    //window.location.href = "https://www.google.com.br/";
}

var i = 0;
function trocar(elemento){
    elemento.innerHTML = "Obrigado por passar o mouse" + i;
    i++;
}

function voltar(elemento){
    elemento.innerHTML = "Passe o mouse aqui" + i;
    i++;
}

function load(){
    alert("Pagina carregad");
}

function funcaoChange(elemento){
    console.log(elemento.value)
}