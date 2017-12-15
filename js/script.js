var title = document.getElementById("title");
var intro = document.getElementById("intro");
var optie1 = document.getElementById("optie1");
var optie2 = document.getElementById("optie2");
var optie3 = document.getElementById("optie3");
var startbutton = document.getElementById("startbutton");
var opties = document.getElementById("opties");
var image = document.getElementById("image");
var inventory = document.getElementById("inventory");
var sleutel = document.getElementById("sleutel");
var sleutel2 = false;

document.getElementById("opties").style.display = "none";
document.getElementById("inventory").style.display = "none";
document.getElementById("sleutel").style.display = "none";

function start() {
	document.getElementById("opties").style.display = "block";
	document.getElementById("inventory").style.display = "block";
	startbutton.style.display = "none";
	optie1.innerHTML = "Ga het huis in.";
	optie1.style.display = "inline-block";
	optie1.setAttribute('onclick', "intro.innerHTML = 'Je bent binnen, wat doe je?', InHuis()");
	optie2.innerHTML = "Doorzoek de tuin";
	optie2.setAttribute('onclick', "intro.innerHTML = 'Goed gedaan! Je hebt een sleutel gevonden.', SleutelImg()");
	optie2.style.display = "inline-block";
	optie3.innerHTML = "Loop weg";
	optie3.style.display = "inline-block";
	intro.innerHTML = "Je staat voor het huis Asylum, wat doe je?";
	optie3.setAttribute('onclick', "intro.innerHTML = 'Niet bang zijn gewoon naar binnen gaan!', GameOver()");
	image.src = "img/huisingang.jpg";
}

function SleutelImg() {
	sleutel2=true
    sleutel.src = "img/sleutel.png";
    document.getElementById("sleutel").style.display = "block";
}

function GameOver() {
	image.src = "img/GameOver.png";
	optie1.innerHTML = "Probeer opnieuw";
	optie1.setAttribute('onclick', "start()");
	optie2.style.display = "none";
	optie3.style.display = "none";
	inventory.style.display = "none";
	sleutel.style.display = "none";
	sleutel2=false
} 

function InHuis() {
	if (sleutel2) {
	image.src = "img/trappenhuis.png";
	optie1.innerHTML = "Ga naar boven";
	optie1.setAttribute('onclick', "intro.innerHTML = 'Je bent boven, wat doe je?', Boven()");
	optie2.innerHTML = "Ga naar de kelder";
	optie2.setAttribute('onclick', "intro.innerHTML = 'Je bent in de kelder, wat doe je?', Kelder()");
	optie3.innerHTML = "Ga terug";
	optie3.setAttribute('onclick', "start()");
	}   else {
			alert("Vind eerst de sleutel!");
	}
}

function Boven() {
	image.src = "img/zolder.jpg";
	optie1.innerHTML = "Kijk uit het raam";
	optie1.setAttribute('onclick', "Raam()");
	optie2.innerHTML = "Doorzoek kamer";
	optie2.setAttribute('onclick', "alert('Je hebt niks gevonden!')")
	optie3.innerHTML = "Ga terug";
	optie3.setAttribute('onclick', "InHuis()");
}

function Kelder() {
	image.src = "img/kelder.jpg";
	optie1.innerHTML = "Ga de deur in";
	optie1.setAttribute('onclick', "KelderDeur()");
	optie2.innerHTML = "Doorzoek de kelder";
	optie2.setAttribute('onclick', "alert('Je hebt niks gevonden!')")
	optie3.innerHTML = "Ga terug";
	optie3.setAttribute('onclick', "InHuis()");
}

function KelderDeur() {
	image.src = "img/zwembad.jpg"
	optie1.innerHTML = "Duik in het zwembad";
	optie1.setAttribute('onclick', "Finish()");
	optie2.innerHTML = "Ga de deur in";
	optie2.setAttribute('onclick', "intro.innerHTML = 'Helaas, je hebt verloren!', GameOver()");
	optie3.innerHTML = "Ga terug";
	optie3.setAttribute('onclick', "Kelder()");
}
	
function Finish() {
	intro.innerHTML = "Je hebt het spel uitgespeeld!";
	image.src = "img/win.gif"
	optie1.style.display = "none";
	optie2.style.display = "none";
	optie3.style.display = "none";
	inventory.style.display = "none";
}

function Raam() {
	image.src = "img/raam.jpg"
	optie1.innerHTML = "Sla de clown";
	optie1.setAttribute('onclick', "Finish()");
	optie2.innerHTML = "Doe het raam open";
	optie2.setAttribute('onclick', "intro.innerHTML = 'Helaas, je hebt verloren!', GameOver()");
	optie3.innerHTML = "Ga terug";
	optie3.setAttribute('onclick', "Boven()");
}