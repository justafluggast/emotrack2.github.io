const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
var serial = urlParams.get('serial');


var sosci = "&?s=";
var link =  "https://www.soscisurvey.de/demotrack/?q=EMA_event";
var ref = link+sosci+serial;

const web_cache = 'web-app-cache-v1.0';

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(web_cache)
      .then((cache)=> {
        //Cache has been opened succesfully
        return cache.add(ref);
      })
  );
});
