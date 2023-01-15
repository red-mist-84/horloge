let hoursDiv = document.querySelector(".heures");
let dateDiv = document.querySelector(".date");

function liveDate () {
    let today = new Date();
    let annee = today.getFullYear();
    let mois = today.getMonth() + 1;
    let jours = today.getDate();

    if (mois < 10) {
        mois = "0" + mois;}
    if (jours < 10) {
        jours = "0" + jours;}

    dateDiv.innerHTML = jours + "/" + mois + "/" + annee;
}
    function liveTime () {
    today = new Date();
    heures = today.getHours();
    minutes = today.getMinutes();
    secondes = today.getSeconds();

    if (heures < 10) {
        heures = "0" + heures;
    }
    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    if (secondes < 10) {
        secondes = "0" + secondes;
    }

    hoursDiv.innerHTML = heures + ":" + minutes + ":" + secondes;
}

    liveDate();
    setInterval(liveTime, 1000);