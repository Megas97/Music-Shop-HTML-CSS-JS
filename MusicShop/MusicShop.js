var items = 0

function handleRegister(form){
	if (form.regEmail.value == "" && form.regPassword.value != ""){
		alert("Please enter an e-mail.")
	}else if (form.regEmail.value != "" && form.regPassword.value == ""){
		alert("Please enter a password.")
	}else if (form.regEmail.value == "" && form.regPassword.value == ""){
		alert("Please enter an e-mail and a password.")
	}else if (form.regEmail.value != "" && form.regPassword.value != ""){
		if (form["regEmail"].value.indexOf('@') == -1){
			alert("Please enter a valid e-mail address.")
		}
	}
}

function handleLogin(form){
	if (form.logUsername.value == "" && form.logPassword.value != ""){
		alert("Please enter a username.")
	}else if (form.logUsername.value != "" && form.logPassword.value == ""){
		alert("Please enter a password.")
	}else if (form.logUsername.value == "" && form.logPassword.value == ""){
		alert("Please enter a username and a password.")
	}
}

function resetCartItems(){
	document.getElementById("KissAndTellBoughtText").style.color = "#000000";
	document.getElementById("KissAndTellBoughtText").textContent = "."
	document.getElementById("AYearWithoutRainBoughtText").style.color = "#000000";
	document.getElementById("AYearWithoutRainBoughtText").textContent = "."
	document.getElementById("WhenTheSunGoesDownBoughtText").style.color = "#000000";
	document.getElementById("WhenTheSunGoesDownBoughtText").textContent = "."
	document.getElementById("StarsDanceBoughtText").style.color = "#000000";
	document.getElementById("StarsDanceBoughtText").textContent = "."
	document.getElementById("ForYouBoughtText").style.color = "#000000";
	document.getElementById("ForYouBoughtText").textContent = "."
	document.getElementById("RevivalBoughtText").style.color = "#000000";
	document.getElementById("RevivalBoughtText").textContent = "."
	document.getElementById("LetGoBoughtText").style.color = "#000000";
	document.getElementById("LetGoBoughtText").textContent = "."
	document.getElementById("UnderMySkinBoughtText").style.color = "#000000";
	document.getElementById("UnderMySkinBoughtText").textContent = "."
	document.getElementById("TheBestDamnThingBoughtText").style.color = "#000000";
	document.getElementById("TheBestDamnThingBoughtText").textContent = "."
	document.getElementById("GoodbyeLullabyBoughtText").style.color = "#000000";
	document.getElementById("GoodbyeLullabyBoughtText").textContent = "."
	document.getElementById("AvrilLavigneBoughtText").style.color = "#000000";
	document.getElementById("AvrilLavigneBoughtText").textContent = "."
	document.getElementById("CurrentCartItems").textContent = "Cart items: 0"
	items = 0
	KissAndTellQuantity = 0
	AYearWithoutRainQuantity = 0
	WhenTheSunGoesDownQuantity = 0
	StarsDanceQuantity = 0
	ForYouQuantity = 0
	RevivalQuantity = 0
	LetGoQuantity = 0
	UnderMySkinQuantity = 0
	TheBestDamnThingQuantity = 0
	GoodbyeLullabyQuantity = 0
	AvrilLavigneQuantity = 0
}

function countCartItems(){
	document.getElementById("CurrentCartItems").textContent = "Cart items: " + items
}

var KissAndTellQuantity = 0
var AYearWithoutRainQuantity = 0
var WhenTheSunGoesDownQuantity = 0
var StarsDanceQuantity = 0
var ForYouQuantity = 0
var RevivalQuantity = 0

function showKissAndTellWiki(){
	newwindow = window.open("https://en.wikipedia.org/wiki/Kiss_%26_Tell_(Selena_Gomez_%26_the_Scene_album)#Track_listing", "KissAndTellWindow", "height = 800, width = 800, titlebar = 0, menubar = 0, location = 0", false);
}

function buyKissAndTellCD(){
	document.getElementById("KissAndTellBoughtText").style.color = "#FFFFFF";
	KissAndTellQuantity++
	document.getElementById("KissAndTellBoughtText").textContent = "Added to cart! (" + KissAndTellQuantity + ")"
	items++
}

function showAYearWithoutRainWiki(){
	newwindow = window.open("https://en.wikipedia.org/wiki/A_Year_Without_Rain#Track_listing", "AYearWithoutRainWindow", "height = 800, width = 800, titlebar = 0, menubar = 0, location = 0", false);
}

function buyAYearWithoutRainCD(){
	document.getElementById("AYearWithoutRainBoughtText").style.color = "#FFFFFF";
	AYearWithoutRainQuantity++
	document.getElementById("AYearWithoutRainBoughtText").textContent = "Added to cart! (" + AYearWithoutRainQuantity + ")"
	items++
}

function showWhenTheSunGoesDownWiki(){
	newwindow = window.open("https://en.wikipedia.org/wiki/When_the_Sun_Goes_Down_(Selena_Gomez_%26_the_Scene_album)#Track_listing", "WhenTheSunGoesDownWindow", "height = 900, width = 800, titlebar = 0, menubar = 0, location = 0", false);
}

