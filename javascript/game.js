var note_01=document.getElementById("audio_note_01");
var note_02=document.getElementById("audio_note_02");
var note_03=document.getElementById("audio_note_03");
var note_04=document.getElementById("audio_note_04");
var note_05=document.getElementById("audio_note_05");
var note_06=document.getElementById("audio_note_06");
var note_07=document.getElementById("audio_note_07");
var note_08=document.getElementById("audio_note_08");
var note_09=document.getElementById("audio_note_09");
var note_10=document.getElementById("audio_note_10");
var note_11=document.getElementById("audio_note_11");
var note_12=document.getElementById("audio_note_12");
var note_13=document.getElementById("audio_note_13");
var note_14=document.getElementById("audio_note_14");
var note_15=document.getElementById("audio_note_15");
var note_16=document.getElementById("audio_note_16");
var note_17=document.getElementById("audio_note_17");
var note_18=document.getElementById("audio_note_18");
var note_19=document.getElementById("audio_note_19");
var note_20=document.getElementById("audio_note_20");
var note_21=document.getElementById("audio_note_21");
var note_22=document.getElementById("audio_note_22");
var note_23=document.getElementById("audio_note_23");
var note_24=document.getElementById("audio_note_24");
var note_25=document.getElementById("audio_note_25");
var note_26=document.getElementById("audio_note_26");
var note_27=document.getElementById("audio_note_27");
var note_28=document.getElementById("audio_note_28");
var note_29=document.getElementById("audio_note_29");
var note_30=document.getElementById("audio_note_30");
var note_31=document.getElementById("audio_note_31");
var note_32=document.getElementById("audio_note_32");
var note_33=document.getElementById("audio_note_33");
var note_34=document.getElementById("audio_note_34");
var note_35=document.getElementById("audio_note_35");
var note_36=document.getElementById("audio_note_36");
var note_37=document.getElementById("audio_note_37");
var note_38=document.getElementById("audio_note_38");
var note_39=document.getElementById("audio_note_39");
var note_40=document.getElementById("audio_note_40");
var birds_audio=document.getElementById("birds");
var water_drops=document.getElementById("water");
var strange=document.getElementById("strange_sound");
var demon_girl_audio=document.getElementById("demon_girl");
var lletra_1 = false;
var lletra_2 = false;
var lletra_3 = false;
var lletra_4 = false;
var lletra_5 = false;
var lletra_6 = false;
var lletra_7 = false;
var lletra_8 = false;
var lletra_9 = false;
var lletra_10 = false;
var lletra_11 = false;
var lletra_12 = false;

var pedra1_agafada = false;
var pedra2_agafada = false;
var pedra3_agafada = false;
var pedra4_agafada = false;
var pedra1_deixada = false;
var pedra2_deixada = false;
var pedra3_deixada = false;
var pedra4_deixada = false;
var clicar_fletxa = true;
var ampliar_simbol = true;
var entrada_secreta_visible = false;
var ampliar_piano = true;

document.addEventListener("keydown", uniKeyCod, false);

function close_notebook(){
    document.getElementById("notebook").className = "notebook_tancar";
	setInterval(function(){document.getElementById("entrar").style.visibility = "visible";}, 1500);
	document.getElementById("entrar").className = "entrar_fletxa";
}

function recollir_pedra1(){
	document.getElementById("contenidor_pedra1").className = "pedra1_class";
	pedra1_agafada = true;
}

function entrar_pantalla2(){
	document.getElementById("pantalla1").style.visibility = "hidden";
	document.getElementById("pantalla2").style.visibility = "visible";
	document.getElementById("entrar").className = "";
	document.getElementById("entrar").style.visibility = "hidden";
	document.getElementById("fletxa1").style.visibility = "hidden";
	document.getElementById("birds").pause();
	
	if(pedra4_deixada == false){
		document.getElementById("contenidor_pedra4").style.visibility = "visible";
	}
	
	if (pedra1_agafada == false) {
		document.getElementById("contenidor_pedra1").style.visibility = "hidden";
	}
}

