document.addEventListener("DOMContentLoaded", function() {
    let button_menu = document.getElementById("menu_open");
	let button_bar = document.getElementById("menu_bar");
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
})