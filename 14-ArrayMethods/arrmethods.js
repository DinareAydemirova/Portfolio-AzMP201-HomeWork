let students = [
  {
    id: 1,
    name: "Nurane",
    surname: "Ismayilzade",
    age: 21,
    hobbies: ["music", "walking", "watchingfilm"],
    student: true,
    teacher: [
      { id: 1, name: "gurban" },
      { id: 2, name: "hajar" },
      { id: 3, name: "cavid" },
      { id: 4, name: "alisa" },
    ],
    loginDetail: { username: "nurana21", password: "nunu123" },
    gender: "girl",
    boyfriendGirlfriend: false,
    fail: false,
    avgPoint: 88,
    salaryAZN: 144,
  },
  {
    id: 2,
    name: "Gizilgul",
    surname: "Allahverdiyeva",
    age: 20,
    hobbies: ["book", "writing code"],
    student: true,
    teacher: [
      { id: 1, name: "gurban" },
      { id: 2, name: "hajar" },
      { id: 3, name: "babaxan" },
      { id: 4, name: "gulshen" },
    ],
    loginDetail: { username: "allahverdieva1", password: "salam123" },
    gender: "girl",
    boyfriendGirlfriend: true,
    fail: false,
    avgPoint: 70,
    salaryAZN: 100,
  },
  {
    id: 3,
    name: "Xanim",
    surname: "Nuriyeva",
    age: 21,
    hobbies: ["book", "music"],
    student: true,
    teacher: [
      { id: 1, name: "gurban" },
      { id: 2, name: "hajar" },
      { id: 3, name: "hikmet" },
      { id: 4, name: "gulsen" },
    ],
    loginDetail: { username: "xanim123", password: "salamBaku" },
    gender: "girl",
    boyfriendGirlfriend: false,
    fail: false,
    avgPoint: 80,
    salaryAZN: 145,
  },
  {
    id: 4,
    name: "Minaya",
    surname: "Binnetova",
    age: 21,
    hobbies: ["book", "gaming", "movie", "music"],
    student: true,
    teacher: [
      { id: 1, name: "gurban" },
      { id: 2, name: "hajar" },
      { id: 3, name: "anar" },
    ],
    loginDetail: { username: "binnetova", password: "hello123" },
    gender: "girl",
    boyfriendGirlfriend: false,
    fail: false,
    avgPoint: 90,
    salaryAZN: 142,
  },
  {
    id: 5,
    name: "Sabina",
    surname: "Hatamli",
    age: 21,
    hobbies: ["shopping", "listen to music"],
    student: true,
    teacher: [
      { id: 1, name: "gurban" },
      { id: 2, name: "hajar" },
      { id: 3, name: "Mirvari" },
    ],
    loginDetail: { username: "sebine123", password: "salam123" },
    gender: "girl",
    boyfriendGirlfriend: true,
    fail: false,
    avgPoint: 81,
    salaryAZN: 146,
  },

  {
    id: 6,
    name: "Ləman",
    surname: "Şamilova",
    age: 20,
    hobbies: [
      "watching movies",
      "reading books",
      "painting",
      " walking",
      " listen to music",
    ],
    student: true,
    teacher: [
      { id: 1, name: "gurban" },
      { id: 2, name: "hajar" },
    ],
    loginDetail: { username: "lemanshamilova", password: "salamBaku" },
    gender: "girl",
    boyfriendGirlfriend: false,
    fail: false,
    avgPoint: 85.8,
    salaryAZN: 145,
  },
  {
    id: 7,
    name: "Narmin",
    surname: "Musayeva",
    age: 21,
    hobbies: ["book", "gaming", "painting", "walking"],
    student: true,
    teacher: [
      { id: 1, name: "gurban" },
      { id: 2, name: "hajar" },
      { id: 3, name: "fidan" },
      { id: 4, name: "Irada" },
    ],
    loginDetail: {
      username: "narmin0",
      password: "narmin01",
    },
    gender: "girl",
    boyfriendGirlfriend: false,
    fail: false,
    avgPoint: 80,
    salaryAZN: 196,
  },

  {
    id: 8,
    name: "Fatima",
    surname: "Akhundzada",
    age: 20,
    hobbies: ["drawing", "sleeping"],
    student: true,
    teacher: [
      { id: 1, name: "gurban" },
      { id: 2, name: "hajar" },
      { id: 3, name: "Valida" },
    ],
    loginDetail: { username: "aynur123", password: "salamBaku" },
    gender: "girl",
    boyfriendGirlfriend: true,
    fail: false,
    avgPoint: 76,
    salaryAZN: 100,
  },
  {
    id: 9,
    name: "Elmir",
    surname: "Huseynov",
    age: 21,
    hobbies: ["book", "ice skating", "Tennis", "Karting"],
    student: true,
    teacher: [
      { id: 1, name: "Gurban" },
      { id: 2, name: "Hajar" },
      { id: 3, name: "Morad" },
      { id: 4, name: "Fikrat" },
    ],
    loginDetail: { username: "huseynovelmirr", password: "maxverstappen" },
    gender: "man",
    boyfriendGirlfriend: false,
    fail: true,
    avgPoint: 76,
    salaryAZN: 120,
  },
  {
    id: 10,
    name: "Fidan",
    surname: "Rehimli",
    age: 21,
    hobbies: ["book", "gaming"],
    student: true,
    teacher: [
      { id: 1, name: "gurban" },
      { id: 2, name: "hajar" },
      { id: 3, name: "Turan" },
    ],
    loginDetail: { username: "fidan123", password: "fidanrahimli" },
    gender: "girl",
    boyfriendGirlfriend: true,
    fail: true,
    avgPoint: 75,
    salaryAZN: 98,
  },
  {
    id: 11,
    name: "Aynur",
    surname: "Aynurova",
    age: 20,
    hobbies: ["book", "gaming"],
    teacher: [
      { id: 1, name: "gurban" },
      { id: 2, name: "hajar" },
    ],
    loginDetail: { username: "aynur123", password: "salamBaku" },
    gender: "girl",
    boyfriendGirlfriend: true,
    fail: true,
    avgPoint: 81,
    salaryAZN: 120,
  },

  {
    id: 12,
    name: "Elman",
    surname: "Muradov",
    age: 20,
    hobbies: [
      "book",
      "gaming",
      "sking",
      "wrestling",
      "swiming",
      "arguing about philosophy",
      "solving sudoku",
      "hiking",
      "walking",
    ],
    student: true,
    teacher: [
      { id: 1, name: "gurban" },
      { id: 2, name: "hajar" },
      { id: 3, name: "jale" },
      { id: 4, name: "akhmed" },
    ],
    loginDetail: { username: "elman17", password: "elman12345" },
    gender: "girl",
    boyfriendGirlfriend: false,
    fail: true,
    avgPoint: 76,
    salaryAZN: 100,
  },
];

