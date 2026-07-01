use("santeconnect");

print("Nombre de consultations par etablissement");
printjson(db.consultations.aggregate([
  {$group: {_id: "$etablissement_id", nombre_consultations: {$sum: 1}}},
  {$lookup: {from: "etablissements", localField: "_id", foreignField: "_id", as: "etablissement"}},
  {$unwind: "$etablissement"},
  {$project: {_id: 0, etablissement_id: "$_id", nom: "$etablissement.nom", nombre_consultations: 1}},
  {$sort: {nombre_consultations: -1}}
]).toArray());

print("Repartition des examens par type");
printjson(db.examens.aggregate([
  {$group: {_id: "$type", nombre_examens: {$sum: 1}}},
  {$project: {_id: 0, type: "$_id", nombre_examens: 1}},
  {$sort: {nombre_examens: -1, type: 1}}
]).toArray());

print("Nombre moyen de consultations par medecin");
printjson(db.consultations.aggregate([
  {$group: {_id: "$professionnel_id", consultations: {$sum: 1}}},
  {$group: {_id: null, moyenne_consultations_par_medecin: {$avg: "$consultations"}}},
  {$project: {_id: 0, moyenne_consultations_par_medecin: {$round: ["$moyenne_consultations_par_medecin", 2]}}}
]).toArray());
