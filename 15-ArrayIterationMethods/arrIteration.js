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

// let result=students.filter((allelems)=>{
//   console.log(allelems);
// })

//? - Bütün tələbələrin adlarını konsola yazın - ad: Qurban

// const names= students.map((student)=>
//     console.log(`${student.name}`)

// )

//? - Bütün tələbələrin adlarını və soyadlarını konsola yazın

//const fullName= students.map((student) =>
//   console.log(`Name: ${student.name} Surname: ${student.surname} `)
// );

//? - Kəsri olan tələbələrin ad və soyadını çapa verin

// const failedStudents=students
//   .filter((student) => student.fail)
//   .forEach((student) => console.log(`${student.name} ${student.surname}`));

//? - Ən çox hobbisi olan tələbənin ad və hobbilərini çapa verin

// const mostHobbies=students.reduce((maxStudent , currentStudent)=>{
//     return currentStudent.hobbies.length<maxStudent.hobbies.length ? maxStudent:currentStudent
// })
// console.log(`name: ${mostHobbies.name} \n hobbies: ${mostHobbies.hobbies}`);

//? - Ortalaması ən böyük olan tələbənin ad və soyadını çapa verin

// const HighAvgPoint=students.reduce((highAvgStudent, currentStudent)=>{
//     return highAvgStudent.avgPoint>currentStudent.avgPoint ? highAvgStudent:currentStudent
// })
// console.log(`name: ${HighAvgPoint.name} surname: ${HighAvgPoint.surname}`);

//? - Parolu ən uzun olan tələbənin username və adını çapa verin

// const longestPsssword= students.reduce((longPassStudent , currentStudent)=>{
//     return longPassStudent.loginDetail.password.length>currentStudent.loginDetail.password.length ?
//     longPassStudent:currentStudent
// })
// console.log(`Usename: ${longestPsssword.loginDetail.username} name: ${longestPsssword.name}`);

//? - boyfriend-i olan tələbələrin adlarını və username-lərini çapa verin

// const haveBoyfriendGirlfriend=students.filter(student=>student.boyfriendGirlfriend)
// haveBoyfriendGirlfriend.forEach(student=>{
//     console.log(`Usename: ${student.loginDetail.username} name: ${student.name}`)
// })

//? - yaşı 20 olan tələbələrin adlarını və müəllim adlarını çapa verin

// const twYearOld=students.filter(student=>student.age==20)

// twYearOld.forEach(student=>{
//     console.log(`name ${student.name}`);
//     student.teacher.forEach(teacher=>{
//         console.log(` teachers: ${teacher.name}`)
//     })
// })

//? - Bütün tələbələrə təqaüdlərinin dollar ilə görünməsini təmin edin

// let convert=0.59

// students.forEach(student=>{
//    let salaryUSD= student.salaryAZN * convert
//    console.log(salaryUSD);
// })

//? - Müəllimlərin baş hərflərini böyük hərflə yazın

// const convertCapital=students.forEach(student=>{
//   student.teacher.forEach(teacher=>{
//     console.log(teacher.name.charAt(0).toUpperCase()+ teacher.name.slice(1));
//   })
// })

//? - Şifrəsində rəqəm olmayan tələbələri tapın

// let studentsWithoutDigits = students.filter(student => {
//   for (let char of student.loginDetail.password) {
//       if (char >= '0' && char <= '9') {
//           return false; 
//       }
//   }
//   return true; 
// });

// console.log(studentsWithoutDigits);


//? - Qızların arasında id-si 3 olan müəllimlərin adını deyin

// let result=students.filter(student=>student.gender=="girl")
// result.forEach(student=>{
//   student.teacher.forEach(tescher=>{
//     if(tescher.id==3){
//       console.log(tescher.name);
//     }
//   })
// })

//? - Tələbələrin adlarını və müəllim saylarını çapa verin

// const findNameSurname=students.forEach(student=>{
//   console.log(`name: ${student.name}`);
//   console.log(student.teacher.length);
// })

//? - Tələbələrin adlarını username və şifrələrindən ibarət yeni array yaradın [{name:qurban,username:qurban123,password:qqq123}]

// let result= students.reduce((acc, elem)=>{
//     acc.push(` name: ${elem.name}, username: ${elem.loginDetail.username}`)
//     return acc
// },[])
// console.log(result);

//? - Müəllimlərin adlarından sonra müəllim sözünü əlavə edin. String metod istifadə edin

// const teanherNames=students.forEach(student=>{
//    student.teacher.forEach((teacher)=>{
//     console.log(teacher.name.concat("  " , "teacher"));
//    })
// })

