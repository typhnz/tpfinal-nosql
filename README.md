# TP Final NoSQL - SanteConnect

Projet realise par le groupe PHAISAN - SABINOTTO - SILOTIA - DIAKHITE.

## Contenu du depot

- `Rapport.pdf`: rapport d'architecture et justification des choix NoSQL.
- `Architecture.pdf`: schema d'architecture de la solution SanteConnect.
- `MongoDB/`: scripts du prototype MongoDB.
- `Donnees/jeu_de_donnees.json`: jeu de donnees de test.
- `README.pdf`: procedure d'installation et d'execution demandee dans le livrable.
- `PHAISAN-SABINOTTO-SILOTIA-DIAKHITE.zip`: archive finale a remettre.

## Execution du prototype MongoDB

Depuis la racine du projet:

```bash
mongosh MongoDB/creation_collections.js
mongosh MongoDB/insertion_donnees.js
mongosh MongoDB/index.js
mongosh MongoDB/requetes.js
mongosh MongoDB/aggregation.js
```

Les scripts utilisent la base MongoDB `santeconnect`.
