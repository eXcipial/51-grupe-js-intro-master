
const prekes = [
    {
        pavadinimas: 'Pienas',
        kaina: 2,
        kiekis: 3,
    },
    {
        pavadinimas: 'Sausi pusryciai',
        kaina: 3,
        kiekis: 2,
    },
    {
        pavadinimas: 'Ledai',
        kaina: 1,
        kiekis: 7,
    },
    {
        pavadinimas: 'Suris',
        kaina: 5,
        kiekis: 1,
    },
];
// Sablonas A Prekiu krepselyje yra COUNT prekiu.//
const preke1 = prekes[0];
const preke2 = prekes[1];
const preke3 = prekes[2];
const preke4 = prekes[3];
const count = preke1.kiekis + preke2.kiekis + preke3.kiekis + preke4.kiekis;
const sablonasa = 'Prekiu krepselyje yra ' + count + ' prekiu.';
console.log(sablonasa);
console.log('                                ');
console.log('                                ');
/*Sablonas B
Prekiu krepselis
----------------
1) PAVADINIMAS (KAINA UZ VIENETA Eur) - KIEKIS
2) PAVADINIMAS (KAINA UZ VIENETA Eur) - KIEKIS
...
N) PAVADINIMAS (KAINA UZ VIENETA Eur) - KIEKIS
*/
console.log('Prekiu krepselis');
console.log('----------------');
const sablonasb1 = '1) ' + preke1.pavadinimas + ' (' + preke1.kaina + ' Eur Kaina uz vieneta) - ' + preke1.kiekis + ' vnt.';
console.log(sablonasb1);
const sablonasb2 = '2) ' + preke2.pavadinimas + ' (' + preke2.kaina + ' Eur Kaina uz vieneta) - ' + preke2.kiekis + ' vnt.';
console.log(sablonasb2);
const sablonasb3 = '3) ' + preke3.pavadinimas + ' (' + preke3.kaina + ' Eur Kaina uz vieneta) - ' + preke3.kiekis + ' vnt.';
console.log(sablonasb3);
const sablonasb4 = '4) ' + preke4.pavadinimas + ' (' + preke4.kaina + ' Eur Kaina uz vieneta) - ' + preke4.kiekis + ' vnt.';
console.log(sablonasb4);
console.log('                                ');
console.log('                                ');
//C) SABLONAS:  Prekiu krepselio verte yra TOTAL KAINA Eur.//
const total = preke1.kaina*preke1.kiekis + preke2.kaina*preke2.kiekis + preke3.kaina*preke3.kiekis + preke4.kaina*preke4.kiekis;
console.log('Prekiu krepselio verte yra ' + total + ' Eur');
console.log('                                ');
console.log('                                ');