/*
Kintamųjų inicijavimas

Sukurti 3 kintamuosius su skaičiaus tipo reikšmėmis
Po kiekvieno jų inicijavimo, išvesti į console
Sukurti 3 kintamuosius su teksto tipo reikšmėmis
Po kiekvieno jų inicijavimo, išvesti į console
Sukurti 3 sąrašo tipo kintamuosius su penkiomis skaičių tipo reikšmėmis
Po kiekvieno jų inicijavimo, išvesti į console
Sukurti 3 sąrašo tipo kintamuosius su penkiomis teksto tipo reikšmėmis
Po kiekvieno jų inicijavimo, išvesti į console
*/

const num1 = 5;
console.log(num1);
const num2 = 6;
console.log(num2);
const num3 = 4;
console.log(num3);
console.log('------------------------------------');
const text1 = 'labas';
console.log(text1);
const text2 = 'rytas';
console.log(text2);
const text3 = 'lietuva';
console.log(text3);


console.log('------------------------------------');
const array1 = [1, 2, 3, 4, 5];
console.log(array1);
const array2 = [6, 7, 8, 9, 10];
console.log(array2);
const array3 = [12, 1, 5, 21, 15];
console.log(array3);
console.log('------------------------------------');
const spalvos = ['Raudona', 'Balta', 'Juoda', 'Geltona', 'Zalia'];
console.log(spalvos);
const masinos = ['Audi', 'Honda', 'Mersedes', 'Renault', 'Volswagen'];
console.log(masinos);
const vardai = ['Ruta', 'Vilija', 'Gintare', 'Birute', 'Rita'];
console.log(vardai);
/*const telefonai = [ 
    {
    brand: 'Samsung',
    model: 'A54',
    ram: '8 GB',
    memory: '128 GB',
    procesorius: 'octacore', 
},
    {
    brand: 'Samsung',
    model: 'A53',
    ram: '6 GB',
    memory: '128 GB',
    procesorius: 'octacore',     
    }, 
    {
        brand: 'Xiaomi',
        model: 'Poco x6 pro',
        ram: '16 GB',
        memory: '512 GB',
        procesorius: 'octacore', 
},];
console.log(telefonai);*/
console.log('------------------------------------');
/*
Veiksmai su kintamaisiais

Susumuoti visus skaičiaus tipo kintamuosius
Rezultatą išvesti į console
Sujungti visus teksto tipo kintamuosius taip, jog tarp jų būtų sudarytas tarpas
Rezultatą išvesti į console
Apskaičiuoti vertę iš sąrašų kurių verčių tipas yra skaičiai, pagal pateiktą logiką
1-2+3-4+5
Rezultatą išvesti į console
Sujungti sąrašų vertes, kurių tipas yra tekstai, nuo sąrašo galo iki pradžios taip, jog tarp jų būtų kablelis ir tarpas
*/
const numtotal = num1 + num2 + num3;
console.log(numtotal);
console.log('------------------------------------');
const alltext = text1 + ' ' + text2 + ' ' + text3;
console.log(alltext);
console.log('------------------------------------');
const aritmetika1 = array1[0] - array1[1] + array1[2] - array1[3] + array1[4];
console.log(aritmetika1);
const aritmetika2 = array2[0] - array2[1] + array2[2] - array2[3] + array2[4];
console.log(aritmetika2);
const aritmetika3 = array3[0] - array3[1] + array3[2] - array3[3] + array3[4];
console.log(aritmetika3);
console.log('------------------------------------');
const tekstas1 = spalvos[4] + ' , ' + spalvos[3] + ' , ' + spalvos[2] + ' , ' +  spalvos[1] + ' , ' + spalvos[0];
console.log(tekstas1);
const tekstas2 = masinos[4] + ' , ' + masinos[3] + ' , ' + masinos[2] + ' , ' +  masinos[1] + ' , ' + masinos[0];
console.log(tekstas2);
const tekstas3 = vardai[4] + ' , ' + vardai[3] + ' , ' + vardai[2] + ' , ' +  vardai[1] + ' , ' + vardai[0];
console.log(tekstas3);
/*const telefonas1 = telefonai[0];
const tel1 = telefonas1.procesorius + ', ' + telefonas1.memory + ', ' + telefonas1.ram + ', ' + telefonas1.model + ', ' + telefonas1.brand;
console.log(tel1);
const telefonas2 = telefonai[1];
const tel2 = telefonas2.procesorius + ', ' + telefonas2.memory + ', ' + telefonas2.ram + ', ' + telefonas2.model + ', ' + telefonas2.brand;
console.log(tel2);
const telefonas3 = telefonai[2];
const tel3 = telefonas3.procesorius + ', ' + telefonas3.memory + ', ' + telefonas3.ram + ', ' + telefonas3.model + ', ' + telefonas3.brand;
console.log(tel3);*/
console.log('------------------------------------');
/*Kintamųjų palyginimas
Priklausomai nuo sąlygos, susikurkite 2 skirtingų reikšmių nurodyto tipo kintamuosius.
Lyginant, jei rezultatas tenkina palyginimo sąlygą (nurodytą žemiau), tai į console išvesti žodį “Pomidoras”, o jei sąlyga nėra tenkinama, išvesti sakinį “Bandykite kitą kartą.”.

Tarpusavyje palyginti skaičiaus tipo kintamuosius:
kuris didesnis
kuris mažesnis
ar jie lygūs
ar jie nelygūs
kuris didesnis arba lygus
kuris mažesnis arba lygus
Išvesti teksto tipo kintamųjų ilgius
Tarpusavyje palyginti teksto tipo kintamųjų ilgius:
kuris didesnis
kuris mažesnis
ar jie lygūs
ar jie nelygūs
kuris didesnis arba lygus
kuris mažesnis arba lygus
Išvesti sąrašo tipo kintamųjų ilgius
Tarpusavyje palyginti sąrašo tipo kintamųjų ilgius:
kuris didesnis
kuris mažesnis
ar jie lygūs
ar jie nelygūs
kuris didesnis arba lygus
kuris mažesnis arba lygus*/
const numb1 = 5;
const numb2 = 12;
if (numb1 > numb2) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kitą kartą');}
if (numb1 < numb2) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kitą kartą');}
if (numb1 === numb2) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kitą kartą');}
    if (numb1 !== numb2) {
        console.log('Pomidoras');
} else {
    console.log('Bandykite kitą kartą');}