function sortir_fora(){
	document.getElementById("pantalla1").style.visibility = "visible";
	document.getElementById("pantalla2").style.visibility = "hidden";
	document.getElementById("entrar").className = "entrar_fletxa";
	document.getElementById("entrar").style.visibility = "visible";
	document.getElementById("fletxa1").style.visibility = "visible";
	document.getElementById("birds").currentTime = 0;
	document.getElementById("birds").play();
	
	if(pedra1_deixada == false){
		document.getElementById("contenidor_pedra1").style.visibility = "visible";
	}
	
    if (pedra4_agafada == false) {
        document.getElementById("contenidor_pedra4").style.visibility = "hidden";
    }
}

function pujar(){
	document.getElementById("pantalla2").style.visibility = "hidden";
	document.getElementById("pantalla3").style.visibility = "visible";
    if (pedra4_agafada == false) {
        document.getElementById("contenidor_pedra4").style.visibility = "hidden";
    }
	water_drops.currentTime = 0;
	water_drops.play();
}

function dreta1(){
	document.getElementById("pantalla3").style.visibility = "hidden";
	document.getElementById("pantalla4").style.visibility = "visible";
	document.getElementById("contenidor_pedra3").style.visibility = "visible";
	water_drops.pause();
    strange.play();
	
	if (pedra1_deixada == true) {
		document.getElementById("contenidor_pedra1").style.visibility = "visible";
	}
	
	if (pedra2_deixada == true) {
		document.getElementById("contenidor_pedra2").style.visibility = "visible";
	}
	
	if (pedra3_deixada == true) {
		document.getElementById("contenidor_pedra3").style.visibility = "visible";
	}
	
	if (pedra4_deixada == true) {
		document.getElementById("contenidor_pedra4").style.visibility = "visible";
	}
}

function esquerra1(){
	document.getElementById("pantalla3").style.visibility = "hidden";
	document.getElementById("pantalla5").style.visibility = "visible";
	
	if(pedra2_deixada == false){
	   document.getElementById("contenidor_pedra2").style.visibility = "visible";
	}
	water_drops.pause();
}

function endavant1(){
	document.getElementById("pantalla3").style.visibility = "hidden";
	document.getElementById("pantalla6").style.visibility = "visible";
	
	if (entrada_secreta_visible == true) {
		document.getElementById("fletxa_secreta").style.visibility = "visible";
	}
	
	water_drops.pause();
}

function tornar_pantalla2(){
	document.getElementById("pantalla3").style.visibility = "hidden";
	document.getElementById("pantalla2").style.visibility = "visible";
	
	if (pedra4_deixada == false) {
		document.getElementById("contenidor_pedra4").style.visibility = "visible";
	}
    
	water_drops.pause();
}

function recollir_pedra2(){
	document.getElementById("contenidor_pedra2").className = "pedra2_class";
	pedra2_agafada = true;
}

function recollir_pedra3(){
	document.getElementById("contenidor_pedra3").className = "pedra3_class";
	pedra3_agafada = true;
}

function recollir_pedra4(){
	document.getElementById("contenidor_pedra4").className = "pedra4_class";
	pedra4_agafada = true;
}

