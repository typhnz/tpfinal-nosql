// Base documentaire du prototype SanteConnect.
use("santeconnect");

db.dropDatabase();

db.createCollection("patients", {
  validator: {$jsonSchema: {bsonType: "object", required: ["_id", "nom", "prenom", "date_naissance", "nir_hash"], properties: {
    _id: {bsonType: "string"}, nir_hash: {bsonType: "string"}, nom: {bsonType: "string"}, prenom: {bsonType: "string"},
    date_naissance: {bsonType: "string"}, sexe: {bsonType: "string"}, allergies: {bsonType: "array"}
  }}}
});
db.createCollection("professionnels");
db.createCollection("etablissements");
db.createCollection("consultations");
db.createCollection("examens");
db.createCollection("hospitalisations");
db.createCollection("objets_connectes");

print("Collections creees: patients, professionnels, etablissements, consultations, examens, hospitalisations, objets_connectes");
