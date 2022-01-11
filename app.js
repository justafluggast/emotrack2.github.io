
function iOS() {
  return [
    'iPad Simulator',
    'iPhone Simulator',
    'iPod Simulator',
    'iPad',
    'iPhone',
    'iPod'
  ].includes(navigator.platform)
  // iPad on iOS 13 detection
  || (navigator.userAgent.includes("Mac") && "ontouchend" in document)
}

//Service Worker isntallieren: Code aus dem WWW kopiert --> Macht App installierbar

if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('/sw.js').then(function(registration) {
      // Registration was successful
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }, function(err) {
      // registration failed :(
      console.log('ServiceWorker registration failed: ', err);
    });
  });
}


//Link speichern
let link = "https://www.soscisurvey.de/emotrack2/?q=emotrack&s=";


//Automatische Weiterleitung falls der Link ?s= inkludiert (bei den SMS-Benachrichtigungen ist das der Fall)

function refer() {
let params1 = new URLSearchParams(document.location.search.substring(1));
value = parseInt(params1.get("s"), 10);
console.log(value);
if(!isNaN(value)){
document.getElementById("eingabefeld").style.display = "none";
let check_link1 = link+value;
window.location.href = check_link1;
}
}
refer();


//Anleitung anzeigen zum Installieren der APP (dafür wird der Installationsapp mit ?first=123 markiert)

function install() {

  let params = new URLSearchParams(document.location.search.substring(1));
  first = parseInt(params.get("first"), 10);
  
  if (first == 123){
  if (iOS()){document.getElementById("ios-prompt").style.display = "block";}
    document.getElementById("eingabefeld").style.display = "none";
  if (!iOS()){document.getElementById("firefox-prompt").style.display = "block";}
  if (!iOS()){document.getElementById("android-prompt").style.display = "block";}
    }
//Wenn der eingegebene Code nicht in Sosci existiert, dann leitet Sosci mit ?first=666 zurück auf die Seite, wodurch die Eingabe gelöscht wird
  
  if (first == 666) {
    localStorage.removeItem('serial');
    document.getElementById("eingabefeld").style.display = "block";
    alert("Fehlerhafter Code");
  }
}

install();

//Sendet den Code an Sosci

function send(){
    let token = document.querySelector("#token").value;
    localStorage.setItem('serial', token);
    check = String(token);
    let link1 = "https://www.soscisurvey.de/emotrack2/?q=emotrack01&s=";
    let check_link = link1+check;
    window.location.href = check_link;
}
 
//Läd Code aus dem lokalen Speicher
let serial = localStorage.getItem('serial');


//Falls ein Code geladen werden kann, wird automatisch zu Sosc weitergeleitet

if (serial == null){
if (isNaN(first)){
  document.getElementById("eingabefeld").style.display = "block";}
}
else
{
if (isNaN(first)){
document.getElementById("eingabefeld").style.display = "none";
check = String(serial); 
let link = "https://www.soscisurvey.de/emotrack2/?q=emotrack&s=";
let check_link = link+check;
window.location.href = check_link;
}
}



