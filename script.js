
let cart = [];

function addToCart(productName) {
    cart.push(productName);

    alert(
        productName + " ajouté au panier !\n" +
        "Nombre d'articles : " + cart.length
    );
}
