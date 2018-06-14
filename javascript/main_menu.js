var scary=document.getElementById("play_sound");

function play_sound(){
	document.getElementById("start").style.transition = "3s";
    scary.play();
    setInterval(function(){document.location.href='game.html';}, 5000);
}

function credits(){
	document.getElementById("start").style.visibility = "hidden";
	document.getElementById("credits").style.visibility = "hidden";
	document.getElementById("pantalla_credits").style.visibility = "visible";
}

function tornar_menu(){
	document.getElementById("start").style.visibility = "visible";
	document.getElementById("credits").style.visibility = "visible";
	document.getElementById("pantalla_credits").style.visibility = "hidden";
}


