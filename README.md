# ToDo-App-Frontend
In „Vanilla JavaScript" ohne Framework geschrieben und statisch von NGINX Server geliefert, daher kann JavaScript nicht wie in Node.js Environment-Variablen lesen, weil das JavaScript nur im Browser ausgeführt wird und es hier keine Environment-Variablen des Systems gibt. 

## Setzen von Backend URL und Port
Zum Setzen des Backend-Endpunktes muss die URL-Variable am Anfang des JS-Codes geändert werden und das Docker Image neu generiert werden, falls über Docker ausgeführt werden soll.

![image](https://user-images.githubusercontent.com/35593161/211169286-0ac41a9a-ab8f-4cad-b932-5c778f52371d.png)
