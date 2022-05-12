#M413 - TD2 : Réponses aux Questions

**Comment avez-vous ajouté l'écouteur d'évènement et sur quel objet ?**

    => En mettant un listener du type click dans le noeud "body" avec la fonction addEventListener

 **Que se passe-t-il si vous utilisez currentTarget en lieu et place de target ?**

    => C'est le noeud parent qui est selectionné (body) au lieu des enfants sur lesquels on clique.

**Comment avez-vous ajouté l'évèment ?**

   => Je n'ai pas vraiment rajouté un évènement, j'ai utilisé l'évènenement précédent et transmis la valeur en paramètre de ma fonction "selection2"

**Comment avez-vous fait pour que la fonction select2() ignore les évèments de la donnée ci-dessus ?**

   => Je l'ai fait en ajoutant 2 conditions, la première qui vérifie si le noeud sélectionné est le "div" ou pas. La deuxième vérifiant que le parent du noeud sélectionné n'est pas le div ce qui revient à ne pas sélectionner ses enfants.  
