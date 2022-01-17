let ville = 'Brussels';
recevoirTemperature(ville)

let btn = document.querySelector('#changer');
btn.addEventListener('click', function () {
    ville = prompt('De quelle ville souhaitez-vous connaître la température ?');
    recevoirTemperature(ville)
})

function recevoirTemperature(ville) {
    const url = 'https://api.openweathermap.org/data/2.5/weather?q=' + ville + '&appid=01520912fd6cd15cdbb46c15815de376&units=metric';


    let requete = new XMLHttpRequest();
    requete.open('GET', url);
    requete.responseType = 'json';
    requete.send();
    requete.onload = function () {
        if (requete.readyState === XMLHttpRequest.DONE) {
            if (requete.status === 200) {
                let reponse = requete.response;
                document.querySelector('#temperature_label').innerText = reponse.main.temp;
                document.querySelector('#ville').innerText = reponse.name;
            } else {
                alert('Une erreur est survenue. Veuillez réessayer plus tard.')
            }
        }
    }
}