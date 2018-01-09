
var NumberOfSquares = 6;
var colors = ColorGeneratorMachine(NumberOfSquares);
var pickedColor = PickColor();
var RGB = document.getElementById("title");
RGB.textContent = pickedColor ;

var WelcomeTable = document.querySelector("#WelcomeTable");

var squares = document.querySelectorAll(".square");
var MessageDisplay = document.querySelector("#Message");

var Easybtn = document.querySelector("#EasyBtn");
var HardBtn = document.querySelector("#HardBtn");
var Reset = document.querySelector("#Reset");



Easybtn.addEventListener("click",function(){

	HardBtn.classList.remove("selected");
	Easybtn.classList.add("selected");
	NumberOfSquares=3;
	 ResetProgram();
});

HardBtn.addEventListener("click",function(){

	HardBtn.classList.add("selected");
	Easybtn.classList.remove("selected");
	NumberOfSquares=6;
	ResetProgram();
});



Reset.addEventListener("click",function(){

	HardBtn.classList.remove("selected");
	EasyBtn.classList.remove("selected");
	ResetProgram();
	
});

for(var i =0; i < squares.length;i++){
	squares[i].style.backgroundColor= colors[i];



	squares[i].addEventListener("click",function(){

		// Take the color of this square and compare to picked Color
		var clickedColor = this.style.backgroundColor	 ;
		if(clickedColor === pickedColor){
			MessageDisplay.textContent = "Congratulation !!!";
			ColorChangeWinning(pickedColor);
		}
		else{
			MessageDisplay.textContent = "Try Again !!!";
			this.style.backgroundColor	 = "#232323"
		}


	});
		
}


function ColorChangeWinning(Color) {
	for(var i =0; i < colors.length;i++){ 
			squares[i].style.backgroundColor = Color
	}
	WelcomeTable.style.backgroundColor = pickedColor;
 
}

function PickColor(){

	var random  = Math.floor(Math.random()*colors.length);
	return colors[random];
}

function ColorGeneratorMachine(size){

	var colors = [];

	for( var i =0 ;i < size ;i++){
		colors.push(ColorGenerator());
	}

	return colors;
}

function ColorGenerator(){

	var red = Math.floor(Math.random()*255+1)
	var blue = Math.floor(Math.random()*255+1)
	var green = Math.floor(Math.random()*255+1)

	return "rgb(" + red + ", " + blue + ", " + green + ")";
}

function ResetProgram() {

	colors = ColorGeneratorMachine(NumberOfSquares)
	pickedColor = PickColor();
	RGB.textContent = pickedColor ;
	MessageDisplay.textContent = "";
	WelcomeTable.style.backgroundColor = "steelblue";

	for(var i =0; i < squares.length;i++) {

		if(colors[i])
			squares[i].style.backgroundColor= colors[i];
		else
			squares[i].style.backgroundColor = "#232323";
	}
	

}


