//?  1. Verilmiş array-in tək elementlərinin indeksini çapa verən proqram tərtib edin.

// let arr=[3,8,2,5,4,10,7,6]

// for(let i=0; i<arr.length; i++){
//     if(arr[i]%2==1){
//         console.log(i)
//     }
// }

//?  2. Verilmiş array-in tək indeksli elementlərini çapa verən proqram tərtib edin.

// let arr=[3,8,2,5,4,10,7,6]

// for(let i=0; i<arr.length; i++){
//     if(i%2==1){
//         console.log(arr[i])
//     }
// }

//?  3. Verilmiş array-in max elementini çapa verən proqram tərtib edin.

// let arr=[3,8,2,5,4,10,7,6]
// let maxElement=arr[0]
// for(let i=0; i<arr.length; i++){
//     if(maxElement<arr[i]){
//         maxElement=arr[i]
//     }
// }
// console.log(maxElement)

//?  4. Verilmiş array-in cüt elementlərinin max elementini çapa verən proqram tərtib edin.

// let arr=[3,8,2,5,4,10,7,6]
// let maxEven=arr[0]
// for(let i=0; i<arr.length; i++){
//   if(arr[i]%2==0){
//     if(maxEven<arr[i]){
//         maxEven=arr[i]
//     }
//   }

// }
// console.log(maxEven)

//?  5. Verilmiş array-in min elementinin indeksini çapa verən proqram tərtib edin.

// let arr=[3,8,1,5,4,10,7,6]
// let min=arr[0]
// let index=0
// for(let i=0; i<arr.length; i++){
//   if(min>arr[i]){
//     min=arr[i]
//     index=i
//   }

// }
// console.log(min)
// console.log(index)

//?  6. Verilmiş array-in min elementi ilə max elementinin yerini dəyişən proqram tərtib edin

// let arr = [3, 8, 1, 5, 4, 10, 7, 6];

// let indexMin = 0;
// let min = arr[0];
// for (let i = 1; i < arr.length; i++) {
//   if (arr[i] < min) {
//     min = arr[i];
//     indexMin = i;
//   }
// }

// let indexMax = 0;
// let max = arr[0];
// for (let i = 1; i < arr.length; i++) {
//   if (arr[i] > max) {
//     max = arr[i];
//     indexMax = i;
//   }
// }

// let place = arr[indexMin];
// arr[indexMin] = arr[indexMax];
// arr[indexMax] = place;

// console.log(arr);

//?  7. Verilmiş array-in  cüt elementlərinin min elementi ilə tək elementlərinin max elementinin yerini dəyişən proqram tərtib edin

// let arr=[3,8,2,5,4,10,7,6]
// let minEven=arr[0]
// let minEvenIndex=[0]
// for(let i=0; i<arr.length; i++){
//   if(arr[i]%2==0){
//     if(minEven>arr[i]){
//         minEven=arr[i]
//         minEvenIndex=[i]
//     }
//   }

// }
// let maxOdd=arr[0]
// let maxOddIndex=[0]
// for(let i=0; i<arr.length; i++){
//   if(arr[i]%2==1){
//     if(maxOdd<arr[i]){
//         maxOdd=arr[i]
//         maxOddIndex=[i]
//     }
//   }

// }
// let place= arr[minEvenIndex]
// arr[minEvenIndex]=arr[maxOddIndex]
// arr[maxOddIndex]=place
// console.log(arr)

//?  8. Daxil olunan ədədin array-də olub olmadığını təyin edən proqram tərtib edin.

// let num=prompt("eded daxil et")
// let arr=[3,8,2,5,4,10,7,6]
// let check =false
// for(let i=0; i<arr.length; i++){

//     if(num==arr[i]){
//          check=true
//     }
// }
// if(check){
//     console.log("reqem movcuddur")
// }else{
//     console.log("reqem movcud deyil")
// }

//?  9. Verilmiş array-də min və max elementi nəzərə almadan yerdə qalan bütün elementlərin cəmini tapın.

// let arr=[3,8,2,5,4,10,7,6]
// let min=arr[0]
// let max=arr[0]
// sum=0
// for(let i = 0; i<arr.length; i++){
//     if(min>arr[i]){
//         min=arr[i]
//     }else if(max<arr[i]){
//         max=arr[i]
//     }
// }

// for(let i= 0;i<arr.length;i++){
//     if(arr[i]!=max && arr[i]!=min){
//         sum+=arr[i]
//     }
// }
// console.log(sum)

//?  10. Verilmiş array-in bool tipinde olan elementin qonsu elementlerini ekrana cixaran proqram yazin

// let arr = [2, 9, -5, -4, "AzerBayCan", true, 12, "LANKARAN", "LimOn", 182, 4];

// for (let i = 0; i < arr.length; i++) {
//     if (typeof arr[i] === 'boolean') {
//         let left = (i > 0) && arr[i - 1]
//         let right = (i < arr.length - 1) && arr[i + 1]
//         console.log( left, right);
//         break;
//     }
// }

//?  11. Verilmiş array-in ən uzun sözünü ekrana çıxaran proqram yazın

// let arr = [2, 9, -5, -4, "AzerBayCan", true, 12, "LANKARAN", "LimOn", 182, 4];
// let word = "";
// for (let i = 0; i < arr.length; i++) {
//   if (typeof arr[i] === "string") {
//     if (arr[i].length > word.length) {
//       word = arr[i];
//     }
//   }
// }
// console.log(word);

//?  12. Verilmiş array-in bütün hərfləri böyük olan sözün özünü və indeksini çapa çıxaran proqram yazın.

// let arr = [2, 9, -5, -4, "AzerBayCan", true, 12, "LANKARAN", "LimOn", 182, 4];
// let word=""
// let index=0
// for (let i = 0; i < arr.length; i++) {
//     if(typeof arr[i]==='string' && arr[i]===arr[i].toUpperCase()){
//         word=arr[i]
//         index=i
//     }
// }
// console.log(word)
// console.log(index)

//?  13. Verilmiş array-in 2-dən artıq böyük hərfi olan elementlərini çapa çıxaran proqram yazın

//  let arr = [2, 9, -5, -4, "AzerBayCan", true, 12, "LANKARAN", "LimOn", 182, 4];

// for (let i = 0; i < arr.length; i++) {
//     if (typeof arr[i] === 'string') {
//         let uppercaseCount = 0;
//         for (let j = 0; j < arr[i].length; j++) {
//             if (arr[i][j] === arr[i][j].toUpperCase() && arr[i][j] !== arr[i][j].toLowerCase()) {
//                 uppercaseCount++;
//             }
//         }
//         if (uppercaseCount > 2) {
//             console.log(arr[i]);
//         }
//     }
// }

