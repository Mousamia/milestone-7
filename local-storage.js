const elements = (id) => document.getElementById(id);

// console.log(elements('product-name').value);
// console.log(elements('product-quantity').value);


const addProduct = () => {
    const productName = elements('product-name').value;
    const productquantity = elements('product-quanity').value

    console.log(productName, productquantity);
    const ul = document.getElementById('container');
    const li = document.createElement('li');
    li.innerText = `${productName} ${productquantity}
    `;

    ul.appendChild(li);
    getLoacalStorage();
    saveProductToLocalStorage(productName, productquantity);
    showProductsfromLocalStorage();
}

// checking if the item exists in localstorage

const getLoacalStorage = () => {
    let cart = {};
    let storedCart = localStorage.getItem('cart');
    // let samia = localStorage.getItem('samia');
    if(storedCart){
        cart = JSON.parse(storedCart);
        // cart = JSON.parse(samia);
    }

    return cart;
}


const saveProductToLocalStorage = (productName, productquantity) => {
    const cart = getLoacalStorage();
    console.log(cart);
    cart[productName] = productquantity;

    const stringyfied = JSON.stringify(cart);
    localStorage.setItem("cart", stringyfied);
    ;

}


const showProductsfromLocalStorage = () => {
    const cart = getLoacalStorage();
    console.log(cart);
    console.log(typeof( cart));
    for(const product in cart){
        console.log(`${product}, ${cart[product]} `);
    }
}