function Piano_Keys(event) {
    var key = event.keyCode;
    
    if (key == 49){
        note_01.src="../audio/piano_notes/note_01.wav";
         note_01.play();
		
    }
    
    if (key == 50){
         note_02.src="../audio/piano_notes/note_02.wav";
         note_02.play();
    }
    
    if (key == 51){
         note_03.src="../audio/piano_notes/note_03.wav";
         note_03.play();
    }
    
    if (key == 52){
         note_04.src="../audio/piano_notes/note_04.wav";
         note_04.play();
    }
    
    if (key == 53){
         note_05.src="../audio/piano_notes/note_05.wav";
         note_05.play();
    }
    
    if (key == 54){
         note_06.src="../audio/piano_notes/note_06.wav";
         note_06.play();
    }
    
    if (key == 55){
         note_07.src="../audio/piano_notes/note_07.wav";
         note_07.play();
    }
    
    if (key == 56){
         note_08.src="../audio/piano_notes/note_08.wav";
         note_08.play();
    }
    
    if (key == 57){
         note_09.src="../audio/piano_notes/note_09.wav";
         note_09.play();
    }
    
    if (key == 48){
         note_10.src="../audio/piano_notes/note_10.wav";
         note_10.play();
    }
    
    if (key == 113){
         note_11.src="../audio/piano_notes/note_11.wav";
         note_11.play();
    }
    
    if (key == 119){
         note_12.src="../audio/piano_notes/note_12.wav";
         note_12.play();
    }
    
    if (key == 101){
        note_13.src="../audio/piano_notes/note_13.wav";
         note_13.play();
    }
    
    if (key == 114){
         note_14.src="../audio/piano_notes/note_14.wav";
         note_14.play();
    }
    
    if (key == 116){
         note_15.src="../audio/piano_notes/note_15.wav";
         note_15.play();
    }
    
    if (key == 121){
         note_16.src="../audio/piano_notes/note_16.wav";
         note_16.play();
    }
    
    if (key == 117){
         note_17.src="../audio/piano_notes/note_17.wav";
         note_17.play();
    }
    
    if (key == 105){
         note_18.src="../audio/piano_notes/note_18.wav";
         note_18.play();
    }
    
    if (key == 111){
         note_19.src="../audio/piano_notes/note_19.wav";
         note_19.play();
    }
    
    if (key == 112){
         note_20.src="../audio/piano_notes/note_20.wav";
         note_20.play();
    }
    
    if (key == 97){
         note_21.src="../audio/piano_notes/note_21.wav";
         note_21.play();
    }
    
    if (key == 115){
        note_22.src="../audio/piano_notes/note_22.wav";
         note_22.play();
    }
    
    if (key == 100){
         note_23.src="../audio/piano_notes/note_23.wav";
         note_23.play();
    }
    
    if (key == 102){
         note_24.src="../audio/piano_notes/note_24.wav";
         note_24.play();
    }
    
    if (key == 103){
         note_25.src="../audio/piano_notes/note_25.wav";
         note_25.play();
    }
    
    if (key == 104){
         note_26.src="../audio/piano_notes/note_26.wav";
         note_26.play();
    }
    
    if (key == 106){
         note_27.src="../audio/piano_notes/note_27.wav";
         note_27.play();
    }
    
    if (key == 107){
         note_28.src="../audio/piano_notes/note_28.wav";
         note_28.play();
    }
    
    if (key == 108){
        note_29.src="../audio/piano_notes/note_29.wav";
         note_29.play();
    }
    
    if (key == 241){
         note_30.src="../audio/piano_notes/note_30.wav";
         note_30.play();
    }
    
    if (key == 122){
         note_31.src="../audio/piano_notes/note_31.wav";
         note_31.play();
    }
    if (key == 120){
         note_32.src="../audio/piano_notes/note_32.wav";
         note_32.play();
    }
    
    if (key == 99){
        note_33.src="../audio/piano_notes/note_33.wav";
         note_33.play();
    }
    
    if (key == 118){
         note_34.src="../audio/piano_notes/note_34.wav";
         note_34.play();
    }
    
    if (key == 98){
         note_35.src="../audio/piano_notes/note_35.wav";
         note_35.play();
    }
    
    if (key == 110){
         note_36.src="../audio/piano_notes/note_36.wav";
         note_36.play();
    }
    
    if (key == 109){
         note_37.src="../audio/piano_notes/note_37.wav";
         note_37.play();
    }
    
    if (key == 44){
         note_38.src="../audio/piano_notes/note_38.wav";
         note_38.play();
    }
    
    if (key == 46){
         note_39.src="../audio/piano_notes/note_39.wav";
         note_39.play();
    }
    
    if (key == 45){
         note_40.src="../audio/piano_notes/note_40.wav";
         note_40.play();
    }
  	
    if (pedra1_deixada == true && pedra2_deixada == true && pedra3_deixada == true && pedra4_deixada == true) {
            //E
        if (key == 101) {
            lletra_1 = true;
        } 

        //V
        if (key == 118 && lletra_1 == true) {
            lletra_2 = true;
        } 

        //E
        if (key == 101 && lletra_1 == true && lletra_2 == true) {
            lletra_3 = true;
        } 

        //L
        if (key == 108 && lletra_1 == true && lletra_2 == true && lletra_3 == true) {
            lletra_4 = true;
        } 

        //Y
        if (key == 121 && lletra_1 == true && lletra_2 == true && lletra_3 == true && lletra_4 == true) {
            lletra_5 = true;
        } 

        //N
        if (key == 110 && lletra_1 == true && lletra_2 == true && lletra_3 == true && lletra_4 == true && lletra_5 == true) {
            lletra_6 = true;
        } 

        //C
        if (key == 99 && lletra_1 == true && lletra_2 == true && lletra_3 == true && lletra_4 == true && lletra_5 == true && lletra_6 == true) {
            lletra_7 = true;
        } 

        //O
        if (key == 111 && lletra_1 == true && lletra_2 == true && lletra_3 == true && lletra_4 == true && lletra_5 == true && lletra_6 == true && lletra_7 == true) {
            lletra_8 = true;
        }

        //L
        if (key == 108 && lletra_1 == true && lletra_2 == true && lletra_3 == true && lletra_4 == true && lletra_5 == true && lletra_6 == true && lletra_7 == true && lletra_8 == true) {
            lletra_9 = true;
        } 

        //L
        if (key == 108 && lletra_1 == true && lletra_2 == true && lletra_3 == true && lletra_4 == true && lletra_5 == true && lletra_6 == true && lletra_7 == true && lletra_8 == true && lletra_9 == true) {
            lletra_10 = true;
        } 

        //I
        if (key == 105 && lletra_1 == true && lletra_2 == true && lletra_3 == true && lletra_4 == true && lletra_5 == true && lletra_6 == true && lletra_7 == true && lletra_8 == true && lletra_9 == true && lletra_10 == true) {
            lletra_11 = true;
        }

        //N
        if (key == 110 && lletra_1 == true && lletra_2 == true && lletra_3 == true && lletra_4 == true && lletra_5 == true && lletra_6 == true && lletra_7 == true && lletra_8 == true && lletra_9 == true && lletra_10 == true && lletra_11 == true) {
            lletra_12 = true;
        }

        //S
        if (key == 115 && lletra_1 == true && lletra_2 == true && lletra_3 == true && lletra_4 == true && lletra_5 == true && lletra_6 == true && lletra_7 == true && lletra_8 == true && lletra_9 == true && lletra_10 == true && lletra_11 == true && lletra_12 == true) {
            setInterval(function(){document.getElementById("fletxa_secreta").style.visibility = "visible";
                                  document.getElementById("contenidor_piano").style.visibility = "hidden";
                                  document.getElementById("pianoo_img").style.visibility = "hidden";}, 1000);
        }
    }
	
}

