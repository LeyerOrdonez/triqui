var indicador=1;
var ganador = false;
//alert(" JUGUEMOS TRIQUI :b!!  EL JUGADOR ROJO INICIA");

function calculo(a){
    if(indicador==1){
    document.getElementById(a).style.backgroundColor="red";
    document.getElementById(a).setAttribute("name","rojo");
    document.getElementById(a).setAttribute("disabled","true");
    indicador=0;
    }else{
        document.getElementById(a).style.backgroundColor="blue";
        document.getElementById(a).setAttribute("name","azul");  
        indicador=1; 
        document.getElementById(a).setAttribute("disabled","true");   
    }

    listadejuego=document.getElementsByClassName("presion");
    //console.log(listadejuego);
    if ( (listadejuego[0].name == listadejuego[1].name) && (listadejuego[1].name == listadejuego[2].name)){
       reset(listadejuego[1].name);
       ganador=true;
    }
    if ( (listadejuego[3].name == listadejuego[4].name) &&( listadejuego[4].name == listadejuego[5].name)){
        reset(listadejuego[4].name);
        ganador=true;
     }
     
     if ( (listadejuego[6].name == listadejuego[7].name )&& (listadejuego[7].name == listadejuego[8].name)){
        reset(listadejuego[7].name);
        ganador=true;
     }

     if ((listadejuego[0].name == listadejuego[3].name )&& (listadejuego[3].name == listadejuego[6].name)){
        reset(listadejuego[3].name);
        ganador=true;
     }
     if ((listadejuego[1].name == listadejuego[4].name )&& (listadejuego[4].name == listadejuego[7].name)){
        reset(listadejuego[4].name);
        ganador=true;
     }
     if ((listadejuego[2].name == listadejuego[5].name )&& (listadejuego[5].name == listadejuego[8].name)){
        reset(listadejuego[5].name);
        ganador=true;
     }

     if ((listadejuego[0].name == listadejuego[4].name )&& (listadejuego[4].name == listadejuego[8].name)){
        reset(listadejuego[4].name);
        ganador=true;
     }
     if ((listadejuego[2].name == listadejuego[4].name )&& (listadejuego[4].name == listadejuego[6].name)){
        reset(listadejuego[4].name);
        ganador=true;
     }

     if(!ganador){
     var aux=0;
     for (var indi = 0; indi <9; indi++) {
      if(listadejuego[indi].disabled){
         aux++;}
     }

     if(aux == 9){
     reset("empate");
     }
   }

}

function reset(x){
   for (var indi = 0; indi< 9; indi++) {
      document.getElementById(indi+1).setAttribute("disabled","true");
     }

         if(x == "rojo"){
         document.getElementById("titulo").innerText="ROJO GANA!! reiniciando juego en 3s...";
         document.getElementById("titulo").style.backgroundColor="red";
         document.getElementById("titulo").style.color="white";
         setTimeout(recarga,3000);
         }else{
         if(x == "azul"){
         document.getElementById("titulo").innerText="AZUL GANA!! reiniciando juego en 3s...";
         document.getElementById("titulo").style.backgroundColor="blue";
         setTimeout(recarga,3000);
         }else{
         if(x=="empate"){
         document.getElementById("titulo").innerText="EMPATE!!.... reiniciando juego en 3s...";
         document.getElementById("titulo").style.backgroundColor="white";
         setTimeout(recarga,3000);
         }else{
         if(x=="nada"){
               document.getElementById("titulo").innerText="reiniciando juego en 2s...";
               document.getElementById("titulo").style.backgroundColor="white";
               setTimeout(recarga,2000);
         }
      }

      }
   }
   
}

function recarga(){
   location.reload();
}
