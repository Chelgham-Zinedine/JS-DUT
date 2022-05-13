#6.1 

    => L'évènement init() se chargera d'appeller la fonction

    => La méthode utilisé pour récupérer le titre est "getElementById()"

    => C'est la propriété innerHtml que j'ai utilisé pour récupérer le texte

    => Vu qu'on a deux balises h2 la méthode getElement va nous renvoyer un tableau avec les objets h2 
        indéxé en fonction de leur position dans le html. Donc j'ai juste récupérer l'élément à l'index 0

    => Pour connaitre le nombre de balises h2 on utilise la fonction l'attribut lenght du tableau de h2 qu'on récupère

    => Pour récupérer un élément en fonction de sa classe on utlise getElementsByClassName

    => Pour déterminer si l'élément était pair j'ai utilisé le reste du modulo à 2




#6.2

    => innerText retourne seulement le texte sans espaces et sans tags
    => innerHtml retourne le texte avec tout les epaces et tags à l'intérieur
    => textContent retourne le texte avec des epaces mais sans les tags que le texte pourrait contenir

#6.3

    => Il faut changer les indices du tableau des métas balises contant "autors"
    => il faut choisir l'indice à lenght-1 du tableau 

#7
    =>  J'obtient le nombres de jour en faisant une soustraction de la future date et de la date actuelle

    =>  La mise à jour se fait avec la fonction "replace"


#7.1

    => j'utilise setInterval car elle appelle m'a fonction de manière continuelle, contrairement à setTimout qui appelle ma fonction 
       qu'une fois après un certain intervale

#8

    => J'ai utilisé l'évènement "submit"

    => La couleur change en changeant le nom de classe



