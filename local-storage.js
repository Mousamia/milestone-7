const elements = (id) => document.getElementById(id);

// console.log(elements('product-name').value);
// console.log(elements('product-quantity').value);


const addProduct = () => {
    console.log(elements('product-name').value);

    const productkey = (elements('product-name').value);
    const productquantity = elements('product-quantity').value;
    console.log(productkey, productquantity);

}