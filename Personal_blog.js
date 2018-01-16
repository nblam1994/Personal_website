

function BG_color_change(){

	var red = Math.floor(Math.random() * 256);
	var blue = Math.floor(Math.random() * 256);
	var green = Math.floor(Math.random() * 256);

	if(red < 180){
		red = 180;
	}

	if(blue < 180){
		blue = 180;
	}

	if(green < 180){
		green = 180;
	}

	document.body.style.backgroundColor = "rgb(" + red + "," +
			green + "," + blue + ")" ;
			setTimeout(BG_color_change, 3000);
}


BG_color_change();