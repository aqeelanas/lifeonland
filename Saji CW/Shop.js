//Opening the cart screen when cart icon is clicked
const cart = document.querySelector('#cart');
const cartScreenOverlay = document.querySelector('.cart-screen-overlay');

cart.addEventListener('click', () => {
    if (cartScreenOverlay.style.transform = 'translateX(-200%)'){
        cartScreenOverlay.style.transform = 'translateX(0)';
    } 
    else {
        cartScreenOverlay.style.transform = 'translateX(-200%)';
    }
})


//Closing the cart screen when the close icon in cart display is clicked
const closeBtn = document.querySelector ('#close-btn');

closeBtn.addEventListener('click', () => {
    cartScreenOverlay.style.transform = 'translateX(-200%)';
});
cartScreenOverlay.addEventListener('click', (e) => {
    if (e.target.matches('cart-screen-overlay')){
        cartScreenOverlay.style.transform = 'translateX(-200%)'
    }
})

//Adding products to the cart
const addToCart = document.getElementsByClassName('add-to-cart');
const productRow = document.getElementsByClassName('product-row');

for (let i = 0; i < addToCart.length; i++) {
    button = addToCart[i];
    button.addEventListener('click', addToCartClicked)
}

function addToCartClicked (event) {
    button = event.target;
    let cartItem = button.parentElement;
    let name = cartItem.getElementsByClassName('product-name')[0].innerText;
    let price = cartItem.getElementsByClassName('product-price')[0].innerText;
    let imageSrc = cartItem.getElementsByClassName('product-image')[0].src;
    addItemToCart (name,price, imageSrc);
    updateCartPrice()
}

function addItemToCart (name, price, imageSrc) {
    let productRow = document.createElement('div');
    productRow.classList.add('product-row');
    let productRows = document.getElementsByClassName('product-rows')[0];
    let cartImage = document.getElementsByClassName('cart-image');
    
    for (let i = 0; i < cartImage.length; i++){
        if (cartImage[i].src == imageSrc){
            alert ('This item has already been added to the cart')
            return;
        }
    }
    
    let cartRowItems = `
    <div class="product-row">
        <div class="product-info">
            <img class="cart-image" src="${imageSrc}" alt="">
            <span class="cart-name">${name}</span> 
        </div>      
        <span class ="cart-price">${price}</span>
        <input class="product-quantity" type="number" value="1">
        <button class="remove-btn">Remove</button>
    </div>
    `
    
    productRow.innerHTML = cartRowItems;
    productRows.append(productRow);
    productRow.getElementsByClassName('remove-btn')[0].addEventListener('click', removeItem)
    productRow.getElementsByClassName('product-quantity')[0].addEventListener('change', changeQuantity)
    updateCartPrice()
}
//End of adding products to cart

//Removing products from the cart after adding
const removeBtn = document.getElementsByClassName('remove-btn');
for (let i = 0; i < removeBtn.length; i++) {
    button = removeBtn[i]
    button.addEventListener('click', removeItem)
}

function removeItem (event) {
    btnClicked = event.target
    btnClicked.parentElement.parentElement.remove()
    updateCartPrice()
}

//Updating quantity input if the cart is filled or empty
let quantityInput = document.getElementsByClassName('product-quantity')[0];

for (let i = 0; i < quantityInput; i++){
    const input = quantityInput[i]
    input.addEventListener('change', changeQuantity)
}

function changeQuantity(event) {
    let input = event.target
    if (isNaN(input.value) || input.value <= 0){
        input.value = 1
    }
    updateCartPrice()
}
//End of updating the quanity input of the cart

//Updating the total price of the cart
function updateCartPrice() {
    let total = 0
    for (var i = 0; i < productRow.length; i += 2) {
        cartRow = productRow[i]
        let priceElement = cartRow.getElementsByClassName('cart-price')[0]
        let quantityElement = cartRow.getElementsByClassName('product-quantity')[0]
        let price = parseFloat(priceElement.innerText.replace('$', ''))
        let quantity = quantityElement.value
        total = total + (price * quantity )
  }
  document.getElementsByClassName('total-price')[0].innerText =  '$' + total
  
  document.getElementsByClassName('cart-quantity')[0].textContent = i /= 2

  // Display the total found next to the "Total Price:" text inside the modal
  document.getElementById('total-price-text').textContent = 'Total Price: $' + total;

}
//End of updating the total price

//Placing order
const purchaseBtn = document.querySelector('.purchase-btn');
const closeCartModel = document.querySelector('.cart-screen');

purchaseBtn.addEventListener('click', purchaseBtnClicked)

function purchaseBtnClicked () {
    let cartItems = document.getElementsByClassName('product-rows')[0];
    if (cartItems.length === 0) {
        //alert user if cart is empty
        alert('Please select at least one item before making a purchase.');
        return;
    } 
    updateCartPrice()   
}

const nextPageBtn = document.getElementById('id01');
nextPageBtn.addEventListener('click', (event) => {
  const cartItems = document.getElementsByClassName('product-row');
  if (cartItems.length === 0) {
    alert('Your cart is empty. Please add items to your cart before proceeding.');
    cartScreenOverlay.style.transform = 'translateX(-200%)'
    event.preventDefault(); // prevent default behavior of the button
  } 
});
//End of placing order

