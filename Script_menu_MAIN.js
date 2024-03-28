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


     //END)
	 //start create href on other html


	let links = [
		{ href: 'scripts/about-school.html', text: 'О школе' },
		{ href: 'index.html', text: 'Кликер' },
		{ href: 'scripts/me.html', text: 'Кто я?' },
		{ href: 'scripts/calculate.html', text: 'Тех.часть' },
	  ];

	  const element = button_bar
	  
	  links.forEach(link => {
		let anchor = document.createElement('a');
		anchor.href = link.href;
		anchor.textContent = link.text;
		element.appendChild(anchor);
	  });


    //END

})