'Use strict';

var items =[
    {'name':'Django Unchained', 'category_id': 1},
    {'name':'Forest Gump', 'category_id': 1}
];


// c'est un service qui permet de retourner la data items
// avec le service nommé ici itemProvider qui va etre appelé par
//un controller dans le fichier itemController.js
app.service('itemProvider', function () {
    this.getItems = function () {
        return items;
    };
});