//? - Hamının şifrəsinin əvvəlinə 3 ədəd boşluq əlavə edin. String metod istifadə edin

// const password= students.map(student=>{
//    console.log(student.loginDetail.password.padStart(student.loginDetail.password.length + 3 ," "));
// })

//? - Hamının şifrəsinin ilk 4 simvolu görsənsin yerdə qalanlar "*" ilə əvəz olunsun. String metod istifadə edin

// const password= students.map(student=>{
//    console.log(student.loginDetail.password.substring(0, 4).padEnd(student.loginDetail.password.length, "*"));
// })

//? - Hamının soyadının uzunluğu adının uzunluğu qədər olsun. String metod istifadə edin

// const surnameName=students.forEach(student=>{
//   console.log(student.name , student.surname.slice(0 ,student.name.length));
// })

//? - Bütün tələbələrin yaşlarının toplamı nə qədərdir

// const sumAges=students.reduce((sum , student)=>{
//    return sum + student.age
// },0)
// console.log(sumAges);

//? - Bütün tələbələrin cəmi bal ortalaması nə qədərdir

// const sumAverage=students.reduce((sum , student)=>{
//   return sum + student.avgPoint
// },0)
// console.log(sumAverage);

//? - "book" həvəsini olan tələbələrin siyahısını çap edin

// const studentsWithBookHobby = students
//     .filter(student => student.hobbies.includes("book"))
//     .map(student => student.name)

// console.log(studentsWithBookHobby);

//? - Tələbələrin yaş ortalaması nədir?

// const totalAge=students.reduce((acc, student)=>acc+ student.age ,0)
// const avgAge= totalAge/students.length
// console.log(avgAge);

// ?- Hər bir tələbə üçün cinsiyət və yaşı göstərən bir obyekt yaradin

// const newObj=students.map(student=>{
//   return {
//     gende: student.gender,
//     age: student.age
//   }
// })
// console.log(newObj);

//? - Bütün tələbələrin ad və soyadlarının uzunluqlarının cəmi hansıdır

// const sumOfLengthNameSurname=students.reduce((sum, elem)=>{
//   sum+=elem.name.length+elem.surname.length
//   return sum
// },0)
// console.log(sumOfLengthNameSurname);

//? - Tələbələrin adlarını tərsinə çevirin.

// const reversedNames = students.map(student => student.name.split('').reverse().join(''));
// console.log(reversedNames);

//? - "gamig" həvəsi olan tələbələrin array-ini yaradın

// result=students.filter(elem=>{

//   return elem.hobbies.includes("gaming")
// })

// console.log(result);

//? - Bütün tələbələrin hobbiləri olan array yaradın?

// result= students.reduce((acc, elem)=>{
//     acc.push(elem.hobbies)
//     return acc
// },[])
// .flat()
// console.log(result);

//? 1. Write a JavaScript function to get the first element of an array. Passing a parameter 'n' will return the first 'n' elements of the array.(Array method-lardan istifadə edin)

// const getFirst = (array, n = 1) => {
//   return array.slice(0, n);
// };

// console.log(getFirst([1, 73, 99, 20]));
// console.log(getFirst([1, 73, 99, 20], 2));
// console.log(getFirst([1, 73, 99, 20], 0));
// console.log(getFirst([1, 73, 99, 20], 4));

//? 2. Write a simple JavaScript function to join all elements of the following array into a string.

// const join=(array, operator)=>{
//    return array.join(operator)
// }

// console.log(join([1, 73, 99, 20], "*"))
// console.log(join([1, 73, 99, 20], "/"))

// ? 3. Write a JavaScript program(function) that accepts a string as input and swaps the case of each character. For example, if you input 'The Quick Brown Fox' the output should be 'tHE qUICK bROWN fOX'

// const swamp=(string)=>{
//   return string.split('').map(letter=>{
//     if(letter===letter.toLowerCase()){
//       return letter.toUpperCase()
//     }else{
//       return letter.toLowerCase()
//     }
//   }).join('')
// }
// console.log(swamp("The Quick Brown Fox"));



//? 4. Write a method that clears the array from all unnecessary elements, like false, undefined, empty strings, zero, null.

// const clear=(array)=>{
//   return array.filter(elem=>{
//     return elem!== false && elem !== undefined && elem !== null && elem !== 0 && elem !== '';
//   })
// }
// console.log(clear([0, 1, false, 2, undefined, '', 3, null]));

//? 5. Write a method that returns a duplicate-free array.

// let nums= [1, 2, 1, 2, 3]
// let clearDuplicate=nums.reduce((acc, elem)=>{
//   !acc.includes(elem) ? acc.push(elem):null
//   return acc
// },[])
// console.log(clearDuplicate);

