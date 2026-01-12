function toggleMenu(){
    let display = document.getElementById("nav-links").style.display; // "none" or "flex"

    if(display === "flex"){
        document.getElementById("nav-links").style.display = "none";
    }else{
        document.getElementById("nav-links").style.display = "flex";
    }
}