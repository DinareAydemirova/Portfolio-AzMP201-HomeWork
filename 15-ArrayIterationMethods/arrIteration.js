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

//   let result=students.filter((allelems)=>{
//     console.log(allelems);
//   })

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
// console.log(`name: ${mostHobbies.name}  hobbies: ${mostHobbies.hobbies}`);

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

//? - Şifrəsində rəqəm olmayan tələbələri tapın

//? - Qızların arasında id-si 3 olan müəllimlərin adını deyin
//? - Tələbələrin adlarını və müəllim saylarını çapa verin
//? - Tələbələrin adlarını username və şifrələrindən ibarət yeni array yaradın [{name:qurban,username:qurban123,password:qqq123}]
//? - Müəllimlərin adlarından sonra müəllim sözünü əlavə edin. String metod istifadə edin
//? - Hamının şifrəsinin əvvəlinə 3 ədəd boşluq əlavə edin. String metod istifadə edin
//? - Hamının şifrəsinin ilk 4 simvolu görsənsin yerdə qalanlar "*" ilə əvəz olunsun. String metod istifadə edin
//? - Hamının soyadının uzunluğu adının uzunluğu qədər olsun. String metod istifadə edin
//? - Bütün tələbələrin yaşlarının toplamı nə qədərdir
//? - Bütün tələbələrin cəmi bal ortalaması nə qədərdir
//? - "book" həvəsini olan tələbələrin siyahısını çap edin
//? - Tələbələrin yaş ortalaması nədir?
// ?- Hər bir tələbə üçün cinsiyət və yaşı göstərən bir obyekt yaradin
//? - Bütün tələbələrin ad və soyadlarının uzunluqlarının cəmi hansıdır
//? - Tələbələrin adlarını tərsinə çevirin.

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