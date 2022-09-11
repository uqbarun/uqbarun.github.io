function reqListener() {    
    var ul = document.createElement("ul");
    ec.appendChild(ul);    
    this.response.items.forEach(event => {        
        var li = document.createElement("li");
        var a = document.createElement("a");
        a.href = event.htmlLink;
        a.innerText = "Agregar a mi Calendario de Google";
        a.target = "_blank";
        ul.appendChild(li);
        li.appendChild(document.createTextNode(event.summary));
        var date = new Date(event.start.dateTime).toLocaleString('en-CO',{ timeZone: event.start.timeZone });
        li.appendChild(document.createTextNode(" - "+date+" - "));
        li.appendChild(a);        
    });
    
}
const ec = document.getElementById("events-container");
// XHR Request a la API de Google CalendaR
const req = new XMLHttpRequest();
req.addEventListener("load", reqListener);
req.open("GET", "https://www.googleapis.com/calendar/v3/calendars/c_d6ub97gmdvq9k9ien2t74r2gp4%40group.calendar.google.com/events?key=AIzaSyBdU9wjzrLP3dOdWfiKvow1PjU2QTbHLdU");
req.setRequestHeader("Accept", 'application/json');
req.responseType = 'json';
req.overrideMimeType("application/json");  
req.send();
