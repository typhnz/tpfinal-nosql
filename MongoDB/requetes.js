use("santeconnect");

print("1. Rechercher un patient a partir de son identifiant");
printjson(db.patients.findOne({_id: "PAT-0001"}));

print("2. Afficher les consultations d'un patient");
printjson(db.consultations.find({patient_id: "PAT-0001"}).sort({date: -1}).toArray());

print("3. Afficher les consultations realisees par un medecin");
printjson(db.consultations.find({professionnel_id: "PRO-002"}).sort({date: -1}).toArray());

print("4. Rechercher les patients hospitalises dans un service donne");
printjson(db.hospitalisations.aggregate([
  {$match: {service: "cardiologie"}},
  {$lookup: {from: "patients", localField: "patient_id", foreignField: "_id", as: "patient"}},
  {$unwind: "$patient"},
  {$project: {_id: 0, hospitalisation_id: "$_id", service: 1, date_entree: 1, date_sortie: 1, patient_id: "$patient._id", nom: "$patient.nom", prenom: "$patient.prenom"}}
]).toArray());

print("5. Rechercher les examens realises durant une periode donnee");
printjson(db.examens.find({
  date: {$gte: "2026-02-01T00:00:00Z", $lte: "2026-03-31T23:59:59Z"}
}).sort({date: 1}).toArray());
