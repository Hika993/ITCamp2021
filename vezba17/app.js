// console.log("Hello world");

// mojeVar = 5;

// console.log (mojeVar);

// unos = prompt ("Unesi neku vrednost")

 

// if ( unos %2 ==0 ) {
//     console.log("Vas broj je paran");
// }

// if (unos % 2 == 1) {
// console.log("vas broj je neparan")
// }


// a = prompt ( "unesite prvi broj");
// b = prompt ("unesite drugi broj");


// if ( a == b ) {
//     console.log ("brojevi su jednaki")
// }

// if (a != b) {
//     console.log ("brojevi su razlicti")
// // } 
// unos = prompt ("Unesite unos");

// if ( unos < 0 ) {
//     console.log("Very cold");
// }

// if ( unos > 10 &&  unos <= 20 ) {
//     console.log("Cold weather");
// }

// if ( unos >20 && unos <= 30 ) {
//     console.log("Normal temp");
// }

// if ( unos >= 30 ) {
//     console.log("very");
// }


// if , else , else if , switch operacija 


// for ( let i = 32; i < 95; i = i+1)
// {
//     console.log(i);
// }

// for ( let i = 32; i > 3; i = i--)
// {
//     console.log(i);
// 

// let rec = "dan";
// let duzina = rec.length;
// console.log(duzina);

// LET rec2= rec.toUpperCase();
// console.log(rec2);



// FIZZ BUZ CHALLENGE

// INTERACIJA SE VRSI OD 1 DO 100 (UKLJUCUJUCI)
// AKO JE DATI BROJ DELJIV SA 3 U KONZOLI SE ISPISUJE FIZZ,
// AKO JE DATI BROJ DELJIV SA 3 U KONZOLI SE ISPISUJE BUZZ,
// AKO JE DATI BROJ DELJIV I SA 3 I SA 5 U KONZOLI SE ISPISUJE FIZZ BUZZ


// for (let i = 1; i<=100; i++) {
//     if (i % 3 === 0 && i%5 === 0) {
//         console.log("FIZZ BUZZ");
//     } else if (i % 5 === 0) {
//         console.log("BUZZ");
// } else  if (i % 3 === 0)
// { console.log("FIZZ");}
// else {console.log(i);}
// } 

// let recenica = "Nakon svakog vezbanja je preporuka postaviti promene na github-u"

// // let s = recenica [6];
// // console.log(s);



// // Napraviti novu recenicu gde ce svaka rec pocinjati velikim slovom.

// let recenica2 = "";

// for (let i = 0; i <= recenica.length -1 ; i++) {
//     if (i === 0) {
//         recenica2 += recenica[i].toUpperCase();
//     } else if (recenica[i-1] === " ") {
//         recenica2 += recenica[i].toUpperCase();
//     }
//     else {
//         recenica2 += recenica[i]
//     }
// }

// console.log(recenica2);

//

//domaci :
// Napraviti novu recenicu gde ce svaka rec pocinjati velikim slovom.

// let recenica = "Nakon svakog vezbanja je preporuka postaviti promene na github-u"

// // Sabrati razmake i ispisati njihov broj u konzoli


// let brojRazmaka = 0;
// for ( let i = 0; i <= recenica.length -1; i++)
// {
//     if (recenica[i]=== " ") {
//         brojRazmaka++;
//     }
// }
// console.log(brojRazmaka);


// domaci :  iz date recenice izbrisati raymake i ispisati u konzoli novodobijenu recenicu

// arr = [123 , 2 , 321 , 21, 212]

// arr.forEach(element => {
//     console.log(element);
// });

// arr = [[1,2,3] ,[] , []]

// console.log(arr[1][1]);


// arr = [
// [1,2,3],
// [4,5,6],
// [7,8,9],
// ];

// console.log(arr[1][2]);

// for (let i = 0; i < 3; i++) {
//     for (let j=0; j<4; j++){
//         console.log("bilo sta");
//     }
// }

// arr = [
// [1,2,3],
// [4,5,6],
// [72,231,19],
// ];


// for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr[i].length; j++) {
//         console.log(arr[i][j], i , j);
//     }
// }


arr = [
    [1,2,3],[4,5,6,4,5,6],[7],
    ];

sum = 0;

for ( let i = 0; i < arr.length; i++) {
    sum += arr[i][arr[i].length -1]
}

console.log(sum);