function recollir_pedra2(){
	pedra2_agafada = true;
	document.getElementById("contenidor_pedra2").className = "pedra2_class";
}

function ampliar_book(){
	document.getElementById("book").className = "book_class";
	document.getElementById("book_cover").style.visibility = "hidden";
	document.getElementById("contenidor_pedra2").style.visibility = "hidden";
	document.getElementById("fletxa1_tornar_pantalla3").style.visibility = "hidden";
}

function passar_pagina1(){
	if (clicar_fletxa == true) {
		document.getElementById("pagina").style.transform = "translate(-30.7px, 0px) scale(-1,1)";
		document.getElementById("pagina").style.transition = "2s";
    	document.getElementById("intro_text2").className = "text1";
		document.getElementById("intro_text3").className = "text2";
		clicar_fletxa = false;
		setInterval(function(){clicar_fletxa = true}, 2500);
	}
}

function passar_pagina2(){
	if (clicar_fletxa == true) {
		document.getElementById("pagina").style.transform = "translate(0px, 0px) scale(1,1)";
		document.getElementById("pagina").style.transition = "2s";
		document.getElementById("intro_text2").className = "text1_reverse";
		document.getElementById("intro_text3").className = "text2_reverse";
		clicar_fletxa = false;
		setInterval(function(){clicar_fletxa = true}, 2500);
	}
}

function book_cover_animation(){
	document.getElementById("book_cover").style.transform = "translate(-100px, 0px)";
	document.getElementById("book_cover").style.transition = "2s";
}

function tornar_pantalla3_1(){
	document.getElementById("pantalla5").style.visibility = "hidden";
	document.getElementById("pantalla3").style.visibility = "visible";
	document.getElementById("book_cover").style.transition = "0s";
	if (pedra2_agafada == false) {
		document.getElementById("contenidor_pedra2").style.visibility = "hidden";
	}
	water_drops.currentTime = 0;
    water_drops.play();
}

