/**
* 
* M413 - TD3 - Taquin Game
* * 
* @author Zinedine chelgham
*	@copyright UCA - IUT -INFO
* @version	1.0
* @date			2021-01-31
*
*/
"use strict";

// M413 - Taquin

// alert( message);
let tab = ["1","2","3",
		   "4","5","6",
	       "7","8",""];


function onLoad() {
	console.log('-------------Processus de chargement du document terminé-------------');
	const game_div  = document.querySelectorAll(".box");
	const empty_box = document.querySelector(".box-empty");
	empty_box.onclick = selection;
 	for (let i = 0; i < game_div.length; i++) {
		game_div[i].onclick = selection;		
 	}

}


function selection(e){
		if(e.target.parentNode === document.querySelector("#game")){
			console.log("ye");
	   		let box_empty = document.querySelector(".box-empty");
			let target_value = e.target.textContent;
			let box_empty_indice = tab.indexOf(""); //8
			let target_indice = tab.indexOf(target_value);
			if(Math.abs(box_empty_indice - target_indice) == 3 || Math.abs(box_empty_indice - target_indice) == 1){
				console.log("trop chaud");
				tab[target_indice] = "";
				tab[box_empty_indice] = target_value;
				e.target.className = "box-empty";
				box_empty.className = "box";
				box_empty.innerHTML = e.target.innerHTML;
				e.target.innerHTML="";
			}
			else{
				console.log("Wrong choice choose side to side box");
			}	
		}
}


	


	
	




// Toute les ressources de la page sont complètement chargées.
window.onload = onLoad;
