console.log("popup");
var btnAbrirPopup = document.getElementById("btn-abrir-popup"),
    overlay = document.getElementById("overlay"),
    popup = document.getElementById("popup"),
    btnCerrarPopup = document.getElementById("btn-cerrar-popup");

    btnAbrirPopup.addEventListener('click', function(){
        console.log("Funcion Abrir");
        overlay.classList.add('active');
        popup.classList.add('active2');

    });


    btnCerrarPopup.addEventListener('click', function(){
        console.log("Funcion Abrir");
        overlay.classList.remove('active');
        popup.classList.remove('active2');
    });