function tornar_pantalla3_2(){
	document.getElementById("pantalla4").style.visibility = "hidden";
	document.getElementById("pantalla3").style.visibility = "visible";
	if (pedra3_agafada == false) {
		document.getElementById("contenidor_pedra3").style.visibility = "hidden";
	}
	document.getElementById("palet").style.transition = "0s";
    strange.pause();
    strange.currentTime = 0;
    water_drops.currentTime = 0;
    water_drops.play();
	
	if (pedra1_deixada == true) {
		document.getElementById("contenidor_pedra1").style.visibility = "hidden";
	}
	
	if (pedra2_deixada == true) {
		document.getElementById("contenidor_pedra2").style.visibility = "hidden";
	}
	
	if (pedra3_deixada == true) {
		document.getElementById("contenidor_pedra3").style.visibility = "hidden";
	}
	
	if (pedra4_deixada == true) {
		document.getElementById("contenidor_pedra4").style.visibility = "hidden";
	}
}

function tornar_pantalla3_3(){
	document.getElementById("pantalla6").style.visibility = "hidden";
	document.getElementById("pantalla3").style.visibility = "visible";
    document.getElementById("piano_img").style.visibility = "hidden";
    water_drops.currentTime = 0;
    water_drops.play();
}

function entrar_pantalla7(){
    document.getElementById("pantalla7").style.visibility = "visible";
	document.getElementById("pantalla4").style.visibility = "hidden";
    document.getElementById("blood_image").className = "blood_class";
	document.getElementById("palet").style.transition = "0s";
	document.getElementById("contenidor_pedra1").style.visibility = "hidden";
	document.getElementById("contenidor_pedra2").style.visibility = "hidden";
	document.getElementById("contenidor_pedra3").style.visibility = "hidden";
	document.getElementById("contenidor_pedra4").style.visibility = "hidden";
    water_drops.pause();
}

function tornar_menu_principal(){
    document.location.href='../index.html';
}

function entrada_secreta(){
    document.getElementById("pantalla8").style.visibility = "visible";
	document.getElementById("pantalla6").style.visibility = "hidden";
    demon_girl_audio.play();
}

function moure_palet(){
    document.getElementById("palet").style.transform = "translate(0px, 125px) scale(1.25,1.25)";
    document.getElementById("palet").style.transition = "3s";
}

function recollir_pedra4(){
    pedra4_agafada = true;
	document.getElementById("contenidor_pedra4").className = "pedra4_class";
}

function ampliar_simbol_function(){
	if (ampliar_simbol == true){
		document.getElementById("simbol1").className = "simbol_class1";
		ampliar_simbol = false;
	} else {
		document.getElementById("simbol1").className = "simbol_class2";
		ampliar_simbol = true;
	}
}

function deixar_pedra1(){
	if (ampliar_simbol == false && pedra1_agafada == true && pedra2_agafada == true && pedra3_agafada == true && pedra4_agafada == true) {
		document.getElementById("contenidor_pedra1").className = "deixar_pedra1";
		pedra1_deixada = true;
	}
}

function deixar_pedra2(){
	if (ampliar_simbol == false && pedra1_agafada == true && pedra2_agafada == true && pedra3_agafada == true && pedra4_agafada == true) {
		document.getElementById("contenidor_pedra2").className = "deixar_pedra2";
		pedra2_deixada = true;
	}
}

function deixar_pedra3(){
	if (ampliar_simbol == false && pedra1_agafada == true && pedra2_agafada == true && pedra3_agafada == true && pedra4_agafada == true) {
		document.getElementById("contenidor_pedra3").className = "deixar_pedra3";
		pedra3_deixada = true;
	}
}

function deixar_pedra4(){
	if (ampliar_simbol == false && pedra1_agafada == true && pedra2_agafada == true && pedra3_agafada == true && pedra4_agafada == true) {
		document.getElementById("contenidor_pedra4").className = "deixar_pedra4";
		pedra4_deixada = true;
	}
}

function ampliar_piano_function(){
   
   if(ampliar_piano == true){
       document.getElementById("contenidor_piano").className = "piano_class1";
       document.getElementById("piano_img").style.visibility = "visible";
       ampliar_piano = false;
      } else {
          document.getElementById("contenidor_piano").className = "piano_class2";
          ampliar_piano = true;
      }
}