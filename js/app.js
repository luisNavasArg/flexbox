let cant = 0;
const limpiar=()=>{
    document.getElementById("texto").value="";
};
const mostrarImagenes=()=>{
    let imagenes = document.querySelectorAll("img");
    imagenes.forEach((img)=>img.style.visibility="visible");
};
const ocultarImagenes=()=>{
    let imagenes = document.querySelectorAll("img");
    imagenes.forEach((img)=>img.style.visibility="hidden");
};
const verificar=()=>{
    let texto = document.getElementById("texto").value;
    let elementoPrincipal = document.querySelector(".elementos");
    elementoPrincipal.style.justifyContent=texto;
    mostrarImagenes();
    if(cant == 0){
        if(texto=="space-around"){
            mensaje.innerHTML="<h2>¡Excelente!</h2>";
            cant++;
        }else if(texto =="center"){
            mensaje.innerHTML="<h2>Recuerda qué center <br>Posiciona los elemento de manera centrada en forma horizontal</h2>";
        }else if(texto == "space-between"){
            mensaje.innerHTML="<h2>Recuerda qué space-between<br>Separa los elementos de manera automática sin dejar espacios entre los costados, es decir ocupan todo el ancho</h2>";
        }else if(texto == "flex-end"){
            mensaje.innerHTML="<h2>Recuerda qué flex-end<br>Posiciona los elementos en la parte derecha de nuestra página</h2>"
        }else if(texto == "flex-start"){
            mensaje.innerHTML="<h2>Recuerda qué flex-start<br>Es el que usa por defecto cuando aplicamos el valor flex a nuestra propiedad display y están los elementos al principio de la página</h2>"
        }else {
            mensaje.innerHTML="<h2>¡Debes usar alguna de las pistas!</h2>";
        }
        mensaje.style.visibility="visible";
    }else if(cant == 1){
        if(texto=="space-around"){
            mensaje.innerHTML="<h2>Recuerda qué space-around<br>Separa los elemento de manera automática dejando un espacio entre el elemento y en los costados existe un espacio</h2>" 
        }else if(texto =="center"){
            mensaje.innerHTML="<h2>Recuerda qué center <br>Posiciona los elemento de manera centrada en forma horizontal</h2>";
        }else if(texto == "space-between"){
            mensaje.innerHTML="<h2>¡Excelente!</h2>";
            cant++;
        }else if(texto == "flex-end"){
            mensaje.innerHTML="<h2>Recuerda qué flex-end<br>Posiciona los elementos en la parte derecha de nuestra página</h2>"
        }else if(texto == "flex-start"){
            mensaje.innerHTML="<h2>Recuerda qué flex-start<br>Es el que usa por defecto cuando aplicamos el valor flex a nuestra propiedad display y están los elementos al principio de la página</h2>"
        }else {
            mensaje.innerHTML="<h2>¡Debes usar alguna de las pistas!</h2>";
        }
        mensaje.style.visibility="visible";
    }else if(cant == 2){
        if(texto=="space-around"){
            mensaje.innerHTML="<h2>Recuerda qué space-around<br>Separa los elemento de manera automática dejando un espacio entre el elemento y en los costados existe un espacio</h2>" 
        }else if(texto =="center"){
            mensaje.innerHTML="<h2>¡Excelente!</h2>";
            cant++;
        }else if(texto == "space-between"){
            mensaje.innerHTML="<h2>Recuerda qué space-between<br>Separa los elementos de manera automática sin dejar espacios entre los costados, es decir ocupan todo el ancho</h2>";
        }else if(texto == "flex-end"){
            mensaje.innerHTML="<h2>Recuerda qué flex-end<br>Posiciona los elementos en la parte derecha de nuestra página</h2>"
        }else if(texto == "flex-start"){
            mensaje.innerHTML="<h2>Recuerda qué flex-start<br>Es el que usa por defecto cuando aplicamos el valor flex a nuestra propiedad display y están los elementos al principio de la página</h2>"
        }else {
            mensaje.innerHTML="<h2>¡Debes usar alguna de las pistas!</h2>";
        }
        mensaje.style.visibility="visible";
    }else if(cant == 3){
        if(texto=="space-around"){
            mensaje.innerHTML="<h2>Recuerda qué space-around<br>Separa los elemento de manera automática dejando un espacio entre el elemento y en los costados existe un espacio</h2>" 
        }else if(texto =="center"){
            mensaje.innerHTML="<h2>Recuerda qué center <br>Posiciona los elemento de manera centrada en forma horizontal</h2>";
            
        }else if(texto == "space-between"){
            mensaje.innerHTML="<h2>Recuerda qué space-between<br>Separa los elementos de manera automática sin dejar espacios entre los costados, es decir ocupan todo el ancho</h2>";
        }else if(texto == "flex-end"){
            mensaje.innerHTML="<h2>¡Excelente!</h2>";
            cant++;
        }else if(texto == "flex-start"){
            mensaje.innerHTML="<h2>Recuerda qué flex-start<br>Es el que usa por defecto cuando aplicamos el valor flex a nuestra propiedad display y están los elementos al principio de la página</h2>"
        }else {
            mensaje.innerHTML="<h2>¡Debes usar alguna de las pistas!</h2>";
        }
        mensaje.style.visibility="visible";
    }else if(cant == 4){
        if(texto=="space-around"){
            mensaje.innerHTML="<h2>Recuerda qué space-around<br>Separa los elemento de manera automática dejando un espacio entre el elemento y en los costados existe un espacio</h2>" 
        }else if(texto =="center"){
            mensaje.innerHTML="<h2>Recuerda qué center <br>Posiciona los elemento de manera centrada en forma horizontal</h2>";
             
        }else if(texto == "space-between"){
            mensaje.innerHTML="<h2>Recuerda qué space-between<br>Separa los elementos de manera automática sin dejar espacios entre los costados, es decir ocupan todo el ancho</h2>";
        }else if(texto == "flex-end"){
            mensaje.innerHTML="<h2>Recuerda qué flex-end<br>Posiciona los elementos en la parte derecha de nuestra página</h2>"
        }else if(texto == "flex-start"){
            mensaje.innerHTML="<h2>¡Excelente!</h2>";
            cant++;
        }else {
            mensaje.innerHTML="<h2>¡Debes usar alguna de las pistas!</h2>";
        }
        mensaje.style.visibility="visible";
    }else if(cant == 5){
        mensaje.innerHTML="<h2>!Excelente lo has logrado¡</h2>";
        mensaje.style.visibility="visible";
    }
    
    
    
    
};

let mensaje = document.querySelector(".mensaje");
mensaje.addEventListener('click',()=>{
    mensaje.style.visibility="hidden";
    cambiarFondo(cant);
    limpiar();
    ocultarImagenes();
});

const cambiarFondo=(a)=>{
    let body =document.querySelector("body");
    switch (a) {
        case 0:
            
            body.style.backgroundImage="url('../imagenes/fondoSpaceAround.png')";
            break;
        case 1:
            
            body.style.backgroundImage="url('../imagenes/space-between.png')";
            break;
        case 2: 
            body.style.backgroundImage="url('../imagenes/center.png')";
            break;
        case 3: 
            body.style.backgroundImage="url('../imagenes/flex-end.png')";
            break; 
        case 4: 
            body.style.backgroundImage="url('../imagenes/flex-start.png')";
            break;   
        default:
            break;
    }
};
cambiarFondo(cant);
