let basket = JSON.parse(localStorage.getItem("basket")) || [];

const basketItems = document.querySelector(".basket-items");
const totalPrice = document.querySelector(".totalPrice");

const counter =document.querySelector(".counter")



createElement();

function createElement() {
    let sum=0
    let totalPrices
    basketItems.innerHTML = "";

  basket.forEach((elem) => {
    basketItems.innerHTML += `
          <div class="item">
          <img src=${elem.image}>
          <div class="item-details">
              <h2>${elem.title}</h2>
              <p>Description of the product...</p>
              <p>${elem.price}</p>
              <p>count: <span class="quantity">${elem.count}</span></p>
              <p class="totalPrice">${elem.price * elem.count}</p>
              <button  data="${elem.id}" class="decrement">-</button>
              <button  data="${elem.id}" class="increment">+</button>
      
          </div>
          <div class="item-actions">
              <button data="${elem.id}" class="remove-button"><i class="fa-solid fa-trash"></i></button>
          </div>
      </div>
      

          `;
    const incrementBtns = document.querySelectorAll(".increment");

    for (let incrementBtn of incrementBtns) {
      incrementBtn.addEventListener("click", (e) => {
        console.log(e.target);

        console.log(
          (basket.find(
            (elem) => elem.id == e.target.getAttribute("data")
          ).count += 1)
        );
        localStorage.setItem("basket", JSON.stringify(basket));

        basketItems.innerHTML = "";
        createElement();
      });
    }
    const decrementBtns = document.querySelectorAll(".decrement");

    for (let decrementBtn of decrementBtns) {
      decrementBtn.addEventListener("click", (e) => {
        if (
          basket.find((elem) => elem.id == e.target.getAttribute("data"))
            .count <= 1
        ) {
         basket= basket.filter((elem) => elem.id != e.target.getAttribute("data"));
          createElement();
        } else {
          console.log(e.target);

          console.log(
            (basket.find(
              (elem) => elem.id == e.target.getAttribute("data")
            ).count -= 1)
          );
          localStorage.setItem("basket", JSON.stringify(basket));

          basketItems.innerHTML = "";
          createElement();
        }
      });
    }

    const removeBtns = document.querySelectorAll(".remove-button");

    for (let removeBtn of removeBtns) {
        removeBtn.addEventListener("click", (e) => {
       
         basket= basket.filter((elem) => elem.id != e.target.getAttribute("data"));
      createElement()
      localStorage.setItem("basket", JSON.stringify(basket));
         
      });
    }


    totalPrices= elem.price*elem.count
   sum+=totalPrices
  });
  totalPrice.innerText=Math.floor(sum)
}
