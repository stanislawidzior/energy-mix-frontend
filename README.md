# Zadanie stażowe Codibly

Aplikacja pobiera dane z backendu w Spring Boot, który jest przetestowany w kluczowych miejscach.

## REST API używane przez frontend
- base url - https://energy-mix-nzr5.onrender.com/
- `/api/v1/energy-mix` – prognoza miksu energetycznego na dziś, jutro i pojutrze.  
- `/api/v1/time-window?size={size}` – optymalny przedział czasowy do ładowania EV w najbliższych dwóch dniach (1–6 godzin).

Frontend wyświetla dane w diagramach kołowych i umożliwia wybór oraz obliczenie najlepszego okna ładowania.
