'Use strict';

//permet d'aller chercher les doneé dans les autre fichier js
//en mettant 'collectify' comme valeur a directive ng-app
//qui est en attribut dans la balise body (fichier app.html)
var app = angular.module('collectify', ['ngRoute']);