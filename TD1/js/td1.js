function defineHeading1() {
    document.getElementById("titre").innerHTML = "title changed";
}

function defineHeading2_1() {
    let h2 = document.getElementsByTagName("h2")[0];
    console.log(h2.innerHTML);
}

function defineHeading2_last() {
    let h2 = document.getElementsByTagName("h2")[1];
    console.log(h2.innerHTML + "\nNombre de balises H2 " + document.getElementsByTagName("h2").length);
}



function defineHeading4() {
    let tabElements = document.getElementsByClassName("firstOrLast");
    if (tabElements.length % 2 == 0) {
        document.title = tabElements[0].innerHTML;

    } else if (tabElements.length == 0) {
        document.title = "Chelgham Zinedine";
    } else {
        document.title = tabElements[tabElements.length - 1].innerHTML;
    }
}

function swapInnerHTML() {
    let p1 = document.getElementsByTagName("p")[0];
    let p2 = document.getElementsByTagName("p")[1];
    let temp = p1.innerHTML;
    p1.innerHTML = p2.innerHTML;
    p2.innerHTML = temp;
}


function dateAlter() {
    let date = new Date();
    let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    let sdate = date.toLocaleDateString('fr-CA', options)
    let lastDate = document.getElementById("update-date");

    let autors = document.getElementsByName("autor");
    let lastAutor = autors[autors.length - 1].getAttribute("content");

    if (lastDate.innerText.length == 0) {
        lastDate.innerText = "Dernière modification : le " + sdate + " par " + lastAutor;
    } else {
        console.log("Derniere modification déjà définit");
    }
}

function dateDiff(date1, date2) {
    var diff = {} // Initialisation du retour
    var tmp = date2 - date1;

    tmp = Math.floor(tmp / 1000); // Nombre de secondes entre les 2 dates
    diff.sec = tmp % 60; // Extraction du nombre de secondes

    tmp = Math.floor((tmp - diff.sec) / 60); // Nombre de minutes (partie entière)
    diff.min = tmp % 60; // Extraction du nombre de minutes

    tmp = Math.floor((tmp - diff.min) / 60); // Nombre d'heures (entières)
    diff.hour = tmp % 24; // Extraction du nombre d'heures

    tmp = Math.floor((tmp - diff.hour) / 24); // Nombre de jours restants
    diff.day = -tmp;

    return diff;
}


function getNbDays() {
    let p = document.getElementsByTagName("p")[2];
    p.addEventListener("click",
        function() {
            targetDate = new Date('2021-07-19 00:00:00');
            actualDate = new Date(Date.now());
            diff = dateDiff(targetDate, actualDate);
            let jour = "jours"
            if (diff.day <= 1) {
                p.innerHTML = p.innerHTML.replace("jours", "jour");
            }
            p.innerHTML = p.innerHTML.replace("xxx", diff.day);
        }, false);
}

function getHourFormatted() {
    let ladate = new Date()
    let h = ladate.getHours();
    if (h < 10) { h = "0" + h }
    let m = ladate.getMinutes();
    if (m < 10) { m = "0" + m }
    let s = ladate.getSeconds();
    if (s < 10) { s = "0" + s }
    return h + ":" + m + ":" + s;

}

function updateClock1() {
    window.setInterval(function() {
        pclock = document.getElementById("clock");
        pclock.innerHTML = getHourFormatted();
    }, 1);

}

function updateClock2() {
    window.setTimeout(function() {
        pclock = document.getElementById("clock");
        pclock.innerHTML = getHourFormatted();
    }, 1000);

}

function test() {
    console.log('Horray! Someone wrote "' + this.value + '"!')
}

function changeBackColor(imp) {
    let reg = new RegExp("^[0-9]{1,}$");
    if (reg.test(imp.value)) {
        imp.className = 'green';
    } else {
        imp.className = 'red';
    }
}

function checkInput() {
    let form = document.querySelector("#form");
    form.addEventListener('submit', function(e) {
        let t = document.querySelector(".white");
        changeBackColor(t);
    });

}

function f() {
    console.log(document.querySelectorAll('.firstOrLast'));
}


swapInnerHTML();
dateAlter();
getNbDays();
updateClock1();
checkInput();