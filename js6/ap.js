// unos = prompt("Unesite unos"); 

// while (unos !== "end" ) {
//     unos = prompt ("Greska pokusajte ponovo")
// }


// unos = parseInt(prompt("Unestie broj:"));

// sum=0;
// while (unos>=0)  {
//     sum+= unos; 
//     unos = parseInt(prompt("unesite broj ponovo:"));
// }
// console.log(sum);


// unos = prompt ("Unesite ime")

// while (unos !== "end") {
//     console.log(unos);
//     unos = prompt ("Unesite ponovo ime:")
    
// }
    
//     console.log("I am done");

ocena = parseInt(prompt("Unesite ocenu 1-5"));
zbir=0;
kolicina=0;

while ( ocena >=1 && ocena <=5) {
    zbir += ocena;
    kolicina++;
    ocena = parseInt(prompt("Unesite ocenu 1-5"));
}

console.log("Sredina je:", zbir / kolicina);