//? - Bütün elementləri konsola yazın
  // function names(students){
  //   for (let i = 0; i < students.length; i++) {
  //      console.log(students[i])

  //   }
  // }
  // names(students)

//? - Bütün tələbələrin adlarını konsola yazın - ad: Qurban

// function names(students){
//     for (let i = 0; i < students.length; i++) {
//        console.log(students[i].name)

//     }
//   }
//   names(students)

//? - Bütün tələbələrin adlarını və soyadlarını konsola yazın - ad: Qurban, soyad: Qurbanzada

// function names(students){
//     for (let i = 0; i < students.length; i++) {
//        console.log("ad:",students[i].name , "soyad:",students[i].surname)

//     }
//   }
//   names(students)

//? - Kəsri olan tələbələrin ad və soyadını çapa verin

// function names(students){
//     for (let i = 0; i < students.length; i++) {
//       if(students[i].fail){
//         console.log("ad:",students[i].name , "soyad:",students[i].surname)
//       }

//     }
//   }
//   names(students)

//? - Ən çox hobbisi olan tələbənin ad və hobbilərini çapa verin

// function hobbies(students) {
//   let x = "";
//   let mostHobbies;
//   for (let i = 0; i < students.length; i++) {
//     mostHobbies = students[i];
//     if (mostHobbies.hobbies.length > x.length) {
//       x = mostHobbies.hobbies;
//     }
//   }
//   console.log("ad:", mostHobbies.name, "hobbies:", mostHobbies.hobbies);
// }
// hobbies(students);

