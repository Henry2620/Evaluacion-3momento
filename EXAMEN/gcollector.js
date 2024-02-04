let personajePrincipal = {
    nombre : "Maria Antonieta",  
    rey: {
        nombre : "Luis XVI",
        Max : {
            name : "Maximilien Robespierre",
            Charlotte : {
                name : " Charlotte Corday",
            }
        }

    }
};
function findelJuego(){
    alert("HAS PERDIDO")
    let reiniciar = confirm("QUIERES REINICIAR EL JUEGO?")
    if (reiniciar){
        primeraPregunta();
    }
}
function primeraPregunta() {
    alert("BIENVENIDO A TEST SOBRE LA REVOLUCIÓN FRANCESA. TODOS TIENEN QUE VIVIR")
    alert("¿Cómo influyó Charlotte Corday en la Revolución Francesa?")
    let preguntaUno = prompt("1) Asesinando a Marat en su bañera, 2) Abogando por la paz, 3) Negociando con los monarcas europeos");

   if(preguntaUno == "1"){
       alert("EXACTO, RESPUESTA CORRECTA. SIGUE JUGANDO!")
       segundaPregunta();
       
   }else if(preguntaUno == "2" || preguntaUno == "3") {
       delete personajePrincipal.rey.Max.Charlotte;
       document.getElementById('contenedor').innerHTML = `Objeto actual: ${JSON.stringify(personajePrincipal)}`;
        console.log(JSON.stringify(personajePrincipal))
       segundaPregunta();
   } else {
        alert("Esa no es una opción")
        primeraPregunta();
   }

}

function segundaPregunta(){
   alert("¿Cuál fue el papel de Maximilien Robespierre durante la Revolución Francesa?")
   let preguntaDos = prompt("1) Líder de los girondinos, 2) Defensor de la monarquía, 3) Líder de la Comuna de París")

   if(preguntaDos == "2" || preguntaDos == "1" ){
        
       delete personajePrincipal.rey.Max
       document.getElementById('contenedor2').innerHTML = `Objeto actual: ${JSON.stringify(personajePrincipal)}`;
       alert("Sigue Jugando, ha muerto nuestro heroe")
       terceraPregunta();
   }else if (preguntaDos == "3"){
       alert("CORRECTO! SIGUIENTE")
       terceraPregunta();
   } else {
       alert("Esa no es una opción")
       segundaPregunta();
   }
}

function terceraPregunta (){
    alert("¿Cómo intentaron escapar María Antonieta y Luis XVI durante la Revolución?")
    let preguntaTres = prompt("1) Disfrazados de campesinos, 2) En un carruaje real, 3) En globo aerostático");
    if (preguntaTres == "2") {
        alert("Salvaste a Luís XVI, sigue jugando")
        cuartaPregunta();
    }else if (preguntaTres == "1" || preguntaTres == "3"){
        delete personajePrincipal.rey
        document.getElementById('contenedor3').innerHTML = `Objeto actual: ${JSON.stringify(personajePrincipal)}`;
        alert("Asesinaron a Luís XVI, te queda una oportunidad")
        cuartaPregunta();
    }else {
        alert("Esa no es una opción")
        terceraPregunta();
    }

}

function cuartaPregunta (){
    alert("¿Cuál fue la respuesta de María Antonieta al enterarse de la crisis alimentaria?")
    let preguntaCuatro =  prompt("1) Que coman pasteles, 2) Distribuyamos la riqueza 3) Organicemos un banquete para el pueblo")
    if (preguntaCuatro == "1"){
        personajePrincipal =  null ; 
        document.getElementById('contenedor4').innerHTML = `Objeto actual: ${JSON.stringify(personajePrincipal)}`;

        alert("A LA GUILLOTINA!!!")
        findelJuego();
    }else if (preguntaCuatro == "2" || preguntaCuatro == "3"){
        alert("GANASTE, HICISTE QUE VIVAN. GRACIAS POR JUGAR!!!")
    } else {
        alert("No es una opción");
        cuartaPregunta();
    }
}

primeraPregunta();
