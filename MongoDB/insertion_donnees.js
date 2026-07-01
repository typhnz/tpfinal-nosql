use("santeconnect");

db.patients.insertMany([
  {
    "_id": "PAT-0001",
    "nir_hash": "h_nir_8d02",
    "nom": "Martin",
    "prenom": "Claire",
    "date_naissance": "1984-03-12",
    "sexe": "F",
    "contact": {
      "telephone": "+33101020304",
      "email": "claire.martin@example.test"
    },
    "adresse": {
      "ville": "Lyon",
      "code_postal": "69003"
    },
    "allergies": [
      "penicilline"
    ],
    "medecin_traitant_id": "PRO-001"
  },
  {
    "_id": "PAT-0002",
    "nir_hash": "h_nir_2a55",
    "nom": "Benali",
    "prenom": "Yanis",
    "date_naissance": "1976-11-08",
    "sexe": "M",
    "contact": {
      "telephone": "+33105060708"
    },
    "adresse": {
      "ville": "Marseille",
      "code_postal": "13005"
    },
    "allergies": [],
    "medecin_traitant_id": "PRO-002"
  },
  {
    "_id": "PAT-0003",
    "nir_hash": "h_nir_91bc",
    "nom": "Dubois",
    "prenom": "Emma",
    "date_naissance": "2012-06-21",
    "sexe": "F",
    "contact": {
      "telephone": "+33109080706"
    },
    "adresse": {
      "ville": "Paris",
      "code_postal": "75013"
    },
    "allergies": [
      "latex"
    ],
    "medecin_traitant_id": "PRO-001"
  },
  {
    "_id": "PAT-0004",
    "nir_hash": "h_nir_7c18",
    "nom": "Nguyen",
    "prenom": "Minh",
    "date_naissance": "1959-01-30",
    "sexe": "M",
    "contact": {
      "telephone": "+33111121314"
    },
    "adresse": {
      "ville": "Toulouse",
      "code_postal": "31000"
    },
    "allergies": [
      "iode"
    ],
    "medecin_traitant_id": "PRO-003"
  }
]);

db.professionnels.insertMany([
  {
    "_id": "PRO-001",
    "nom": "Lefevre",
    "prenom": "Sophie",
    "role": "medecin",
    "specialite": "medecine generale",
    "etablissement_id": "ETB-001",
    "actif": true
  },
  {
    "_id": "PRO-002",
    "nom": "Roux",
    "prenom": "Antoine",
    "role": "cardiologue",
    "specialite": "cardiologie",
    "etablissement_id": "ETB-002",
    "actif": true
  },
  {
    "_id": "PRO-003",
    "nom": "Morel",
    "prenom": "Nadia",
    "role": "biologiste",
    "specialite": "biologie medicale",
    "etablissement_id": "ETB-003",
    "actif": true
  }
]);

db.etablissements.insertMany([
  {
    "_id": "ETB-001",
    "nom": "CHU Lyon Centre",
    "type": "public",
    "region": "Auvergne-Rhone-Alpes",
    "services": [
      "urgences",
      "medecine interne",
      "pediatrie"
    ]
  },
  {
    "_id": "ETB-002",
    "nom": "Clinique Saint-Charles",
    "type": "prive",
    "region": "Provence-Alpes-Cote d'Azur",
    "services": [
      "cardiologie",
      "imagerie"
    ]
  },
  {
    "_id": "ETB-003",
    "nom": "Laboratoire BioSud",
    "type": "laboratoire",
    "region": "Occitanie",
    "services": [
      "biologie",
      "analyses"
    ]
  }
]);

db.consultations.insertMany([
  {
    "_id": "CON-001",
    "patient_id": "PAT-0001",
    "professionnel_id": "PRO-001",
    "etablissement_id": "ETB-001",
    "date": "2026-01-12T09:30:00Z",
    "motif": "suivi hypertension",
    "diagnostic": "tension stabilisee",
    "constantes": {
      "tension": "128/82",
      "pouls": 72
    },
    "prescriptions": [
      {
        "medicament": "amlodipine",
        "dosage": "5 mg",
        "duree": "30 jours"
      }
    ]
  },
  {
    "_id": "CON-002",
    "patient_id": "PAT-0002",
    "professionnel_id": "PRO-002",
    "etablissement_id": "ETB-002",
    "date": "2026-02-02T14:00:00Z",
    "motif": "douleur thoracique",
    "diagnostic": "surveillance cardiologique",
    "constantes": {
      "tension": "140/90",
      "pouls": 86
    },
    "prescriptions": [
      {
        "medicament": "bisoprolol",
        "dosage": "2.5 mg",
        "duree": "60 jours"
      }
    ]
  },
  {
    "_id": "CON-003",
    "patient_id": "PAT-0003",
    "professionnel_id": "PRO-001",
    "etablissement_id": "ETB-001",
    "date": "2026-02-18T10:15:00Z",
    "motif": "fievre",
    "diagnostic": "infection virale",
    "constantes": {
      "temperature": 38.4
    },
    "prescriptions": [
      {
        "medicament": "paracetamol",
        "dosage": "500 mg",
        "duree": "3 jours"
      }
    ]
  },
  {
    "_id": "CON-004",
    "patient_id": "PAT-0004",
    "professionnel_id": "PRO-003",
    "etablissement_id": "ETB-003",
    "date": "2026-03-03T08:45:00Z",
    "motif": "bilan biologique",
    "diagnostic": "analyse prescrite",
    "constantes": {},
    "prescriptions": []
  },
  {
    "_id": "CON-005",
    "patient_id": "PAT-0001",
    "professionnel_id": "PRO-002",
    "etablissement_id": "ETB-002",
    "date": "2026-03-22T16:30:00Z",
    "motif": "avis cardiologique",
    "diagnostic": "controle annuel",
    "constantes": {
      "tension": "126/80",
      "pouls": 70
    },
    "prescriptions": []
  }
]);

