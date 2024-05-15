const body = document.querySelector("body");
const container = document.querySelector(".container");
const dark = document.querySelector(".overlay");
const productsList = document.querySelector(".products-list");
const totalPrice = document.querySelector("#totalPrice");
const cart = document.querySelector(".cart");
var x;
var popup;
//array
var products = [];


function showMessage(pt, pp, pi) {
    popup = document.createElement("div")
    popup.classList.add("popup")

    var productName = document.createElement("h3")
    productName.innerText = pt

    var productImg = document.createElement("img")
    productImg.src = pi;


    var productPrice = document.createElement("p")
    productPrice.innerText = pp


    popup.appendChild(productImg)
    popup.appendChild(productName)
    popup.appendChild(productPrice)

    //creation des objets

    var product = {
        title : pt,
        price : pp,
        image : pi,
        quantity : 1
    }
    
    products.push(product)

    dark.style.display = "block"

    addToCartList(pi, pt, pp)

    container.appendChild(popup)


}


function addToCartList(source, title, price){

    var li = document.createElement("li")
    var div = document.createElement("div")

    div.classList.add("image")
    var img = document.createElement("img")
    img.src = source
    var proName = document.createElement("h4")
    proName.innerText = title
    var proPrix = document.createElement("h4")
    proPrix.innerText = price

    div.appendChild(img)

    li.appendChild(div)
    li.appendChild(proName)
    li.appendChild(proPrix)

    productsList.appendChild(li)

    getProduct(products)

    cart.querySelector("span").innerText = products.length
}


body.addEventListener("keypress", function (e) {
    if (e.key == "Enter") {
        dark.style.display = "none"
        popup.remove()
    }
})

body.addEventListener("click", function (e) {

    if (e.target.className == "overlay") {
        dark.style.display = "none"
        popup.remove()
    }
    if(e.target.id == "addToCart"){
        var card = e.target.parentElement

        var productTitle = card.querySelector('h3').innerText
        var productPrice = card.querySelector('h4').innerText
        var productImg = card.querySelector('img').src

        showMessage(productTitle, productPrice, productImg)
    }

})

function getProduct(products){
    var i, total = 0
    for(i=0; i<products.length; i++){
        total = parseFloat(total)+ parseFloat(products[i].price)
    }
    totalPrice.innerText = total.toFixed(2)

}

function is_connected(){

    
    if(localStorage.getItem("fname") == undefined){
        window.location.href = "login.html";
    }
    
}

function logout(){
    localStorage.removeItem("fname")
    localStorage.removeItem("lname")
    localStorage.removeItem("email")
    localStorage.removeItem("password")
    is_connected()
}

function addProductToList(){}