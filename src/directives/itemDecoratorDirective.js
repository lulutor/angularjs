"Use strict";

// directive : celle-ci est la phrase qui affiche les informations 
// de l'objet "items" dans "item" (dans app.html) de la manière que l'on souhaite,
// ensuite on met la directive en attribut et ce la affiche cette
//phrase dans la balise au lieu d'écrire la phrase entre "{{}}" dans
// le html.
app.directive('decorateItem', function () {
    return {
            template: 'item "{{item.name}}" dans la categorie {{ item.category_id}}'
    };
});