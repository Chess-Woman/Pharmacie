
medicationList = document.getElementById('medication-list');
bodyEL = document.querySelector('body');
imageViewer = false
function searchMedication() {

    var input, filter, li, a, i, txtValue;
    input = document.getElementById('searchInput');
    filter = input.value.toUpperCase();
    medicationList = document.getElementById('medication-list');
    li = medicationList.getElementsByTagName('li');

    for (i = 0; i < li.length; i++) {
      txtValue = li[i].textContent || li[i].innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        li[i].style.display = '';
      } else {
        li[i].style.display = 'none';
      }
    }
  }


function showProduct(image, productname, categoryName, descriptionText){
    var veil = document.createElement("DIV")
    veil.classList.add("veil")
    var box = document.createElement("DIV")
    box.classList.add("box");
    veil.appendChild(box)
    document.body.appendChild(veil)

    var img = document.createElement("IMG")
    img.src = image
    var details = document.createElement("DIV")
    details.classList.add("details")
    var title = document.createElement("H1")
    title.innerText = productname
    var category = document.createElement("H2")
    category.innerText = categoryName
    var description = document.createElement("p")
    description.innerText = descriptionText

    box.appendChild(img)
    details.appendChild(title)
    details.appendChild(category)
    details.appendChild(description)
    box.appendChild(details)

   //alert(image+ "<br>" + productname+ "<br>" + category+  "<br>")
}

  medicationList.addEventListener("click", function(e){
    
    bodyEL.style.overflow = "hidden"
    bodyEL.style.height= "100vh"
    
    if(e.target.parentElement.tagName === "LI"){
        image = e.target.parentElement.querySelector("img").src
        productname = e.target.parentElement.dataset.name
        category = e.target.parentElement.querySelector("h4").innerText
        description = e.target.parentElement.dataset.description
        imageViewer = true
        showProduct(image, productname, category, description)
    }
  });

  bodyEL.addEventListener("click", function(e){
    if(e.target.className === "veil"){
        bodyEL.style.overflow = ""
        bodyEL.style.height= ""
        e.target.remove() 
    }
  });


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
  


