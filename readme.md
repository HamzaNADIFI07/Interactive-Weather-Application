# TP 5 : projet 2

## Mise en place du TP

  Cette mise en place est similaire à celle du TP précédent. Le dossier `tp3` contient une structure telle que celle décrite dans ce [document](https://intranet.fil.univ-lille.fr/2020/04/09/nodejs-et-npm/).  
  1. Dans le dossier `tp5/` exécutez
```bash  	  
tp5$  npm install
```  
  2. Exécutez la commande `npm run build` pour créer le dossier `./dist/` et construire un premier *bundle*
  3. Vous pouvez ouvrir le fichier `dist/index.html`, pour vérifier que tout s'est bien déroulé en consultant la console (<kbd>Ctrl Shift K</kbd>) dans laquelle vous devez lire le message `le bundle a été généré`.  

  >  Attention, le résultat <strong>ne se consulte pas</strong> avec le fichier `src/index.html` : vous devez faire vos modifications et votre travail dans le dossier `src/` **mais le résultat du travail est observé dans le dossier `dist/`**.

  4.	Pendant le TP vous devrez compléter ou créer les modules JavaScript demandés.  
    Comme dans le TP précédent, profitez des facilités offertes par Webpack pendant la phase de développement pour construire le bundle et visualiser les résultats "à chaud" en démarrant le serveur de développement :Après chaque modification, il faut générer le <q>nouveau</q> <i>bundle</i>, toujours à l'aide de la commande <code>npm run build</code> et c'est le fichier **`dist`**`/index.html` qu'il faut consulter pour avoir le résultat

```bash
tp5$  npm run dev-server
```

  **C'est la solution que l'on vous conseille d'adopter.**

  5. N'oubliez pas d'exécuter la commande <code>npm run build</code> après l'arrêt du serveur de développement pour mettre à jour le dossier `dist/`.

> NB : le dossier `dist/` ne sera pas mis sur le dépôt car il peut être regénéré à partir des sources.

## Votre travail

Expliquez ici comment exécuter votre projet. Vous pouvez également ajouter toute précision utile sur votre travail.

### Travail réalisé
Tous a été fait, avec toutes les instructions demandées, et je me suis permit de rajouter quelques style css.

### Compilation et exécution du programme:
Pour produire le bundle, il faudra se mettre dans le dossier principale du tp3, et exécuter la commande suivante:
```
TP-JS-S4-23-24$ cd tp5 
  
tp5$ npm run build
```
Pour exécuter le projet, il faudra se mettre dans le dossier principale du tp5, et exécuter la commande suivante:
```
tp5$ npm run dev-server
```

### Précision de code:
Pour le component dataComparaison, j'ai utilisé des élement `<td>` et `<tr>`, mais après quand j'ai commencer à m'intéresser à tous ce qui est style de css, j'ai du adapter mon code avec le fichier css fourni avec le projet en utlisant des élements `<div>` au lieu des élement `<td>` et `<tr>` et rajoutant des className partout pour pour accéder à chaque élement ou groupe d'élement tous seul et appliquer les régles css souhaité.
Au début j'avais utiliser comme structure de projet: dataComparaison, chartZone, et dataForCity qui les regroupent et contient la partie selectCity et le premier tableau de valeur en utiliser des élements `<td>` et `<tr>` et enfin app qui contient dataForCity, mais là quand j'ai terminer l'affichage des données et j'ai commencer à me préoccuper du style css, j'ai trouvé que mon code n'est pas compatible avec ls fichiers css fourni, du coup j'ai du rajouter des components comme c'est mentionner dans le ficher pdf, disponible dans l'énoncé du projet.