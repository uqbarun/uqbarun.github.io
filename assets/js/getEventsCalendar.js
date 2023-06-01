/**
 * Este script permite renderizar los datos de los eventos registrados en el Google Calendar de Uqbar UN
 */
function reqListener() {
    var ul = document.createElement("ul");
    eventsContainer.appendChild(ul);
    this.response.items.forEach(event => {
        if (event.status == "cancelled") return;
        var li = document.createElement("li");
        var a = document.createElement("a");
        a.href = event.htmlLink;
        a.innerText = "Agregar a mi Calendario de Google";
        a.target = "_blank";
        ul.appendChild(li);
        var b = document.createElement("b");
        b.appendChild(document.createTextNode(event.summary));
        li.appendChild(b);
        var date = new Date(event.start.dateTime).toLocaleString('en-CO', { timeZone: event.start.timeZone });
        if (event.description) li.appendChild(document.createTextNode(": " + event.description));
        li.appendChild(document.createElement("br"));
        var i = document.createElement("i");
        i.appendChild(document.createTextNode(date + ". "));
        li.appendChild(i);
        li.appendChild(a);
    });

}

function getOffsetRFC3339Date(offset)  {
    var now = new Date();
    now.setDate(now.getDate() + offset);
    return getRFC3339Date(now);
}



function getRFC3339Date(now) {
    
    var utcOffset = -5; // UTC-5 for Bogotá

    // Adjust the date and time based on the UTC offset
    now.setUTCHours(now.getUTCHours() + utcOffset);

    // Format the date in RFC3339 format
    var year = now.getUTCFullYear();
    var month = padZero(now.getUTCMonth() + 1);
    var day = padZero(now.getUTCDate());
    var hours = padZero(now.getUTCHours());
    var minutes = padZero(now.getUTCMinutes());
    var seconds = padZero(now.getUTCSeconds());

    return year + '-' + month + '-' + day + 'T' + hours + ':' + minutes + ':' + seconds + 'Z';
}

function padZero(value) {
    return value < 10 ? '0' + value : value;
}

const rfc3339Date = getOffsetRFC3339Date(-2) 
const eventsContainer = document.getElementById("events-container");
// XHR Request a la API de Google CalendaR
const req = new XMLHttpRequest();
req.addEventListener("load", reqListener);
/**
 * Google Cloud Proyect: unal.edu.co/'Blog Uqbar UN'
 * API Key: AIzaSyBdU9wjzrLP3dOdWfiKvow1PjU2QTbHLdU
 * CLient ID: 541299082882-ilupp7s0rd7nat97po164u7r46ac7a4a.apps.googleusercontent.com
 * 
 * Uqbar UN Calendar ID
 * c_kqf6qho59uo9p87b7div6ffv9k@group.calendar.google.com
 * 
 */
const APIkey = 'AIzaSyBdU9wjzrLP3dOdWfiKvow1PjU2QTbHLdU'
const calendarID = 'c_bac1e5ebbcb8f14b7c22309678e5b8d3ceeea578d54c79fe2c81ef3d17695f10@group.calendar.google.com';
const URL = `https://www.googleapis.com/calendar/v3/calendars/${calendarID}/events?key=${APIkey}&maxResults=6&timeZone=UTC-5&orderBy=startTime&singleEvents=true&timeMin=${rfc3339Date}`;
// Petición GET para los eventos del calendario Uqbar
req.open("GET", URL);
// Encabezado para respueseta JSON
req.setRequestHeader("Accept", 'application/json');
// Específicar el tipo de respuesta a JSON
req.responseType = 'json';
req.overrideMimeType("application/json");
req.send();
