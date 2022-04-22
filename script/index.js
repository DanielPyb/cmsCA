const gameURL = "https://kodeblokk.com/CMS_ca_database/wp-json/wc/store/products?per_page=20"
const list = document.querySelector(".list");
const category = document.querySelectorAll(".gameSystem");
const searchBtn = document.querySelector("#searchBTN");


async function getProducts(url){
    const response = await fetch(url);
    const products = await response.json();

    products.forEach((game) => {
        list.innerHTML += `<li class="gameCard" >
        <h3>${game.name}</h3>
        <a href="details.html?id=${game.id}"><img src="${game.images[0].src}" alt="cover of ${game.name}"  data-id=${game.id}></a>
        <p class="price">${game.prices.price},-</p>
        <button class="basketBtn"">Add to basket</button>
    </li>`
    })
};

getProducts(gameURL)

searchBtn.onclick = function(e){
    e.preventDefault();
    const searchBar = document.querySelector("#searchInput");
    const newURL = gameURL + `&search=${searchBar.value}`;
    console.log(searchBar.value)
    list.innerHTML = "";
    getProducts(newURL);
}
