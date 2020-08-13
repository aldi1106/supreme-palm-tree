// Declare default data product
let product = [
    {
        name: "Lenovo",
        price: 10000000,
        id: 1,
    },
    {
        name: "ACER",
        price: 9000000,
        id: 2,
    },
    {
        name: "HP",
        price: 12000000,
        id: 3,
    },
];

// Menampung data Cart
let cart = [];

// Generate data for view default product in product page
function generateProduct() {
    let result = '';
    for (let i = 0; i < product.length; i++) {
        result += `<div class="card text-white">
          <div class="card-header bg-success">
            <h6>${product[i].name}</h6>
          </div>
          <div class="card-body bg-info">
            <h5 class="card-title pricing-card-title">Rp. ${product[i].price}</h5>
            <button type="submit" class="btn btn-sm btn-outline-success bg-success text-white" onclick="addCart(${product[i].id})">Add to cart</button>
          </div>
        </div>`
    }
    document.getElementById('dataProduct').innerHTML = result;
    return result;
}

// addCart for push product data to Cart
function addCart(id) {
    let result = product.find(element => element.id === id);
    cart.push(result); // Push ke array
    localStorage.setItem('productsInCart', JSON.stringify(cart)); // Set local storage
}
