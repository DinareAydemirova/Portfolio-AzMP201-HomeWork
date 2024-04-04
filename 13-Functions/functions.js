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