function buyWhenTheSunGoesDownCD(){
	document.getElementById("WhenTheSunGoesDownBoughtText").style.color = "#FFFFFF";
	WhenTheSunGoesDownQuantity++
	document.getElementById("WhenTheSunGoesDownBoughtText").textContent = "Added to cart! (" + WhenTheSunGoesDownQuantity + ")"
	items++
}

function showStarsDanceWiki(){
	newwindow = window.open("https://en.wikipedia.org/wiki/Stars_Dance#Track_listing", "StarsDanceWindow", "height = 1000, width = 800, titlebar = 0, menubar = 0, location = 0", false);
}

function buyStarsDanceCD(){
	document.getElementById("StarsDanceBoughtText").style.color = "#FFFFFF";
	StarsDanceQuantity++
	document.getElementById("StarsDanceBoughtText").textContent = "Added to cart! (" + StarsDanceQuantity + ")"
	items++
}

function showForYouWiki(){
	newwindow = window.open("https://en.wikipedia.org/wiki/For_You_(Selena_Gomez_album)#Track_listing", "ForYouWindow", "height = 1080, width = 800, titlebar = 0, menubar = 0, location = 0", false);
}

function buyForYouCD(){
	document.getElementById("ForYouBoughtText").style.color = "#FFFFFF";
	ForYouQuantity++
	document.getElementById("ForYouBoughtText").textContent = "Added to cart! (" + ForYouQuantity + ")"
	items++
}

function showRevivalWiki(){
	newwindow = window.open("https://en.wikipedia.org/wiki/Revival_(Selena_Gomez_album)#Track_listing", "RevivalWindow", "height = 1080, width = 800, titlebar = 0, menubar = 0, location = 0", false);
}

function buyRevivalCD(){
	document.getElementById("RevivalBoughtText").style.color = "#FFFFFF";
	RevivalQuantity++
	document.getElementById("RevivalBoughtText").textContent = "Added to cart! (" + RevivalQuantity + ")"
	items++
}

var LetGoQuantity = 0
var UnderMySkinQuantity = 0
var TheBestDamnThingQuantity = 0
var GoodbyeLullabyQuantity = 0
var AvrilLavigneQuantity = 0

function showLetGoWiki(){
	newwindow = window.open("https://en.wikipedia.org/wiki/Let_Go_(Avril_Lavigne_album)#Track_listing", "LetGoWindow", "height = 700, width = 800, titlebar = 0, menubar = 0, location = 0", false);
}

function buyLetGoCD(){
	document.getElementById("LetGoBoughtText").style.color = "#FFFFFF";
	LetGoQuantity++
	document.getElementById("LetGoBoughtText").textContent = "Added to cart! (" + LetGoQuantity + ")"
	items++
}

function showUnderMySkinWiki(){
	newwindow = window.open("https://en.wikipedia.org/wiki/Under_My_Skin_(Avril_Lavigne_album)#Track_listing", "UnderMySkinWindow", "height = 700, width = 800, titlebar = 0, menubar = 0, location = 0", false);
}

function buyUnderMySkinCD(){
	document.getElementById("UnderMySkinBoughtText").style.color = "#FFFFFF";
	UnderMySkinQuantity++
	document.getElementById("UnderMySkinBoughtText").textContent = "Added to cart! (" + UnderMySkinQuantity + ")"
	items++
}

function showTheBestDamnThingWiki(){
	newwindow = window.open("https://en.wikipedia.org/wiki/The_Best_Damn_Thing#Track_listing", "TheBestDamnThingWindow", "height = 620, width = 800, titlebar = 0, menubar = 0, location = 0", false);
}

function buyTheBestDamnThingCD(){
	document.getElementById("TheBestDamnThingBoughtText").style.color = "#FFFFFF";
	TheBestDamnThingQuantity++
	document.getElementById("TheBestDamnThingBoughtText").textContent = "Added to cart! (" + TheBestDamnThingQuantity + ")"
	items++
}

function showGoodbyeLullabyWiki(){
	newwindow = window.open("https://en.wikipedia.org/wiki/Goodbye_Lullaby#Track_listing", "GoodbyeLullabyWindow", "height = 650, width = 800, titlebar = 0, menubar = 0, location = 0", false);
}

function buyGoodbyeLullabyCD(){
	document.getElementById("GoodbyeLullabyBoughtText").style.color = "#FFFFFF";
	GoodbyeLullabyQuantity++
	document.getElementById("GoodbyeLullabyBoughtText").textContent = "Added to cart! (" + GoodbyeLullabyQuantity + ")"
	items++
}

function showAvrilLavigneWiki(){
	newwindow = window.open("https://en.wikipedia.org/wiki/Avril_Lavigne_(album)#Track_listing", "AvrilLavigneWindow", "height = 860, width = 800, titlebar = 0, menubar = 0, location = 0", false);
}

function buyAvrilLavigneCD(){
	document.getElementById("AvrilLavigneBoughtText").style.color = "#FFFFFF";
	AvrilLavigneQuantity++
	document.getElementById("AvrilLavigneBoughtText").textContent = "Added to cart! (" + AvrilLavigneQuantity + ")"
	items++
}