//? - Ortalaması ən böyük olan tələbənin ad və soyadını çapa verin

// function AvgPoint(students) {
//   let elment;
//   let x = 0;
//   let maxAvg
//   for (let i = 0; i < students.length; i++) {
//     elment = students[i];
//     if (elment.avgPoint > x) {
//       x = elment.avgPoint;
//       maxAvg=elment

//     }

//   }
//   console.log("ad:", maxAvg.name, "soyad:", maxAvg.surname);

// }
// AvgPoint(students);

//? - Parolu ən uzun olan tələbənin username və adını çapa verin

// function password(students) {
//     let elment;
//     let max = '';
//     let LongPassword
//     for (let i = 0; i < students.length; i++) {
//       elment = students[i];
//       if (elment.loginDetail.password.length > max.length) {
//         max = elment.loginDetail.password;
//         LongPassword=elment

//       }

//     }
//     console.log("ad:", LongPassword.name, "soyad:", LongPassword.surname);

//   }
//   password(students);

//? - boyfriend-i olan tələbələrin adlarını və username-lərini çapa verin

// function password(students) {
//   let element;
//   for (let i = 0; i < students.length; i++) {
//     element = students[i];
//     if (element.boyfriendGirlfriend) {
//       console.log("ad:" + element.name + "soyad:" + element.loginDetail.username);
//     }
//   }
// }
// password(students);

//?  - yaşı 20 olan tələbələrin adlarını və müəllim adlarını çapa verin

//   function StudentsAndTeachers(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         let element = arr[i];
//         if (element.age === 20) {
//             let teacherNames = "";
//             for (let j = 0; j < element.teacher.length; j++) {
//                 teacherNames += element.teacher[j].name + " ";
//             }
//             console.log(`Name: ${element.name}, Teachers: ${teacherNames}`);
//         }
//     }
// }

// StudentsAndTeachers(students);

//? - Bütün tələbələrə təqaüdlərinin dollar ilə görünməsini təmin edin

//   function scholarship(arr) {
//     for (let i = 0; i < arr.length; i++) {
//        console.log(`$ ${students[i].salaryAZN}`);
//     }
// }

// scholarship(students);

//? - Müəllimlərin baş hərflərini böyük hərflə yazın

// function teachers(arr) {
//   function firstLetters(string) {
//     return string.charAt(0).toUpperCase() + string.slice(1);
//   }

//   for (let i = 0; i < arr.length; i++) {
//     let element = arr[i];
//     let teacherNames = "";
//     for (let j = 0; j < element.teacher.length; j++) {
//       let teacherName = element.teacher[j].name
//       teacherNames += firstLetters(teacherName) + " ";
//     }
//     console.log(`Teachers: ${teacherNames}`);
//   }
// }

// teachers(students);

//? - Şifrəsində rəqəm olmayan tələbələri tapın
// function password(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     let element = arr[i];
//     let password = element.loginDetail.password;
//     let withoutDigits = true;

//     for (let j = 0; j < password.length; j++) {
//       if (password[j] >= '0' && password[j] <= '9') {
//         withoutDigits = false;
//         break;
//       }
//     }

//     if (withoutDigits) {
//       console.log(element.name);
//     }
//   }
// }

// password(students);

//? - Qızların arasında id-si 3 olan müəllimlərin adını deyin

//   function StudentsAndTeachers(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         let element = arr[i];
//             let teacherName = "";
//             for (let j = 0; j < element.teacher.length; j++) {
//                 if( element.teacher[j].id==3){
//                   teacherName+=element.teacher[j].name+" "
//                 }

//                 if (teacherName !== "") {
//                   console.log(teacherName);
//                 }
//         }
//     }
// }

// StudentsAndTeachers(students);

//? - Tələbələrin adlarını və müəllim saylarını çapa verin

