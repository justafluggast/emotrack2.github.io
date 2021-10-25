const divInstall = document.getElementById('installContainer');
const butInstall = document.getElementById('butInstall');


/* Only register a service worker if it's supported */
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('sw.js');
}
