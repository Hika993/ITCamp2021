


//   tezina = parseInt(prompt("Unesite tezinu"));
//   visina = parseInt(prompt("Unesite visinu"));

//   bmi = tezina/visina ** 2;

//   if (bmi<18.5) {
//       console.log("Underweight");
//   } else if (bmi < 25) {
//       console.log("nORMALN");
//   } else if (bmi < 30) {
//       console.log("Overweight");
//   } else if (bmi >30) {
//       console.log("Obese");
//   }


// n = parseInt(prompt("Unesi krajnji broj"));
// brojac = 1;

// while ( brojac <= n) {
//     if (brojac%2 !==0) {
//         console.log(brojac);
//     }
//     brojac++
// }

// unos = prompt ("Unesite broj");

// while (unos !=="STOP") {
//     if (unos ==0) {
//         console.log("ZERO");
//     } else if (unos > 0) {
//         console.log("POZITIVAN");
//     } else if ( unos < 0) {
//         console.log("NEGATIVAN");
//     }
//     unos = prompt ("Unesite nesto opet");
// }

// for ( i = 0; i < 2050; i+=4   ) {
//     console.log(i);
// }

// pocetna = prompt("Unesi pocetnu vrednost");
// krajna = prompt("Unesi krajnju vrednost");

// for (i=pocetna; i<=krajna; i++){
//     if ( i % 4 === 0) {
//         console.log(i);
//     }
// }


// broj  = parseInt(prompt("Unesi broj"));
// brojac = 1;
// fact = 1;

// while (brojac <= broj) {
//     fact *= brojac;
//     brojac++

// }
// console.log(fact);



// unos = prompt ("Unesite string");
// novi = ""
// for (i= 0; unos.lenght<1;i++) {
//     if (i===0) {
//         novi+=unos[0] . toUpperCase()
//     } else (
//         novi +=unos [i+1] . toUpperCase()
//     )
// }
// console.log(novi);


// unos = parseInt(prompt("Unesi minute"));

// sati =Math.floor (unos/60)
// minuti = unos % 60
// console.log("sati:", sati);
// console.log("minuti:", minuti);

// console.log(``);


// ar = [1 , "HelloWorld" , 3]

// console.log(ar);

// arr = []
// kolicina = parseInt(prompt("Unesi kolicinu"));

// for ( i = 0; i<kolicina; i++) {

//     el = prompt("Unesite elemet")
//     arr[i]=el;
// }
// console.log(arr);


// arr = []
// kolicina = parseInt(prompt("Unesi kolicinu"));

// for ( i = 0; i<kolicina; i++) {

//     el = prompt("Unesite elemet")
//     arr[i]=el;
    
// }
// console.log(arr);

// for(i=arr.length-1; i >=0; i--) {
//     console.log(arr[i]);
// }



// arr = []
// kolicina = parseInt(prompt("Unesi kolicinu"));

// for ( i = 0; i<kolicina; i++) {

//     el = parseInt( prompt("Unesite elemet"))
//     arr[i]=el;
// }
// sum=0;

// for (i=0; i<arr.length; i++) {
//     sum+= arr[i];

// }
// console.log(sum);


// arr = [2 , 12 , 1, 7, 19, 74, 23, 4, 3];
// broj=0;

// for (i=0; i<=broj;i++){
//     if (arr>broj) {
//         broj=arr[i];
//     }
// }

// console.log(broj);


// var a = ("Ocena je: " +5);
// var b = (5 + " je ocena");
// var hi = ("Hello World");
// console.log(a);
// console.log(b);
// console.log(hi);

// a = 5
// b = 3
// c = a+b
// console.log(c);

// a = [3, 6, 23, 9, 44, 14, 83, 22, 5, 1];

// sum = 0;

// for (i=0; i<a.length; i++) {
//         sum+= a[i];
// }
// console.log(sum / a.length)

// arr = [3, 6, 0, 23, 0, 9, 44, 14, 0, 83, 22, 5, 0, 1];

// for (i=0; i<arr.length; i++) {
//     if (arr[i]===0) {
//         arr.splice(i , 1);
//         arr.push(0);
//     }
// }
// console.log(arr);


// arr = [3, 6, 23, 9, 44, 14, 0, 83, 22, 5,];
// min = arr[0];
// max = arr [0];
// for (el of arr) {
//     if (el>max) {
//         max=el;
//     }
// else if (min > el) {
//     min = el;
// }
// }

// console.log("Razlika je:", max - min);


// arr = [3, 6, 23, 9, 44, 14, 0, 83, 22, 5,];

// sadrzi = false;

// for ( el of arr) {
//     if (el===67||el===87) {
//         sadrzi=true;
//     }
// }

// console.log(sadrzi);


// arr = [3, 6, 23, 9, 44, 14, 0, 83, -254, 22, 5,];
// max = arr[0];

// for (el of arr) {
//     if(Math.abs(el)>Math.abs(max)) {
//     max=el;   }
// }

// console.log(max);


// arr = [3, 6, 23, 9, 44, 14, 0, 83, -254, 22, 5,];
// min1= arr[0];
// min2= arr[0];
// for (el of arr) {
//     if (el <min1) {
//         min1=el;
//     } else if (el<min2 && el>min1) {
//         min2=el;
//     }
// }

// console.log("Najmanji je:", min1);
// console.log("Drugi manje je:", min2);


// data = [[1, 2, 3] , 2];
// console.log(data[0][2]);



// function sum() {
//     a = parseInt( prompt("Unesi prvi broj"));
//     b = parseInt( prompt("Unesi drugi broj"));
//        console.log("Zbir ova dva broja je:" , a+b);

// }

// sum();

// function sayHello(ime){
//     console.log("HELLO" , ime);
// }

// sayHello("Hika");
// sayHello("Hika");
// sayHello("Hika");


// function zbir(a,b){
//     console.log(a+b);
// }

// zbir(3,5);


// function mojaF(){
//     console.log("asd");
//     console.log("assd");
//     return [1, 2, 3,];
// }

// console.log(mojaF());


// function mojaF () {
//     console.log("a");
// }

// b = function () {
//     console.log("b");
// }

// console.log("b");

// () => {
//     console.log("c");
// }

// console.log("c");

