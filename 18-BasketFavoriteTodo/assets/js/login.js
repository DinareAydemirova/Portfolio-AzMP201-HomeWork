let users=[
    {
        id:1,
        username:"dinara",
        password:"123"
    },
    {
        id:1,
        username:"dilara",
        password:"567"
    }
]

const page=JSON.parse(localStorage.getItem("isLogin"))

if(page){
window.location="home.html"

}else{
    const loginForm =document.querySelector("#login-form")
    const username=document.querySelector("#username")
    const password=document.querySelector("#password")
    
    
    loginForm.addEventListener("submit" ,(e)=>{
        e.preventDefault();
    if(users.find((elem)=>{
        return (elem.password==password.value && elem.username==username.value)
    })){
    localStorage.setItem("isLogin", JSON.stringify(true))
    window.location="home.html"
    }else{
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Yalnis istifadeci",
            footer: '<a href="./index.html">Why do I have this issue?</a>',
          });
    }
     
    });
}

