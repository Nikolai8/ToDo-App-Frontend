# ToDo-App-Frontend
In „Vanilla JavaScript" ohne Framework geschrieben und statisch von NGINX-Server als Docker-Image geliefert, daher kann JavaScript nicht wie in Node.js Environment-Variablen lesen, weil das JavaScript nur im Browser ausgeführt wird und es hier keine Environment-Variablen des Systems gibt. 
- Es wäre möglich über Node.js als Server die Seite zu liefern, dann könnten Environment-Variablen über `process.env.ENV_VARIABLE`, dies würde aber eine zusätzliche Server-Programmierung erfordern.
- Mit Benutzung eines auf beispielsweise Node.js basierendes Framework wie React können auch Environment-Variablen gestzt werden, dazu muss man aber das Projekt umschreiben.
- Über NGINX lassen sich über Docker auch Environment-Variablen setzen, diese aber über eine statisch geliefertes JavaScript auszulesen gestaltet sich aber als nicht einfach möglich.

## Setzen von Backend URL und Port
Zum Setzen des Backend-Endpunktes muss die URL-Variable am Anfang des JS-Codes geändert werden und das Docker Image neu generiert werden, falls über Docker ausgeführt werden soll.
- Standard Backend-URL: http://127.0.0.1:8080/todos/

![image](https://user-images.githubusercontent.com/35593161/211169286-0ac41a9a-ab8f-4cad-b932-5c778f52371d.png)

## CORS Problematik
Falls das Frontend nicht mit dem Backend kommunizieren kann, liegt es möglicherweise am nicht eingerichteten CORS des Backend-Servers, dies wird auch als Fehler im Console-Log des Browsers angezeigt.

![image](https://user-images.githubusercontent.com/35593161/211169776-ed4aa1ee-e730-4be8-b3f8-b0a73ad4cc22.png)