if (numb1 >= numb2) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kitą kartą');}
if (numb1 <= numb2) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kitą kartą');}    
    console.log('------------------------------------');        
const stringas1 = 'Lapulapulaputa';
const stringas2 = 'Perkunas';
const stringas1size = stringas1.length;
const stringas2size = stringas2.length;
if (stringas1size > stringas2size) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kitą kartą');}
if (stringas1size < stringas2size) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kitą kartą');}
if (stringas1size === stringas2size) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kitą kartą');}
if (stringas1size !== stringas2size) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kitą kartą');}
if (stringas1size >= stringas2size) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kitą kartą');}
if (stringas1size <= stringas2size) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kitą kartą');}
    console.log('------------------------------------');   
const array11 = [1, 2, 3, 4, 5, 20, 30, 11, 21, 42];
const array22 = [6, 7, 8, 9, 10, 11];
const array11size = array11.length;
const array22size = array22.length;
if (array11size > array22size) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kitą kartą');}
if (array11size < array22size) {
        console.log('Pomidoras');
} else {
    console.log('Bandykite kitą kartą');}
if (array11size === array22size) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kitą kartą');}
if (array11size !== array22size) {
    console.log('Pomidoras'); 
} else {
    console.log('Bandykite kitą kartą');}
if (array11size >= array22size) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kitą kartą');}
if (array11size <= array22size) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kitą kartą');}
    console.log('------------------------------------');  


