const basket = JSON.parse(localStorage.getItem("basket")) || [];

const homePage = document.querySelector(".homePage");
const basketPage = document.querySelector(".basketPage");
const wishlistPage = document.querySelector(".wishlistPage");
let favorite = JSON.parse(localStorage.getItem("favorite")) || [];


favorite.forEach((elem) => {
    homePage.innerHTML += `
      <div class="card">
        <img src=${elem.image} alt="Product Image">
        <div class="card-content">
          <h3>${elem.title}</h3>
          <p>${elem.description.slice(0, 100)}</p>
          <button data-id=${elem.id} class="button addToBasket"><i class="fas fa-shopping-basket"></i> Add to Basket</button>
          <button data-id=${elem.id} class="button addToFavorite"><i class="fas fa-heart"></i> Add to Favorites</button>
        </div>
      </div>`;
      const addToFavorites = document.querySelectorAll(".addToFavorite");
     for (const addToFavorite of addToFavorites) {
        addToFavorite.addEventListener("click" ,(e)=>{
            console.log(elem.id);
            console.log(e.target.getAttribute("data"));

            const checkItem=favorite.find((elem)=>elem.id==e.target.getAttribute("data"))
            if(checkItem){
                localStorage.setItem("favorite",JSON.stringify(favorite))
            }else{
                let elem =favorite.find((elem)=>elem.id==e.target.getAttribute("data"))
                favorite.push(elem)
                localStorage.setItem("favorite",JSON.stringify(favorite))

            }
        })
     }
      
      
  });




const counter = document.querySelector(".counter");
keepcounter();

function keepcounter() {
  counter.innerHTML = basket.reduce((acc, elem) => {
    acc += elem.count;
    return acc;
  }, 0);
}
