const req = new XMLHttpRequest();
req.open('GET', 'https://project-622bb.firebaseio.com/BeCode.json', false); 
req.send(null);

if (req.status === 200) {
    console.log("Réponse reçue: %s", req.responseText);
} else {
    console.log("Status de la réponse: %d (%s)", req.status, req.statusText);
}

window.onload = function (){
    let data = JSON.parse(req.response);

    for (let i in data) {
        let container = document.getElementById('container');
        let newDiv = document.createElement('div');
        let h2 = document.createElement('h2');
        let divImg = document.createElement('div');
        let img = document.createElement('img');
        let txt = document.createElement('p');
        let button = document.createElement('button');
        let a = document.createElement('a');

        container.appendChild(newDiv);
        newDiv.appendChild(h2);
        newDiv.appendChild(divImg);
        divImg.appendChild(img);
        newDiv.appendChild(txt);
        newDiv.appendChild(button);
        button.appendChild(a);

        let h2Content = data[i].profile.firstname + " " + data[i].profile.lastname;
        h2.textContent = h2Content;
        txt.textContent = data[i].history;
        divImg.style.backgroundImage = 'url("'+data[i].image+'")';
        divImg.style.backgroundPosition = ' top center';
        divImg.style.backgroundRepeat = 'no-repeat';
        divImg.style.backgroundSize = 'cover';
        a.textContent = "Wiki";
        a.href = data[i].wiki;

        newDiv.setAttribute('id', 'data'+[i]);
        newDiv.className = 'card col-xs-12 col-sm-8 col-md-6 col-lg-4 mr-auto ml-auto';
        divImg.className = 'divImg center-block';

        button.className = 'btn btn-info';
    }


}



