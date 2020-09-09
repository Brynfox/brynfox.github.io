let ne = "batman";
let neDos = "batman";
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
        element.innerHTML= '¡MAL! vas a tener que esforzarte <br/><br/>Intento N°1';
    }
    if(rta != ne && cont === 1){
        let element = document.querySelector ('#intento')
        element.innerHTML= 'Incorrecto, ¿Te lo dejé muy dificil? <br/>Pista: Se viste de negro, el sigilo es su aliado. <br/><br/>Intento N°2';
    }
    if(rta != ne && cont === 2){
        let element = document.querySelector ('#intento')
        element.innerHTML= 'Volviste a fallar, parece que no eres rival <br/>Pista: Fanático de los murciélagos. <br/><br/>Intento N°3';
    }
    if (rta != ne && cont === 3){
        let element = document.querySelector ('#intento')
        element.innerHTML= "Incorrecto <br/> Mejor suerte la próxima vez...si es que la hay<br/>";
        document.getElementById("button").disabled = true;
    } 
    cont++;
}