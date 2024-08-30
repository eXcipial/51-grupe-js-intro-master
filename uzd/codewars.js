const names = ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune'];
function getPlanetName(id) {
    if (id === 1) {
        return names[0];
    } else if (id === 2) {
        return names[1];
    } else if (id === 3) {
        return names[2];
    } else if (id === 4) {
        return names[3];
    } else if (id === 5) {
        return names[4];
    } else if (id === 6) {
        return names[5];
    } else if (id === 7) {
        return names[6];
    } else if (id === 8) {
        return names[7];
    } else {
        return 'error';
    }
}
console.clear();




function enough(cap, on, wait) {
    if (cap >= (on + wait)) {
        return 0; 
    } else {
        return (on + wait) - cap; 
    }
 }

 function problem(x){
    if (typeof x !== 'number') {
        return "Error";
    }
    else {return ((x * 50) + 6)}
}
///////////////////////////////////////
function rainAmount(mm){
    if (mm < 40) {
        let reikia = 40 - mm;
         return `You need to give your plant ${reikia}mm of water`
    }
    else {
         return `Your plant has had more than enough water for today!`;
    }
}
function rainAmount(mm){
    if ( mm < 40) {
         return "You need to give your plant " + (40 - mm) + "mm of water"
    } else {
         return "Your plant has had more than enough water for today!"
    }
}
/////////////////////////////////////////

function multiply(a, b){
if (typeof x !== 'number') {return (a * b)} else {return`error`}
}
////////////////////////////////////////

function opposite(number) {
    if (number => 0) {return number=(number-(number * 2))}
    else {return (number=(number-((number * -1)) *2))}
  }

  function opposite(number) {
    return(-number);
  }

  const opposite = number => -number;

  function opposite(number) {
    if (number) {
      return -number 
    }else {
      return number
    }
  }


  /////////////////

  function makeNegative(num) {
    if (num <=0) {return num}
    else {return -num}
  }
/////////////
/*  const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
   if ((distanceToPump / mpg) < fuelLeft) {return true}
   else {false}
};
*/
const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
    return (distanceToPump / mpg) <= fuelLeft;
};

var isSquare = function(n){
    if (n < 0) {return false}
    else {
        let saknis = Math.sqrt( n );
        return saknis % 1 === 0;
    }
}


var isSquare = function(n){

	if((Math.sqrt(n) % 1) == 0)
		return true;
	else
		return false;
}
//////////////////

function greet(language) {
    if (language = "english") { return "Welcome"}
else if (language = "czech") { return "Vitejte"}
else if (language = "danish") { return "Velkomst"}
else if (language = "dutch") { return "Welkom"}
else if (language = "estonian") { return "Tere tulemast"}
else if (language = "finnish") { return "Tervetuloa"}
else if (language = "flemish") { return "Welgekomen"}
else if (language = "french") { return "Bienvenue"}
else if (language = "german") { return "Willkommen"}
else if (language = "irish") { return "Failte"}
else if (language = "italian") { return "Benvenuto"}
else if (language = "latvian") { return "Gaidits"}
else if (language = "lithuanian") { return "Laukiamas"}
else if (language = "polish") { return "Witamy"}
else if (language = "spanish") { return "Bienvenido"}
else if (language = "swedish") { return "Valkommen"}
else if (language = "welsh") { return "Croeso"}
    else {return "Welcome"}
}

const salys = ['english', 'czech', 'danish', 'dutch', 'estonian', 'finnish', 'flemish', 'french', 'german', 'irish', 'italia', 'latvia', 'lithuania', 'polish', 'spanish', 'swedish', 'welsh'];
const kalbos = ['Welcome', 'Vitejte', 'Velkomst', 'Welkom', 'Tere tulemast', 'Tervetuloa', 'Welgekomen', 'Bienvenue', 'Willkommen', 'Failte', 'Benvenuto', 'Gaidits', 'Laukiamas', 'Witamy', 'Bienvenido', 'Valkommen', 'Croeso'];
let i = 0
if (language === salys[i]) {return kalbos[i]}
else {i++}



