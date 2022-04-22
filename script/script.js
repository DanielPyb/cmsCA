const itemsInCart = document.querySelector("#amountOf")

const cartLength = getAmount();

function getAmount() {
    const cart = localStorage.getItem("cart");
    if (!cart) {
      return [];
    } else {
      return JSON.parse(cart);
    }
  }
  

const updateCart= setInterval(itemsInCart.innerHTML = cartLength.length,[4000]);{
}


updateCart();