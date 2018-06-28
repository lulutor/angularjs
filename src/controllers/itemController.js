'Use strict';

//Déclare les controllers qui seront utilisés dans le app.html
// ensuite on les appel en attribut dans les balises ou vont etre utilisées
//dans les controlleurs ont peut utiliser des variables 
//le contrller déclare d'abord le nom puis une function avec en parametre 
//un $scope pour déclarer les variables, on peut aussi mettre en parametre
//d'autre function pour qui sont dans d'autre fichiers.

app
    .controller('itemIndex', function ($scope) {

    })
    //ici le parametre "itemProvider" est une function 
    //qui permet d'aller chercher les données
    //dans un autr fichié dédier au data.
    .controller('itemList', function ($scope, itemProvider) {
        $scope.items = itemProvider.getItems();
    })
    .controller('itemCreate', function ($scope) {
         $scope.test='toto';
    })
    .controller('itemRemove', function ($scope) {

    })
;