function greet(language) {
    const languages = [
        "english", "czech", "danish", "dutch", "estonian",
        "finnish", "flemish", "french", "german", "irish",
        "italian", "latvian", "lithuanian", "polish", "spanish",
        "swedish", "welsh"
    ];
    
    const greetings = [
        "Welcome", "Vitejte", "Velkomst", "Welkom", "Tere tulemast",
        "Tervetuloa", "Welgekomen", "Bienvenue", "Willkommen", "Failte",
        "Benvenuto", "Gaidits", "Laukiamas", "Witamy", "Bienvenido",
        "Valkommen", "Croeso"
    ];
    
    // Find the index of the language in the languages array
    const index = languages.indexOf(language);
    
    // If the language exists in the array, return the corresponding greeting
    // If not, return the default greeting ("Welcome")
    return index !== -1 ? greetings[index] : "Welcome";
}

function greet(language) {
  
	switch(language){
    case "english": return "Welcome";
    case "czech": return "Vitejte";
    case "danish": return "Velkomst";
    case "dutch": return "Welkom";
    case "estonian": return "Tere tulemast";
    case "finnish": return "Tervetuloa";
    case "flemish": return "Welgekomen";
    case "french": return "Bienvenue";
    case "german": return "Willkommen";
    case "irish": return "Failte";
    case "italian": return "Benvenuto";
    case "latvian": return "Gaidits";
    case "lithuanian": return "Laukiamas";
    case "polish": return "Witamy";
    case "spanish": return "Bienvenido";
    case "swedish": return "Valkommen";
    case "welsh": return "Croeso";
    default: return "Welcome";
    }

    var languages = {
        english: 'Welcome',
        czech: 'Vitejte',
        danish: 'Velkomst',
        dutch: 'Welkom',
        estonian: 'Tere tulemast',
        finnish: 'Tervetuloa',
        flemish: 'Welgekomen',
        french: 'Bienvenue',
        german: 'Willkommen',
        irish: 'Failte',
        italian: 'Benvenuto',
        latvian: 'Gaidits',
        lithuanian: 'Laukiamas',
        polish: 'Witamy',
        spanish: 'Bienvenido',
        swedish: 'Valkommen',
        welsh: 'Croeso'
    }
    function greet(language) {
        for(var k in languages){
            if(k == language){
                return languages[k];
            }
        }
        return "Welcome";
    }
  
}


////////////////////////////////////////////
function whatday(num) {
  
	switch(num){
    case 1: return "Sunday";
    case 2: return "Monday";
    case 3: return "Tuesday";
    case 4: return "Wednesday";
    case 5: return "Thursday";
    case 6: return "Friday";
    case 7: return "Saturday";
    default: return "Wrong, please enter a number between 1 and 7";
    }
}
/////////////////////////////////////////////


function positiveSum(arr) {
    Array.prototype.toString(arr)
  
}


function positiveSum(arr) {
    // Filtruojame masyvą, palikdami tik teigiamus skaičius, ir sudedame juos
    return arr.filter(num => num > 0) // Išrenkame tik teigiamus skaičius
              .reduce((sum, num) => sum + num, 0); // Sudedame juos, pradedant nuo 0
}

function positiveSum(arr) {
    let sum = 0;

    // Pereiname per kiekvieną masyvo elementą
    for (let i = 0; i < arr.length; i++) {
        // Jei skaičius teigiamas, pridedame jį prie sumos
        if (arr[i] > 0) {
            sum += arr[i];
        }
    }

    return sum;
}

function sumAll(labas) {
    let sum2 = 0;
    for (let i =0; i < labas.length; i++)
        if (Number.isInteger(labas[i])); {
        sum2 += labas[i];
    }
}




function hero(bullets, dragons) {
    if (bullets >= dragons * 2) {
        return true;
    } else {
        return false;
    }
}

function hero(bullets, dragons) {
    return (bullets / 2) >= dragons;
}
///////////////////////////////////////////


