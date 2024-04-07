//?   1. 4 funksiya yazın. Hər biri 2 parametr qəbul etsin və riyazi əməlləri yerinə yetirsin.

// function sum(a,b){
//     console.log(a+b)
// }
// sum(2,10)
// function sub(a,b){
//     console.log(a-b)
// }
// sub(23,4)
// function mul(a,b){
//     console.log(a*b)
// }
// mul(3,4)
// function div(a,b){
//     console.log(a/b)
// }
// div(12,4)

//?  2. Elə bir funksiya yazın ki, 3 parametr qəbul etsin, 2 ədəd və 1 ədəd operator. Operatora uygun nəticəni return etsin.

// function calculate(a, b, operator) {
//     switch (operator) {
//         case '+':
//             return a + b;
//         case '-':
//             return a - b;
//         case '*':
//             return a * b;
//         case '/':
//             if (b !== 0) {
//                 return a / b;
//             } else {
//                 return "Cannot divide by zero!";
//             }
//         default:
//             return "Invalid operator";
//     }
// }
// console.log(calculate(5, 3, '+'));
// console.log(calculate(7, 2, '-'));
// console.log(calculate(4, 6, '*'));
// console.log(calculate(10, 2, '/'));
// console.log(calculate(8, 0, '/'));
// console.log(calculate("dhdd"));

