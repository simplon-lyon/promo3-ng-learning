# Promo3NgLearning

Créer un projet avec le cli :

Dans le dossier où on veut créer le projet : 
1) ng new nom-projet

(va créer un dossier nom-projet avec toutes les dépendances angular et tout dedans, avec un git initialisé)

Puis pour le mettre sur github :

2) Créer un repository github vide non initialisé (sans licence, sans readme, sans .gitignore)

3) cd nom-projet
4) git remote add origin https://github/url-du-repot

Via VS Code :
5) code .
6) cliquer sur le ptit nuage en bas pour pour synchroniser en sélectionnant origin comme remote

Via le terminal :
5) git push origin master


Si vous avez initialisé le repository avec des choses dedans, il faudra d'abord faire un 
 - git pull origin master
 - merge les changement
 - commit le merge
 - git push origin master