function differenceInAges(ages){
    const min = Math.min(...ages);
    const max = Math.max(...ages);
    const dif = max - min;
    return [min, max, dif];
  }

  function differenceInAges(ages){
    const min = Math.min(...ages);
    const max = Math.max(...ages);
    
    return [min, max, max-min];
  }



  //////////////////////////////////

  function getDrinkByProfession(param) {
  const mazos = param.toLowerCase();
	switch(mazos){
    case "jabroni": return "Patron Tequila";
    case "school counselor": return "Anything with Alcohol";
    case "programmer": return "Hipster Craft Beer";
    case "bike gang member": return "Moonshine";
    case "politician": return "Your tax dollars";
    case "rapper": return "Cristal";
    default: return "Beer";
    }}



        function tripleTrouble(one, two, three) {
            let result = '';
            for (let i = 0; i < one.length; i++) {
                result += one[i] + two[i] + three[i];
            }
            return result;
        }


function grader(score) {
    if (score > 1) {
    return "F"; }
        else if (score >= 0.9) {
        return "A";}
            else if (score >=0.8) {
            return "B";}
                else if (score >= 0.7) {
                return "C";}
                    else if (score >= 0.6) {
                    return "D";}
                    else {
                        return "F"}
                    }

function getGrade (s1, s2, s3) {
const a = ((s1 + s2 + s3) / 3);
if (a < 60) {
    return "F"; }
        else if (a >= 90) {
        return "A";}
            else if (a >= 80) {
            return "B";}
                else if (a >= 70) {
                return "C";}
                    else if (a >= 60) {
                    return "D";}
                    else {
                        return "F"}
}

function howMuchILoveYou(nbPetals) {
    const a = (nbPetals % 6);
if (a == 1) {
    return "I love you"; }
        else if (a == 2) {
        return "a little";}
            else if (a == 3) {
            return "a lot";}
                else if (a == 4) {
                return "passionately";}
                    else if (a == 5) {
                    return "madly";}
                    else if (a == 0) {
                        return "not at all";}
                    else {
                        return "error"}
}

function howMuchILoveYou(nbPetals) {
    return ['not at all','I love you', 'a little', 'a lot', 'passionately', 'madly', 'not at all'][nbPetals % 6]}

//////////////////////////////////////////////////////////////


function minMax(arr){
    const a = Math.min(...(arr));
    const b = Math.max(...(arr));
    return [a,b]; 
  }


//////
function highAndLow(numbers){
    const arr = numbers.split(' ').map(Number);
    const a = Math.min(...(arr));
    const b = Math.max(...(arr));
    return `${b} ${a}`; 
  }

  function highAndLow(numbers){
    numbers = numbers.split(' ');
    return `${Math.max(...numbers)} ${Math.min(...numbers)}`;
  }



  /////////////////////////

  function descendingOrder(n){
    return descendingOrder.split(' ').map([i] > [i])
  }

  function descendingOrder(n) {
    return parseInt(n.toString().split("").sort().reverse().join(""));
  }


  function descendingOrder(n){
  
    n = [...n.toString()];
    
    return Number(
              n
              .sort()
              .reverse()
              .join('')
            );
  }

  /////


  function remove(string) {
    const noExclamations = string.replace(/!+/g, ' ');
    const trimmedString = noExclamations.trim().replace(/\s+/g, ' ');
    return trimmedString.length > 0 ? trimmedString + '!' : '!';
}
 

function remove(s){
    return s.replace(/!/g, '') + "!"
  }
/////
function stringClean(s) {
    // Sukuriame tuščią eilutę, kurioje kaupsime rezultatus
    let result = '';
    
    // Pereiname per kiekvieną simbolį stringe
    for (let i = 0; i < s.length; i++) {
      let char = s[i];
      
      // Tikriname, ar simbolis nėra skaičius
      if (isNaN(char) || char === ' ') {
        result += char; // Jei tai nėra skaičius, pridedame jį prie rezultato
      }
    }
    return result;
  }
///////







const humanYearsCatYearsDogYears = function(humanYears) {
    let catYears = 0;
    let dogYears = 0;

    if (humanYears === 1) {
        catYears = 15;
        dogYears = 15;
    } else if (humanYears === 2) {
        catYears = 15 + 9;
        dogYears = 15 + 9;
    } else if (humanYears >= 3) {
        catYears = 15 + 9 + (humanYears - 2) * 4;
        dogYears = 15 + 9 + (humanYears - 2) * 5;
    }

    return [humanYears, catYears, dogYears];
};



///////////////////




