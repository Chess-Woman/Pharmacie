
function is_connected(){

    
    if(localStorage.getItem("fname") == undefined){
        window.location.href = "login.html";
    }
    
}

is_connected()