//? 3. Sadəcə ölkə adlarının olduğu array-ı return edən funksiya yazın
let countries=[
    {
      "name": {
        "common": "Cyprus",
        "official": "Republic of Cyprus",
        "nativeName": {
          "ell": {
            "official": "Δημοκρατία της Κύπρος",
            "common": "Κύπρος"
          },
          "tur": {
            "official": "Kıbrıs Cumhuriyeti",
            "common": "Kıbrıs"
          }
        }
      },
      "tld": [
        ".cy"
      ],
      "cca2": "CY",
      "ccn3": "196",
      "cca3": "CYP",
      "cioc": "CYP",
      "independent": true,
      "status": "officially-assigned",
      "unMember": true,
      "currencies": {
        "EUR": {
          "name": "Euro",
          "symbol": "€"
        }
      },
      "idd": {
        "root": "+3",
        "suffixes": [
          "57"
        ]
      },
      "capital": [
        "Nicosia"
      ],
      "altSpellings": [
        "CY",
        "Kýpros",
        "Kıbrıs",
        "Republic of Cyprus",
        "Κυπριακή Δημοκρατία",
        "Kıbrıs Cumhuriyeti"
      ],
      "region": "Europe",
      "subregion": "Southern Europe",
      "languages": {
        "ell": "Greek",
        "tur": "Turkish"
      },
      "translations": {
        "ara": {
          "official": "جمهورية قبرص",
          "common": "قبرص"
        },
        "bre": {
          "official": "Republik Kiprenez",
          "common": "Kiprenez"
        },
        "ces": {
          "official": "Kyperská republika",
          "common": "Kypr"
        },
        "cym": {
          "official": "Gweriniaeth Cyprus",
          "common": "Cyprus"
        },
        "deu": {
          "official": "Republik Zypern",
          "common": "Zypern"
        },
        "est": {
          "official": "Küprose Vabariik",
          "common": "Küpros"
        },
        "fin": {
          "official": "Kyproksen tasavalta",
          "common": "Kypros"
        },
        "fra": {
          "official": "République de Chypre",
          "common": "Chypre"
        },
        "hrv": {
          "official": "Republika Cipar",
          "common": "Cipar"
        },
        "hun": {
          "official": "Ciprusi Köztársaság",
          "common": "Ciprus"
        },
        "ita": {
          "official": "Repubblica di Cipro",
          "common": "Cipro"
        },
        "jpn": {
          "official": "キプロス共和国",
          "common": "キプロス"
        },
        "kor": {
          "official": "키프로스 공화국",
          "common": "키프로스"
        },
        "nld": {
          "official": "Republiek Cyprus",
          "common": "Cyprus"
        },
        "per": {
          "official": "جمهوری قبرس",
          "common": "قِبرِس"
        },
        "pol": {
          "official": "Republika Cypryjska",
          "common": "Cypr"
        },
        "por": {
          "official": "República de Chipre",
          "common": "Chipre"
        },
        "rus": {
          "official": "Республика Кипр",
          "common": "Кипр"
        },
        "slk": {
          "official": "Cyperská republika",
          "common": "Cyprus"
        },
        "spa": {
          "official": "República de Chipre",
          "common": "Chipre"
        },
        "srp": {
          "official": "Кипарска Република",
          "common": "Кипар"
        },
        "swe": {
          "official": "Republiken Cypern",
          "common": "Cypern"
        },
        "tur": {
          "official": "Kıbrıs Cumhuriyeti",
          "common": "Kıbrıs"
        },
        "urd": {
          "official": "جمہوریہ قبرص",
          "common": "قبرص"
        },
        "zho": {
          "official": "塞浦路斯共和国",
          "common": "塞浦路斯"
        }
      },
      "latlng": [35, 33],
      "landlocked": false,
      "area": 9251,
      "demonyms": {
        "eng": {
          "f": "Cypriot",
          "m": "Cypriot"
        },
        "fra": {
          "f": "Chypriote",
          "m": "Chypriote"
        }
      },
      "flag": "🇨🇾",
      "maps": {
        "googleMaps": "https://goo.gl/maps/77hPBRdLid8yD5Bm7",
        "openStreetMaps": "https://www.openstreetmap.org/relation/307787"
      },
      "population": 1207361,
      "gini": {
        "2018": 32.7
      },
      "fifa": "CYP",
      "car": {
        "signs": [
          "CY"
        ],
        "side": "left"
      },
      "timezones": [
        "UTC+02:00"
      ],
      "continents": [
        "Europe"
      ],
      "flags": {
        "png": "https://flagcdn.com/w320/cy.png",
        "svg": "https://flagcdn.com/cy.svg",
        "alt": "The flag of Cyprus has a white field, at the center of which is a copper-colored silhouette of the Island of Cyprus above two green olive branches crossed at the stem."
      },
      "coatOfArms": {
        "png": "https://mainfacts.com/media/images/coats_of_arms/cy.png",
        "svg": "https://mainfacts.com/media/images/coats_of_arms/cy.svg"
      },
      "startOfWeek": "monday",
      "capitalInfo": {
        "latlng": [35.17, 33.37]
      },
      "postalCode": {
        "format": "####",
        "regex": "^(\\d{4})$"
      }
    },
    {
        "name": {
          "common": "Eritrea",
          "official": "State of Eritrea",
          "nativeName": {
            "ara": {
              "official": "دولة إرتريا",
              "common": "إرتريا‎"
            },
            "eng": {
              "official": "State of Eritrea",
              "common": "Eritrea"
            },
            "tir": {
              "official": "ሃገረ ኤርትራ",
              "common": "ኤርትራ"
            }
          }
        },
        "tld": [
          ".er"
        ],
        "cca2": "ER",
        "ccn3": "232",
        "cca3": "ERI",
        "cioc": "ERI",
        "independent": true,
        "status": "officially-assigned",
        "unMember": true,
        "currencies": {
          "ERN": {
            "name": "Eritrean nakfa",
            "symbol": "Nfk"
          }
        },
        "idd": {
          "root": "+2",
          "suffixes": [
            "91"
          ]
        },
        "capital": [
          "Asmara"
        ],
        "altSpellings": [
          "ER",
          "State of Eritrea",
          "ሃገረ ኤርትራ",
          "Dawlat Iritriyá",
          "ʾErtrā",
          "Iritriyā"
        ],
        "region": "Africa",
        "subregion": "Eastern Africa",
        "languages": {
          "ara": "Arabic",
          "eng": "English",
          "tir": "Tigrinya"
        },
        "translations": {
          "ara": {
            "official": "دولة إريتريا",
            "common": "إريتريا"
          },
          "bre": {
            "official": "Stad Eritrea",
            "common": "Eritrea"
          },
          "ces": {
            "official": "Stát Eritrea",
            "common": "Eritrea"
          },
          "cym": {
            "official": "Gwladwriaeth Eritrea",
            "common": "Eritrea"
          },
          "deu": {
            "official": "Staat Eritrea",
            "common": "Eritrea"
          },
          "est": {
            "official": "Eritrea Riik",
            "common": "Eritrea"
          },
          "fin": {
            "official": "Eritrean valtio",
            "common": "Eritrea"
          },
          "fra": {
            "official": "État d'Érythrée",
            "common": "Érythrée"
          },
          "hrv": {
            "official": "Država Eritreji",
            "common": "Eritreja"
          },
          "hun": {
            "official": "Eritrea",
            "common": "Eritrea"
          },
          "ita": {
            "official": "Stato di Eritrea",
            "common": "Eritrea"
          },
          "jpn": {
            "official": "エリトリア国",
            "common": "エリトリア"
          },
          "kor": {
            "official": "에리트레아국",
            "common": "에리트레아"
          },
          "nld": {
            "official": "Staat Eritrea",
            "common": "Eritrea"
          },
          "per": {
            "official": "جمهوری اریتره",
            "common": "اریتره"
          },
          "pol": {
            "official": "Państwo Erytrea",
            "common": "Erytrea"
          },
          "por": {
            "official": "Estado da Eritreia",
            "common": "Eritreia"
          },
          "rus": {
            "official": "Государство Эритрея",
            "common": "Эритрея"
          },
          "slk": {
            "official": "Eritrejský štát",
            "common": "Eritrea"
          },
          "spa": {
            "official": "Estado de Eritrea",
            "common": "Eritrea"
          },
          "srp": {
            "official": "Држава Еритреја",
            "common": "Еритреја"
          },
          "swe": {
            "official": "Staten Eritrea",
            "common": "Eritrea"
          },
          "tur": {
            "official": "Eritre Devleti",
            "common": "Eritre"
          },
          "urd": {
            "official": "ریاستِ ارتریا",
            "common": "ارتریا"
          },
          "zho": {
            "official": "厄立特里亚",
            "common": "厄立特里亚"
          }
        },
        "latlng": [15, 39],
        "landlocked": false,
        "borders": [
          "DJI",
          "ETH",
          "SDN"
        ],
        "area": 117600,
        "demonyms": {
          "eng": {
            "f": "Eritrean",
            "m": "Eritrean"
          },
          "fra": {
            "f": "Érythréenne",
            "m": "Érythréen"
          }
        },
        "flag": "🇪🇷",
        "maps": {
          "googleMaps": "https://goo.gl/maps/HRyqUpnPwwG6jY5j6",
          "openStreetMaps": "https://www.openstreetmap.org/relation/296961"
        },
        "population": 5352000,
        "fifa": "ERI",
        "car": {
          "signs": [
            "ER"
          ],
          "side": "right"
        },
        "timezones": [
          "UTC+03:00"
        ],
        "continents": [
          "Africa"
        ],
        "flags": {
          "png": "https://flagcdn.com/w320/er.png",
          "svg": "https://flagcdn.com/er.svg",
          "alt": "The flag of Eritrea comprises three triangles — a large red isosceles triangle with its base spanning the hoist end and its apex at the midpoint on the fly end, and a green and blue right-angled triangle above and beneath the red triangle. On the hoist side of the red triangle is a golden vertical olive branch encircled by a golden olive wreath."
        },
        "coatOfArms": {
          "png": "https://mainfacts.com/media/images/coats_of_arms/er.png",
          "svg": "https://mainfacts.com/media/images/coats_of_arms/er.svg"
        },
        "startOfWeek": "monday",
        "capitalInfo": {
          "latlng": [15.33, 38.93]
        }
      },

]   


