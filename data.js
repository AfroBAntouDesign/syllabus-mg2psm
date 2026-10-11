const SYLLABUS = [
  // ============ M1 — SEMESTRE 1 ============
  {
    code: "GPP401",
    titre: "Initiation à la connaissance du Médicament",
    semestre: "S1",
    parcours: "TC",
    credits: 4,
    volume: "CM 30h · TD 20h · TP 0h · TPE 10h",
    ecue: [
      "Généralités sur le Médicament — CM 15h / TD 10h / TPE 5h",
      "Introduction à la pharmacologie thérapeutique — CM 15h / TD 10h / TPE 5h"
    ],
    objectifGeneral: "Comprendre la nature, la classification et le cycle de vie du médicament.",
    objectifsSpecifiques: [
      "Définir le médicament et ses formes pharmaceutiques",
      "Identifier les voies d'administration",
      "Connaître les étapes de développement",
      "Comprendre la réglementation pharmaceutique",
      "Maîtriser la traçabilité du médicament"
    ],
    evaluation: "Contrôle continu, examen terminal et/ou évaluation des TP.",
    applications: ["Pharmaceutique", "Agroalimentaire", "Autres secteurs"]
  },
  {
    code: "GPP403",
    titre: "Initiation à la Recherche et Développement dans l'Industrie pharmaceutique",
    semestre: "S1",
    parcours: "TC",
    credits: 6,
    volume: "CM 45h · TD 25h · TP 5h · TPE 15h",
    ecue: [
      "Approche de la R&D dans l'Industrie pharmaceutique — CM 15h / TD 10h / TPE 5h",
      "Qualité en développement et production des produits de santé — CM 15h / TD 10h / TPE 5h",
      "Ethnopharmacologie — CM 15h / TD 5h / TP 5h / TPE 5h"
    ],
    objectifGeneral: "Comprendre les étapes du développement d'un médicament, de la recherche à la commercialisation.",
    objectifsSpecifiques: [
      "Identifier les phases de recherche préclinique et clinique",
      "Maîtriser les étapes de formulation et de validation",
      "Gérer un projet de développement pharmaceutique",
      "Appliquer les outils de veille scientifique et réglementaire"
    ],
    evaluation: "Contrôle continu, examen terminal et/ou évaluation des TP.",
    applications: ["Pharmaceutique", "Agroalimentaire", "Autres secteurs"]
  },
  {
    code: "GPP405",
    titre: "Génie chimique appliqué aux substances bioactives et biomatériaux",
    semestre: "S1",
    parcours: "TC",
    credits: 4,
    volume: "CM 30h · TD 10h · TP 10h · TPE 10h",
    ecue: [
      "Synthèse organique I — CM 15h / TD 5h / TP 5h / TPE 5h",
      "Synthèse organique II — CM 15h / TD 5h / TP 5h / TPE 5h"
    ],
    objectifGeneral: "Acquérir les bases de la Chimie Organique appliquée à la conception et à la production de molécules d'intérêt pharmaceutique.",
    objectifsSpecifiques: [
      "Comprendre les réactions fondamentales de la Chimie Organique",
      "Réaliser des synthèses à petite échelle",
      "Identifier les mécanismes réactionnels",
      "Comprendre la relation structure-activité biologique"
    ],
    evaluation: "Contrôle continu, examen terminal et/ou évaluation des TP.",
    applications: ["Pharmaceutique", "Agroalimentaire", "Autres secteurs"]
  },
  {
    code: "GPP407",
    titre: "Opérations pharmaceutiques en pharmacotechnie",
    semestre: "S1",
    parcours: "TC",
    credits: 6,
    volume: "CM 45h · TD 15h · TP 15h · TPE 15h",
    ecue: [
      "Techniques de mélange — CM 15h / TD 5h / TP 5h / TPE 5h",
      "Techniques séparatives — CM 15h / TD 5h / TP 5h / TPE 5h",
      "Techniques d'analyse — CM 15h / TD 5h / TP 5h / TPE 5h"
    ],
    objectifGeneral: "Maîtriser les procédés de mélange solides, liquides ou pâteux utilisés dans la production pharmaceutique et agroalimentaire.",
    objectifsSpecifiques: [
      "Identifier les types de mélangeurs et leurs principes",
      "Étudier les paramètres influençant l'homogénéité",
      "Appliquer les techniques de mélange adaptées",
      "Garantir la reproductibilité industrielle"
    ],
    evaluation: "Contrôle continu, examen terminal et/ou évaluation des TP.",
    applications: ["Pharmaceutique", "Agroalimentaire", "Autres secteurs"]
  },
  {
    code: "GPP409",
    titre: "Pharmacotoxicologie",
    semestre: "S1",
    parcours: "TC",
    credits: 6,
    volume: "CM 45h · TD 20h · TP 10h · TPE 15h",
    ecue: [
      "Toxicologie des Produits de Santé et de l'Environnement — CM 15h / TD 5h / TP 5h / TPE 5h",
      "Pharmacologie et Toxicologie : principes, mécanismes et méthodes — CM 15h / TD 5h / TP 5h / TPE 5h",
      "Interactions des Principes Actifs : de l'activité biologique à la préformulation — CM 15h / TD 10h / TPE 5h"
    ],
    objectifGeneral: "Analyser les effets toxiques des substances chimiques sur l'organisme et l'environnement.",
    objectifsSpecifiques: [
      "Identifier les sources de toxicité chimique et biologique",
      "Comprendre les mécanismes de toxicité cellulaire",
      "Évaluer les doses létales et les seuils de sécurité",
      "Élaborer des stratégies de réduction des risques"
    ],
    evaluation: "Contrôle continu, examen terminal et/ou évaluation des TP.",
    applications: ["Pharmaceutique", "Agroalimentaire", "Autres secteurs"]
  },
  {
    code: "GPP411",
    titre: "Microbiologie industrielle et Biotechnologie industrielle",
    semestre: "S1",
    parcours: "TC",
    credits: 4,
    volume: "CM 30h · TD 10h · TP 15h · TPE 5h",
    ecue: [
      "Microbiologie Industrielle — CM 15h / TD 5h / TP 10h",
      "Biotechnologie industrielle — CM 15h / TD 5h / TP 5h / TPE 5h"
    ],
    objectifGeneral: "Maîtriser les principes microbiologiques appliqués à la production industrielle de biomolécules.",
    objectifsSpecifiques: [
      "Identifier les microorganismes d'intérêt industriel",
      "Appliquer les techniques de culture stérile à grande échelle",
      "Contrôler la contamination dans les procédés industriels",
      "Développer des protocoles de production"
    ],
    evaluation: "Contrôle continu, examen terminal et/ou évaluation des TP.",
    applications: ["Pharmaceutique", "Agroalimentaire", "Autres secteurs"]
  },

  // ============ M1 — SEMESTRE 2 ============
  {
    code: "GPP402",
    titre: "Pharmacologie",
    semestre: "S2",
    parcours: "TC",
    credits: 6,
    volume: "CM 40h · TD 30h · TP 10h · TPE 20h",
    ecue: [
      "Pharmacologie préclinique — CM 10h / TD 5h / TP 5h / TPE 5h",
      "Pharmacologie et pharmacie clinique — CM 10h / TD 5h / TP 5h / TPE 5h",
      "Pharmacocinétique — CM 10h / TD 10h / TPE 5h",
      "Pharmacodynamie — CM 10h / TD 10h / TPE 5h"
    ],
    objectifGeneral: "Maîtriser les mécanismes d'action des médicaments ainsi que les paramètres pharmacocinétiques et pharmacodynamiques.",
    objectifsSpecifiques: [
      "Décrire les méthodologies de la pharmacologie préclinique et clinique",
      "Analyser les paramètres pharmacocinétiques",
      "Interpréter les relations dose-effet",
      "Appliquer les principes de la pharmacologie clinique"
    ],
    evaluation: "Contrôle continu, examen terminal et/ou évaluation des TP.",
    applications: ["Pharmaceutique", "Agroalimentaire", "Autres secteurs"]
  },
  {
    code: "GPP404",
    titre: "Biostatistiques appliquées aux méthodes d'analyse des substances bioactives",
    semestre: "S2",
    parcours: "TC",
    credits: 6,
    volume: "CM 40h · TD 10h · TP 40h · TPE 10h",
    ecue: [
      "Outils d'analyse des substances bioactives — CM 20h / TD 5h / TP 20h / TPE 5h",
      "Analyse et traitement statistique des données biologiques et pharmaceutiques — CM 20h / TD 5h / TP 20h / TPE 5h"
    ],
    objectifGeneral: "Identifier et quantifier les molécules bioactives à l'aide d'outils analytiques avancés.",
    objectifsSpecifiques: [
      "Utiliser la chromatographie (HPLC, GC)",
      "Appliquer la spectrométrie de masse",
      "Déterminer les profils phytochimiques",
      "Soutenir la prise de décision scientifique"
    ],
    evaluation: "Contrôle continu, examen terminal et/ou évaluation des TP.",
    applications: ["Pharmaceutique", "Agroalimentaire", "Autres secteurs"]
  },
  {
    code: "GPP406",
    titre: "Communication bilingue et rédaction scientifique",
    semestre: "S2",
    parcours: "TC",
    credits: 6,
    volume: "CM 40h · TD 40h · TPE 20h",
    ecue: [
      "Anglais / Français — CM 20h / TD 20h / TPE 10h",
      "Initiation à la recherche documentaire et à la rédaction scientifique — CM 20h / TD 20h / TPE 10h"
    ],
    objectifGeneral: "Développer la maîtrise de la communication professionnelle bilingue et les compétences de rédaction scientifique.",
    objectifsSpecifiques: [
      "Communiquer à l'oral et à l'écrit en français et en anglais",
      "Utiliser efficacement les bases de données scientifiques",
      "Structurer une démarche scientifique",
      "Rédiger un document scientifique aux normes"
    ],
    evaluation: "Contrôle continu, examen terminal et/ou évaluation des TP.",
    applications: ["Pharmaceutique", "Agroalimentaire", "Autres secteurs"]
  },
  {
    code: "GPP408",
    titre: "Ingénierie Pharmaceutique I",
    semestre: "S2",
    parcours: "TC",
    credits: 6,
    volume: "CM 40h · TD 10h · TP 40h · TPE 10h",
    ecue: [
      "Initiation à la production industrielle I — CM 20h / TD 5h / TP 20h / TPE 5h",
      "Maîtrise de procédés de production I — CM 20h / TD 5h / TP 20h / TPE 5h"
    ],
    objectifGeneral: "Acquérir les bases techniques et industrielles de la production pharmaceutique dans le respect des BPF.",
    objectifsSpecifiques: [
      "Identifier les étapes clés de la production pharmaceutique",
      "Appliquer les principes de la pharmacotechnie industrielle",
      "Mettre en œuvre des technologies de formulation",
      "Comprendre les paramètres critiques de procédé"
    ],
    evaluation: "Contrôle continu, examen terminal et/ou évaluation des TP.",
    applications: ["Pharmaceutique", "Agroalimentaire", "Autres secteurs"]
  },
  {
    code: "GPP410",
    titre: "Contrôle qualité",
    semestre: "S2",
    parcours: "TC",
    credits: 6,
    volume: "CM 40h · TD 10h · TP 40h · TPE 10h",
    ecue: [
      "Méthode de contrôle physico-chimique — CM 20h / TD 5h / TP 20h / TPE 5h",
      "Méthode de contrôle microbiologique des produits pharmaceutiques — CM 20h / TD 5h / TP 20h / TPE 5h"
    ],
    objectifGeneral: "Apprendre à évaluer les caractéristiques physiques et chimiques des matières premières et produits finis.",
    objectifsSpecifiques: [
      "Mesurer le pH, la densité, la viscosité, la conductivité",
      "Évaluer la pureté et la stabilité des échantillons",
      "Utiliser les instruments analytiques standards",
      "Appliquer les spécifications pharmacopéiques"
    ],
    evaluation: "Contrôle continu, examen terminal et/ou évaluation des TP.",
    applications: ["Pharmaceutique", "Agroalimentaire", "Autres secteurs"]
  },

  // ============ M2 — S3 — PARCOURS 1 : CADRE PRODUCTION ============
  {
    code: "GPP501",
    titre: "Ingénierie pharmaceutique II",
    semestre: "S3",
    parcours: "CP",
    credits: 6,
    volume: "CM 40h · TD 10h · TP 40h · TPE 10h",
    ecue: [
      "Production industrielle — CM 20h / TD 5h / TP 20h / TPE 5h",
      "Procédés de production — CM 20h / TD 5h / TP 20h / TPE 5h"
    ],
    objectifGeneral: "Approfondir la maîtrise des procédés et de la gestion industrielle de la production pharmaceutique.",
    objectifsSpecifiques: [
      "Maîtriser les procédés de fabrication à l'échelle industrielle",
      "Mettre en œuvre la maîtrise statistique des procédés",
      "Intégrer les exigences réglementaires et qualité",
      "Anticiper l'évolution des technologies (Industrie 4.0)"
    ],
    evaluation: "Contrôle continu, examen terminal et/ou évaluation des TP.",
    applications: ["Pharmaceutique", "Agroalimentaire", "Autres secteurs"]
  },
  {
    code: "GPP503",
    titre: "Formation managériale",
    semestre: "S3",
    parcours: "CP",
    credits: 6,
    volume: "CM 40h · TD 10h · TP 40h · TPE 10h",
    ecue: [
      "Management d'équipe et leadership — CM 20h / TD 5h / TP 20h / TPE 5h",
      "Gestion de projets — CM 20h / TD 5h / TP 20h / TPE 5h"
    ],
    objectifGeneral: "Développer les compétences managériales nécessaires à l'encadrement d'équipes et à la gestion de projets.",
    objectifsSpecifiques: [
      "Mobiliser les principes du management d'équipe",
      "Planifier, organiser et piloter un projet",
      "Développer des techniques de communication managériale",
      "Gérer les ressources humaines et matérielles"
    ],
    evaluation: "Contrôle continu, examen terminal et/ou évaluation des TP.",
    applications: ["Pharmaceutique", "Agroalimentaire", "Autres secteurs"]
  },
  {
    code: "GPP505",
    titre: "Langue, communication et marketing",
    semestre: "S3",
    parcours: "CP",
    credits: 6,
    volume: "CM 15h · TD 5h · TP 90h · TPE 40h",
    ecue: [
      "Anglais / Français — CM 15h / TD 5h / TPE 10h",
      "Stages — TP 90h / TPE 30h"
    ],
    objectifGeneral: "Renforcer la maîtrise professionnelle de l'anglais et du français et acquérir les bases du marketing.",
    objectifsSpecifiques: [
      "Communiquer avec aisance à l'oral et à l'écrit",
      "Identifier une cible client et construire une proposition de valeur",
      "Développer une identité de marque et un packaging",
      "Élaborer une stratégie de communication"
    ],
    evaluation: "Contrôle continu, examen terminal et/ou évaluation des TP.",
    applications: ["Pharmaceutique", "Agroalimentaire", "Autres secteurs"]
  },
  {
    code: "GPP507",
    titre: "Conception de projet, business plan et mobilisation de financement au Cameroun",
    semestre: "S3",
    parcours: "CP",
    credits: 6,
    volume: "CM 30h · TP 30h · TPE 60h",
    ecue: [
      "Identification d'opportunités et idéation de projet — CM 10h / TP 10h / TPE 20h",
      "Montage de projet et business model — CM 10h / TP 10h / TPE 20h",
      "Business plan, financement et levée de fonds — CM 10h / TP 10h / TPE 20h"
    ],
    objectifGeneral: "Acquérir la méthodologie de conception d'un projet entrepreneurial dans le contexte camerounais.",
    objectifsSpecifiques: [
      "Identifier une opportunité entrepreneuriale",
      "Construire un business model",
      "Élaborer un business plan",
      "Connaître les mécanismes de financement au Cameroun"
    ],
    evaluation: "Contrôle continu, examen terminal et/ou évaluation des TP.",
    applications: ["Pharmaceutique", "Agroalimentaire", "Autres secteurs"]
  },
  {
    code: "GPP509",
    titre: "Méthode d'analyse",
    semestre: "S3",
    parcours: "CP",
    credits: 6,
    volume: "CM 40h · TD 20h · TP 40h · TPE 20h",
    ecue: [
      "Outils chimiométriques pour la mise en place d'un projet expérimental — CM 20h / TD 10h / TP 20h / TPE 10h",
      "Nouvelles avancées en méthodes séparatives — CM 20h / TD 10h / TP 20h / TPE 10h"
    ],
    objectifGeneral: "Approfondir les outils chimiométriques et les techniques séparatives avancées.",
    objectifsSpecifiques: [
      "Appliquer des outils chimiométriques",
      "Traiter et interpréter des données multivariées",
      "Identifier les avancées récentes en techniques séparatives",
      "Sélectionner la méthode séparative adaptée"
    ],
    evaluation: "Contrôle continu, examen terminal et/ou évaluation des TP.",
    applications: ["Pharmaceutique", "Agroalimentaire", "Autres secteurs"]
  },

  // ============ M2 — S3 — PARCOURS 2 : MANAGEMENT DE LA QUALITÉ ============
  {
    code: "GPM501",
    titre: "Management de la Qualité",
    semestre: "S3",
    parcours: "MQ",
    credits: 6,
    volume: "CM 40h · TD 10h · TP 40h · TPE 10h",
    ecue: [
      "Systèmes d'assurance qualité de la production des produits de santé — CM 20h / TD 5h / TP 20h / TPE 5h",
      "Management de la Qualité dans les BPF — CM 20h / TD 5h / TP 20h / TPE 5h"
    ],
    objectifGeneral: "Maîtriser les principes et outils du management de la qualité appliqué à l'industrie des produits de santé.",
    objectifsSpecifiques: [
      "Comprendre les principes de l'assurance qualité",
      "Appliquer les exigences des BPF/GMP",
      "Mettre en œuvre les outils de gestion de la qualité",
      "Promouvoir une culture qualité"
    ],
    evaluation: "Contrôle continu, examen terminal et/ou évaluation des TP.",
    applications: ["Pharmaceutique", "Agroalimentaire", "Autres secteurs"]
  },
  {
    code: "GPM503",
    titre: "Qualité et Procédures",
    semestre: "S3",
    parcours: "MQ",
    credits: 6,
    volume: "CM 45h · TD 15h · TP 15h · TPE 15h",
    ecue: [
      "Qualité et industrie de santé — CM 15h / TD 5h / TP 5h / TPE 5h",
      "Stratégies et Procédures — CM 15h / TD 5h / TP 5h / TPE 5h",
      "Validation de méthodes. Applications pratiques — CM 15h / TD 5h / TP 5h / TPE 5h"
    ],
    objectifGeneral: "Développer une expertise en gestion des procédures qualité et validation des méthodes.",
    objectifsSpecifiques: [
      "Analyser l'organisation qualité d'une entreprise",
      "Élaborer des procédures de gestion",
      "Réaliser les étapes de qualification",
      "Étudier des cas concrets"
    ],
    evaluation: "Contrôle continu, examen terminal et/ou évaluation des TP.",
    applications: ["Pharmaceutique", "Agroalimentaire", "Autres secteurs"]
  },
  {
    code: "GPM505",
    titre: "Contrôle qualité microbiologique et physico-chimique des produits de santé et de l'environnement",
    semestre: "S3",
    parcours: "MQ",
    credits: 6,
    volume: "CM 40h · TD 10h · TP 40h · TPE 10h",
    ecue: [
      "CQ produits de santé — CM 20h / TD 5h / TP 20h / TPE 5h",
      "CQ environnement — CM 20h / TD 5h / TP 20h / TPE 5h"
    ],
    objectifGeneral: "Maîtriser les techniques de contrôle qualité microbiologique et physico-chimique.",
    objectifsSpecifiques: [
      "Réaliser des contrôles conformes aux référentiels",
      "Identifier et quantifier les contaminants",
      "Interpréter les résultats et proposer des actions correctives",
      "Appliquer les BPL"
    ],
    evaluation: "Contrôle continu, examen terminal et/ou évaluation des TP.",
    applications: ["Pharmaceutique", "Agroalimentaire", "Autres secteurs"]
  },
  {
    code: "GPM507",
    titre: "Langue, communication et marketing",
    semestre: "S3",
    parcours: "MQ",
    credits: 6,
    volume: "CM 15h · TD 5h · TP 90h · TPE 40h",
    ecue: [
      "Anglais / Français — CM 15h / TD 5h / TPE 10h",
      "Stages — TP 90h / TPE 30h"
    ],
    objectifGeneral: "Renforcer la maîtrise professionnelle bilingue et les bases du marketing des produits de santé.",
    objectifsSpecifiques: [
      "Communiquer avec aisance",
      "Identifier une cible client",
      "Développer une identité de marque",
      "Élaborer une stratégie de communication"
    ],
    evaluation: "Contrôle continu, examen terminal et/ou évaluation des TP.",
    applications: ["Pharmaceutique", "Agroalimentaire", "Autres secteurs"]
  },
  {
    code: "GPM509",
    titre: "Conception de projet, business plan et mobilisation de financement au Cameroun",
    semestre: "S3",
    parcours: "MQ",
    credits: 6,
    volume: "CM 30h · TP 30h · TPE 60h",
    ecue: [
      "Identification d'opportunités et idéation de projet — CM 10h / TP 10h / TPE 20h",
      "Montage de projet et business model — CM 10h / TP 10h / TPE 20h",
      "Business plan, financement et levée de fonds — CM 10h / TP 10h / TPE 20h"
    ],
    objectifGeneral: "Acquérir la méthodologie de conception d'un projet entrepreneurial.",
    objectifsSpecifiques: [
      "Identifier une opportunité entrepreneuriale",
      "Construire un business model",
      "Élaborer un business plan",
      "Connaître les mécanismes de financement"
    ],
    evaluation: "Contrôle continu, examen terminal et/ou évaluation des TP.",
    applications: ["Pharmaceutique", "Agroalimentaire", "Autres secteurs"]
  },

  // ============ M2 — S3 — PARCOURS 3 : DERMOPHARMACIE ============
  {
    code: "GPR501",
    titre: "Formulation en Cosmétique conventionnelle",
    semestre: "S3",
    parcours: "DP",
    credits: 6,
    volume: "CM 30h · TD 30h · TP 45h · TPE 15h",
    ecue: [
      "Bases biologiques et applications cosmétiques — CM 10h / TD 10h / TP 15h / TPE 5h",
      "Matières premières et formulation cosmétique — CM 10h / TD 10h / TP 15h / TPE 5h",
      "Qualité et réglementation — CM 10h / TD 10h / TP 15h / TPE 5h"
    ],
    objectifGeneral: "Acquérir les compétences pour concevoir, formuler et contrôler des produits cosmétiques conventionnels.",
    objectifsSpecifiques: [
      "Identifier les matières premières cosmétiques",
      "Intégrer la réglementation cosmétique",
      "Concevoir une formule cosmétique adaptée",
      "Contrôler la qualité et la stabilité"
    ],
    evaluation: "Contrôle continu, examen terminal et/ou évaluation des TP.",
    applications: ["Pharmaceutique", "Agroalimentaire", "Autres secteurs"]
  },
  {
    code: "GPR503",
    titre: "Mélanges et matrices complexes",
    semestre: "S3",
    parcours: "DP",
    credits: 6,
    volume: "CM 35h · TD 25h · TP 35h · TPE 15h",
    ecue: [
      "Matières premières naturelles et bases scientifiques — CM 10h / TD 10h / TP 15h / TPE 5h",
      "Formulation et mise en œuvre des produits naturels — CM 10h / TD 10h / TP 20h / TPE 5h",
      "Marketing et communication des produits cosmétiques naturels — CM 15h / TD 5h / TPE 5h"
    ],
    objectifGeneral: "Maîtriser la caractérisation et la mise en œuvre de matières premières naturelles.",
    objectifsSpecifiques: [
      "Caractériser les matières premières naturelles",
      "Mettre en œuvre des procédés de formulation naturelle",
      "Évaluer les propriétés biologiques et la stabilité",
      "Élaborer une stratégie marketing"
    ],
    evaluation: "Contrôle continu, examen terminal et/ou évaluation des TP.",
    applications: ["Pharmaceutique", "Agroalimentaire", "Autres secteurs"]
  },
  {
    code: "GPR505",
    titre: "Procédés industriels et technologies de fabrication des produits dermiques",
    semestre: "S3",
    parcours: "DP",
    credits: 6,
    volume: "CM 40h · TD 20h · TP 15h · TPE 15h",
    ecue: [
      "Équipements et technologies — CM 15h / TD 5h / TP 5h / TPE 5h",
      "Organisation industrielle — CM 10h / TD 10h / TP 5h / TPE 5h",
      "Qualité et réglementation industrielle — CM 15h / TD 5h / TP 5h / TPE 5h"
    ],
    objectifGeneral: "Comprendre l'organisation industrielle et les technologies de fabrication des produits cosmétiques.",
    objectifsSpecifiques: [
      "Décrire les équipements et technologies",
      "Organiser les flux et l'implantation d'une unité",
      "Appliquer les BPF et normes cosmétiques",
      "Anticiper les contraintes industrielles"
    ],
    evaluation: "Contrôle continu, examen terminal et/ou évaluation des TP.",
    applications: ["Pharmaceutique", "Agroalimentaire", "Autres secteurs"]
  },
  {
    code: "GPR509",
    titre: "Langue, communication et marketing",
    semestre: "S3",
    parcours: "DP",
    credits: 6,
    volume: "CM 15h · TD 5h · TP 90h · TPE 40h",
    ecue: [
      "Anglais / Français — CM 15h / TD 5h / TPE 10h",
      "Stages — TP 90h / TPE 30h"
    ],
    objectifGeneral: "Renforcer la maîtrise professionnelle bilingue et les bases du marketing.",
    objectifsSpecifiques: [
      "Communiquer avec aisance",
      "Identifier une cible client",
      "Développer une identité de marque",
      "Élaborer une stratégie de communication"
    ],
    evaluation: "Contrôle continu, examen terminal et/ou évaluation des TP.",
    applications: ["Pharmaceutique", "Agroalimentaire", "Autres secteurs"]
  },
  {
    code: "GPR511",
    titre: "Conception de projet, business plan et mobilisation de financement au Cameroun",
    semestre: "S3",
    parcours: "DP",
    credits: 6,
    volume: "CM 30h · TP 30h · TPE 60h",
    ecue: [
      "Identification d'opportunités et idéation de projet — CM 10h / TP 10h / TPE 20h",
      "Montage de projet et business model — CM 10h / TP 10h / TPE 20h",
      "Business plan, financement et levée de fonds — CM 10h / TP 10h / TPE 20h"
    ],
    objectifGeneral: "Acquérir la méthodologie de conception d'un projet entrepreneurial.",
    objectifsSpecifiques: [
      "Identifier une opportunité entrepreneuriale",
      "Construire un business model",
      "Élaborer un business plan",
      "Connaître les mécanismes de financement"
    ],
    evaluation: "Contrôle continu, examen terminal et/ou évaluation des TP.",
    applications: ["Pharmaceutique", "Agroalimentaire", "Autres secteurs"]
  },

  // ============ M2 — S4 — TFE ============
  {
    code: "GPP510",
    titre: "Travaux de fin d'études",
    semestre: "S4",
    parcours: "TFE",
    credits: 30,
    volume: "TD 600h · TPE 300h",
    ecue: [
      "Stage en entreprise — TD 300h / TPE 150h",
      "Mémoire — TD 300h / TPE 150h"
    ],
    objectifGeneral: "Mettre en pratique les compétences acquises et produire un mémoire de Master.",
    objectifsSpecifiques: [
      "Intégrer une structure professionnelle",
      "Mener une recherche documentaire rigoureuse",
      "Structurer une démarche scientifique",
      "Rédiger et présenter un mémoire devant un jury"
    ],
    evaluation: "Évaluation du stage et soutenance du mémoire.",
    applications: ["Pharmaceutique", "Agroalimentaire", "Autres secteurs"]
  }
];