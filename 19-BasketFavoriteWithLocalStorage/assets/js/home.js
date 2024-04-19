const basket = JSON.parse(localStorage.getItem("basket")) || [];

const homePage = document.querySelector(".homePage");
const basketPage = document.querySelector(".basketPage");
const wishlistPage = document.querySelector(".wishlistPage");
let favorite = JSON.parse(localStorage.getItem("favorite")) || [];

fetch("https://fakestoreapi.com/products")
  .then((res) => res.json())
  .then((data) => {
    data.forEach((elem) => {
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
    });

    const addToFavorites = document.querySelectorAll(".addToFavorite");
    addToFavorites.forEach((addToFavorite) => {
      addToFavorite.addEventListener("click", (e) => {
       
        console.log(e.target.getAttribute("data-id"));
        const itemId = e.target.getAttribute("data-id");
        const checkItem = favorite.find((elem) => elem.id == itemId);
        if (!checkItem) {
          console.log(favorite);

          const item = data.find((elem) => elem.id == itemId);
          favorite.push(item);
          localStorage.setItem("favorite", JSON.stringify(favorite));
        }

        keepcounter();
      });
    });

    const basketButtons = document.querySelectorAll(".addToBasket");
    basketButtons.forEach((basketButton) => {
      basketButton.addEventListener("click", (e) => {
        const itemId = e.target.getAttribute("data-id");
        const checkItem = basket.find((elem) => elem.id == itemId);
        if (checkItem) {
          checkItem.count++;
        } else {
          const item = data.find((elem) => elem.id == itemId);
          item.count = 1;
          basket.push(item);
        }
        localStorage.setItem("basket", JSON.stringify(basket));
        keepcounter();
      });
    });
  })
  .catch((err) => {
    console.log(err);
  });

const counter = document.querySelector(".counter");
keepcounter();

function keepcounter() {
  counter.innerHTML = basket.reduce((acc, elem) => {
    acc += elem.count;
    return acc;
  }, 0);
}