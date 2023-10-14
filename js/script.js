document.write("Zdravo iz fajla!");
console.log("Zdravo u konzoli!");

// PROMENLJIVIH
// int a = 5;
// double b = 6.5;
// String x = "mdkdas";

// 1. var
// 2. let
// 3. const

var a; //deklaracija
a = 5; //inijalizacija
var b = 5; //definisanje promn
var c = "Ovo je neki tekst";
console.log(c);
var c = 67;
console.log(c);


// clg - precica za console log - ekstenzija JS code snippets

console.log(d);
if(true) {
    var d = 13.2;
}
console.log(d);

if(true) {
    let x = 100;
    console.log(x); //ako hocemo da se ispise mora ovde da stojji jer je let vidljivo samo u {}
}
 
let prom = 90;
let Prom = 78;

const nekaProm = 5;
console.log(nekaProm);
// nekaProm = -5;
console.log(nekaProm);

// TIPOVA PODATAKA:
// 1. String
// 2. Number
// 3. Boolean - true, false

let niz = [1, 2, "mi"];
console.log(niz);

console.log("Vrednost konstante je: " + nekaProm);
console.log(`Vrednost konstante je ${nekaProm}`);
console.log("Neki tekst \n neki drugi tekst \t treci test");

//OPERATORI
// 1. ARITMETICKI OPERATORE: +, -, *, /, %, ++, --

var inkr = 1;
console.log(inkr++);
console.log(inkr);
console.log(++inkr);

// 2. OPERATORI POREDJENJA
// ==, !=, ===, !==
var p = 5;
var q = "5";
console.log(p===q);

// 3. LOGICKI OPERATORI
// &&, || 

//FUNKCIJE
var stringProm = "cao!";
var k = stringProm.toUpperCase();
console.log(k);

function mojaFunkcija(a, b) {
    return a+b;
}
console.log(mojaFunkcija(5,7));

// let zbir = mojaFunkcija();

//ISKACUCI PROZORI
//1. ALERT
//alert("Dobrodosli na sajt!");

//2. PROMPT - interakcija sa korisnicima, priklupljanje podataka
//var prompt = prompt("Broj teltefona:");
//console.log(prompt);

//3. CONFIRM
//var conf = confirm("Da li ste dobro?");
// console.log(conf);

//HTML DOM

var parafraf = document.getElementById("paragraf1");
console.log(parafraf);

var brat = parafraf.nextElementSibling;
console.log(brat);

var dugmici = document.getElementsByClassName("dugme");
console.log(dugmici);

var dugmici2 = document.getElementsByTagName("button");
console.log(dugmici2);

var link = document.querySelector("a");
var linkovi = document.querySelectorAll("a");
var link2 = document.querySelector("#link1");
// . -> klasa
console.log(linkovi);

link.innerHTML = "TEKST IZ JS-A";
link.style.color = "red";