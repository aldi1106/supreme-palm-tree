
function generateCart() {
    cart = JSON.parse(localStorage.getItem('productsInCart'));
    let result = '';
    for (let i = 0; i < cart.length; i++) {
        result += `<div class="card text-white">
          <div class="card-header bg-success">
            <h6>${cart[i].name}</h6>
          </div>
          <div class="card-body bg-info">
            <h5 class="card-title pricing-card-title">Rp. ${cart[i].price}</h5>
            <button type="submit" class="btn btn-sm btn-outline-success bg-success text-white" onclick="removeCart(${cart[i].id})">Remove from cart</button>
          </div>
        </div>`
    }
    document.getElementById('dataCart').innerHTML = result;
    return result;
}

function removeCart(id) {
    let cart = JSON.parse(localStorage.getItem("productsInCart"))
    cart.splice(cart.indexOf(0), id) // Delete dari local storage
    localStorage.setItem('productsInCart', JSON.stringify(cart)); // Set local storage
    console.log(cart);
    location.reload();
}