// function teacherCounts(arr){
//   for (let i = 0; i < arr.length; i++) {
//        element=arr[i]
//        teacherCount=0
//        for (let j = 0; j < element.teacher.length; j++) {
//          teacherCount++

//        }
//        console.log(`name: ${element.name} , Techer Count: ${teacherCount}`);

//   }
// }
// teacherCounts(students)

//? - Tələbələrin adlarını username və şifrələrindən ibarət yeni array yaradın [{name:qurban,username:qurban123,password:qqq123}]
// function newArray(arr) {
//   let newArr = [];
//   for (let i = 0; i < arr.length; i++) {
//      let element=arr[i]
//      let studentDetails={
//       name: element.name,
//       username: element.loginDetail.username,
//       password: element.loginDetail.password
//      }
//      newArr.push(studentDetails)
//   }
//   return newArr;
// }

// console.log(newArray(students));

//? 1. Write a JavaScript function to get the first element of an array. Passing a parameter 'n' will return the first 'n' elements of the array. (Array method-lardan istifadə edin)

// function sliceMethod(array, n) {
//     return array.slice(0, n);
// }

// console.log(sliceMethod([1, 73, 99, 20], 1));
// console.log(sliceMethod([1, 73, 99, 20], 2));
// console.log(sliceMethod([1, 73, 99, 20], 0));
// console.log(sliceMethod([1, 73, 99, 20], 4));

// ? 2. Write a simple JavaScript function to join all elements of the following array into a string.

// function joinMethod(arr, arg){
//     return arr.join(arg)
// }
// console.log(joinMethod([1, 73, 99, 20], "*"))
// console.log(joinMethod([1, 73, 99, 20], "/"))

// ? 3. Write a JavaScript program(function) that accepts a string as input and swaps the case of each character. For example, if you input 'The Quick Brown Fox' the output should be 'tHE qUICK bROWN fOX' console.log(convert('saLamNecesen)) -> SAlAMnECESEN

// ? 4 Write a method that clears the array from all unnecessary elements, like false, undefined, empty strings, zero, null. console.log(clear([0, 1, false, 2, undefined, '', 3, null]); -> [1, 2, 3]

//? 5. Write a method that returns a duplicate-free array. console.log(clearDuplicate([1, 2, 1, 2, 3])); -> [1, 2, 3] console.log(clearDuplicate(['a', 2, 'd', 2, 'a', 14, 14, 's', false])); -> ['a', 2, 'd', 14, 's', false]

// ? 6. Write a function that compares two arrays and returns true if they are identical. console.log(isEqual([1, 2, 3, 4], [1, 2, 3, 4])) -> true console.log(isEqual([1, 2, 3, 4], [1, 2, 3, 4, 5])) -> false console.log(isEqual([1, 2, 3, 4], [1, 2, 3, 4, false])) -> false console.log(isEqual([1, 2, 3, 4, false], [1, 2, 3, 4, false])) -> true

// function isEqual(arr1 ,arr2){
//    if(arr1.length!=arr2.length){
//     return false
//    }
//    for (let i = 0; i < arr1.length; i++) {
//      if(arr1[i]!=arr2[i]){
//       return false
//      }

//    }
//    return true
// }

// console.log(isEqual([1, 2, 3, 4], [1, 2, 3, 4]))
// console.log(isEqual([1, 2, 3, 4], [1, 2, 3, 4, 5]))
// console.log(isEqual([1, 2, 3, 4], [1, 2, 3, 4, false]))
// console.log(isEqual([1, 2, 3, 4, false], [1, 2, 3, 4, false]))

// ? 7. Bir string ve bir char qebul eden bir function yazın.Əgər daxil olunmuş char string-də varsa char-ın yerləşdiyi indekslərin cəmini yoxdursa -1 return etsin. Məsələn salam və 'a' daxil olunarsa output 1+3=4 olmalıdır.


// ? 8. Bir function yazın parametr olaraq bir array, bir index və bir string qəbul edir. Və daxil olunmuş indeksə əsasən göndərilmiş string-i həmin array-ə əlavə edib return etsin. Məsələn arqument olaraq - ['a','salam','b','world'], 3, "dev" göndərilərsə o zaman dev string-ini 3cu indekse elave etmelidir, eger gonderilmish indeks array-in uzunlugundan boyuk olarsa o zaman hemin string array-in en sonuna elave edilsin.


