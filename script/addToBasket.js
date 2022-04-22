const buttons = document.querySelectorAll(".basketBtn");
const chekcoutItems = document.querySelector(".chekcoutItems");
const removeItems = document.querySelectorAll(".removeItem");
const itemsInCart = document.querySelector("#amountOf")

const checkoutCart = getCartItems();

buttons.forEach((button) => {
  button.addEventListener("click", addClick);
});

removeItems.forEach((button) =>{
    button.addEventListener("click", removeGame);
})

function addClick() {
  const id = this.dataset.id;
  const name = this.dataset.name;
  const details = this.dataset.details;
  const genres = this.dataset.genres;
  const img = this.dataset.img;
  const price = this.dataset.price;

  const currentCart = getCartItems();

  const game = {
    id: id,
    name: name,
    details: details,
    genres: genres,
    img: img,
    price: price,
  };
  currentCart.push(game);
  saveCart(currentCart);

  itemsInCart.innerHTML = currentCart.length;
}

function getCartItems() {
  const cart = localStorage.getItem("cart");
  if (!cart) {
    return [];
  } else {
    return JSON.parse(cart);
  }
}

function saveCart(game) {
  localStorage.setItem("cart", JSON.stringify(game));
}

itemsInCart.innerHTML = checkoutCart.length;

checkoutCart.forEach((game) => {
  chekcoutItems.innerHTML += `
    <li class="gameCard">
    <button class="removeItem" data-id="${game.id}" data-name="${game.name}" data-genres="${game.genres}" data-consoll="${game.consoll}" data-img="${game.img}" data-price="${game.price}" data-details="${game.details}">X</button>
    <h2>${game.name}</h2>
    <a href="details.html?name=${game.name}"><img src="images/assets/GameHub_covers10.jpg" alt="cover of the game"></a>
    <p class="price">${game.price}€</p>
</li>`;
});