//Clearing the cart
const clearCartBtn = document.querySelector('.clear-cart-btn');

clearCartBtn.addEventListener('click', clearCart)

function clearCart() {
    let cartItems = document.getElementsByClassName('product-rows')[0];
    while (cartItems.hasChildNodes()) {
        cartItems.removeChild(cartItems.firstChild);
    }
    updateCartPrice();

    //Clear the name and email fields 
    document.getElementById("fname").value = "";
    document.getElementById("email").value = "";
}

//Validation check if the user has entered the name and email and format of those
function validateForm() {
    let name = document.getElementById("fname").value;
    let email = document.getElementById("email").value;
    let emailFormat = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let nameFormat = /^[a-zA-Z]+$/;

    if (name == "" || email == "") {
      alert("Name and email address are required");
      return false;
    }
    if (!nameFormat.test(name)) {
        alert("Please enter a valid name (text only)");
        return false;
    }
    if (!emailFormat.test(email)) {
        alert("Please enter a valid email address");
        return false;
    }
    return true;
}

//-------------------------------------------------------------//
//Javascript for Checkout form

//Get the checkout
let checkout = document.getElementById('id01');

// When the user clicks anywhere outside of the checkout form, close it
window.onclick = function(event) {
  if (event.target == checkout) {
    checkout.style.display = "none";
  }
}

document.getElementById("make-payment-btn").addEventListener("click", function() {
    // Redirect to shop.html after payment is successful
    if (payment_is_successful) {
        window.location.href = "Shop.html";
    }
});

//Checkout form input fields validation
function validateCheckForm() {
    let cardNum = document.getElementById("ccnum").value;
    let holderName = document.getElementById("cname").value;
    let expmonth = document.getElementById("expmonth").value;
    let expyear = document.getElementById("expyear").value;
    let cvv = document.getElementById("cvv").value;
    let cardNumFormat = /^\d+$/;
    let holderNameFormat = /^[a-zA-Z]+$/;
    let expmonthFormat = /^(0[1-9]|1[0-2])$/;
    let expyearFormat = /^\d+$/;
    let cvvFormat = /^\d+$/;

    if (!cardNumFormat.test(cardNum)) {
        alert("Please enter a valid card number");
        return false;
    }
    if (!holderNameFormat.test(holderName)) {
        alert("Please enter a valid card holder name");
        return false;
    }
    if (!expmonthFormat.test(expmonth)) {
        alert("Please enter a valid expiry month");
        return false;
    }
    if (!expyearFormat.test(expyear)) {
        alert("Please enter a valid expiry year");
        return false;
    }
    if (!cvvFormat.test(cvv)) {
        alert("Please enter a valid CVV code");
        return false;
    }
    return true;
}

// Handle the Make Payment button click event
document.getElementById("make-payment-btn").addEventListener("click", function() {
    if (validateCheckForm()) {  // Ensure the checkout form is valid
        alert('Thank you for your purchase!');
        // Redirect to shop.html after showing the thank you message
        window.location.href = "Shop.html";
    }
});


//Toggle selection edit/ close and to display the name and email address got from the cart
function showDetails() {
    let nameInput = document.createElement("input");
    nameInput.setAttribute("type", "text");
    nameInput.setAttribute("id", "newName");
    nameInput.setAttribute("placeholder", "Enter your new name (If it's different from the above)");

    let emailInput = document.createElement("input");
    emailInput.setAttribute("type", "email");
    emailInput.setAttribute("id", "newEmail");
    emailInput.setAttribute("placeholder", "Enter your new email address (If it's different from the above)");

    let saveButton = document.createElement("button");
    saveButton.innerHTML = "Save changes";
    saveButton.className = "change-button"; // add a class name to the button
    saveButton.addEventListener("click", function() {
        let newName = document.getElementById("newName").value;
        let newEmail = document.getElementById("newEmail").value;
        document.getElementById("fname").value = newName;
        document.getElementById("email").value = newEmail;
        let outputDiv = document.getElementById("output");
        outputDiv.innerHTML = "Name: " + newName + "<br>Email: " + newEmail;
        outputDiv.removeChild(nameInput);
        outputDiv.removeChild(emailInput);
        outputDiv.removeChild(saveButton);
        outputDiv.removeChild(closeButton);
    });

    let closeButton = document.createElement("button");
    closeButton.innerHTML = "Cancel Changes";
    closeButton.className = "change-button"; // add a class name to the button
    closeButton.addEventListener("click", function() {
        let outputDiv = document.getElementById("output");
        outputDiv.removeChild(nameInput);
        outputDiv.removeChild(emailInput);
        outputDiv.removeChild(saveButton);
        outputDiv.removeChild(closeButton);
    });

    let outputDiv = document.getElementById("output");
    outputDiv.innerHTML = "Name: " + document.getElementById("fname").value + "<br>Email: " + document.getElementById("email").value;
    outputDiv.appendChild(nameInput);
    outputDiv.appendChild(emailInput);
    outputDiv.appendChild(saveButton);
    outputDiv.appendChild(closeButton);
}

document.getElementById("menu").addEventListener("change", function() {
    if (this.value === "edit") {
        showDetails();
    }
    else {
        let outputDiv = document.getElementById("output");
        outputDiv.innerHTML = "Name: " + document.getElementById("fname").value + "<br>Email : " + document.getElementById("email").value;
    }
});
