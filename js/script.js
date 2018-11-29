function mobileMenu() {
    console.log("coucou");
    var x = document.querySelector("#mobileMenu");
        
    var a = document.querySelectorAll('nav a:not(:nth-child(1))');

    console.log(a);
    
    for(var i=0; i < a.length ; i++){
       a[i].classList.toggle("none");
       a[i].classList.toggle("link-menu"); 
    }
        

    // if (x.className === "topnav") {
    //     x.className += " responsive";
    // } else {
    //     x.className = "topnav";
    // }
}