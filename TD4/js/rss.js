/**
* 
* M413 - TD4 
*
* @author Zinedine
*	@copyright UCA - IUT - INFO
* @version 1.0
* @date	2021-02-14
*
*/
"use strict";

// M413 - TD4
let message = 'JavaScript is ok :)';
// alert( message);
console.log(message);



const myAppRSS = {

	debug: false,
	verbose: false,
	xhr: null,

	onLoad: function () {
		if (myAppRSS.verbose) console.log('Add a listener event on window for the load event…');
		window.addEventListener('load', myAppRSS.ready, false);
		this.init();


	},

	ready: function (e) {
		if (myAppRSS.verbose) console.log('The whole page was loaded…');
		if (myAppRSS.debug) console.log(`Event type : ${e.type}, target : ${e.target}`);
	},

	init: function () {
		this.xhr = new XMLHttpRequest();
		const select = document.querySelector('#flow-choice-select');
		select.addEventListener('change', this.selectRSS(select.value));
	},

	selectRSS: function (value) {
		console.log(value)
		this.xhr.onreadystatechange = function () {
			if (this.readyState == 4 && this.status == 200) { // Tout est OK
				myCallback(this); // Appelle la fonction myCallBack()
			}
		};
		this.xhr.open('GET', value, true);
		this.xhr.send();
	},
	
};


// Load myAppRSS Application
myAppRSS.debug = true; // Debug mode
myAppRSS.verbose = true; // Verbose mode
function myCallback(data){
	let i;
	let xmlDoc = myAppRSS.xhr.responseXML; // Récupère le XML
	if (myAppRSS.debug) console.log(xmlDoc);
	let x = xmlDoc.getElementsByTagName("title");
	let table = "<tr><th>Title</th></tr>";
	for (i = 0; i < x.length; i++) {
		if (debug) console.log(x[i]);
		table += "<tr><td>" + x[i].textContent + "</td></tr>";
	}
	document.getElementById("p").innerHTML = table;
}
myAppRSS.onLoad();

