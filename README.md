## Opis
Aplikacja do wyświetlania miksu energetycznego w wielkiej brytanii oraz do znajdywania optymalnego czasu ładowania pojazdu elektrycznego pod względem zużycia czystej energii.
Frontend wyświetla dane w diagramach kołowych i umożliwia wybór oraz obliczenie najlepszego okna ładowania.
## Link do zdeployowanej aplikacji
https://energy-mix-frontend-cz92.onrender.com/

Aplikacja może przy pierwszym połączeniu ladować się nawet 3 minuty. Dzieje się tak ponieważ render automatycznie przechodzi w tryb uśpienia po 15 minutach braku aktywności
## REST API używane przez frontend
https://github.com/stanislawidzior/energy-mix
- base url - https://energy-mix-nzr5.onrender.com/
- `/api/v1/energy-mix` – prognoza miksu energetycznego na dziś, jutro i pojutrze.  
- `/api/v1/time-window?size={size}` – optymalny przedział czasowy do ładowania EV w najbliższych dwóch dniach (1–6 godzin).


