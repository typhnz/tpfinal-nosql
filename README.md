# TP Final NoSQL - SantéConnect

## Présentation

Ce projet a été réalisé dans le cadre du TP Final d'Architecture NoSQL.

L'objectif est de proposer une architecture NoSQL moderne pour la plateforme nationale **SantéConnect**, destinée à centraliser les échanges de données médicales entre les établissements de santé publics et privés.

Le prototype implémente la partie documentaire de cette architecture à l'aide de **MongoDB**.

---

## Membres du groupe

- PHAISAN Tayvadi
- SABINOTTO Claude 
- SILOTIA Mathis
- DIAKHITE Mariama

---

## Technologies utilisées

- MongoDB Community Edition
- Mongo Shell (mongosh)
- JavaScript
- JSON

---

## Arborescence du projet

```
TP_Final_NoSQL/

│── Rapport.pdf
│── Architecture.pdf
│── README.pdf

├── MongoDB/
│   ├── creation_collections.js
│   ├── insertion_donnees.js
│   ├── index.js
│   ├── requetes.js
│   └── aggregation.js

├── Donnees/
│   └── jeu_de_donnees.json

└── PHAISAN-SABINOTTO-SILOTIA-DIAKHITE.zip
```

---

## Description des fichiers

| Fichier | Description |
|---------|-------------|
| Rapport.pdf | Rapport d'architecture et justification des choix technologiques |
| Architecture.pdf | Schéma global de l'architecture proposée |
| creation_collections.js | Création de la base et des collections MongoDB |
| insertion_donnees.js | Insertion des données de test |
| index.js | Création des index pour optimiser les recherches |
| requetes.js | Requêtes demandées dans le sujet |
| aggregation.js | Pipelines d'agrégation MongoDB |
| jeu_de_donnees.json | Données de démonstration |
| README.pdf | Guide d'installation et d'utilisation |

---

## Prérequis

Avant d'exécuter le projet, vérifier que :

- MongoDB est installé.
- Le service MongoDB est démarré.
- `mongosh` est disponible dans le terminal.

Vérification :

```bash
mongod --version
mongosh --version
```

---

## Création de la base de données

Ouvrir un terminal puis lancer MongoDB.

```bash
mongosh
```

Créer ou sélectionner la base :

```javascript
use santeconnect
```

---

## Exécution du prototype

Depuis la racine du projet, exécuter les scripts dans l'ordre suivant :

```bash
mongosh MongoDB/creation_collections.js
mongosh MongoDB/insertion_donnees.js
mongosh MongoDB/index.js
mongosh MongoDB/requetes.js
mongosh MongoDB/aggregation.js
```

Il est important de respecter cet ordre afin que les collections existent avant l'insertion des données et que les index soient créés avant l'exécution des requêtes.

---

## Collections créées

Le prototype repose sur les collections suivantes :

- patients
- consultations
- prescriptions
- examens
- hospitalisations

Ces collections permettent de représenter les principales données médicales de la plateforme SantéConnect.

---

## Fonctionnalités implémentées

Le prototype permet notamment :

- la gestion des dossiers patients ;
- le suivi des consultations médicales ;
- le stockage des prescriptions ;
- la gestion des examens médicaux ;
- le suivi des hospitalisations ;
- la recherche de patients ;
- l'exécution de requêtes métier ;
- la production de statistiques grâce au framework d'agrégation.

---

## Optimisations

Des index ont été créés afin d'améliorer les performances des recherches sur les champs les plus utilisés :

- identifiant du patient ;
- médecin ;
- date de consultation ;
- service d'hospitalisation ;
- type d'examen.

---

## Sécurité

L'architecture proposée prévoit notamment :

- authentification des utilisateurs ;
- gestion des rôles et des permissions (RBAC) ;
- chiffrement des communications (TLS) ;
- sauvegardes régulières ;
- journalisation des accès ;
- protection des données médicales.

---

## Conclusion

Ce prototype démontre la faisabilité d'une architecture documentaire basée sur MongoDB pour la plateforme SantéConnect.

La solution répond aux principaux besoins exprimés dans le cahier des charges tout en offrant une architecture évolutive, performante et adaptée au stockage de données médicales.

---

## Auteur

Projet réalisé dans le cadre du TP Final NoSQL.

Groupe :

- PHAISAN Tayvadi
- SABINOTTO Claude
- SILOTIA Mathis
- DIAKHITE Mariama
