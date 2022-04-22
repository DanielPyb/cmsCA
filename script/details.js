const detailesGame = document.querySelector(".gameDetailsCard");
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const list = document.querySelector(".gameList");
// GameName will be the title of the page

const gameDetailsContent = document.querySelector(".gameDetailsCard")
const feautredURL = "https://kodeblokk.com/CMS_ca_database/wp-json/wc/store/products?featured=true";
const gameName = params.get("id");
const gameURL = "https://kodeblokk.com/CMS_ca_database/wp-json/wc/store/products";
const detailsURL = `https://kodeblokk.com/CMS_ca_database/wp-json/wc/store/products/${gameName}`





async function createDetails(url){
  const response = await fetch(url);
  const product = await response.json();
  console.log(product);


  gameDetailsContent.innerHTML = "";

  gameDetailsContent.innerHTML = `
  <div class="gameDetailsCard">
  <h1>${product.name}</h1>
  <div class="gameDetailsContent">
      <div class="detailsIMG">
      <img src="${product.images[0].src}" alt="cover of ${product.name}">
          <p class="curWatching">23 watching...</p>
          <p class="curRemaining">15 in stock</p>
      </div>
          <div class="information">
          ${product.description}
          </div>
</div>

<div class="purchase">
  <p class="price">${product.prices.price},-</p>
  <button class="basketBtnLarge">Add to basket</button>
</div>
</div>
  `
  document.title = product.name;
}

createDetails(detailsURL)

async function createFeatured(url){
  const response = await fetch(url);
  const products = await response.json();

  products.forEach((game) => {
    list.innerHTML += `<li class="gameCard" >
    <h3>${game.name}</h3>
    <a href="details.html?id=${game.id}"><img src="${game.images[0].src}" alt="cover of ${game.name}" data-id=${game.id}></a>
    <p class="price">${game.prices.price},-</p>
    <button class="basketBtn"">Add to basket</button>
</li>`
})
}

createFeatured(feautredURL);

/*
function createDetails() {
  detailesGame.innerHTML = "";
  detailesGame.innerHTML += `<div class="gameDetailsCard">
    <h1>${gameName}</h1>
    <div class="gameDetailsContent">
        <div class="detailsIMG">
            <img src="images/assets/GameHub_covers10.jpg">
            <p class="curWatching">23 watching...</p>
            <p class="curRemaining">15 in stock</p>
        </div>
            <div class="information">
            <p>${gameName}</p>
        </div>
</div>
<div class="purchase">
<p class="price">44,99€</p>
<button class="basketBtnLarge">Add to basket</button>
</div>
</div>
`;
}

createDetails();

const list = document.querySelector(".gameList");

function createitems() {
  for (let i = 0; i < 3; i++) {
    list.innerHTML += `<li class="gameCardRec">
    <h2>${gameListArr[i].name}</h2>
    <a href="details.html?name=${gameListArr[i].name}"><img src="images/assets/GameHub_covers10.jpg" alt="cover of ${gameListArr[i].name}"></a>
    <p class="price">${gameListArr[i].price}€</p>
    <button class="basketBtn">Add to basket</button>
</li>`;
  }
}

createitems();


*/