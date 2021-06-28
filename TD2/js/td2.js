/**
* 
* M413 - TD2
* * 
* 	@author Zinedine Chelgham
*	@copyright UCA - IUT -INFO
* 	@version	1.0
* 	@date			2021-01-31
*
*/

//curent = parent
//target = actual
function select(){
	const body = document.querySelector('body');
	let nbClik=1;
	body.addEventListener("click", function(e){
			if(nbClik%2 == 0){
				e.target.className = 'white';
				e.target.parentNode.className = 'white';
			}
			else{
				e.target.className = 'red';
				e.target.parentNode.className = 'orange';
			}
			console.log(e.currentTarget);
			nbClik++;	
	},false);

}

function select2(){
	const body = document.querySelector('body');
	let target="";
	let chosenElement="";
	let nbClick=1;
	body.addEventListener("click", function(e){
		if(nbClick%2 == 0)
			body.className = 'white';	
		else
			body.className = 'blue';

		let parentDiv = document.querySelector("#frameInsert"); 
		chosenElement = e.target;
			if((chosenElement == parentDiv || chosenElement.parentNode == parentDiv) ) {
				console.log("you can't select this element");
				chosenElement ="";
			}
			else	
				insertElement(chosenElement,"nice input value");		
		nbClick++;						
	},false);
	
}

function insertDiv(){
	let div = document.createElement("div");
	div.setAttribute("id","frameInsert");
	let input = {};
		input[0] = document.createElement("input");
		input[0].setAttribute("type","button");
		input[0].setAttribute("value","DIV");
		input[1] = document.createElement("input");
		input[1].setAttribute("type","button");
		input[1].setAttribute("value","P");
		input[2] = document.createElement("input");
		input[2].setAttribute("type","button");
		input[2].setAttribute("value","H2");	
		input[3] = document.createElement("input");
		input[3].setAttribute("type","text");
		input[3].setAttribute("id","to-insert");
	for(let e in input){
		div.appendChild(input[e]);	
	}
	document.querySelector("body").appendChild(div);	

}

function insertElement(node,s){
	if(node != ""){
		console.log(node);
		let inputText = document.createElement("input");
		inputText.setAttribute("type","text");
		inputText.setAttribute("value",s);
		node.parentNode.insertBefore(inputText,node);
	}
}

function search(){
	const button = document.querySelector("#search_button");
	button.addEventListener("click", function(e){
		let body = document.querySelector("body");
		let body_child = body.childNodes;
		let value = document.getElementById("search_value").value;
		console.log(body_child);
		for(var node of body_child){
				if(node.textContent.includes(value))
					onlightText(node,value);
		}
	},false)
}

	


function onlightText(node,value){
	console.log("eho");
    let splitText = node.innerHTML.split(" ");
	let newText="";
    for (let i = 0; i < splitText.length; i++) {
		if(splitText[i] === value){
        	newText += '<span class=select>' + splitText[i] + '</span> ';
		}
		else
			newText+=splitText[i] +" ";
    }
    node.innerHTML = newText;	
}




function onLoad() {
	console.log('-------- Processus de chargement du document terminé ---------');
	//select();
	//insertDiv();
	//select2();
	 //insertElement("incredible js code");
	search();
	

}

// Toute les ressources de la page sont complètement chargées.
window.onload = onLoad;