// function onlyNams(countries){
//     countries.forEach(country=>{
//         console.log(country.name);

//     })
// }

// onlyNams(countries)


//? 4. Hərfə görə ölkə sayının olduğu object return edən funksiya yazın

//? 5. Ən çox şəhəri olan ölkə adını return edən funksiya yazın

//? 6. Ölkə adı ən uzun olan ölkənin şəhərlərini return edən funksiya

//? 7. Bütün ölkələrin şəhər saylarının olduğu objecti return edən funksiya yazın .Nümunə {"Azerbaijan":70,"Turkey":300}

//? 8. Array-in müsbət elementlərinin cəmini tapan funksiya yazın. Əgər array-in bütün elementləri mənfidirsə geriyə 0 qaytarsın.

// function sumOfPositive(arr) {
//   let sum = 0;
//   let isNecative = true;

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > 0) {
//       isNecative = false;
//       sum += arr[i];
//     }
//   }
//   if (isNecative) {
//     return 0;
//   } else {
//     return sum;
//   }
// }
// console.log(sumOfPositive([1, 2, 3, -4, 5]));
// console.log(sumOfPositive([-1, -2, -3]));


//? 9. Array-in bütün elementlərini kvadrata yüksəldib yeni array qaytaran proqram yazın.

// const array = [1, 2, 3, 4, 5];
// function squareArray(arr) {
//     const squaredArray = [];

//     for (let num of arr) {
//         squaredArray.push(num**2);
//     }
//     return squaredArray;
// }

// console.log(squareArray(array));




//? 10. Array-in median və ədədi ortasını obyekt tərkibində return edən funksiya yazın. Median- ən kiçik element ilə ən böyük elementin ədədi ortasıdır.

// let array = [1, 5, 87, -589, -21, 1, 35, 88, -3]

// function MedianAverage(arr) {
//     let count = 0;
//     let sum = 0;
//     let Maxvalue = arr[0]
//     let Minvalue = arr[0]
//     let objArray = []
//     let obj = {}

//     for (let i = 0; i < arr.length; i++) {
//         count++
//         sum += arr[i]
//         if (arr[i] > Maxvalue) {
//             Maxvalue = arr[i]
//         }
//         if (arr[i] < Minvalue) {
//             Minvalue = arr[i] 
//         }
//     }
//     // console.log(sum)
//     // console.log(count)
//     let median = (Maxvalue + Minvalue) / 2;
//     let average = sum / count;
//     obj.median = median;
//     obj.average = average;
//     objArray.push(obj)
//     return obj
// }

// console.log(MedianAverage(array))

//? 11. Hər hansı bir cümlədə istənilən  baş hərflə olan simvolları birləşdirib qaytaran funksiya yazın. "My name is Gurban" - "MniG"
// let sentence = "My name is Dinara";

// function firstLetter(sentence) {
//     let result = '';
//     let words = sentence.split(' ');

//     for (let i = 0; i < words.length; i++) {

//         let firstLetter = words[i].charAt(0);
//         result += firstLetter;
//     }
//     return result;
// }
// console.log(firstLetter(sentence));

//? 12. Cümlədə olan bütün sözləri ixtisar edən proqram tərtib edin. Əgər söz 4 hərfdən azdırsa o qısaldılmır. İxtisar zamanı başdakı və sondakı hərflər saxlanılır, ortada olan hərflərin sayı yazılır. Cümlədə heç bir durğu işarəsi olmayacaq. Məsələn qurban-q4n, stəkan-s4n, javascript-j8t

// let sentence = "My name is Dinara";

// function reduction(str){
//     let words=str.split(" ")
//     let newWord=[]
//     for(let i=0; i<words.length;i++){
//         if(words[i].length>4){
//             newWord.push(words[i].charAt(0)+(words[i].length-2)+words[i][words[i].length-1])

//         }else{
//             newWord.push(words[i])
//         }
//     }
//     return newWord
// }
// console.log(reduction(sentence))

//? 13. İçərisində name və age key-ləri olan obyektlərdən təşkil olunmuş bir array var. Ən az yaşı olan ilə ən çox yaşı olan elementin yaşlarını və onların fərqini array şəklində qaytaran funksiya     yazın. Məsələn - [13,67,54]

// let people = [
//     { name: "Alice", age: 30 },
//     { name: "Bob", age: 25 },
//     { name: "Charlie", age: 35 }
// ];
// function ageDifference(people) {
//     let minAge = people[0].age;
//     let maxAge = people[0].age;
//     for (let i = 1; i < people.length; i++) {
//         let currentAge = people[i].age;
//         if (currentAge < minAge) {
//             minAge = currentAge;
//         }
//         if (currentAge > maxAge) {
//             maxAge = currentAge;
//         }
//     }

//     let difference = maxAge - minAge;

//     return [minAge, maxAge, difference];
// }

// console.log(ageDifference(people));

//? 14. N faktorialı hesaplayan funksiya yazın.

// function factorial(N) {
//     let result = 1;
//     for (let i = 1; i <= N; i++) {
//         result *= i;
//     }

//     return result;
// }
// console.log(factorial(5));
