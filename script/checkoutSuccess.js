const list = document.querySelector(".recommendationList");


function createitems(){
for(let i = 7; i < 12; i++){
    list.innerHTML += `<li class="gameCardRec">
    <h3>${gameListArr[i].name}</h3>
    <a href="details.html?name=${gameListArr[i].name}"><img src="images/assets/GameHub_covers10.jpg" alt="cover of ${gameListArr[i].name}"></a>
    <p class="price">${gameListArr[i].price}€</p>
    <button class="basketBtn">Add to basket</button>
</li>`
}
};

createitems();
