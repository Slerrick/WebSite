document.addEventListener("DOMContentLoaded", function() {
		//RANDOM ELEMENT
	function getRandomElement(arr) {
		const randIndex = Math.floor(Math.random() * arr.length);
		return arr[randIndex];
	}
		//END
		//VARIABLES
	const score = document.getElementById("scr");
	let scores = 0;
	let bonus = 1;
	const bonus_text = document.getElementById("bonus");
	const reset = document.getElementById("resetid");
	const result = document.getElementById("info");
	const button = document.getElementById("but_id");
	const button_menu = document.getElementById("menu_open");
	const button_bar = document.getElementById("menu_bar");
	//END
	//EVENT OF BUTTON
	button.addEventListener("click", function PlusScores(some) {
		scores = scores + (5000 * bonus);
		score.textContent = scores;
		if(scores >= 1000000) {
			result.textContent = "YOU WIN!";
			result.style.fontSize = "9vw"
			button.style.background = "azure";
		};
		if(scores >= 50000) {
			score.style.color = "#83BD30";
		};
		if(scores >= 300000) {
			score.style.color = "#FFC000";
		};
		if(scores >= 700000) {
			score.style.color = "#FFACC7";
		};
	});
	//END
	//EVENT ON RESET
	reset.addEventListener("click", function Reset(somes) {
		scores = 0;
		score.textContent = scores;
		score.style.color = "white";
		result.style.fontSize = "15vw"
		if(result.textContent == "YOU WIN!") {
			result.textContent = "+5000";
			button.style.background = "gold";
			bonus = bonus + 1;
			bonus_text.textContent = "X" + bonus;
		}
	})
	//END
	//main menu opening

     let opening = false;
     button_menu.addEventListener("click", function Open_menu(anything) {
	 	if (!opening){
	 	button_bar.style.animation = "forwards 1 1s slide_bar ease alternate";
	 	opening = true;
	 	}else{
	 		button_bar.style.animation = "forwards 1 1s slide_bar_in ease alternate";
	 		opening = false;
	 	}
		
	 })
	//END
});
//END