//? 6. Write a function that compares two arrays and returns true if they are identical.

// const isEqual=(array1 , arry2)=>{
// if(array1.length !== arry2.length){
//   return false
// }
// return array1.every((elem , index)=>elem===arry2[index])
// }

// console.log(isEqual([1, 2, 3, 4], [1, 2, 3, 4]))
// console.log(isEqual([1, 2, 3, 4], [1, 2, 3, 4, 5]))
// console.log(isEqual([1, 2, 3, 4], [1, 2, 3, 4, false]))
// console.log(isEqual([1, 2, 3, 4, false], [1, 2, 3, 4, false]))

//? 7. Bir string ve bir char qebul eden bir function yazın.Əgər daxil olunmuş char string-də varsa char-ın yerləşdiyi indekslərin cəmini yoxdursa -1 return etsin. Məsələn salam və 'a' daxil olunarsa output 1+3=4 olmalıdır.

// let cheeckLetter=(word, letter)=>{
//   sum=0
//   if(word.includes(letter)){
//     for (let i = 0; i < word.length; i++) {
//       if(word[i]===letter){
//         sum+=i

//       }

//     }
//     console.log(sum);
//   }else{
//     console.log(-1);
//   }
// }
// cheeckLetter("salam","a")

//? 8. Bir function yazın parametr olaraq bir array, bir index və bir string qəbul edir. Və daxil olunmuş indeksə əsasən göndərilmiş string-i həmin array-ə əlavə edib return etsin. Məsələn arqument olaraq - ['a','salam','b','world'], 3, "dev" göndərilərsə o zaman dev string-ini 3cu indekse elave etmelidir, eger gonderilmish indeks array-in uzunlugundan boyuk olarsa o zaman hemin string array-in en sonuna elave edilsin.

// let newarr = (arr, i, str) => {
//   arr.splice(i, 0, str);
//   return arr;
// };

// console.log(newarr(['a','salam','b','world'], 3, "dev"));

//? 9. Bir function yazın, parametr olaraq 2 array qebul edir və bir char qebul edir.gonderilmish char-a esasen hemin iki array-i ve elementlerini birleshdirib bir string olaraq return etmelidir. Meselen -> [1,2] [3,4] '*' gonderilerse output -> 1*2*3*4 string-i olmalidir.

// let func=(arr1, arr2, char)=>{
//   let arr3=arr1.concat(arr2)
//   console.log(arr3.join(char));
// }

// func([1,2],[3,5],"*")

//? 10 studentlərin ortalama score'nu yeni bir arrayda yığın

// const student = [
//   { name: "Ali", scores: [90, 85, 92] },
//   { name: "Davud", scores: [100, 100, 100] },
//   { name: "Mammal", scores: [75, 80, 85] },
//   { name: "Camil", scores: [90, 95, 85] },
// ];

// result=student.reduce((acc, elem)=>{
//   let averagepoint= elem.scores.reduce((average, elemant)=>{
//     return average+elemant
//   },0)/elem.scores.length
//   acc.push(averagepoint)
//   return acc
// },[])

// console.log(result);

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

// let result = webTechs.reduce((acc, elem) => {
//   if (elem.length > 4) {
//     acc.push(elem);
//   }
//   return acc;
// }, []);
// console.log(result);

//? 12 roduct arrayindəki producların qiymətləri cəmini və ortalamasını tapın\

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

// result=products.reduce((sum, elem)=>{
//   return sum+= elem.price
// },0) / products.length
// console.log(result);

//? 13 countries arrayində a ilə başlayıb a ilə bitən ölkələri tapın

// let countries = ["Azerbaijan", "Albania", "Germany", "America", "Russian"];

// const startEndA = countries.filter(country=>
//     country.toLocaleLowerCase().startsWith("a") &&
//     country.toLocaleLowerCase().endsWith("a")
// )

//  console.log(startEndA);

// ? 14 Verilmiş ədədin bölənlərinin sayını tapan funksiya tərtib edin.

// let result = (num) => {
//   let divisors = [];
//   for (let i = 1; i <= num; i++) {
//     if (num / i === Math.floor(num / i)) {
//       divisors.push(i);
//     }
//   }

//   return divisors;
// };

// console.log(result(12));

//? 15 daxil edilmiş cümlə daxilində boşluqların sayini tapan function yazin

// const findSpaceCounts = (str) => {
//   let spaces = 0;
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === ' ') {
//       spaces++;
//     }
//   }
//   return spaces;
// };

// console.log(findSpaceCounts("sdhfshkdjf sdfjksdf dfkjsdf"));
