let ne = "negro";
let neDos = "Negro";
let cont = 0;
function valor (){
    let rta = document.getElementById("rta").value;
    if( rta == ne || rta == neDos){
        let element = document.querySelector ('#intento')
        element.innerHTML= 'Acertaste';
        document.getElementById("button").disabled = true;
    } 
    if(rta != ne && cont<1){
        let element = document.querySelector ('#intento')
        element.innerHTML= 'Respuesta incorrecta, ingrese de nuevo <br/>Intento numero 1';
    }
    if(rta != ne && cont === 1){
        let element = document.querySelector ('#intento')
        element.innerHTML= 'Respuesta incorrecta. <br/>Pista: solo hay dos personas en frente y solo dos sombreros blancos. <br/>Intento numero 2';
    }
    if(rta != ne && cont === 2){
        let element = document.querySelector ('#intento')
        element.innerHTML= 'Respuesta incorrecta. <br/>Pista: si la segunda persona, ve un sombrero y solo hay dos blancos, el sombrero que queda adelante es... <br/>Intento numero 3"';
    }
    if (rta != ne && cont === 3){
        let element = document.querySelector ('#intento')
        element.innerHTML= 'Respuesta incorrecta. <br/>Ha perdido el juego.<br/> Intento numero 4';
        document.getElementById("button").disabled = true;
    } 
    cont++;
}