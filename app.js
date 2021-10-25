const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
var serial = urlParams.get('serial');


var sosci = "?s=";
var link =  "https://www.soscisurvey.de/demotrack/";
var ref = link+sosci+serial;
document.write('<br>EmoTrack starten<br>'.link(ref));

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
   navigator.serviceWorker.register('../sw.js').then( () => {
    console.log('Service Worker Registered')
   })
 })
}
