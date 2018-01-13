

function BG_color_change(){

	document.body.style.backgroundColor = "rgb(" + Math.floor(Math.random() * 256) + "," +
			Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() *256) + ")" ;
			setTimeout(BG_color_change, 3000);
	//document.body.style.backgroundColor = "red";
}

function run_color_change(){

	while(true) {
		setTimeout(BG_color_change, 3000);
	}
}


BG_color_change();