//? 9. Bir function yazın, parametr olaraq 2 array qebul edir və bir char qebul edir.gonderilmish char-a esasen hemin iki array-i ve elementlerini birleshdirib bir string olaraq return etmelidir. Meselen -> [1,2] [3,4] '*' gonderilerse output -> 1*2*3*4 string-i olmalidir.

//? 10 #studentlərin ortalama score'nu yeni bir arrayda yığın

// let student = [
//   { name: "Ali", scores: [90, 85, 92] },
//   { name: "Davud", scores: [100, 100, 100] },
//   { name: "Mammal", scores: [75, 80, 85] },
//   { name: "Camil", scores: [90, 95, 85] },
//   ];

// function score(arr){
//   let newArr=[]

//   for (let i = 0; i < arr.length; i++) {
//      sum=0
//      element=arr[i]
//      for (let j = 0; j < element.scores[j]; j++) {
//        sum+=element.scores[j]

//      }
//      let average=sum/element.scores.length
//      newArr.push(average)

//   }
//   return newArr
// }
// console.log(score(student));

//? 11 webTechs arrayında olan elementlərin uzunluğu 4'dən böyük olanları yeni bir arraya yığın

// const webTechs = [
//   "HTML",
//   "CSS",
//   "JS",
//   "React",
//   "JS",
//   "Redux",
//   "Node",
//   "JS",
//   "MongDB",
// ];

// function legthElement(arr) {
//   newArr = [];

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i].length>4) {
//       newArr.push(arr[i]);
//     }
//   }
//   return newArr;
// }

// console.log(legthElement(webTechs));

//? 12 product arrayindəki producların qiymətləri cəmini və ortalamasını tapın

// const products = [
//   {
//     id: 1,
//     title: "Smartphone",
//     description: "A high-end smartphone with the latest features.",
//     price: 799.99,
//   },
//   {
//     id: 2,
//     title: "Laptop",
//     description: "Powerful laptop with a large screen and fast processor.",
//     price: 1299.99,
//   },
//   {
//     id: 3,
//     title: "Coffee Maker",
//     description: "An automatic coffee maker with a built-in grinder.",
//     price: 99.99,
//   },
//   {
//     id: 4,
//     title: "Headphones",
//     description: "Wireless over-ear headphones with noise-cancellation.",
//     price: 199.99,
//   },
//   {
//     id: 5,
//     title: "Smart TV",
//     description: "55-inch 4K Smart TV with streaming apps built-in.",
//     price: 699.99,
//   },
// ];

// function sumOfPrices(arr){
//   sum=0
//   count=0
//   for (let i = 0; i < arr.length; i++) {
//      sum+= products[i].price
//      count++
//   }
//   return sum /count
// }
// console.log(sumOfPrices(products));

// ? 13 countries arrayində a ilə başlayıb a ilə bitən ölkələri tapın

// let countries = ["Azerbaijan", "Albania", "Germany", "America", "Russian"];

// function startEndA(array){
//   for (let i = 0; i < array.length; i++) {
//       if(countries[i].charAt(0)==='A' && countries[i].charAt(countries[i].length-1)==='a'){
//         console.log(countries[i]);
//       }

//   }
// }
// startEndA(countries)

//? 14 Verilmiş ədədin bölənlərinin sayını tapan funksiya tərtib edin.

// function findNumberOfDivisors(n) {
//   count=0
//   for (let i = 1; i <= n; i++) {
//     if (n % i == 0) {
//       count++
//     }
//   }
//   return count
// }
// console.log(findNumberOfDivisors(30));

// ? 15. daxil edilmiş cümlə daxilində boşluqların sayini tapan function yazin

// function findSpaceCounts(str){
//   count=0
//         for (let i = 0; i < str.length; i++) {
//           if(str[i]===" "){
//             count++
//           }
          
//         }
//         return count
//     }
//     console.log(findSpaceCounts("fhfhef sfdiheru ifhu"));