db.examens.insertMany([
  {
    "_id": "EXA-001",
    "patient_id": "PAT-0001",
    "professionnel_id": "PRO-003",
    "etablissement_id": "ETB-003",
    "type": "biologie",
    "date": "2026-01-13T07:40:00Z",
    "statut": "valide",
    "resultats": {
      "cholesterol_ldl": "1.1 g/L",
      "glycemie": "0.92 g/L"
    }
  },
  {
    "_id": "EXA-002",
    "patient_id": "PAT-0002",
    "professionnel_id": "PRO-002",
    "etablissement_id": "ETB-002",
    "type": "ECG",
    "date": "2026-02-02T15:00:00Z",
    "statut": "valide",
    "resultats": {
      "conclusion": "rythme sinusal"
    }
  },
  {
    "_id": "EXA-003",
    "patient_id": "PAT-0003",
    "professionnel_id": "PRO-001",
    "etablissement_id": "ETB-001",
    "type": "test rapide",
    "date": "2026-02-18T10:35:00Z",
    "statut": "valide",
    "resultats": {
      "grippe": "negatif"
    }
  },
  {
    "_id": "EXA-004",
    "patient_id": "PAT-0004",
    "professionnel_id": "PRO-003",
    "etablissement_id": "ETB-003",
    "type": "biologie",
    "date": "2026-03-03T09:15:00Z",
    "statut": "valide",
    "resultats": {
      "creatinine": "10 mg/L",
      "hemoglobine": "13.2 g/dL"
    }
  },
  {
    "_id": "EXA-005",
    "patient_id": "PAT-0001",
    "professionnel_id": "PRO-002",
    "etablissement_id": "ETB-002",
    "type": "echographie cardiaque",
    "date": "2026-03-22T17:00:00Z",
    "statut": "programme",
    "resultats": {}
  }
]);

db.hospitalisations.insertMany([
  {
    "_id": "HOS-001",
    "patient_id": "PAT-0002",
    "etablissement_id": "ETB-002",
    "service": "cardiologie",
    "date_entree": "2026-02-02T18:00:00Z",
    "date_sortie": "2026-02-05T10:00:00Z",
    "motif": "surveillance douleur thoracique"
  },
  {
    "_id": "HOS-002",
    "patient_id": "PAT-0003",
    "etablissement_id": "ETB-001",
    "service": "pediatrie",
    "date_entree": "2026-02-19T09:00:00Z",
    "date_sortie": "2026-02-20T16:00:00Z",
    "motif": "deshydratation"
  },
  {
    "_id": "HOS-003",
    "patient_id": "PAT-0004",
    "etablissement_id": "ETB-001",
    "service": "medecine interne",
    "date_entree": "2026-03-10T11:00:00Z",
    "date_sortie": null,
    "motif": "bilan renal"
  }
]);

db.objets_connectes.insertMany([
  {
    "_id": "OBJ-001",
    "patient_id": "PAT-0001",
    "type": "tensiometre",
    "modele": "TensioCare X2",
    "dernier_signal": "2026-03-24T08:00:00Z",
    "mesures_recentes": [
      {
        "date": "2026-03-24T08:00:00Z",
        "systolique": 127,
        "diastolique": 81
      }
    ]
  },
  {
    "_id": "OBJ-002",
    "patient_id": "PAT-0002",
    "type": "bracelet cardiaque",
    "modele": "CardioBand Pro",
    "dernier_signal": "2026-03-24T08:05:00Z",
    "mesures_recentes": [
      {
        "date": "2026-03-24T08:05:00Z",
        "frequence": 78
      }
    ]
  }
]);

print("Jeu de donnees insere.");
