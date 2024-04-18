let favorite = JSON.parse(localStorage.getItem("favorite")) || [];

const wishlist = document.querySelector(".product-card");

addFav();

function addFav() {
 
    wishlist.innerHTML = "";
  favorite.forEach((elem) => {
    cartBox.innerHTML += `
    <div class="product-card">
    <img class="prodImg" src=${elem.image} />
    <div class="card-content">
      <h3>${elem.title.slice(0, 15)}</h3>
      <p>
        This is a simple product card design with basket and 
      </p>
      <div class="button-container">
        <button data=${
          elem.id
        } class="basket-btn prodBasketBtn">Basket</button>
        <button class="favorite-btn prodFavBtn">Favori</button>
      </div>
    </div>
  </div>
`;
  })
}


