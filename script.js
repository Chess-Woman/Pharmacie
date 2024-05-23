var b = document.querySelector('body')
var cont = document.querySelector('.container')
var moon = document.querySelector('#darkMode')
var searchForm = document.querySelector('search-form')
var search = document.querySelector("#search")






function checkDarkMode(){
    if(localStorage.getItem("darkMode") == undefined){
        localStorage.setItem("darkMode", "off")
    }else{
        if(localStorage.getItem("darkMode") == "on"){
           document.querySelector(".container").classList.add("dark")
        }
    }
    
}

checkDarkMode()

moon.addEventListener("click", function(){

    if(cont.classList.contains("dark")){
        cont.classList.remove("dark")
        localStorage.setItem("darkMode", "off")
    }else{
        cont.classList.add("dark")
        localStorage.setItem("darkMode", "on")
    }
})





function getUserProfileName(){

    var fname = localStorage.getItem("fname")
    var lname = localStorage.getItem("lname")
    
    
    var profile =  document.querySelector(".user")
    profile.querySelector("span").innerText = fname + " " + lname
    
}



function logout(){
    localStorage.removeItem("fname")
    localStorage.removeItem("lname")
    localStorage.removeItem("email")
    localStorage.removeItem("password")
    is_connected()
}





    // getProfileData()


getUserProfileName()

// search.addEventListener("click", function(e){
//     if(e.target.id == "search"){
//        toggleElement()
//     }
    
// })



// function toggleElement(){
//     if( search.classList.contains("w100")){
//         if(search.value == ""){ 
//             search.classList.remove("w100")
//         }
//     }else{
//         search.classList.add("w100")
//     }

    
// }

// document.getElementById("logout").addEventListener("click", function(){
//     window.location.href = "login.html";
// })


function thankYou(){

    var first = document.querySelector(".first")
    var second = document.querySelector(".second")
    var email = document.querySelector("#email")
    var msg = document.querySelector("#msg")


    if(msg.value.trim() != "" && email.value.trim() != ""){

        first.innerHTML = ""
        second.innerHTML = ""
        
        var h1 = document.createElement("H1")
        var p = document.createElement("P")
        var h2 = document.createElement("H2")
        var img = document.createElement("IMG")

        h1.innerText = "Thank You!"
        p.innerText = "We have received your message. We will get back to you soon."

        first.appendChild(h1)
        first.appendChild(p)

        img.src = "images/loading.gif"
        img.width = "300"
        h2.innerText = "You will be redirected shortly..."
      
        second.appendChild(img)
        second.appendChild(h2)
       
        setTimeout(function(){
            window.location.href="index.html"
        },3000)
    }else{
        alert("You have to fill in all fields.")
    }
    

}
