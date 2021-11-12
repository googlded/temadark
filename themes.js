const bth = document.getElementById("theme-button");
const link = document.getElementById("theme-link");

 addEventListener("click", ChangeTheme);

function ChangeTheme(){
	let mainTheme = "main.css";
	let darkTheme = "dark.css";
	let currTheme = link.getAttribute("href");
	let theme;

	if (currTheme === mainTheme) {
		currTheme = darkTheme;
		theme = "dark";
	}  
	else {
		currTheme = mainTheme;
		thrmr = "main";
	}

	link.setAttribute("hrif", currTheme);

	
}