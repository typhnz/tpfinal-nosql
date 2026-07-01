use("santeconnect");

db.patients.createIndex({nir_hash: 1}, {unique: true});
db.patients.createIndex({nom: 1, prenom: 1, date_naissance: 1});
db.consultations.createIndex({patient_id: 1, date: -1});
db.consultations.createIndex({professionnel_id: 1, date: -1});
db.consultations.createIndex({etablissement_id: 1, date: -1});
db.examens.createIndex({patient_id: 1, date: -1});
db.examens.createIndex({type: 1, date: -1});
db.hospitalisations.createIndex({service: 1, date_sortie: 1});
db.objets_connectes.createIndex({patient_id: 1, dernier_signal: -1});

print("Index crees.");
