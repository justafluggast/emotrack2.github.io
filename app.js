const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
var serial = urlParams.get('serial');


var sosci = "&?s=";
var link =  "https://www.soscisurvey.de/demotrack/?q=EMA_event";
var ref = link+sosci+serial;
document.write('EmoTrack'.link(ref));

const divInstall = document.getElementById('installContainer');
const butInstall = document.getElementById('butInstall');

/* Put code here */

indow.addEventListener('beforeinstallprompt', (event) => {
  console.log('👍', 'beforeinstallprompt', event);
  // Stash the event so it can be triggered later.
  window.deferredPrompt = event;
  // Remove the 'hidden' class from the install button container
  divInstall.classList.toggle('hidden', false);
});


/* Only register a service worker if it's supported */
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/service-worker.js');
}

 
