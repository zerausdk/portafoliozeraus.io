let menuVisible = false;
//funcion que oculta o muestra menu//
 function mostrar0cultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }
    else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
 }

 function seleccionar(){
    //ocultar el menu una vez se seleccione una opcion//
    document.getElementById("nav").classList = "";
    menuVisible = false;
 }

 //funcion que apluca las animaciones de las tecnicas//
 function efectoHabilidades() {
    var skills = document.getElementById("Skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if (distancia_skills >= 300) {
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("FIGMA");
        habilidades[1].classList.add("ILLUSTRATOR");
        habilidades[2].classList.add("PHOTOSHOP");
        habilidades[3].classList.add("HTMLCSS");
        habilidades[4].classList.add("ADOBEXD");
        habilidades[5].classList.add("COMUNICACION");
        habilidades[6].classList.add("TRABAJO");
        habilidades[7].classList.add("CREATIVIDAD");
        habilidades[8].classList.add("EMPATIA");
        habilidades[9].classList.add("DEDICACION");
    }
}
 function animar() {
    efectoHabilidades();
    requestAnimationFrame(animar);
}

animar();