function quadrant(x, y) {
    let k = 0;
    if (x == 0 && y == 0){return "error";} 
    else if (x > 0 && y > 0) 
        {k = 1;}
               else if (x > 0 && y < 0) 
                {k = 4;}
                        else if (x < 0 && y > 0) 
                                 {k = 2;}
                                 else if (x < 0 && y < 0)
                                           {k = 3;}
 return [x, y, k];
  }
            
  function quadrant(x, y) {
    if (x > 0 && y > 0) {
        return 1; // First quadrant
    } else if (x < 0 && y > 0) {
        return 2; // Second quadrant
    } else if (x < 0 && y < 0) {
        return 3; // Third quadrant
    } else if (x > 0 && y < 0) {
        return 4; // Fourth quadrant
    }
}


//////


function makeUpperCase(str) {
   return str.toUpperCase();
  }

  //////


  function DNAtoRNA(dna) {
    let rna = '';
    
    // Loop through each character in the DNA string
    for (let i = 0; i < dna.length; i++) {
        // If the character is 'T', append 'U' to the RNA string
        if (dna[i] === 'T') {
            rna += 'U';
        } else {
            // Otherwise, append the original character (G, C, A)
            rna += dna[i];
        }
    }
    
    return rna;
}




/////

function _if(bool, func1, func2) {
    if (bool == true) {return func1();}
    else {return func2();}
  }


 //////


  function updateLight(current) {
  
	switch(current){
    case "green": return "yellow";
    case "yellow": return "red";
    case "red": return "green";
    default: return "error";
    }}

////////

//dvigubos raides
function doubleChar(str) {
    return str.split('').map(char => char + char).join('');
  }

  ////


///lyginis nelyginis tikrina ar skaicius

function testEven(n) {
    if (Number.isInteger(n) && n % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

/////

String.prototype.isUpperCase = function(testingup) {
   let up = testingup.String toUpperCase();
    if (up === testingup) {
        return true;
    }
 }

 String.prototype.isUpperCase = function() {
    let up = this.toUpperCase();
    if (up === this) {
        return true;
    } else {
        return false;
    }
 }



 //////


/////array vidurkis
 
  function findAverage(array) {
    if (array.length === 0) return 0;
let sum = array.reduce((a, b) => a + b, 0);
return sum / array.length;}

//////

function basicOp(operation, value1, value2) {
      switch(operation){
      case "+": return value1 + value2;
      case "-": return value1 - value2;
      case "/": return value1 / value2;
      case "*": return value1 * value2;
    
      default: return "error";
      }}


      ///
      function rentalCarCost(d) {
        if (d < 3) {
            return (d * 40);
        }
        else if (d >= 3 && d < 7) {
            return ((d * 40) - 20);
        }
        else if (d >= 7) {
            return ((d * 40) - 50);
        }
        else {return "error";}
      }




      //////


      function litres(time) {
        const water = Math.floor(time * 0.5);
        return water;
    }
    
    
    
    ////
    function doubleInteger(i) {
        i = i * 2;
        return i;
    }
    
    ////
    
    const areaOrPerimeter = function(l, w) {
        let a = 0;
        if (l === w) {
            a = l * w;  
        } else {
            a = 2 * (l + w);  
        }
        return a;
    };

    ////
    function peopleWithAgeDrink(old) {
        if (old < 14) {return "drink toddy"}
        else if (old <18) {return "drink coke"}
        else if (old < 21) {return "drink beer"}
        else {return "drink whisky"}
        
      };

/////////


        function bmi(weight, height) {
           const kmi = weight / (height * height);
           if (kmi <= 18.5) {return "Underweight"}
           else if (kmi <= 25) {return "Normal"}
           else if (kmi <= 30) {return "Overweight"}
           else {return "Obese"}
          }

          //////
          function switchItUp(number) {
            switch(number){
            case 0: return "Zero";
            case 1: return "One";
            case 2: return "Two";
            case 3: return "Three";
            case 4: return "Four";
            case 5: return "Five";
            case 6: return "Six";
            case 7: return "Seven";
            case 8: return "Eight";
            case 9: return "Nine";
          
            default: return "wtf";
            }}
//////////////////


function otherAngle(a, b) {
    const c = 180 - a - b;
    return c;
  }   

  ////

  function squareSum(numbers){

  }