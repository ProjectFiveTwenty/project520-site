/* Project 520 Anki tag library: one search per chapter, per deck.
   Copied from the MCAT Master Sheet tag columns. Paste searches exactly as they appear in the sheet:
   each value is a String.raw`...` so backslashes (\_) stay as typed.
   Decks: anking = AnKing MCAT (AK_MCAT_v2 tags), captainhook = Captain Hook Deck v2, miledown = MileDown.
   A chapter with no search for a deck shows "No <deck> tag yet" in the calendar. */
window.P520_ANKI_DECKS = [
  { key: "anking", label: "AnKing MCAT" },
  { key: "captainhook", label: "Captain Hook" },
  { key: "miledown", label: "MileDown" }
];
window.P520_ANKI_TAGS = {
  kaplan: {
    "gc-1": { // General Chemistry Ch. 1: Atomic Structure
      anking: String.raw`tag:#AK\_MCAT\_v2::#Kaplan::General\_Chemistry::Ch-01-Atomic-Structure`,
      captainhook: String.raw`"deck:*Captain*Hook*A)*Chemistry*::01*Atomic*Structure*"`,
      miledown: String.raw`tag:MileDown::General\_Chemistry::Atomic\_Structure`
    },
    "gc-2": { // General Chemistry Ch. 2: Periodic Table
      anking: String.raw`tag:#AK\_MCAT\_v2::#Kaplan::General\_Chemistry::Ch-02-The-Periodic-Table`,
      captainhook: String.raw`"deck:*Captain*Hook*A)*Chemistry*::02*The*Periodic*Table*"`,
      miledown: String.raw`tag:MileDown::General\_Chemistry::Periodic\_Table`
    },
    "gc-3": { // General Chemistry Ch. 3: Bonding & Chemical Interactions
      anking: String.raw`tag:#AK\_MCAT\_v2::#Kaplan::General\_Chemistry::Ch-03-Bonding-and-Chemical-Interactions`,
      captainhook: String.raw`"deck:*Captain*Hook*A)*Chemistry*::03*Bonding*and*Chemical*Interactions*"`,
      miledown: String.raw`tag:MileDown::General\_Chemistry::Bonding OR tag:MileDown::General\_Chemistry::Intermolecular\_Forces`
    },
    "gc-4": { // General Chemistry Ch. 4: Compounds & Stoichiometry
      anking: String.raw`tag:#AK\_MCAT\_v2::#Kaplan::General\_Chemistry::Ch-04-Compounds-and-Stoichiometry`,
      captainhook: String.raw`"deck:*Captain*Hook*A)*Chemistry*::04*Compounds*and*Stoichiometry*"`,
      miledown: String.raw`tag:MileDown::General\_Chemistry::Compounds`
    },
    "gc-5": { // General Chemistry Ch. 5: Chemical Kinetics
      anking: String.raw`tag:#AK\_MCAT\_v2::#Kaplan::General\_Chemistry::Ch-05-Chemical-Kinetics`,
      captainhook: String.raw`"deck:*Captain*Hook*A)*Chemistry*::05*Chemical*Kinetics*"`,
      miledown: String.raw`tag:MileDown::General\_Chemistry::Chemical\_Kinetics`
    },
    "gc-6": { // General Chemistry Ch. 6: Equilibrium
      anking: String.raw`tag:#AK\_MCAT\_v2::#Kaplan::General\_Chemistry::Ch-06-Equilibrium`,
      captainhook: String.raw`"deck:*Captain*Hook*A)*Chemistry*::06*Equilibrium*"`,
      miledown: String.raw`tag:MileDown::General\_Chemistry::Equilibrium`
    },
    "gc-7": { // General Chemistry Ch. 7: Thermochemistry
      anking: String.raw`tag:#AK\_MCAT\_v2::#Kaplan::General\_Chemistry::Ch-07-Thermochemistry`,
      captainhook: String.raw`"deck:*Captain*Hook*A)*Chemistry*::07*Thermochemistry*"`,
      miledown: String.raw`tag:MileDown::General\_Chemistry::Thermochemistry`
    },
    "gc-8": { // General Chemistry Ch. 8: The Gas Phase
      anking: String.raw`tag:#AK\_MCAT\_v2::#Kaplan::General\_Chemistry::Ch-08-The-Gas-Phase`,
      captainhook: String.raw`"deck:*Captain*Hook*A)*Chemistry*::08*The*Gas*Phase*"`,
      miledown: String.raw`tag:MileDown::General\_Chemistry::Gases`
    },
    "gc-9": { // General Chemistry Ch. 9: Solutions
      anking: String.raw`tag:#AK\_MCAT\_v2::#Kaplan::General\_Chemistry::Ch-09-Solutions`,
      captainhook: String.raw`"deck:*Captain*Hook*A)*Chemistry*::09*Solutions*"`,
      miledown: String.raw`tag:MileDown::General\_Chemistry::Solutions`
    },
    "gc-10": { // General Chemistry Ch. 10: Acids & Bases
      anking: String.raw`tag:#AK\_MCAT\_v2::#Kaplan::General\_Chemistry::Ch-10-Acids-&-Bases`,
      captainhook: String.raw`"deck:*Captain*Hook*A)*Chemistry*::10*Acids*and*Bases*"`,
      miledown: String.raw`tag:MileDown::General\_Chemistry::Acids\_and\_Bases`
    },
    "gc-11": { // General Chemistry Ch. 11: Oxidation-Reduction
      anking: String.raw`tag:#AK\_MCAT\_v2::#Kaplan::General\_Chemistry::Ch-11-Oxidation-Reduction-Reactions`,
      captainhook: String.raw`"deck:*Captain*Hook*A)*Chemistry*::11*Oxidation*Reduction*Reactions*"`,
      miledown: String.raw`tag:MileDown::General\_Chemistry::REDOX`
    },
    "gc-12": { // General Chemistry Ch. 12: Electrochemistry
      anking: String.raw`tag:#AK\_MCAT\_v2::#Kaplan::General\_Chemistry::Ch-12-Electrochemistry`,
      captainhook: String.raw`"deck:*Captain*Hook*A)*Chemistry*::12*Electrochemistry*"`,
      miledown: String.raw`tag:MileDown::General\_Chemistry::Electrochemistry`
    },
    "bio-1": { // Biology Ch. 1: The Cell
      anking: String.raw`tag:#AK\_MCAT\_v2::#Kaplan::Biology::Ch-01-The-Cell`,
      captainhook: String.raw`"deck:*Captain*Hook*A)*Biology*::01*The*Cell*"`,
      miledown: String.raw`tag:MileDown::Biology::Parts\_of\_Cell OR tag:MileDown::Biology::Cytoskeleton OR tag:MileDown::Biology::Viruses\_and\_Bacteria`
    },
    "bio-2": { // Biology Ch. 2: Reproduction
      anking: String.raw`tag:#AK\_MCAT\_v2::#Kaplan::Biology::Ch-02-Reproduction`,
      captainhook: String.raw`"deck:*Captain*Hook*A)*Biology*::02*Reproduction*"`,
      miledown: String.raw`tag:MileDown::Biology::Reproduction`
    },
    "bio-3": { // Biology Ch. 3: Embryogenesis & Development
      anking: String.raw`tag:#AK\_MCAT\_v2::#Kaplan::Biology::Ch-03-Embryogenesis-&-Development`,
      captainhook: String.raw`"deck:*Captain*Hook*A)*Biology*::03*Embryogenesis*and*Development*"`,
      miledown: String.raw`tag:MileDown::Biology::Development`
    },
    "bio-4": { // Biology Ch. 4: Nervous System
      anking: String.raw`tag:#AK\_MCAT\_v2::#Kaplan::Biology::Ch-04-The-Nervous-System`,
      captainhook: String.raw`"deck:*Captain*Hook*A)*Biology*::04*The*Nervous*System*"`,
      miledown: String.raw`tag:MileDown::Biology::Nervous\_System`
    },
    "bio-5": { // Biology Ch. 5: Endocrine System
      anking: String.raw`tag:#AK\_MCAT\_v2::#Kaplan::Biology::Ch-05-The-Endocrine-System`,
      captainhook: String.raw`"deck:*Captain*Hook*A)*Biology*::05*The*Endocrine*System*"`,
      miledown: String.raw`tag:MileDown::Biology::Endocrine`
    },
    "bio-6": { // Biology Ch. 6: Respiratory System
      anking: String.raw`tag:#AK\_MCAT\_v2::#Kaplan::Biology::Ch-06-The-Respiratory-System`,
      captainhook: String.raw`"deck:*Captain*Hook*A)*Biology*::06*The*Respiratory*System*"`,
      miledown: String.raw`tag:MileDown::Biology::Respiratory\_System`
    },
    "bio-7": { // Biology Ch. 7: Cardiovascular System
      anking: String.raw`tag:#AK\_MCAT\_v2::#Kaplan::Biology::Ch-07-The-Cardiovascular-System`,
      captainhook: String.raw`"deck:*Captain*Hook*A)*Biology*::07*The*Cardiovascular*System*"`,
      miledown: String.raw`tag:MileDown::Biology::Cardiovascular\_System`
    },
    "bio-8": { // Biology Ch. 8: Immune System
      anking: String.raw`tag:#AK\_MCAT\_v2::#Kaplan::Biology::Ch-08-The-Immune-System`,
      captainhook: String.raw`"deck:*Captain*Hook*A)*Biology*::08*The*Immune*System*"`,
      miledown: String.raw`tag:MileDown::Biology::Immune\_System`
    },
    "bio-9": { // Biology Ch. 9: Digestive System
      anking: String.raw`tag:#AK\_MCAT\_v2::#Kaplan::Biology::Ch-09-The-Digestive-System`,
      captainhook: String.raw`"deck:*Captain*Hook*A)*Biology*::09*The*Digestive*System*"`,
      miledown: String.raw`tag:MileDown::Biology::Digestion`
    },
    "bio-10": { // Biology Ch. 10: Homeostasis
      anking: String.raw`tag:#AK\_MCAT\_v2::#Kaplan::Biology::Ch-10-Homeostasis`,
      captainhook: String.raw`"deck:*Captain*Hook*A)*Biology*::10*Homeostasis*"`,
      miledown: String.raw`tag:MileDown::Biology::Kidney OR tag:MileDown::Biology::Skin OR tag:MileDown::Biology::Thermoregulation OR tag:MileDown::Biology::Tissues`
    },
    "bio-11": { // Biology Ch. 11: Musculoskeletal System
      anking: String.raw`tag:#AK\_MCAT\_v2::#Kaplan::Biology::Ch-11-The-Musculoskeletal-System`,
      captainhook: String.raw`"deck:*Captain*Hook*A)*Biology*::11*Musculoskeletal*System*"`,
      miledown: String.raw`tag:MileDown::Biology::Muscular\_System`
    },
    "bio-12": { // Biology Ch. 12: Genetics & Evolution
      anking: String.raw`tag:#AK\_MCAT\_v2::#Kaplan::Biology::Ch-12-Genetics-&-Evolution`,
      captainhook: String.raw`"deck:*Captain*Hook*A)*Biology*::12*Genetics*and*Evolution*"`,
      miledown: String.raw`tag:MileDown::Biology::Genetics OR tag:MileDown::Biology::Evolution`
    },
    "oc-1": { // Organic Chemistry Ch. 1: Nomenclature
      anking: String.raw`tag:#AK\_MCAT\_v2::#Kaplan::Organic\_Chemistry::Ch-01-Nomenclature`,
      captainhook: String.raw`"deck:*Captain*Hook*B)*Organic*Chemistry*::01*Nomenclature*"`,
      miledown: String.raw`tag:MileDown::OChem::Nomenclature OR tag:MileDown::OChem::Molecules OR tag:MileDown::OChem::Amino\_Acids`
    },
    "oc-2": { // Organic Chemistry Ch. 2: Isomers
      anking: String.raw`tag:#AK\_MCAT\_v2::#Kaplan::Organic\_Chemistry::Ch-02-Isomers`,
      captainhook: String.raw`"deck:*Captain*Hook*B)*Organic*Chemistry*::02*Isomers*"`,
      miledown: String.raw`tag:MileDown::OChem::Isomers`
    },
    "oc-3": { // Organic Chemistry Ch. 3: Bonding
      anking: String.raw`tag:#AK\_MCAT\_v2::#Kaplan::Organic\_Chemistry::Ch-03-Bonding`,
      captainhook: String.raw`"deck:*Captain*Hook*B)*Organic*Chemistry*::03*Bonding*"`,
      miledown: String.raw`tag:MileDown::OChem::Bonding`
    },
    "oc-4": { // Organic Chemistry Ch. 4: Analyzing Organic Reactions
      anking: String.raw`tag:#AK\_MCAT\_v2::#Kaplan::Organic\_Chemistry::Ch-04-Analyzing-Organic-Reactions`,
      captainhook: String.raw`"deck:*Captain*Hook*B)*Organic*Chemistry*::04*Analyzing*Organic*Reactions*"`,
      miledown: String.raw`tag:MileDown::OChem::Reactions`
    },
    "oc-5": { // Organic Chemistry Ch. 5: Alcohols
      anking: String.raw`tag:#AK\_MCAT\_v2::#Kaplan::Organic\_Chemistry::Ch-05-Alcohols`,
      captainhook: String.raw`"deck:*Captain*Hook*B)*Organic*Chemistry*::05*Alcohols*"`,
      miledown: String.raw`tag:MileDown::OChem::Alcohols`
    },
    "oc-6": { // Organic Chemistry Ch. 6: Aldehydes and Ketones I
      anking: String.raw`tag:#AK\_MCAT\_v2::#Kaplan::Organic\_Chemistry::Ch-06-Aldehydes-and-Ketones-I:-Electrophilicity-&-Oxidation-Reduction`,
      captainhook: String.raw`"deck:*Captain*Hook*B)*Organic*Chemistry*::06*Aldehydes*and*Ketones*I*"`,
      miledown: String.raw`tag:MileDown::OChem::Aldehydes\_and\_Ketones`
    },
    "oc-7": { // Organic Chemistry Ch. 7: Aldehydes and Ketones II
      anking: String.raw`tag:#AK\_MCAT\_v2::#Kaplan::Organic\_Chemistry::Ch-07-Aldehydes-and-Ketones-II:-Enolates`,
      captainhook: String.raw`"deck:*Captain*Hook*B)*Organic*Chemistry*::07*Aldehydes*and*Ketones*II*"`,
      miledown: String.raw`tag:MileDown::OChem::Aldehydes\_and\_Ketones`
    },
    "oc-8": { // Organic Chemistry Ch. 8: Carboxylic Acids
      anking: String.raw`tag:#AK\_MCAT\_v2::#Kaplan::Organic\_Chemistry::Ch-08-Carboxylic-Acids`,
      captainhook: String.raw`"deck:*Captain*Hook*B)*Organic*Chemistry*::08*Carboxylic*Acids*"`,
      miledown: String.raw`tag:MileDown::OChem::Carboxylic\_Acids`
    },
    "oc-9": { // Organic Chemistry Ch. 9: Carboxylic Acid Derivative
      anking: String.raw`tag:#AK\_MCAT\_v2::#Kaplan::Organic\_Chemistry::Ch-09-Carboxylic-Acid-Derivatives`,
      captainhook: String.raw`"deck:*Captain*Hook*B)*Organic*Chemistry*::09*Carboxylic*Acid*Derivatives*"`,
      miledown: String.raw`tag:MileDown::OChem::Carboxylic\_Acid\_Derivatives`
    },
    "oc-10": { // Organic Chemistry Ch. 10: Nitrogen & Phosphorous Compounds
      anking: String.raw`tag:#AK\_MCAT\_v2::#Kaplan::Organic\_Chemistry::Ch-10-Nitrogen-&-Phosphorus-Containing-Compounds`,
      captainhook: String.raw`"deck:*Captain*Hook*B)*Organic*Chemistry*::10*Nitrogen*and*Phosphorus*Containing*Compounds*"`,
      miledown: String.raw`tag:MileDown::OChem::Phosphorus\_Containing\_Compounds`
    },
    "oc-11": { // Organic Chemistry Ch. 11: Spectroscopy
      anking: String.raw`tag:#AK\_MCAT\_v2::#Kaplan::Organic\_Chemistry::Ch-11-Spectroscopy`,
      captainhook: String.raw`"deck:*Captain*Hook*B)*Organic*Chemistry*::11*Spectroscopy*"`,
      miledown: String.raw`tag:MileDown::OChem::Spectroscopy`
    },
    "oc-12": { // Organic Chemistry Ch. 12: Separations & Purifications
      anking: String.raw`tag:#AK\_MCAT\_v2::#Kaplan::Organic\_Chemistry::Ch-12-Separations-and-Purifications`,
      captainhook: String.raw`"deck:*Captain*Hook*B)*Organic*Chemistry*::12*Separations*and*Purifications*"`,
      miledown: String.raw`tag:MileDown::OChem::Separations`
    },
    "bc-1": { // Biochemistry Ch. 1: Amino Acids, Peptides, & Proteins
      anking: String.raw`tag:#AK\_MCAT\_v2::#Kaplan::Biochemistry::Ch-01-Amino-Acids,Peptides,&-Proteins`,
      captainhook: String.raw`"deck:*Captain*Hook*B)*Biochemistry*::01*Amino*Acids*Peptides*and*Proteins*"`,
      miledown: String.raw`tag:MileDown::Biochemistry::Amino\_Acids`
    },
    "bc-2": { // Biochemistry Ch. 2: Enzymes
      anking: String.raw`tag:#AK\_MCAT\_v2::#Kaplan::Biochemistry::Ch-02-Enzymes`,
      captainhook: String.raw`"deck:*Captain*Hook*B)*Biochemistry*::02*Enzymes*"`,
      miledown: String.raw`tag:MileDown::Biochemistry::Enzymes`
    },
    "bc-3": { // Biochemistry Ch. 3: Nonenzymatic Protein Function
      anking: String.raw`tag:#AK\_MCAT\_v2::#Kaplan::Biochemistry::Ch-03-Nonenzymatic-Protein-Function-&-Protein-Analysis`,
      captainhook: String.raw`"deck:*Captain*Hook*B)*Biochemistry*::03*Nonenzymatic*Protein*Function*and*Protein*Analysis*"`,
      miledown: String.raw`tag:MileDown::Biochemistry::Proteins`
    },
    "bc-4": { // Biochemistry Ch. 4: Carbohydrates
      anking: String.raw`tag:#AK\_MCAT\_v2::#Kaplan::Biochemistry::Ch-04-Carbohydrate-Structure-and-Function`,
      captainhook: String.raw`"deck:*Captain*Hook*B)*Biochemistry*::04*Carbohydrate*Structure*and*Function*"`,
      miledown: String.raw`tag:MileDown::Biochemistry::Carbohydrates`
    },
    "bc-5": { // Biochemistry Ch. 5: Lipids
      anking: String.raw`tag:#AK\_MCAT\_v2::#Kaplan::Biochemistry::Ch-05-Lipid-Structure-&-Function`,
      captainhook: String.raw`"deck:*Captain*Hook*B)*Biochemistry*::05*Lipid*Structure*and*Function*"`,
      miledown: String.raw`tag:MileDown::Biochemistry::Lipids`
    },
    "bc-6": { // Biochemistry Ch. 6: DNA & Biotechnology
      anking: String.raw`tag:#AK\_MCAT\_v2::#Kaplan::Biochemistry::Ch-06-DNA-&-Biotechnology`,
      captainhook: String.raw`"deck:*Captain*Hook*B)*Biochemistry*::06*DNA*and*Biotechnology*"`,
      miledown: String.raw`tag:MileDown::Biochemistry::Lab\_Techniques OR tag:MileDown::Biochemistry::DNA\_and\_RNA`
    },
    "bc-7": { // Biochemistry Ch. 7: RNA & Genetic Code
      anking: String.raw`tag:#AK\_MCAT\_v2::#Kaplan::Biochemistry::Ch-07-RNA-&-the-Genetic-Code`,
      captainhook: String.raw`"deck:*Captain*Hook*B)*Biochemistry*::07*RNA*and*the*Genetic*Code*"`,
      miledown: String.raw`tag:MileDown::Biochemistry::DNA\_and\_RNA`
    },
    "bc-8": { // Biochemistry Ch. 8: Biological Membranes
      anking: String.raw`tag:#AK\_MCAT\_v2::#Kaplan::Biochemistry::Ch-08-Biological-Membranes`,
      captainhook: String.raw`"deck:*Captain*Hook*B)*Biochemistry*::08*Biological*Membranes*"`,
      miledown: String.raw`tag:MileDown::Biochemistry::Cell\_Membrane`
    },
    "bc-9": { // Biochemistry Ch. 9: Carbohydrate Metabolism I
      anking: String.raw`tag:#AK\_MCAT\_v2::#Kaplan::Biochemistry::Ch-09-Carbohydrate-Metabolism-I`,
      captainhook: String.raw`"deck:*Captain*Hook*B)*Biochemistry*::09*Carbohydrate*Metabolism*I*"`,
      miledown: String.raw`tag:MileDown::Biochemistry::Metabolism -(tag:MileDown::Biochemistry::Metabolism::Fatty\_Acids OR tag:MileDown::Biochemistry::Metabolism::Urea\_Cycle OR tag:MileDown::Biochemistry::Metabolism::Regulation)`
    },
    "bc-10": { // Biochemistry Ch. 10: Carbohydrate Metabolism II
      anking: String.raw`tag:#AK\_MCAT\_v2::#Kaplan::Biochemistry::Ch-10-Carbohydrate-Metabolism-II`,
      captainhook: String.raw`"deck:*Captain*Hook*B)*Biochemistry*::10*Carbohydrate*Metabolism*II*Aerobic*Respiration*"`,
      miledown: String.raw`tag:MileDown::Biochemistry::Metabolism -(tag:MileDown::Biochemistry::Metabolism::Fatty\_Acids OR tag:MileDown::Biochemistry::Metabolism::Urea\_Cycle OR tag:MileDown::Biochemistry::Metabolism::Regulation)`
    },
    "bc-11": { // Biochemistry Ch. 11: Lipid & Amino Acid Metabolism
      anking: String.raw`tag:#AK\_MCAT\_v2::#Kaplan::Biochemistry::Ch-11-Lipid-&-Amino-Acid-Metabolism`,
      captainhook: String.raw`"deck:*Captain*Hook*B)*Biochemistry*::11*Lipid*and*Amino*Acid*Metabolism*"`,
      miledown: String.raw`tag:MileDown::Biochemistry::Metabolism::Fatty\_Acids OR tag:MileDown::Biochemistry::Metabolism::Urea\_Cycle`
    },
    "bc-12": { // Biochemistry Ch. 12: Bioenergetics & Regulation of Metabolism
      anking: String.raw`tag:#AK\_MCAT\_v2::#Kaplan::Biochemistry::Ch-12-Bioenergetics-&-Regulation-of-Metabolism`,
      captainhook: String.raw`"deck:*Captain*Hook*B)*Biochemistry*::12*Bioenergetics*and*Regulation*of*Metabolism*"`,
      miledown: String.raw`tag:MileDown::Biochemistry::Metabolism::Regulation`
    },
    "ps-1": { // Behavioral Ch. 1: Biology & Behavior
      anking: String.raw`tag:#AK\_MCAT\_v2::#Kaplan::Miledown\_Behavioral::Behavior::Biology-and-Behavior`,
      captainhook: String.raw`"deck:*Captain*Hook*Pankow*7A*"`,
      miledown: String.raw`tag:MileDown::Behavioral::Biology\_and\_Behavior`
    },
    "ps-2": { // Behavioral Ch. 2: Sensation & Perception
      anking: String.raw`tag:#AK\_MCAT\_v2::#Kaplan::Miledown\_Behavioral::Processing-The-Environment::Sensation-and-Perception`,
      captainhook: String.raw`"deck:*Captain*Hook*Pankow*6A*"`,
      miledown: String.raw`tag:MileDown::Behavioral::Sensation\_and\_Perception`
    },
    "ps-3": { // Behavioral Ch. 3: Learning & Memory
      anking: String.raw`tag:#AK\_MCAT\_v2::#Kaplan::Miledown\_Behavioral::Behavior::Learning OR tag:#AK\_MCAT\_v2::#Kaplan::Miledown\_Behavioral::Processing-The-Environment::Memory`,
      captainhook: String.raw`"deck:*Captain*Hook*Pankow*6B*"`,
      miledown: String.raw`tag:MileDown::Behavioral::Learning OR tag:MileDown::Behavioral::Memory`
    },
    "ps-4": { // Behavioral Ch. 4: Cognition, Consciousness, & Language
      anking: String.raw`tag:#AK\_MCAT\_v2::#Kaplan::Miledown\_Behavioral::Processing-The-Environment::Cognition OR tag:#AK\_MCAT\_v2::#Kaplan::Miledown\_Behavioral::Processing-The-Environment::Consciousness OR tag:#AK\_MCAT\_v2::#Kaplan::Miledown\_Behavioral::Processing-The-Environment::Language`,
      captainhook: String.raw`"deck:*Captain*Hook*Pankow*6C*"`,
      miledown: String.raw`tag:MileDown::Behavioral::Cognition OR tag:MileDown::Behavioral::Consciousness OR tag:MileDown::Behavioral::Language`
    },
    "ps-5": { // Behavioral Ch. 5: Motivation, Emotion, Stress
      anking: String.raw`tag:#AK\_MCAT\_v2::#Kaplan::Miledown\_Behavioral::Behavior::Motivation OR tag:#AK\_MCAT\_v2::#Kaplan::Miledown\_Behavioral::Processing-The-Environment::Emotion OR tag:#AK\_MCAT\_v2::#Kaplan::Miledown\_Behavioral::Processing-The-Environment::Stress`,
      captainhook: String.raw`"deck:*Captain*Hook*Pankow*6C*"`,
      miledown: String.raw`tag:MileDown::Behavioral::Motivation OR tag:MileDown::Behavioral::Emotion OR tag:MileDown::Behavioral::Stress`
    },
    "ps-6": { // Behavioral Ch. 6: Identity & Personality
      anking: String.raw`tag:#AK\_MCAT\_v2::#Kaplan::Miledown\_Behavioral::Individuals-and-Society::Identity OR tag:#AK\_MCAT\_v2::#Kaplan::Miledown\_Behavioral::Behavior::Personality`,
      captainhook: String.raw`"deck:*Captain*Hook*Pankow*7A*"`,
      miledown: String.raw`tag:MileDown::Behavioral::Identity OR tag:MileDown::Behavioral::Personality`
    },
    "ps-7": { // Behavioral Ch. 7: Psychological Disorders
      anking: String.raw`tag:#AK\_MCAT\_v2::#Kaplan::Miledown\_Behavioral::Behavior::Disorders`,
      captainhook: String.raw`"deck:*Captain*Hook*Pankow*7A*"`,
      miledown: String.raw`tag:MileDown::Behavioral::Disorders`
    },
    "ps-8": { // Behavioral Ch. 8: Social Processes, Attitudes, & Behavior
      anking: String.raw`tag:#AK\_MCAT\_v2::#Kaplan::Miledown\_Behavioral::Social::Socialization OR tag:#AK\_MCAT\_v2::#Kaplan::Miledown\_Behavioral::Behavior::Attitudes`,
      captainhook: String.raw`"deck:*Captain*Hook*Pankow*7C*" OR "deck:*Captain*Hook*Pankow*8C*"`,
      miledown: String.raw`tag:MileDown::Behavioral::Attitudes OR tag:MileDown::Behavioral::Behavior OR tag:MileDown::Behavioral::Social::Social\_Behavior`
    },
    "ps-9": { // Behavioral Ch. 9: Social Interaction
      anking: String.raw`tag:#AK\_MCAT\_v2::#Kaplan::Miledown\_Behavioral::Social::Social-Interaction`,
      captainhook: String.raw`"deck:*Captain*Hook*Pankow*7B*"`,
      miledown: String.raw`tag:MileDown::Behavioral::Social::Social\_Interaction`
    },
    "ps-10": { // Behavioral Ch. 10: Social Thinking
      anking: String.raw`tag:#AK\_MCAT\_v2::#Kaplan::Miledown\_Behavioral::Social::Social-Behavior OR tag:#AK\_MCAT\_v2::#Kaplan::Miledown\_Behavioral::Social::Social-Perception`,
      captainhook: String.raw`"deck:*Captain*Hook*Pankow*8A*8B*"`,
      miledown: String.raw`tag:MileDown::Behavioral::Social::Social\_Perception OR tag:MileDown::Behavioral::Social::Socialization`
    },
    "ps-11": { // Behavioral Ch. 11: Social Structure & Demographics
      anking: String.raw`tag:#AK\_MCAT\_v2::#Kaplan::Miledown\_Behavioral::Social::Social-Structure`,
      captainhook: String.raw`"deck:*Captain*Hook*Pankow*9A*" OR "deck:*Captain*Hook*Pankow*9B*"`,
      miledown: String.raw`tag:MileDown::Behavioral::Social::Social\_Structure`
    },
    "ps-12": { // Behavioral Ch. 12: Social Stratification
      anking: String.raw`tag:#AK\_MCAT\_v2::#Kaplan::Miledown\_Behavioral::Social::Social-Stratification`,
      captainhook: String.raw`"deck:*Captain*Hook*Pankow*9C*"`,
      miledown: String.raw`tag:MileDown::Behavioral::Social::Social\_Stratification`
    },
    "ph-1": { // Physics Ch. 1: Kinematics & Dynamics
      anking: String.raw`tag:#AK\_MCAT\_v2::#Kaplan::Physics::Ch-01-Kinematic-&-Dynamics`,
      captainhook: String.raw`"deck:*Captain*Hook*C)*Physics*::01*Kinematics*and*Dynamics*"`,
      miledown: String.raw`tag:MileDown::Physics::Kinematics OR tag:MileDown::Physics::Dynamics`
    },
    "ph-2": { // Physics Ch. 2: Work & Energy
      anking: String.raw`tag:#AK\_MCAT\_v2::#Kaplan::Physics::Ch-02-Work-&-Energy`,
      captainhook: String.raw`"deck:*Captain*Hook*C)*Physics*::02*Work*and*Energy*"`,
      miledown: String.raw`tag:MileDown::Physics::Work OR tag:MileDown::Physics::Energy`
    },
    "ph-3": { // Physics Ch. 3: Thermodynamics
      anking: String.raw`tag:#AK\_MCAT\_v2::#Kaplan::Physics::Ch-03-Thermodynamics`,
      captainhook: String.raw`"deck:*Captain*Hook*C)*Physics*::03*Thermodynamics*"`,
      miledown: String.raw`tag:MileDown::Physics::Thermodynamics`
    },
    "ph-4": { // Physics Ch. 4: Fluids
      anking: String.raw`tag:#AK\_MCAT\_v2::#Kaplan::Physics::Ch-04-Fluids`,
      captainhook: String.raw`"deck:*Captain*Hook*C)*Physics*::04*Fluids*"`,
      miledown: String.raw`tag:MileDown::Physics::Fluids`
    },
    "ph-5": { // Physics Ch. 5: Electrostatics & Magnetism
      anking: String.raw`tag:#AK\_MCAT\_v2::#Kaplan::Physics::Ch-05-Electrostatics-&-Magnetism`,
      captainhook: String.raw`"deck:*Captain*Hook*C)*Physics*::05*Electrostatics*and*Magnetism*"`,
      miledown: String.raw`tag:MileDown::Physics::Electrostatics OR tag:MileDown::Physics::Magnetism`
    },
    "ph-6": { // Physics Ch. 6: Circuits
      anking: String.raw`tag:#AK\_MCAT\_v2::#Kaplan::Physics::Ch-06-Circuits`,
      captainhook: String.raw`"deck:*Captain*Hook*C)*Physics*::06*Circuits*"`,
      miledown: String.raw`tag:MileDown::Physics::Circuits`
    },
    "ph-7": { // Physics Ch. 7: Waves & Sound
      anking: String.raw`tag:#AK\_MCAT\_v2::#Kaplan::Physics::Ch-07-Waves-&-Sound`,
      captainhook: String.raw`"deck:*Captain*Hook*C)*Physics*::07*Waves*and*Sound*"`,
      miledown: String.raw`tag:MileDown::Physics::Sound OR tag:MileDown::Physics::Waves`
    },
    "ph-8": { // Physics Ch. 8: Light & Optics
      anking: String.raw`tag:#AK\_MCAT\_v2::#Kaplan::Physics::Ch-08-Light-&-Optics`,
      captainhook: String.raw`"deck:*Captain*Hook*C)*Physics*::08*Light*and*Optics*"`,
      miledown: String.raw`tag:MileDown::Physics::Light`
    },
    "ph-9": { // Physics Ch. 9: Atomic & Nuclear Phenomena
      anking: String.raw`tag:#AK\_MCAT\_v2::#Kaplan::Physics::Ch-09-Atomic-&-Nuclear-Phenomena`,
      captainhook: String.raw`"deck:*Captain*Hook*C)*Physics*::09*Atomic*and*Nuclear*Phenomena*"`,
      miledown: String.raw`tag:MileDown::Physics::Nuclear\_Phenomena`
    },
    "ph-10": { // Physics Ch. 10: Mathematics
      anking: String.raw`tag:#AK\_MCAT\_v2::#Kaplan::Physics::Ch-10-Mathematics`,
      captainhook: String.raw`"deck:*Captain*Hook*C)*Physics*::10*Mathematics*"`,
      miledown: String.raw`tag:MileDown::Physics::Mathematics`
    },
    "ph-11": { // Physics Ch. 11: Reasoning & Research
      anking: String.raw`tag:#AK\_MCAT\_v2::#Kaplan::Physics::Ch-11-Reasoning,Design,Execution-of-Research`,
      captainhook: String.raw`"deck:*Captain*Hook*C)*Physics*::11*Reasoning*About*the*Design*and*Execution*of*Research*"`,
      miledown: String.raw`tag:MileDown::Physics::Research`
    },
    "ph-12": { // Physics Ch. 12: Statistics
      anking: String.raw`tag:#AK\_MCAT\_v2::#Kaplan::Physics::Ch-12-Statistics`,
      captainhook: String.raw`"deck:*Captain*Hook*C)*Physics*::12*Data*Based*and*Statistical*Reasoning*"`,
      miledown: String.raw`tag:MileDown::Physics::Research::Data`
    }
  },
  uworld: {
    "bio-1": { // Biology Ch. 1: DNA Structure, Synthesis, & Repair
      anking: String.raw`tag:#AK\_MCAT\_v2::#UWorld\_Books::Biology::Ch-01-DNA\_Structure\_Synthesis\_and\_Repair`,
      captainhook: String.raw`"deck:*Captain*Hook*B)*Biochemistry*::06*DNA*and*Biotechnology*"`,
      miledown: String.raw`tag:MileDown::Biochemistry::DNA\_and\_RNA::Structure OR tag:MileDown::Biochemistry::DNA\_and\_RNA::Replication OR tag:MileDown::Biochemistry::DNA\_and\_RNA::Repair`
    },
    "bio-2": { // Biology Ch. 2: Gene Expression
      anking: String.raw`tag:#AK\_MCAT\_v2::#UWorld\_Books::Biology::Ch-02-Gene\_Expression`,
      captainhook: String.raw`"deck:*Captain*Hook*B)*Biochemistry*::07*RNA*and*the*Genetic*Code*"`,
      miledown: String.raw`tag:MileDown::Biochemistry::DNA\_and\_RNA::Transcription OR tag:MileDown::Biochemistry::DNA\_and\_RNA::Translation OR tag:MileDown::Biochemistry::DNA\_and\_RNA::RNA\_Processing`
    },
    "bio-3": { // Biology Ch. 3: Designing and Interpreting Experiments
      anking: String.raw`tag:#AK\_MCAT\_v2::#UWorld\_Books::Biology::Ch-03-Experimental\_Design`,
      captainhook: String.raw`"deck:*Captain*Hook*C)*Physics*::11*Reasoning*About*the*Design*and*Execution*of*Research*"`,
      miledown: String.raw`tag:MileDown::Physics::Research`
    },
    "bio-4": { // Biology Ch. 4: Biotechnology
      anking: String.raw`tag:#AK\_MCAT\_v2::#UWorld\_Books::Biology::Ch-04-DNA\_Technology`,
      captainhook: String.raw`"deck:*Captain*Hook*B)*Biochemistry*::06*DNA*and*Biotechnology*"`,
      miledown: String.raw`tag:MileDown::Biochemistry::Lab\_Techniques`
    },
    "bio-5": { // Biology Ch. 5: Eukaryotic Cells
      anking: String.raw`tag:#AK\_MCAT\_v2::#UWorld\_Books::Biology::Ch-05-Cells`,
      captainhook: String.raw`"deck:*Captain*Hook*A)*Biology*::01*The*Cell*"`,
      miledown: String.raw`tag:MileDown::Biology::Parts\_of\_Cell OR tag:MileDown::Biology::Cytoskeleton OR tag:MileDown::Biology::Tissues`
    },
    "bio-6": { // Biology Ch. 6: Prokaryotes & Viruses
      anking: String.raw`tag:#AK\_MCAT\_v2::#UWorld\_Books::Biology::Ch-06-Prokaryotes\_and\_Viruses`,
      captainhook: String.raw`"deck:*Captain*Hook*A)*Biology*::01*The*Cell*"`,
      miledown: String.raw`tag:MileDown::Biology::Viruses\_and\_Bacteria`
    },
    "bio-7": { // Biology Ch. 7: Genetics
      anking: String.raw`tag:#AK\_MCAT\_v2::#UWorld\_Books::Biology::Ch-07-Meiosis`,
      captainhook: String.raw`"deck:*Captain*Hook*A)*Biology*::12*Genetics*and*Evolution*"`,
      miledown: String.raw`tag:MileDown::Biology::Genetics`
    },
    "bio-8": { // Biology Ch. 8: Evolution
      anking: String.raw`tag:#AK\_MCAT\_v2::#UWorld\_Books::Biology::Ch-08-Evolution`,
      captainhook: String.raw`"deck:*Captain*Hook*A)*Biology*::12*Genetics*and*Evolution*"`,
      miledown: String.raw`tag:MileDown::Biology::Evolution`
    },
    "bio-9": { // Biology Ch. 9: Reproductive Systems
      anking: String.raw`tag:#AK\_MCAT\_v2::#UWorld\_Books::Biology::Ch-09-Reproductive\_Systems`,
      captainhook: String.raw`"deck:*Captain*Hook*A)*Biology*::02*Reproduction*"`,
      miledown: String.raw`tag:MileDown::Biology::Reproduction`
    },
    "bio-10": { // Biology Ch. 10: Pregnancy, Development, Aging
      anking: String.raw`tag:#AK\_MCAT\_v2::#UWorld\_Books::Biology::Ch-10-Pregnancy\_Development\_and\_Aging`,
      captainhook: String.raw`"deck:*Captain*Hook*A)*Biology*::03*Embryogenesis*and*Development*"`,
      miledown: String.raw`tag:MileDown::Biology::Development`
    },
    "bio-11": { // Biology Ch. 11: Endocrine System
      anking: String.raw`tag:#AK\_MCAT\_v2::#UWorld\_Books::Biology::Ch-11-Endocrinology`,
      captainhook: String.raw`"deck:*Captain*Hook*A)*Biology*::05*The*Endocrine*System*"`,
      miledown: String.raw`tag:MileDown::Biology::Endocrine`
    },
    "bio-12": { // Biology Ch. 12: Nervous System
      anking: String.raw`tag:#AK\_MCAT\_v2::#UWorld\_Books::Biology::Ch-12-Cells\_Of\_The\_Nervous\_System`,
      captainhook: String.raw`"deck:*Captain*Hook*A)*Biology*::04*The*Nervous*System*"`,
      miledown: String.raw`tag:MileDown::Biology::Nervous\_System`
    },
    "bio-13": { // Biology Ch. 13: Circulation
      anking: String.raw`tag:#AK\_MCAT\_v2::#UWorld\_Books::Biology::Ch-13-Circulatory\_System`,
      captainhook: String.raw`"deck:*Captain*Hook*A)*Biology*::07*The*Cardiovascular*System*"`,
      miledown: String.raw`tag:MileDown::Biology::Cardiovascular\_System`
    },
    "bio-14": { // Biology Ch. 14: Respiration
      anking: String.raw`tag:#AK\_MCAT\_v2::#UWorld\_Books::Biology::Ch-14-Respiratory\_System\_Structure`,
      captainhook: String.raw`"deck:*Captain*Hook*A)*Biology*::06*The*Respiratory*System*"`,
      miledown: String.raw`tag:MileDown::Biology::Respiratory\_System`
    },
    "bio-15": { // Biology Ch. 15: Digestion
      anking: String.raw`tag:#AK\_MCAT\_v2::#UWorld\_Books::Biology::Ch-15-Alimentary\_Canal`,
      captainhook: String.raw`"deck:*Captain*Hook*A)*Biology*::09*The*Digestive*System*"`,
      miledown: String.raw`tag:MileDown::Biology::Digestion`
    },
    "bio-16": { // Biology Ch. 16: Excretion
      anking: String.raw`tag:#AK\_MCAT\_v2::#UWorld\_Books::Biology::Ch-16-Excretory\_System\_Structure`,
      captainhook: String.raw`"deck:*Captain*Hook*A)*Biology*::10*Homeostasis*"`,
      miledown: String.raw`tag:MileDown::Biology::Kidney`
    },
    "bio-17": { // Biology Ch. 17: Muscular System
      anking: String.raw`tag:#AK\_MCAT\_v2::#UWorld\_Books::Biology::Ch-17-General\_Muscle\_Characteristics`,
      captainhook: String.raw`"deck:*Captain*Hook*A)*Biology*::11*Musculoskeletal*System*"`,
      miledown: String.raw`tag:MileDown::Biology::Muscular\_System`
    },
    "bio-18": { // Biology Ch. 18: Skeletal System
      anking: String.raw`tag:#AK\_MCAT\_v2::#UWorld\_Books::Biology::Ch-18-Skeletal\_System\_Structure`,
      captainhook: String.raw`"deck:*Captain*Hook*A)*Biology*::11*Musculoskeletal*System*"`,
      miledown: String.raw`tag:MileDown::Biology::Muscular\_System::Bones`
    },
    "bio-19": { // Biology Ch. 19: Skin System
      anking: String.raw`tag:#AK\_MCAT\_v2::#UWorld\_Books::Biology::Ch-19-Skin\_Structure`,
      captainhook: String.raw`"deck:*Captain*Hook*A)*Biology*::10*Homeostasis*"`,
      miledown: String.raw`tag:MileDown::Biology::Skin OR tag:MileDown::Biology::Thermoregulation`
    },
    "bio-20": { // Biology Ch. 20: Immune System
      anking: String.raw`tag:#AK\_MCAT\_v2::#UWorld\_Books::Biology::Ch-20-Immune\_System\_Components`,
      captainhook: String.raw`"deck:*Captain*Hook*A)*Biology*::08*The*Immune*System*"`,
      miledown: String.raw`tag:MileDown::Biology::Immune\_System`
    },
    "bc-1": { // Biochemistry Ch. 1: Amino Acids
      anking: String.raw`tag:#AK\_MCAT\_v2::#UWorld\_Books::Biochemistry::Ch-01-Amino\_Acids`,
      captainhook: String.raw`"deck:*Captain*Hook*B)*Biochemistry*::01*Amino*Acids*Peptides*and*Proteins*"`,
      miledown: String.raw`tag:MileDown::Biochemistry::Amino\_Acids OR tag:MileDown::OChem::Amino\_Acids`
    },
    "bc-2": { // Biochemistry Ch. 2: Peptides & Proteins
      anking: String.raw`tag:#AK\_MCAT\_v2::#UWorld\_Books::Biochemistry::Ch-02-Peptides\_And\_Proteins`,
      captainhook: String.raw`"deck:*Captain*Hook*B)*Biochemistry*::01*Amino*Acids*Peptides*and*Proteins*"`,
      miledown: String.raw`tag:MileDown::Biochemistry::Proteins`
    },
    "bc-3": { // Biochemistry Ch. 3: Nonenzymatic Protein Activity
      anking: String.raw`tag:#AK\_MCAT\_v2::#UWorld\_Books::Biochemistry::Ch-03-Nonenzymatic\_Protein\_Activity`,
      captainhook: String.raw`"deck:*Captain*Hook*B)*Biochemistry*::03*Nonenzymatic*Protein*Function*and*Protein*Analysis*"`,
      miledown: String.raw`tag:MileDown::Biochemistry::Proteins`
    },
    "bc-4": { // Biochemistry Ch. 4: Enzyme Activity
      anking: String.raw`tag:#AK\_MCAT\_v2::#UWorld\_Books::Biochemistry::Ch-04-Enzyme\_Activity`,
      captainhook: String.raw`"deck:*Captain*Hook*B)*Biochemistry*::02*Enzymes*"`,
      miledown: String.raw`tag:MileDown::Biochemistry::Enzymes`
    },
    "bc-5": { // Biochemistry Ch. 5: Enzyme Kinetics
      anking: String.raw`tag:#AK\_MCAT\_v2::#UWorld\_Books::Biochemistry::Ch-05-The\_Michaelis-Menten\_Equation`,
      captainhook: String.raw`"deck:*Captain*Hook*B)*Biochemistry*::02*Enzymes*"`,
      miledown: String.raw`tag:MileDown::Biochemistry::Enzymes::Kinetics`
    },
    "bc-6": { // Biochemistry Ch. 6: Enzyme Regulation
      anking: String.raw`tag:#AK\_MCAT\_v2::#UWorld\_Books::Biochemistry::Ch-06-Feedback\_Regulation`,
      captainhook: String.raw`"deck:*Captain*Hook*B)*Biochemistry*::02*Enzymes*"`,
      miledown: String.raw`tag:MileDown::Biochemistry::Enzymes::Regulation`
    },
    "bc-7": { // Biochemistry Ch. 7: Carbohydrates
      anking: String.raw`tag:#AK\_MCAT\_v2::#UWorld\_Books::Biochemistry::Ch-07-Carbohydrates`,
      captainhook: String.raw`"deck:*Captain*Hook*B)*Biochemistry*::04*Carbohydrate*Structure*and*Function*"`,
      miledown: String.raw`tag:MileDown::Biochemistry::Carbohydrates OR tag:MileDown::Biochemistry::Metabolism::Monosaccharides`
    },
    "bc-8": { // Biochemistry Ch. 8: Nucleotides & Nucleic Acids
      anking: String.raw`tag:#AK\_MCAT\_v2::#UWorld\_Books::Biochemistry::Ch-08-Nucleotides\_and\_Nucleic\_Acids`,
      captainhook: String.raw`"deck:*Captain*Hook*B)*Biochemistry*::06*DNA*and*Biotechnology*"`,
      miledown: String.raw`tag:MileDown::Biochemistry::DNA\_and\_RNA::Nucleic\_Acids OR tag:MileDown::Biochemistry::DNA\_and\_RNA::Structure`
    },
    "bc-9": { // Biochemistry Ch. 9: Lipids
      anking: String.raw`tag:#AK\_MCAT\_v2::#UWorld\_Books::Biochemistry::Ch-09-Lipids OR tag:#AK\_MCAT\_v2::#UWorld\_Books::Biochemistry::Ch-09-Energy\_Storage\_Lipids`,
      captainhook: String.raw`"deck:*Captain*Hook*B)*Biochemistry*::05*Lipid*Structure*and*Function*" OR "deck:*Captain*Hook*B)*Biochemistry*::08*Biological*Membranes*"`,
      miledown: String.raw`tag:MileDown::Biochemistry::Lipids OR tag:MileDown::Biochemistry::Cell\_Membrane`
    },
    "bc-10": { // Biochemistry Ch. 10: Catabolism & Anabolism
      anking: String.raw`tag:#AK\_MCAT\_v2::#UWorld\_Books::Biochemistry::Ch-10-Catabolism\_and\_Anabolism`,
      captainhook: String.raw`"deck:*Captain*Hook*B)*Biochemistry*::12*Bioenergetics*and*Regulation*of*Metabolism*"`,
      miledown: String.raw`tag:MileDown::Biochemistry::Metabolism::Regulation`
    },
    "bc-11": { // Biochemistry Ch. 11: Carbohydrate Metabolism
      anking: String.raw`tag:#AK\_MCAT\_v2::#UWorld\_Books::Biochemistry::Ch-11-Carbohydrate\_Metabolism`,
      captainhook: String.raw`"deck:*Captain*Hook*B)*Biochemistry*::09*Carbohydrate*Metabolism*I*"`,
      miledown: String.raw`tag:MileDown::Biochemistry::Metabolism::Glycolysis OR tag:MileDown::Biochemistry::Metabolism::Gluconeogenesis OR tag:MileDown::Biochemistry::Metabolism::Glycogen OR tag:MileDown::Biochemistry::Metabolism::Pentose\_Phosphate\_Pathway OR tag:MileDown::Biochemistry::Metabolism::Glucose\_Transport`
    },
    "bc-12": { // Biochemistry Ch. 12: Aerobic Respiration
      anking: String.raw`tag:#AK\_MCAT\_v2::#UWorld\_Books::Biochemistry::Ch-12-Aerobic\_Respiration`,
      captainhook: String.raw`"deck:*Captain*Hook*B)*Biochemistry*::10*Carbohydrate*Metabolism*II*Aerobic*Respiration*"`,
      miledown: String.raw`tag:MileDown::Biochemistry::Metabolism::Acetyl-CoA OR tag:MileDown::Biochemistry::Metabolism::Citric\_Acid\_Cycle OR tag:MileDown::Biochemistry::Metabolism::ETC`
    },
    "bc-13": { // Biochemistry Ch. 13: Noncarbohydrate Metabolism
      anking: String.raw`tag:#AK\_MCAT\_v2::#UWorld\_Books::Biochemistry::Ch-13-Noncarbohydrate\_Metabolism`,
      captainhook: String.raw`"deck:*Captain*Hook*B)*Biochemistry*::11*Lipid*and*Amino*Acid*Metabolism*"`,
      miledown: String.raw`tag:MileDown::Biochemistry::Lipid\_Metabolism OR tag:MileDown::Biochemistry::Metabolism::Fatty\_Acids OR tag:MileDown::Biochemistry::Metabolism::Urea\_Cycle`
    },
    "bc-14": { // Biochemistry Ch. 14: Purification & Characterization
      anking: String.raw`tag:#AK\_MCAT\_v2::#UWorld\_Books::Biochemistry::Ch-14-Biomolecule\_Purification\_and\_Characterization`,
      captainhook: String.raw`"deck:*Captain*Hook*B)*Biochemistry*::03*Nonenzymatic*Protein*Function*and*Protein*Analysis*"`,
      miledown: String.raw`tag:MileDown::Biochemistry::Lab\_Techniques`
    },
    "gc-1": { // General Chemistry Ch. 1: Structure & Properties of Atoms
      anking: String.raw`tag:#AK\_MCAT\_v2::#UWorld\_Books::General\_Chemistry::Ch-01-Structure\_and\_Properties\_of\_Atoms`,
      captainhook: String.raw`"deck:*Captain*Hook*A)*Chemistry*::01*Atomic*Structure*" OR "deck:*Captain*Hook*A)*Chemistry*::02*The*Periodic*Table*"`,
      miledown: String.raw`tag:MileDown::General\_Chemistry::Atomic\_Structure OR tag:MileDown::General\_Chemistry::Periodic\_Table`
    },
    "gc-2": { // General Chemistry Ch. 2: Chemical Bonding, Reactions & Stoichiometry
      anking: String.raw`tag:#AK\_MCAT\_v2::#UWorld\_Books::General\_Chemistry::Ch-02-Chemical\_Bonding\_Reactions\_and\_Stoichiometry`,
      captainhook: String.raw`"deck:*Captain*Hook*A)*Chemistry*::03*Bonding*and*Chemical*Interactions*" OR "deck:*Captain*Hook*A)*Chemistry*::04*Compounds*and*Stoichiometry*"`,
      miledown: String.raw`tag:MileDown::General\_Chemistry::Bonding OR tag:MileDown::General\_Chemistry::Intermolecular\_Forces OR tag:MileDown::General\_Chemistry::Compounds`
    },
    "gc-3": { // General Chemistry Ch. 3: Thermodynamics
      anking: String.raw`tag:#AK\_MCAT\_v2::#UWorld\_Books::General\_Chemistry::Ch-03-Thermodynamics`,
      captainhook: String.raw`"deck:*Captain*Hook*A)*Chemistry*::07*Thermochemistry*"`,
      miledown: String.raw`tag:MileDown::General\_Chemistry::Thermochemistry`
    },
    "gc-4": { // General Chemistry Ch. 4: Kinetics
      anking: String.raw`tag:#AK\_MCAT\_v2::#UWorld\_Books::General\_Chemistry::Ch-04-Kinetics`,
      captainhook: String.raw`"deck:*Captain*Hook*A)*Chemistry*::05*Chemical*Kinetics*"`,
      miledown: String.raw`tag:MileDown::General\_Chemistry::Chemical\_Kinetics`
    },
    "gc-5": { // General Chemistry Ch. 5: Chemical Equilibrium
      anking: String.raw`tag:#AK\_MCAT\_v2::#UWorld\_Books::General\_Chemistry::Ch-05-Chemical\_Equilibrium`,
      captainhook: String.raw`"deck:*Captain*Hook*A)*Chemistry*::06*Equilibrium*"`,
      miledown: String.raw`tag:MileDown::General\_Chemistry::Equilibrium`
    },
    "gc-6": { // General Chemistry Ch. 6: Gas Laws
      anking: String.raw`tag:#AK\_MCAT\_v2::#UWorld\_Books::General\_Chemistry::Ch-06-Gas\_Laws`,
      captainhook: String.raw`"deck:*Captain*Hook*A)*Chemistry*::08*The*Gas*Phase*"`,
      miledown: String.raw`tag:MileDown::General\_Chemistry::Gases OR tag:MileDown::Physics::Gases`
    },
    "gc-7": { // General Chemistry Ch. 7: Solutions
      anking: String.raw`tag:#AK\_MCAT\_v2::#UWorld\_Books::General\_Chemistry::Ch-07-Solutions`,
      captainhook: String.raw`"deck:*Captain*Hook*A)*Chemistry*::09*Solutions*"`,
      miledown: String.raw`tag:MileDown::General\_Chemistry::Solutions`
    },
    "gc-8": { // General Chemistry Ch. 8: Acid-Base Chemistry
      anking: String.raw`tag:#AK\_MCAT\_v2::#UWorld\_Books::General\_Chemistry::Ch-08-Acid-Base\_Chemistry`,
      captainhook: String.raw`"deck:*Captain*Hook*A)*Chemistry*::10*Acids*and*Bases*"`,
      miledown: String.raw`tag:MileDown::General\_Chemistry::Acids\_and\_Bases`
    },
    "gc-9": { // General Chemistry Ch. 9: Redox Reactions & Electrochemistry
      anking: String.raw`tag:#AK\_MCAT\_v2::#UWorld\_Books::General\_Chemistry::Ch-09-Redox\_Reactions\_and\_Electrochemistry`,
      captainhook: String.raw`"deck:*Captain*Hook*A)*Chemistry*::11*Oxidation*Reduction*Reactions*" OR "deck:*Captain*Hook*A)*Chemistry*::12*Electrochemistry*"`,
      miledown: String.raw`tag:MileDown::General\_Chemistry::REDOX OR tag:MileDown::General\_Chemistry::Electrochemistry`
    },
    "oc-1": { // Organic Chemistry Ch. 1: Chemical Bonding
      anking: String.raw`tag:#AK\_MCAT\_v2::#UWorld\_Books::Organic\_Chemistry::Ch-01-Chemical\_Bonding`,
      captainhook: String.raw`"deck:*Captain*Hook*B)*Organic*Chemistry*::03*Bonding*"`,
      miledown: String.raw`tag:MileDown::OChem::Bonding`
    },
    "oc-2": { // Organic Chemistry Ch. 2: Structure of Organic Molecules
      anking: String.raw`tag:#AK\_MCAT\_v2::#UWorld\_Books::Organic\_Chemistry::Ch-02-Structure\_of\_Organic\_Molecules`,
      captainhook: String.raw`"deck:*Captain*Hook*B)*Organic*Chemistry*::03*Bonding*"`,
      miledown: String.raw`tag:MileDown::OChem::Molecules`
    },
    "oc-3": { // Organic Chemistry Ch. 3: Isomers
      anking: String.raw`tag:#AK\_MCAT\_v2::#UWorld\_Books::Organic\_Chemistry::Ch-03-Isomers`,
      captainhook: String.raw`"deck:*Captain*Hook*B)*Organic*Chemistry*::02*Isomers*"`,
      miledown: String.raw`tag:MileDown::OChem::Isomers`
    },
    "oc-4": { // Organic Chemistry Ch. 4: Organic Nomenclature
      anking: String.raw`tag:#AK\_MCAT\_v2::#UWorld\_Books::Organic\_Chemistry::Ch-04-Organic\_Nomenclature`,
      captainhook: String.raw`"deck:*Captain*Hook*B)*Organic*Chemistry*::01*Nomenclature*"`,
      miledown: String.raw`tag:MileDown::OChem::Nomenclature`
    },
    "oc-5": { // Organic Chemistry Ch. 5: Overview of Organic Reactions
      anking: String.raw`tag:#AK\_MCAT\_v2::#UWorld\_Books::Organic\_Chemistry::Ch-05-Overview\_of\_Organic\_Reactions`,
      captainhook: String.raw`"deck:*Captain*Hook*B)*Organic*Chemistry*::04*Analyzing*Organic*Reactions*"`,
      miledown: String.raw`tag:MileDown::OChem::Reactions`
    },
    "oc-6": { // Organic Chemistry Ch. 6: Hydrocarbons
      anking: String.raw`tag:#AK\_MCAT\_v2::#UWorld\_Books::Organic\_Chemistry::Ch-06-Hydrocarbons`,
      captainhook: String.raw`"deck:*Captain*Hook*B)*Organic*Chemistry*::04*Analyzing*Organic*Reactions*"`,
      miledown: String.raw`tag:MileDown::OChem::Reactions`
    },
    "oc-7": { // Organic Chemistry Ch. 7: Alkyl Halides, Ethers, & Sulfur-Containing Groups
      anking: String.raw`tag:#AK\_MCAT\_v2::#UWorld\_Books::Organic\_Chemistry::Ch-07-Alkyl\_Halides,\_Ethers,\_and\_Sulfur-Containing\_Groups`,
      captainhook: String.raw`"deck:*Captain*Hook*B)*Organic*Chemistry*::04*Analyzing*Organic*Reactions*"`,
      miledown: String.raw`tag:MileDown::OChem::Reactions`
    },
    "oc-8": { // Organic Chemistry Ch. 8: Alcohols
      anking: String.raw`tag:#AK\_MCAT\_v2::#UWorld\_Books::Organic\_Chemistry::Ch-08-Alcohols`,
      captainhook: String.raw`"deck:*Captain*Hook*B)*Organic*Chemistry*::05*Alcohols*"`,
      miledown: String.raw`tag:MileDown::OChem::Alcohols`
    },
    "oc-9": { // Organic Chemistry Ch. 9: Aldehydes & Ketones
      anking: String.raw`tag:#AK\_MCAT\_v2::#UWorld\_Books::Organic\_Chemistry::Ch-09-Aldehydes\_and\_Ketones`,
      captainhook: String.raw`"deck:*Captain*Hook*B)*Organic*Chemistry*::06*Aldehydes*and*Ketones*I*" OR "deck:*Captain*Hook*B)*Organic*Chemistry*::07*Aldehydes*and*Ketones*II*"`,
      miledown: String.raw`tag:MileDown::OChem::Aldehydes\_and\_Ketones`
    },
    "oc-10": { // Organic Chemistry Ch. 10: Carboxylic Acids
      anking: String.raw`tag:#AK\_MCAT\_v2::#UWorld\_Books::Organic\_Chemistry::Ch-10-Carboxylic\_Acids`,
      captainhook: String.raw`"deck:*Captain*Hook*B)*Organic*Chemistry*::08*Carboxylic*Acids*"`,
      miledown: String.raw`tag:MileDown::OChem::Carboxylic\_Acids`
    },
    "oc-11": { // Organic Chemistry Ch. 11: Carboxylic Acid Derivatives
      anking: String.raw`tag:#AK\_MCAT\_v2::#UWorld\_Books::Organic\_Chemistry::Ch-11-Carboxylic\_Acid\_Derivatives`,
      captainhook: String.raw`"deck:*Captain*Hook*B)*Organic*Chemistry*::09*Carboxylic*Acid*Derivatives*"`,
      miledown: String.raw`tag:MileDown::OChem::Carboxylic\_Acid\_Derivatives`
    },
    "oc-12": { // Organic Chemistry Ch. 12: Amines & Amides
      anking: String.raw`tag:#AK\_MCAT\_v2::#UWorld\_Books::Organic\_Chemistry::Ch-12-Amines\_and\_Amides`,
      captainhook: String.raw`"deck:*Captain*Hook*B)*Organic*Chemistry*::10*Nitrogen*and*Phosphorus*Containing*Compounds*"`
    },
    "oc-13": { // Organic Chemistry Ch. 13: Separations & Purification Methods
      anking: String.raw`tag:#AK\_MCAT\_v2::#UWorld\_Books::Organic\_Chemistry::Ch-13-Separation\_and\_Purification\_Methods`,
      captainhook: String.raw`"deck:*Captain*Hook*B)*Organic*Chemistry*::12*Separations*and*Purifications*"`,
      miledown: String.raw`tag:MileDown::OChem::Separations`
    },
    "oc-14": { // Organic Chemistry Ch. 14: Spectroscopy & Analysis
      anking: String.raw`tag:#AK\_MCAT\_v2::#UWorld\_Books::Organic\_Chemistry::Ch-14-Spectroscopy\_and\_Analysis`,
      captainhook: String.raw`"deck:*Captain*Hook*B)*Organic*Chemistry*::11*Spectroscopy*"`,
      miledown: String.raw`tag:MileDown::OChem::Spectroscopy`
    },
    "ph-1": { // Physics Ch. 1: Motion, Force, & Energy
      anking: String.raw`tag:#AK\_MCAT\_v2::#UWorld\_Books::Physics::Ch-01-Motion\_Force\_and\_Energy`,
      captainhook: String.raw`"deck:*Captain*Hook*C)*Physics*::01*Kinematics*and*Dynamics*" OR "deck:*Captain*Hook*C)*Physics*::02*Work*and*Energy*"`,
      miledown: String.raw`tag:MileDown::Physics::Kinematics OR tag:MileDown::Physics::Dynamics OR tag:MileDown::Physics::Energy OR tag:MileDown::Physics::Work OR tag:MileDown::Physics::Mechanics`
    },
    "ph-2": { // Physics Ch. 2: Fluid Dynamics
      anking: String.raw`tag:#AK\_MCAT\_v2::#UWorld\_Books::Physics::Ch-02-Fluid\_Dynamics`,
      captainhook: String.raw`"deck:*Captain*Hook*C)*Physics*::04*Fluids*"`,
      miledown: String.raw`tag:MileDown::Physics::Fluids`
    },
    "ph-3": { // Physics Ch. 3: Electricity & Magnetism
      anking: String.raw`tag:#AK\_MCAT\_v2::#UWorld\_Books::Physics::Ch-03-Electricity\_and\_Magnetism`,
      captainhook: String.raw`"deck:*Captain*Hook*C)*Physics*::05*Electrostatics*and*Magnetism*" OR "deck:*Captain*Hook*C)*Physics*::06*Circuits*"`,
      miledown: String.raw`tag:MileDown::Physics::Electrostatics OR tag:MileDown::Physics::Magnetism OR tag:MileDown::Physics::Circuits`
    },
    "ph-4": { // Physics Ch. 4: Waves, Sound, & Light
      anking: String.raw`tag:#AK\_MCAT\_v2::#UWorld\_Books::Physics::Ch-04-Waves\_Sound\_and\_Light`,
      captainhook: String.raw`"deck:*Captain*Hook*C)*Physics*::07*Waves*and*Sound*" OR "deck:*Captain*Hook*C)*Physics*::08*Light*and*Optics*"`,
      miledown: String.raw`tag:MileDown::Physics::Waves OR tag:MileDown::Physics::Sound OR tag:MileDown::Physics::Light`
    },
    "ph-5": { // Physics Ch. 5: Thermodynamics & Gases
      anking: String.raw`tag:#AK\_MCAT\_v2::#UWorld\_Books::Physics::Ch-05-Thermodynamics\_and\_Gases`,
      captainhook: String.raw`"deck:*Captain*Hook*C)*Physics*::03*Thermodynamics*" OR "deck:*Captain*Hook*A)*Chemistry*::08*The*Gas*Phase*"`,
      miledown: String.raw`tag:MileDown::Physics::Thermodynamics OR tag:MileDown::Physics::Gases OR tag:MileDown::General\_Chemistry::Gases`
    },
    "ps-1": { // Behavioral Ch. 1: Theoretical Approach in Psychology
      anking: String.raw`tag:#AK\_MCAT\_v2::#UWorld\_Books::Behavioral\_Sciences::Ch-01-Theoretical\_Approaches\_in\_Psychology`,
      captainhook: String.raw`"deck:*Captain*Hook*Pankow*7A*"`
    },
    "ps-2": { // Behavioral Ch. 2: Research in Psychology
      anking: String.raw`tag:#AK\_MCAT\_v2::#UWorld\_Books::Behavioral\_Sciences::Ch-02-Research\_in\_Psychology`,
      captainhook: String.raw`"deck:*Captain*Hook*Pankow*9C::Study*Types*"`,
      miledown: String.raw`tag:MileDown::Physics::Research`
    },
    "ps-3": { // Behavioral Ch. 3: Statistics in Psychology
      anking: String.raw`tag:#AK\_MCAT\_v2::#UWorld\_Books::Behavioral\_Sciences::Ch-03-Statistics\_in\_Psychology`,
      captainhook: String.raw`"deck:*Captain*Hook*Pankow*9C::Statistics*"`,
      miledown: String.raw`tag:MileDown::Physics::Research::Data`
    },
    "ps-4": { // Behavioral Ch. 4: The Nervous & Endocrine System
      anking: String.raw`tag:#AK\_MCAT\_v2::#UWorld\_Books::Behavioral\_Sciences::Ch-04-The\_Nervous\_and\_Endocrine\_Systems`,
      captainhook: String.raw`"deck:*Captain*Hook*Pankow*7A*"`,
      miledown: String.raw`tag:MileDown::Behavioral::Biology\_and\_Behavior`
    },
    "ps-5": { // Behavioral Ch. 5: Heredity & the Environment
      anking: String.raw`tag:#AK\_MCAT\_v2::#UWorld\_Books::Behavioral\_Sciences::Ch-05-Heredity\_and\_the\_Environment`,
      captainhook: String.raw`"deck:*Captain*Hook*Pankow*7A*"`,
      miledown: String.raw`tag:MileDown::Behavioral::Biology\_and\_Behavior`
    },
    "ps-6": { // Behavioral Ch. 6: Human Physiological Development
      anking: String.raw`tag:#AK\_MCAT\_v2::#UWorld\_Books::Behavioral\_Sciences::Ch-06-Human\_Physiological\_Development`,
      captainhook: String.raw`"deck:*Captain*Hook*Pankow*7A*"`,
      miledown: String.raw`tag:MileDown::Behavioral::Development`
    },
    "ps-7": { // Behavioral Ch. 7: Studying the Brain
      anking: String.raw`tag:#AK\_MCAT\_v2::#UWorld\_Books::Behavioral\_Sciences::Ch-07-Studying\_the\_Brain`,
      captainhook: String.raw`"deck:*Captain*Hook*Pankow*7A*"`,
      miledown: String.raw`tag:MileDown::Behavioral::Biology\_and\_Behavior::Brain`
    },
    "ps-8": { // Behavioral Ch. 8: Sensation
      anking: String.raw`tag:#AK\_MCAT\_v2::#UWorld\_Books::Behavioral\_Sciences::Ch-08-Principles\_of\_Sensation`,
      captainhook: String.raw`"deck:*Captain*Hook*Pankow*6A*"`,
      miledown: String.raw`tag:MileDown::Behavioral::Sensation\_and\_Perception`
    },
    "ps-9": { // Behavioral Ch. 9: Perception
      anking: String.raw`tag:#AK\_MCAT\_v2::#UWorld\_Books::Behavioral\_Sciences::Ch-09-Perception`,
      captainhook: String.raw`"deck:*Captain*Hook*Pankow*6A*"`,
      miledown: String.raw`tag:MileDown::Behavioral::Sensation\_and\_Perception::Gestalt\_Principles`
    },
    "ps-10": { // Behavioral Ch. 10: Vision
      anking: String.raw`tag:#AK\_MCAT\_v2::#UWorld\_Books::Behavioral\_Sciences::Ch-10-Vision`,
      captainhook: String.raw`"deck:*Captain*Hook*Pankow*6A*"`,
      miledown: String.raw`tag:MileDown::Behavioral::Sensation\_and\_Perception::Visual`
    },
    "ps-11": { // Behavioral Ch. 11: Hearing
      anking: String.raw`tag:#AK\_MCAT\_v2::#UWorld\_Books::Behavioral\_Sciences::Ch-11-Hearing`,
      captainhook: String.raw`"deck:*Captain*Hook*Pankow*6A*"`,
      miledown: String.raw`tag:MileDown::Behavioral::Sensation\_and\_Perception::Auditory`
    },
    "ps-12": { // Behavioral Ch. 12: Other Senses
      anking: String.raw`tag:#AK\_MCAT\_v2::#UWorld\_Books::Behavioral\_Sciences::Ch-12-Other\_Senses`,
      captainhook: String.raw`"deck:*Captain*Hook*Pankow*6A*"`,
      miledown: String.raw`tag:MileDown::Behavioral::Sensation\_and\_Perception::Pain OR tag:MileDown::Behavioral::Sensation\_and\_Perception::Smell OR tag:MileDown::Behavioral::Sensation\_and\_Perception::Taste`
    },
    "ps-13": { // Behavioral Ch. 13: Consciousness & Sleep
      anking: String.raw`tag:#AK\_MCAT\_v2::#UWorld\_Books::Behavioral\_Sciences::Ch-13-Consciousness\_and\_Sleep`,
      captainhook: String.raw`"deck:*Captain*Hook*Pankow*6B*"`,
      miledown: String.raw`tag:MileDown::Behavioral::Consciousness::Sleep`
    },
    "ps-14": { // Behavioral Ch. 14: Consciousness-Altering Substances
      anking: String.raw`tag:#AK\_MCAT\_v2::#UWorld\_Books::Behavioral\_Sciences::Ch-14-Consciousness-Altering\_Substances`,
      captainhook: String.raw`"deck:*Captain*Hook*Pankow*6B*"`,
      miledown: String.raw`tag:MileDown::Behavioral::Consciousness::Drugs`
    },
    "ps-15": { // Behavioral Ch. 15: Attention
      anking: String.raw`tag:#AK\_MCAT\_v2::#UWorld\_Books::Behavioral\_Sciences::Ch-15-Attention`,
      captainhook: String.raw`"deck:*Captain*Hook*Pankow*6B*"`,
      miledown: String.raw`tag:MileDown::Behavioral::Attention`
    },
    "ps-16": { // Behavioral Ch. 16: Non-Associative Learning
      anking: String.raw`tag:#AK\_MCAT\_v2::#UWorld\_Books::Behavioral\_Sciences::Ch-16-Non-associative\_Learning`,
      captainhook: String.raw`"deck:*Captain*Hook*Pankow*7C*"`,
      miledown: String.raw`tag:MileDown::Behavioral::Learning`
    },
    "ps-17": { // Behavioral Ch. 17: Associative Learning
      anking: String.raw`tag:#AK\_MCAT\_v2::#UWorld\_Books::Behavioral\_Sciences::Ch-17-Associative\_Learning`,
      captainhook: String.raw`"deck:*Captain*Hook*Pankow*7C*"`,
      miledown: String.raw`tag:MileDown::Behavioral::Learning`
    },
    "ps-18": { // Behavioral Ch. 18: Observational Learning
      anking: String.raw`tag:#AK\_MCAT\_v2::#UWorld\_Books::Behavioral\_Sciences::Ch-18-Observational\_Learning`,
      captainhook: String.raw`"deck:*Captain*Hook*Pankow*7C*"`,
      miledown: String.raw`tag:MileDown::Behavioral::Learning`
    },
    "ps-19": { // Behavioral Ch. 19: Memory
      anking: String.raw`tag:#AK\_MCAT\_v2::#UWorld\_Books::Behavioral\_Sciences::Ch-19-Memory`,
      captainhook: String.raw`"deck:*Captain*Hook*Pankow*6B*"`,
      miledown: String.raw`tag:MileDown::Behavioral::Memory`
    },
    "ps-20": { // Behavioral Ch. 20: Cognition
      anking: String.raw`tag:#AK\_MCAT\_v2::#UWorld\_Books::Behavioral\_Sciences::Ch-20-Cognition`,
      captainhook: String.raw`"deck:*Captain*Hook*Pankow*6B*"`,
      miledown: String.raw`tag:MileDown::Behavioral::Cognition OR tag:MileDown::Behavioral::Intelligence`
    },
    "ps-21": { // Behavioral Ch. 21: Problem-Solving & Decision Making
      anking: String.raw`tag:#AK\_MCAT\_v2::#UWorld\_Books::Behavioral\_Sciences::Ch-21-Problem-Solving\_and\_Decision-Making`,
      captainhook: String.raw`"deck:*Captain*Hook*Pankow*6B*"`,
      miledown: String.raw`tag:MileDown::Behavioral::Cognition::Problem\_Solving`
    },
    "ps-22": { // Behavioral Ch. 22: Language
      anking: String.raw`tag:#AK\_MCAT\_v2::#UWorld\_Books::Behavioral\_Sciences::Ch-22-Language`,
      captainhook: String.raw`"deck:*Captain*Hook*Pankow*6B*"`,
      miledown: String.raw`tag:MileDown::Behavioral::Language`
    },
    "ps-23": { // Behavioral Ch. 23: Motivation
      anking: String.raw`tag:#AK\_MCAT\_v2::#UWorld\_Books::Behavioral\_Sciences::Ch-23-Motivation`,
      captainhook: String.raw`"deck:*Captain*Hook*Pankow*7A*"`,
      miledown: String.raw`tag:MileDown::Behavioral::Motivation`
    },
    "ps-24": { // Behavioral Ch. 24: Emotion
      anking: String.raw`tag:#AK\_MCAT\_v2::#UWorld\_Books::Behavioral\_Sciences::Ch-24-Emotion`,
      captainhook: String.raw`"deck:*Captain*Hook*Pankow*6C*"`,
      miledown: String.raw`tag:MileDown::Behavioral::Emotion OR tag:MileDown::Behavioral::Emotions`
    },
    "ps-25": { // Behavioral Ch. 25: Attitudes
      anking: String.raw`tag:#AK\_MCAT\_v2::#UWorld\_Books::Behavioral\_Sciences::Ch-25-Attitudes`,
      captainhook: String.raw`"deck:*Captain*Hook*Pankow*7A*"`,
      miledown: String.raw`tag:MileDown::Behavioral::Attitudes`
    },
    "ps-26": { // Behavioral Ch. 26: Personality Theories
      anking: String.raw`tag:#AK\_MCAT\_v2::#UWorld\_Books::Behavioral\_Sciences::Ch-26-Personality\_Theories`,
      captainhook: String.raw`"deck:*Captain*Hook*Pankow*7A*"`,
      miledown: String.raw`tag:MileDown::Behavioral::Personality`
    },
    "ps-27": { // Behavioral Ch. 27: Stress
      anking: String.raw`tag:#AK\_MCAT\_v2::#UWorld\_Books::Behavioral\_Sciences::Ch-27\_Stress`,
      captainhook: String.raw`"deck:*Captain*Hook*Pankow*6C*"`,
      miledown: String.raw`tag:MileDown::Behavioral::Stress`
    },
    "ps-28": { // Behavioral Ch. 28: Theories of Attitude & Behavior Change
      anking: String.raw`tag:#AK\_MCAT\_v2::#UWorld\_Books::Behavioral\_Sciences::Ch-28\_Theories\_of\_Attitude\_and\_Behavior\_Change`,
      captainhook: String.raw`"deck:*Captain*Hook*Pankow*7C*"`,
      miledown: String.raw`tag:MileDown::Behavioral::Attitudes`
    },
    "ps-29": { // Behavioral Ch. 29: Psychological Disorders
      anking: String.raw`tag:#AK\_MCAT\_v2::#UWorld\_Books::Behavioral\_Sciences::Ch-29\_Psychological\_Disorders`,
      captainhook: String.raw`"deck:*Captain*Hook*Pankow*7A*"`,
      miledown: String.raw`tag:MileDown::Behavioral::Disorders`
    },
    "ps-30": { // Behavioral Ch. 30: The Biological Underpinnings of Psychological & Neurological Disorders
      anking: String.raw`tag:#AK\_MCAT\_v2::#UWorld\_Books::Behavioral\_Sciences::Ch-30\_The\_Biological\_Underpinnings\_of\_Psychological\_and\_Neurological\_Disorders`,
      captainhook: String.raw`"deck:*Captain*Hook*Pankow*7A*"`,
      miledown: String.raw`tag:MileDown::Behavioral::Disorders`
    },
    "ps-31": { // Behavioral Ch. 31: Treatment of Psychological & Neurological Disorders
      anking: String.raw`tag:#AK\_MCAT\_v2::#UWorld\_Books::Behavioral\_Sciences::Ch-31\_Treatment\_of\_Psychological\_and\_Neurological\_Disorders`,
      captainhook: String.raw`"deck:*Captain*Hook*Pankow*7A*"`,
      miledown: String.raw`tag:MileDown::Behavioral::Disorders`
    },
    "ps-32": { // Behavioral Ch. 32: Theoretical Approach in Sociology
      anking: String.raw`tag:#AK\_MCAT\_v2::#UWorld\_Books::Behavioral\_Sciences::Ch-32\_Theoretical\_Approaches\_in\_Sociology`,
      captainhook: String.raw`"deck:*Captain*Hook*Pankow*9A::Social*Structures*"`,
      miledown: String.raw`tag:MileDown::Behavioral::Social::Social\_Structure`
    },
    "ps-33": { // Behavioral Ch. 33: Research in Sociology
      anking: String.raw`tag:#AK\_MCAT\_v2::#UWorld\_Books::Behavioral\_Sciences::Ch-33\_Research\_in\_Sociology`,
      captainhook: String.raw`"deck:*Captain*Hook*Pankow*9C::Study*Types*"`,
      miledown: String.raw`tag:MileDown::Physics::Research`
    },
    "ps-34": { // Behavioral Ch. 34: Culture
      anking: String.raw`tag:#AK\_MCAT\_v2::#UWorld\_Books::Behavioral\_Sciences::Ch-34\_Culture`,
      captainhook: String.raw`"deck:*Captain*Hook*Pankow*9B::Culture*"`,
      miledown: String.raw`tag:MileDown::Behavioral::Social::Socialization`
    },
    "ps-35": { // Behavioral Ch. 35: Identities & Identity Formation
      anking: String.raw`tag:#AK\_MCAT\_v2::#UWorld\_Books::Behavioral\_Sciences::Ch-35\_Identities\_and\_Identity\_Formation`,
      captainhook: String.raw`"deck:*Captain*Hook*Pankow*8A*8B*"`,
      miledown: String.raw`tag:MileDown::Behavioral::Identity`
    },
    "ps-36": { // Behavioral Ch. 36: Interaction with Others
      anking: String.raw`tag:#AK\_MCAT\_v2::#UWorld\_Books::Behavioral\_Sciences::Ch-36\_Interacting\_with\_Others`,
      captainhook: String.raw`"deck:*Captain*Hook*Pankow*8C::Social*Interactions*"`,
      miledown: String.raw`tag:MileDown::Behavioral::Social::Social\_Interaction`
    },
    "ps-37": { // Behavioral Ch. 37: Attraction, Aggression, & Attachment
      anking: String.raw`tag:#AK\_MCAT\_v2::#UWorld\_Books::Behavioral\_Sciences::Ch-37\_Attraction\_Aggresion\_and\_attachment`,
      captainhook: String.raw`"deck:*Captain*Hook*Pankow*8C::Social*Behavior*"`,
      miledown: String.raw`tag:MileDown::Behavioral::Social::Social\_Behavior`
    },
    "ps-38": { // Behavioral Ch. 38: Social Behavior in Animals
      anking: String.raw`tag:#AK\_MCAT\_v2::#UWorld\_Books::Behavioral\_Sciences::Ch-38\_Social\_Behavior\_in\_Animals`,
      captainhook: String.raw`"deck:*Captain*Hook*Pankow*8C::Biological*Explanations*of*Social*behavior*in*Animals*"`,
      miledown: String.raw`tag:MileDown::Behavioral::Social::Social\_Behavior`
    },
    "ps-39": { // Behavioral Ch. 39: Attributing Behavior to Others
      anking: String.raw`tag:#AK\_MCAT\_v2::#UWorld\_Books::Behavioral\_Sciences::Ch-39\_Attributing\_Behavior\_to\_Others`,
      captainhook: String.raw`"deck:*Captain*Hook*Pankow*8A*8B*"`,
      miledown: String.raw`tag:MileDown::Behavioral::Social::Social\_Perception`
    },
    "ps-40": { // Behavioral Ch. 40: Prejudice, Stereotypes, & Discrimination
      anking: String.raw`tag:#AK\_MCAT\_v2::#UWorld\_Books::Behavioral\_Sciences::Ch-40\_Prejudice\_Stereotypes\_and\_Discrimination`,
      captainhook: String.raw`"deck:*Captain*Hook*Pankow*8A*8B*"`,
      miledown: String.raw`tag:MileDown::Behavioral::Social::Social\_Perception`
    },
    "ps-41": { // Behavioral Ch. 41: Group Processes & Behavior
      anking: String.raw`tag:#AK\_MCAT\_v2::#UWorld\_Books::Behavioral\_Sciences::Ch-41\_Group\_Processes\_and-Behavior`,
      captainhook: String.raw`"deck:*Captain*Hook*Pankow*7B*"`,
      miledown: String.raw`tag:MileDown::Behavioral::Social::Social\_Behavior`
    },
    "ps-42": { // Behavioral Ch. 42: Normative & Non-normative Behavior
      anking: String.raw`tag:#AK\_MCAT\_v2::#UWorld\_Books::Behavioral\_Sciences::Ch-42\_Normative\_and\_Non-normative\_Behavior`,
      captainhook: String.raw`"deck:*Captain*Hook*Pankow*7B*"`,
      miledown: String.raw`tag:MileDown::Behavioral::Social::Socialization`
    },
    "ps-43": { // Behavioral Ch. 43: Social Institutions
      anking: String.raw`tag:#AK\_MCAT\_v2::#UWorld\_Books::Behavioral\_Sciences::Ch-43\_Social\_Institutions`,
      captainhook: String.raw`"deck:*Captain*Hook*Pankow*9A::Social*Structures*"`,
      miledown: String.raw`tag:MileDown::Behavioral::Social::Social\_Structure`
    },
    "ps-44": { // Behavioral Ch. 44: Demographic Structure of Society
      anking: String.raw`tag:#AK\_MCAT\_v2::#UWorld\_Books::Behavioral\_Sciences::Ch-44\_Demographic\_Structure\_of\_Society`,
      captainhook: String.raw`"deck:*Captain*Hook*Pankow*9B::Demographics*"`,
      miledown: String.raw`tag:MileDown::Behavioral::Social::Social\_Structure`
    },
    "ps-45": { // Behavioral Ch. 45: Social Class & Inequality
      anking: String.raw`tag:#AK\_MCAT\_v2::#UWorld\_Books::Behavioral\_Sciences::Ch-45\_Social\_Class\_and\_Inequity`,
      captainhook: String.raw`"deck:*Captain*Hook*Pankow*9C::Social*Inequality*"`,
      miledown: String.raw`tag:MileDown::Behavioral::Social::Social\_Stratification`
    },
    "ps-46": { // Behavioral Ch. 46: Social Change
      anking: String.raw`tag:#AK\_MCAT\_v2::#UWorld\_Books::Behavioral\_Sciences::Ch-46\_Social\_Change`,
      captainhook: String.raw`"deck:*Captain*Hook*Pankow*9B::Demographics*"`,
      miledown: String.raw`tag:MileDown::Behavioral::Social::Social\_Structure`
    }
  },
  khanacademy: {
    "ph-1": { // Physics Ch. 1: Physical Processes: Vectors & Scalars
      anking: String.raw`tag:#AK\_MCAT\_v2::#KhanAcademy::Foundation04-Physical-Processes::F4.01-Vectors-and-Scalars`,
      captainhook: String.raw`"deck:*Captain*Hook*C)*Physics*::01*Kinematics*and*Dynamics*" OR "deck:*Captain*Hook*C)*Physics*::10*Mathematics*"`,
      miledown: String.raw`tag:MileDown::Physics::Kinematics OR tag:MileDown::Physics::Mathematics::SOHCAHTOA`
    },
    "ph-2": { // Physics Ch. 2: Physical Processes: Translational Motion & Calculations
      anking: String.raw`tag:#AK\_MCAT\_v2::#KhanAcademy::Foundation04-Physical-Processes::F4.02-Translational-Motion-and-Calculations`,
      captainhook: String.raw`"deck:*Captain*Hook*C)*Physics*::01*Kinematics*and*Dynamics*"`,
      miledown: String.raw`tag:MileDown::Physics::Kinematics`
    },
    "ph-3": { // Physics Ch. 3: Physical Processes: Force & Newton's Laws of Motion
      anking: String.raw`tag:#AK\_MCAT\_v2::#KhanAcademy::Foundation04-Physical-Processes::F4.03-Force-and-Newtons-Laws-of-Motion`,
      captainhook: String.raw`"deck:*Captain*Hook*C)*Physics*::01*Kinematics*and*Dynamics*"`,
      miledown: String.raw`tag:MileDown::Physics::Dynamics`
    },
    "ph-4": { // Physics Ch. 4: Physical Processes: Vector Analysis & Forces acting on an Object
      anking: String.raw`tag:#AK\_MCAT\_v2::#KhanAcademy::Foundation04-Physical-Processes::F4.04-Vector-Analysis-and-Forces-Acting-on-an-Object`,
      captainhook: String.raw`"deck:*Captain*Hook*C)*Physics*::01*Kinematics*and*Dynamics*"`,
      miledown: String.raw`tag:MileDown::Physics::Dynamics`
    },
    "ph-5": { // Physics Ch. 5: Physical Processes: Work & Energy
      anking: String.raw`tag:#AK\_MCAT\_v2::#KhanAcademy::Foundation04-Physical-Processes::F4.05-Work-and-Energy`,
      captainhook: String.raw`"deck:*Captain*Hook*C)*Physics*::02*Work*and*Energy*"`,
      miledown: String.raw`tag:MileDown::Physics::Energy OR tag:MileDown::Physics::Work`
    },
    "ph-6": { // Physics Ch. 6: Physical Processes: Fluids at Rest
      anking: String.raw`tag:#AK\_MCAT\_v2::#KhanAcademy::Foundation04-Physical-Processes::F4.06-Fluids-at-Rest`,
      captainhook: String.raw`"deck:*Captain*Hook*C)*Physics*::04*Fluids*"`,
      miledown: String.raw`tag:MileDown::Physics::Fluids`
    },
    "ph-7": { // Physics Ch. 7: Physical Processes: Fluids in Motion
      anking: String.raw`tag:#AK\_MCAT\_v2::#KhanAcademy::Foundation04-Physical-Processes::F4.07-Fluids-in-Motion`,
      captainhook: String.raw`"deck:*Captain*Hook*C)*Physics*::04*Fluids*"`,
      miledown: String.raw`tag:MileDown::Physics::Fluids`
    },
    "ph-8": { // Physics Ch. 8: Physical Processes: Gas Phase
      anking: String.raw`tag:#AK\_MCAT\_v2::#KhanAcademy::Foundation04-Physical-Processes::F4.08-Gas-Phase`,
      captainhook: String.raw`"deck:*Captain*Hook*A)*Chemistry*::08*The*Gas*Phase*"`,
      miledown: String.raw`tag:MileDown::General\_Chemistry::Gases OR tag:MileDown::Physics::Gases`
    },
    "ph-9": { // Physics Ch. 9: Physical Processes: Kinetic Molecular Theory of Gases
      anking: String.raw`tag:#AK\_MCAT\_v2::#KhanAcademy::Foundation04-Physical-Processes::F4.09-Kinetic-Molecular-Theory-of-Gases`,
      captainhook: String.raw`"deck:*Captain*Hook*A)*Chemistry*::08*The*Gas*Phase*"`,
      miledown: String.raw`tag:MileDown::General\_Chemistry::Gases OR tag:MileDown::Physics::Gases`
    },
    "ph-10": { // Physics Ch. 10: Physical Processes: Electrostatics
      anking: String.raw`tag:#AK\_MCAT\_v2::#KhanAcademy::Foundation04-Physical-Processes::F4.10-Electrostatics`,
      captainhook: String.raw`"deck:*Captain*Hook*C)*Physics*::05*Electrostatics*and*Magnetism*"`,
      miledown: String.raw`tag:MileDown::Physics::Electrostatics`
    },
    "ph-11": { // Physics Ch. 11: Physical Processes: Current & Resistance
      anking: String.raw`tag:#AK\_MCAT\_v2::#KhanAcademy::Foundation04-Physical-Processes::F4.11-Current-and-Resistance`,
      captainhook: String.raw`"deck:*Captain*Hook*C)*Physics*::06*Circuits*"`,
      miledown: String.raw`tag:MileDown::Physics::Circuits`
    },
    "ph-12": { // Physics Ch. 12: Physical Processes: Capacitors
      anking: String.raw`tag:#AK\_MCAT\_v2::#KhanAcademy::Foundation04-Physical-Processes::F4.12-Capacitors`,
      captainhook: String.raw`"deck:*Captain*Hook*C)*Physics*::06*Circuits*"`,
      miledown: String.raw`tag:MileDown::Physics::Circuits`
    },
    "ph-13": { // Physics Ch. 13: Physical Processes: Magnetism
      anking: String.raw`tag:#AK\_MCAT\_v2::#KhanAcademy::Foundation04-Physical-Processes::F4.13-Magnetism`,
      captainhook: String.raw`"deck:*Captain*Hook*C)*Physics*::05*Electrostatics*and*Magnetism*"`,
      miledown: String.raw`tag:MileDown::Physics::Magnetism`
    },
    "ph-14": { // Physics Ch. 14: Physical Processes: Sound
      anking: String.raw`tag:#AK\_MCAT\_v2::#KhanAcademy::Foundation04-Physical-Processes::F4.15-Sound`,
      captainhook: String.raw`"deck:*Captain*Hook*C)*Physics*::07*Waves*and*Sound*"`,
      miledown: String.raw`tag:MileDown::Physics::Sound OR tag:MileDown::Physics::Waves`
    },
    "ph-15": { // Physics Ch. 15: Physical Processes: Light & Electromagnetic Radiation
      anking: String.raw`tag:#AK\_MCAT\_v2::#KhanAcademy::Foundation04-Physical-Processes::F4.16-Light-and-Electromagnetic-Radiation`,
      captainhook: String.raw`"deck:*Captain*Hook*C)*Physics*::08*Light*and*Optics*"`,
      miledown: String.raw`tag:MileDown::Physics::Light`
    },
    "ph-16": { // Physics Ch. 16: Physical Processes: Thin Lenses
      anking: String.raw`tag:#AK\_MCAT\_v2::#KhanAcademy::Foundation04-Physical-Processes::F4.19-Thin-Lenses`,
      captainhook: String.raw`"deck:*Captain*Hook*C)*Physics*::08*Light*and*Optics*"`,
      miledown: String.raw`tag:MileDown::Physics::Light`
    },
    "ph-17": { // Physics Ch. 17: Physical Processes: Spherical Mirrors
      anking: String.raw`tag:#AK\_MCAT\_v2::#KhanAcademy::Foundation04-Physical-Processes::F4.20-Spherical-Mirrors`,
      captainhook: String.raw`"deck:*Captain*Hook*C)*Physics*::08*Light*and*Optics*"`,
      miledown: String.raw`tag:MileDown::Physics::Light`
    },
    "ph-18": { // Physics Ch. 18: Physical Processes: Reflection & Refraction
      anking: String.raw`tag:#AK\_MCAT\_v2::#KhanAcademy::Foundation04-Physical-Processes::F4.21-Reflection-and-Refraction`,
      captainhook: String.raw`"deck:*Captain*Hook*C)*Physics*::08*Light*and*Optics*"`,
      miledown: String.raw`tag:MileDown::Physics::Light`
    },
    "gc-1": { // General Chemistry Ch. 1: Physical Processes: Atomic Nucleus
      anking: String.raw`tag:#AK\_MCAT\_v2::#KhanAcademy::Foundation04-Physical-Processes::F4.22-Atomic-Nucleus`,
      captainhook: String.raw`"deck:*Captain*Hook*C)*Physics*::09*Atomic*and*Nuclear*Phenomena*"`,
      miledown: String.raw`tag:MileDown::Physics::Nuclear\_Phenomena OR tag:MileDown::General\_Chemistry::Atomic\_Structure`
    },
    "gc-2": { // General Chemistry Ch. 2: Physical Processes: Electronic Structure
      anking: String.raw`tag:#AK\_MCAT\_v2::#KhanAcademy::Foundation04-Physical-Processes::F4.23-Electronic-Structure`,
      captainhook: String.raw`"deck:*Captain*Hook*A)*Chemistry*::01*Atomic*Structure*"`,
      miledown: String.raw`tag:MileDown::General\_Chemistry::Atomic\_Structure`
    },
    "gc-3": { // General Chemistry Ch. 3: Physical Processes: Periodic Table
      anking: String.raw`tag:#AK\_MCAT\_v2::#KhanAcademy::Foundation04-Physical-Processes::F4.24-Periodic-Table`,
      captainhook: String.raw`"deck:*Captain*Hook*A)*Chemistry*::02*The*Periodic*Table*"`,
      miledown: String.raw`tag:MileDown::General\_Chemistry::Periodic\_Table`
    },
    "gc-4": { // General Chemistry Ch. 4: Physical Processes: Stoichiometry
      anking: String.raw`tag:#AK\_MCAT\_v2::#KhanAcademy::Foundation04-Physical-Processes::F4.25-Stoichiometry`,
      captainhook: String.raw`"deck:*Captain*Hook*A)*Chemistry*::04*Compounds*and*Stoichiometry*"`,
      miledown: String.raw`tag:MileDown::General\_Chemistry::Compounds`
    },
    "gc-5": { // General Chemistry Ch. 5: Physical Processes: Balancing Chemical Equations
      anking: String.raw`tag:#AK\_MCAT\_v2::#KhanAcademy::Foundation04-Physical-Processes::F4.26-Balancing-Chemical-Equations`,
      captainhook: String.raw`"deck:*Captain*Hook*A)*Chemistry*::04*Compounds*and*Stoichiometry*"`,
      miledown: String.raw`tag:MileDown::General\_Chemistry::Compounds`
    },
    "gc-6": { // General Chemistry Ch. 6: Chemical Processes: Dot Structures
      anking: String.raw`tag:#AK\_MCAT\_v2::#KhanAcademy::Foundation05-Chemical-Processes::F5.04-Dot-Structures`,
      captainhook: String.raw`"deck:*Captain*Hook*A)*Chemistry*::03*Bonding*and*Chemical*Interactions*"`,
      miledown: String.raw`tag:MileDown::General\_Chemistry::Bonding`
    },
    "gc-7": { // General Chemistry Ch. 7: Chemical Processes: Stereochemistry
      anking: String.raw`tag:#AK\_MCAT\_v2::#KhanAcademy::Foundation05-Chemical-Processes::F5.05-Stereochemistry`,
      captainhook: String.raw`"deck:*Captain*Hook*B)*Organic*Chemistry*::02*Isomers*"`,
      miledown: String.raw`tag:MileDown::OChem::Isomers`
    },
    "gc-8": { // General Chemistry Ch. 8: Chemical Processes: Covalent Bonds
      anking: String.raw`tag:#AK\_MCAT\_v2::#KhanAcademy::Foundation05-Chemical-Processes::F5.06-Covalent-Bonds`,
      captainhook: String.raw`"deck:*Captain*Hook*A)*Chemistry*::03*Bonding*and*Chemical*Interactions*" OR "deck:*Captain*Hook*B)*Organic*Chemistry*::03*Bonding*"`,
      miledown: String.raw`tag:MileDown::General\_Chemistry::Bonding OR tag:MileDown::General\_Chemistry::Intermolecular\_Forces`
    },
    "gc-9": { // General Chemistry Ch. 9: Physical Processes: Redox Reactions
      anking: String.raw`tag:#AK\_MCAT\_v2::#KhanAcademy::Foundation04-Physical-Processes::F4.27-Redox-Reactions`,
      captainhook: String.raw`"deck:*Captain*Hook*A)*Chemistry*::11*Oxidation*Reduction*Reactions*"`,
      miledown: String.raw`tag:MileDown::General\_Chemistry::REDOX`
    },
    "gc-10": { // General Chemistry Ch. 10: Chemical Processes: Acid/Base Equilibria
      anking: String.raw`tag:#AK\_MCAT\_v2::#KhanAcademy::Foundation05-Chemical-Processes::F5.01-Acid-Base-Equilibria`,
      captainhook: String.raw`"deck:*Captain*Hook*A)*Chemistry*::10*Acids*and*Bases*"`,
      miledown: String.raw`tag:MileDown::General\_Chemistry::Acids\_and\_Bases`
    },
    "gc-11": { // General Chemistry Ch. 11: Chemical Processes: Titrations
      anking: String.raw`tag:#AK\_MCAT\_v2::#KhanAcademy::Foundation05-Chemical-Processes::F5.02-Titrations`,
      captainhook: String.raw`"deck:*Captain*Hook*A)*Chemistry*::10*Acids*and*Bases*"`,
      miledown: String.raw`tag:MileDown::General\_Chemistry::Acids\_and\_Bases::Buffers\_and\_Titrations`
    },
    "gc-12": { // General Chemistry Ch. 12: Chemical Processes: Solubility Equilibria
      anking: String.raw`tag:#AK\_MCAT\_v2::#KhanAcademy::Foundation05-Chemical-Processes::F5.03-Solubility-Equilibria`,
      captainhook: String.raw`"deck:*Captain*Hook*A)*Chemistry*::09*Solutions*"`,
      miledown: String.raw`tag:MileDown::General\_Chemistry::Solutions::Solubility`
    },
    "gc-13": { // General Chemistry Ch. 13: Chemical Processes: Thermochemistry
      anking: String.raw`tag:#AK\_MCAT\_v2::#KhanAcademy::Foundation05-Chemical-Processes::F5.22-Thermochemistry`,
      captainhook: String.raw`"deck:*Captain*Hook*A)*Chemistry*::07*Thermochemistry*"`,
      miledown: String.raw`tag:MileDown::General\_Chemistry::Thermochemistry`
    },
    "gc-14": { // General Chemistry Ch. 14: Physical Processes: Electrochemistry
      anking: String.raw`tag:#AK\_MCAT\_v2::#KhanAcademy::Foundation04-Physical-Processes::F4.14-Electrochemistry`,
      captainhook: String.raw`"deck:*Captain*Hook*A)*Chemistry*::12*Electrochemistry*"`,
      miledown: String.raw`tag:MileDown::General\_Chemistry::Electrochemistry`
    },
    "oc-1": { // Organic Chemistry Ch. 1: Chemical Processes: Separations & Purifications
      anking: String.raw`tag:#AK\_MCAT\_v2::#KhanAcademy::Foundation05-Chemical-Processes::F5.07-Separations-and-Purifications`,
      captainhook: String.raw`"deck:*Captain*Hook*B)*Organic*Chemistry*::12*Separations*and*Purifications*"`,
      miledown: String.raw`tag:MileDown::OChem::Separations`
    },
    "oc-2": { // Organic Chemistry Ch. 2: Chemical Processes: Alpha-Carbon Chemistry
      anking: String.raw`tag:#AK\_MCAT\_v2::#KhanAcademy::Foundation05-Chemical-Processes::F5.12-Alpha-Carbon-Chemistry`,
      captainhook: String.raw`"deck:*Captain*Hook*B)*Organic*Chemistry*::07*Aldehydes*and*Ketones*II*"`,
      miledown: String.raw`tag:MileDown::OChem::Aldehydes\_and\_Ketones`
    },
    "oc-3": { // Organic Chemistry Ch. 3: Chemical Processes: Aldehydes & Ketones
      anking: String.raw`tag:#AK\_MCAT\_v2::#KhanAcademy::Foundation05-Chemical-Processes::F5.13-Aldehydes-and-Ketones`,
      captainhook: String.raw`"deck:*Captain*Hook*B)*Organic*Chemistry*::06*Aldehydes*and*Ketones*I*"`,
      miledown: String.raw`tag:MileDown::OChem::Aldehydes\_and\_Ketones`
    },
    "oc-4": { // Organic Chemistry Ch. 4: Chemical Processes: Alcohols & Phenols
      anking: String.raw`tag:#AK\_MCAT\_v2::#KhanAcademy::Foundation05-Chemical-Processes::F5.14-Alcohols-and-Phenols`,
      captainhook: String.raw`"deck:*Captain*Hook*B)*Organic*Chemistry*::05*Alcohols*"`,
      miledown: String.raw`tag:MileDown::OChem::Alcohols`
    },
    "oc-5": { // Organic Chemistry Ch. 5: Chemical Processes: Carboxylic Acids
      anking: String.raw`tag:#AK\_MCAT\_v2::#KhanAcademy::Foundation05-Chemical-Processes::F5.15-Carboxylic-Acids`,
      captainhook: String.raw`"deck:*Captain*Hook*B)*Organic*Chemistry*::08*Carboxylic*Acids*"`,
      miledown: String.raw`tag:MileDown::OChem::Carboxylic\_Acids`
    },
    "oc-6": { // Organic Chemistry Ch. 6: Chemical Processes: Carboxylic Acid Derivatives
      anking: String.raw`tag:#AK\_MCAT\_v2::#KhanAcademy::Foundation05-Chemical-Processes::F5.16-Carboxylic-Acid-Derivatives`,
      captainhook: String.raw`"deck:*Captain*Hook*B)*Organic*Chemistry*::09*Carboxylic*Acid*Derivatives*"`,
      miledown: String.raw`tag:MileDown::OChem::Carboxylic\_Acid\_Derivatives`
    },
    "oc-7": { // Organic Chemistry Ch. 7: Physical Processes: Infrared & Ultraviolet/Visible Spectroscopy
      anking: String.raw`tag:#AK\_MCAT\_v2::#KhanAcademy::Foundation04-Physical-Processes::F4.17-Infrared-and-Ultraviolet-Visible-Spectroscopy`,
      captainhook: String.raw`"deck:*Captain*Hook*B)*Organic*Chemistry*::11*Spectroscopy*"`,
      miledown: String.raw`tag:MileDown::OChem::Spectroscopy::Infrared`
    },
    "oc-8": { // Organic Chemistry Ch. 8: Physical Processes: Proton Nuclear Magnetic Resonance
      anking: String.raw`tag:#AK\_MCAT\_v2::#KhanAcademy::Foundation04-Physical-Processes::F4.18-Proton-Nuclear-Magnetic-Resonance`,
      captainhook: String.raw`"deck:*Captain*Hook*B)*Organic*Chemistry*::11*Spectroscopy*"`,
      miledown: String.raw`tag:MileDown::OChem::Spectroscopy::NMR`
    },
    "bc-1": { // Biochemistry Ch. 1: Chemical Processes: Nucleic Acids, Lipids, & Carbohydrates
      anking: String.raw`tag:#AK\_MCAT\_v2::#KhanAcademy::Foundation05-Chemical-Processes::F5.08-Nucleic-Acids-Lipids-and-Carbohydrates`,
      captainhook: String.raw`"deck:*Captain*Hook*B)*Biochemistry*::06*DNA*and*Biotechnology*" OR "deck:*Captain*Hook*B)*Biochemistry*::05*Lipid*Structure*and*Function*" OR "deck:*Captain*Hook*B)*Biochemistry*::04*Carbohydrate*Structure*and*Function*"`,
      miledown: String.raw`tag:MileDown::Biochemistry::DNA\_and\_RNA::Nucleic\_Acids OR tag:MileDown::Biochemistry::Lipids OR tag:MileDown::Biochemistry::Carbohydrates`
    },
    "bc-2": { // Biochemistry Ch. 2: Chemical Processes: Amino Acids, Peptides, Proteins
      anking: String.raw`tag:#AK\_MCAT\_v2::#KhanAcademy::Foundation05-Chemical-Processes::F5.09-Amino-Acids-Peptides-Proteins`,
      captainhook: String.raw`"deck:*Captain*Hook*B)*Biochemistry*::01*Amino*Acids*Peptides*and*Proteins*"`,
      miledown: String.raw`tag:MileDown::Biochemistry::Amino\_Acids OR tag:MileDown::OChem::Amino\_Acids`
    },
    "bc-3": { // Biochemistry Ch. 3: Chemical Processes: Proteins
      anking: String.raw`tag:#AK\_MCAT\_v2::#KhanAcademy::Foundation05-Chemical-Processes::F5.10-Proteins`,
      captainhook: String.raw`"deck:*Captain*Hook*B)*Biochemistry*::01*Amino*Acids*Peptides*and*Proteins*"`,
      miledown: String.raw`tag:MileDown::Biochemistry::Proteins`
    },
    "bc-4": { // Biochemistry Ch. 4: Chemical Processes: Carbohydrates
      anking: String.raw`tag:#AK\_MCAT\_v2::#KhanAcademy::Foundation05-Chemical-Processes::F5.11-Carbohydrates`,
      captainhook: String.raw`"deck:*Captain*Hook*B)*Biochemistry*::04*Carbohydrate*Structure*and*Function*"`,
      miledown: String.raw`tag:MileDown::Biochemistry::Carbohydrates`
    },
    "bc-5": { // Biochemistry Ch. 5: Biomolecules: Amino Acids & Proteins
      anking: String.raw`tag:#AK\_MCAT\_v2::#KhanAcademy::Foundation01-Biomolecules::F1.01-Amino-Acids-and-Proteins`,
      captainhook: String.raw`"deck:*Captain*Hook*B)*Biochemistry*::01*Amino*Acids*Peptides*and*Proteins*"`,
      miledown: String.raw`tag:MileDown::Biochemistry::Amino\_Acids OR tag:MileDown::Biochemistry::Proteins`
    },
    "bc-6": { // Biochemistry Ch. 6: Biomolecules: Protein Analysis Techniques
      anking: String.raw`tag:#AK\_MCAT\_v2::#KhanAcademy::Foundation01-Biomolecules::F1.02-Protein-Analysis-Techniques`,
      captainhook: String.raw`"deck:*Captain*Hook*B)*Biochemistry*::03*Nonenzymatic*Protein*Function*and*Protein*Analysis*"`,
      miledown: String.raw`tag:MileDown::Biochemistry::Lab\_Techniques`
    },
    "bc-7": { // Biochemistry Ch. 7: Chemical Processes: Enzymes
      anking: String.raw`tag:#AK\_MCAT\_v2::#KhanAcademy::Foundation05-Chemical-Processes::F5.17-Enzymes`,
      captainhook: String.raw`"deck:*Captain*Hook*B)*Biochemistry*::02*Enzymes*"`,
      miledown: String.raw`tag:MileDown::Biochemistry::Enzymes`
    },
    "bc-8": { // Biochemistry Ch. 8: Chemical Processes: Reaction Rates
      anking: String.raw`tag:#AK\_MCAT\_v2::#KhanAcademy::Foundation05-Chemical-Processes::F5.18-Reaction-Rates`,
      captainhook: String.raw`"deck:*Captain*Hook*A)*Chemistry*::05*Chemical*Kinetics*"`,
      miledown: String.raw`tag:MileDown::General\_Chemistry::Chemical\_Kinetics`
    },
    "bc-9": { // Biochemistry Ch. 9: Chemical Processes: Equilibrium
      anking: String.raw`tag:#AK\_MCAT\_v2::#KhanAcademy::Foundation05-Chemical-Processes::F5.19-Equilibrium`,
      captainhook: String.raw`"deck:*Captain*Hook*A)*Chemistry*::06*Equilibrium*"`,
      miledown: String.raw`tag:MileDown::General\_Chemistry::Equilibrium`
    },
    "bc-10": { // Biochemistry Ch. 10: Chemical Processes: Bioenergetics
      anking: String.raw`tag:#AK\_MCAT\_v2::#KhanAcademy::Foundation05-Chemical-Processes::F5.20-Bioenergetics`,
      captainhook: String.raw`"deck:*Captain*Hook*B)*Biochemistry*::12*Bioenergetics*and*Regulation*of*Metabolism*"`,
      miledown: String.raw`tag:MileDown::General\_Chemistry::Thermochemistry`
    },
    "bc-11": { // Biochemistry Ch. 11: Chemical Processes: Thermodynamics
      anking: String.raw`tag:#AK\_MCAT\_v2::#KhanAcademy::Foundation05-Chemical-Processes::F5.21-Thermodynamics`,
      captainhook: String.raw`"deck:*Captain*Hook*A)*Chemistry*::07*Thermochemistry*"`,
      miledown: String.raw`tag:MileDown::General\_Chemistry::Thermochemistry`
    },
    "bc-12": { // Biochemistry Ch. 12: Biomolecules: Enzyme Structure & Function
      anking: String.raw`tag:#AK\_MCAT\_v2::#KhanAcademy::Foundation01-Biomolecules::F1.03-Enzyme-Structure-and-Function`,
      captainhook: String.raw`"deck:*Captain*Hook*B)*Biochemistry*::02*Enzymes*"`,
      miledown: String.raw`tag:MileDown::Biochemistry::Enzymes`
    },
    "bc-13": { // Biochemistry Ch. 13: Biomolecules: Enzyme Kinetics
      anking: String.raw`tag:#AK\_MCAT\_v2::#KhanAcademy::Foundation01-Biomolecules::F1.04-Enzyme-Kinetics`,
      captainhook: String.raw`"deck:*Captain*Hook*B)*Biochemistry*::02*Enzymes*"`,
      miledown: String.raw`tag:MileDown::Biochemistry::Enzymes::Kinetics`
    },
    "bc-14": { // Biochemistry Ch. 14: Biomolecules: Bioenergetics
      anking: String.raw`tag:#AK\_MCAT\_v2::#KhanAcademy::Foundation01-Biomolecules::F1.13-Principles-of-Bioenergetics`,
      captainhook: String.raw`"deck:*Captain*Hook*B)*Biochemistry*::12*Bioenergetics*and*Regulation*of*Metabolism*"`,
      miledown: String.raw`tag:MileDown::Biochemistry::Metabolism::Regulation`
    },
    "bc-15": { // Biochemistry Ch. 15: Biomolecules: Overview of Metabolism
      anking: String.raw`tag:#AK\_MCAT\_v2::#KhanAcademy::Foundation01-Biomolecules::F1.14-Overview-of-Metabolism`,
      captainhook: String.raw`"deck:*Captain*Hook*B)*Biochemistry*::12*Bioenergetics*and*Regulation*of*Metabolism*"`,
      miledown: String.raw`tag:MileDown::Biochemistry::Metabolism::Regulation`
    },
    "bc-16": { // Biochemistry Ch. 16: Biomolecules: Carbohydrates
      anking: String.raw`tag:#AK\_MCAT\_v2::#KhanAcademy::Foundation01-Biomolecules::F1.15-Carbohydrates`,
      captainhook: String.raw`"deck:*Captain*Hook*B)*Biochemistry*::04*Carbohydrate*Structure*and*Function*"`,
      miledown: String.raw`tag:MileDown::Biochemistry::Carbohydrates OR tag:MileDown::Biochemistry::Metabolism::Monosaccharides`
    },
    "bc-17": { // Biochemistry Ch. 17: Biomolecules: Carbohydrate Metabolism
      anking: String.raw`tag:#AK\_MCAT\_v2::#KhanAcademy::Foundation01-Biomolecules::F1.16-Carbohydrate-Metabolism`,
      captainhook: String.raw`"deck:*Captain*Hook*B)*Biochemistry*::09*Carbohydrate*Metabolism*I*"`,
      miledown: String.raw`tag:MileDown::Biochemistry::Metabolism::Glycolysis OR tag:MileDown::Biochemistry::Metabolism::Gluconeogenesis OR tag:MileDown::Biochemistry::Metabolism::Glycogen OR tag:MileDown::Biochemistry::Metabolism::Pentose\_Phosphate\_Pathway OR tag:MileDown::Biochemistry::Metabolism::Glucose\_Transport`
    },
    "bc-18": { // Biochemistry Ch. 18: Biomolecules: Krebs (Citric Acid) Cycle and Oxidative Phosphorylation
      anking: String.raw`tag:#AK\_MCAT\_v2::#KhanAcademy::Foundation01-Biomolecules::F1.17-Krebs-Citric-Acid-Cycle-and-Oxidative-Phosphorylation`,
      captainhook: String.raw`"deck:*Captain*Hook*B)*Biochemistry*::10*Carbohydrate*Metabolism*II*Aerobic*Respiration*"`,
      miledown: String.raw`tag:MileDown::Biochemistry::Metabolism::Acetyl-CoA OR tag:MileDown::Biochemistry::Metabolism::Citric\_Acid\_Cycle OR tag:MileDown::Biochemistry::Metabolism::ETC`
    },
    "bc-19": { // Biochemistry Ch. 19: Biomolecules: Fat & Protein Metabolism
      anking: String.raw`tag:#AK\_MCAT\_v2::#KhanAcademy::Foundation01-Biomolecules::F1.18-Fat-and-Protein-Metabolism`,
      captainhook: String.raw`"deck:*Captain*Hook*B)*Biochemistry*::11*Lipid*and*Amino*Acid*Metabolism*"`,
      miledown: String.raw`tag:MileDown::Biochemistry::Lipid\_Metabolism OR tag:MileDown::Biochemistry::Metabolism::Fatty\_Acids OR tag:MileDown::Biochemistry::Metabolism::Urea\_Cycle`
    },
    "bio-1": { // Biology Ch. 1: Biomolecules: DNA and DNA Replication
      anking: String.raw`tag:#AK\_MCAT\_v2::#KhanAcademy::Foundation01-Biomolecules::F1.05-DNA-and-DNA-Replication`,
      captainhook: String.raw`"deck:*Captain*Hook*B)*Biochemistry*::06*DNA*and*Biotechnology*"`,
      miledown: String.raw`tag:MileDown::Biochemistry::DNA\_and\_RNA::Structure OR tag:MileDown::Biochemistry::DNA\_and\_RNA::Replication OR tag:MileDown::Biochemistry::DNA\_and\_RNA::Repair`
    },
    "bio-2": { // Biology Ch. 2: Biomolecules: Transcription & Translation
      anking: String.raw`tag:#AK\_MCAT\_v2::#KhanAcademy::Foundation01-Biomolecules::F1.06-Transcription-and-Translation`,
      captainhook: String.raw`"deck:*Captain*Hook*B)*Biochemistry*::07*RNA*and*the*Genetic*Code*"`,
      miledown: String.raw`tag:MileDown::Biochemistry::DNA\_and\_RNA::Transcription OR tag:MileDown::Biochemistry::DNA\_and\_RNA::Translation OR tag:MileDown::Biochemistry::DNA\_and\_RNA::RNA\_Processing`
    },
    "bio-3": { // Biology Ch. 3: Biomolecules: Gene Control
      anking: String.raw`tag:#AK\_MCAT\_v2::#KhanAcademy::Foundation01-Biomolecules::F1.07-Gene-Control`,
      captainhook: String.raw`"deck:*Captain*Hook*B)*Biochemistry*::07*RNA*and*the*Genetic*Code*"`,
      miledown: String.raw`tag:MileDown::Biochemistry::DNA\_and\_RNA::Transcription OR tag:MileDown::Biochemistry::DNA\_and\_RNA::Chromosomes`
    },
    "bio-4": { // Biology Ch. 4: Biomolecules: Genetic Mutations
      anking: String.raw`tag:#AK\_MCAT\_v2::#KhanAcademy::Foundation01-Biomolecules::F1.08-Genetic-Mutations`,
      captainhook: String.raw`"deck:*Captain*Hook*A)*Biology*::12*Genetics*and*Evolution*"`,
      miledown: String.raw`tag:MileDown::Biology::Genetics OR tag:MileDown::Biochemistry::DNA\_and\_RNA::Repair`
    },
    "bio-5": { // Biology Ch. 5: Biomolecules: Mendelian Genetics
      anking: String.raw`tag:#AK\_MCAT\_v2::#KhanAcademy::Foundation01-Biomolecules::F1.09-Mendelian-Genetics-and-Related-Concepts`,
      captainhook: String.raw`"deck:*Captain*Hook*A)*Biology*::12*Genetics*and*Evolution*"`,
      miledown: String.raw`tag:MileDown::Biology::Genetics`
    },
    "bio-6": { // Biology Ch. 6: Biomolecules: Meiosis & Inheritance
      anking: String.raw`tag:#AK\_MCAT\_v2::#KhanAcademy::Foundation01-Biomolecules::F1.10-Meiosis-and-Other-Inheritance-Factors`,
      captainhook: String.raw`"deck:*Captain*Hook*A)*Biology*::02*Reproduction*" OR "deck:*Captain*Hook*A)*Biology*::12*Genetics*and*Evolution*"`,
      miledown: String.raw`tag:MileDown::Biology::Reproduction::Meiosis OR tag:MileDown::Biology::Genetics`
    },
    "bio-7": { // Biology Ch. 7: Biomolecules: Evolution & Population Dynamics
      anking: String.raw`tag:#AK\_MCAT\_v2::#KhanAcademy::Foundation01-Biomolecules::F1.12-Evolution-and-Population-Dynamics`,
      captainhook: String.raw`"deck:*Captain*Hook*A)*Biology*::12*Genetics*and*Evolution*"`,
      miledown: String.raw`tag:MileDown::Biology::Evolution`
    },
    "bio-8": { // Biology Ch. 8: Biomolecules: DNA Technology
      anking: String.raw`tag:#AK\_MCAT\_v2::#KhanAcademy::Foundation01-Biomolecules::F1.11-DNA-Technology`,
      captainhook: String.raw`"deck:*Captain*Hook*B)*Biochemistry*::06*DNA*and*Biotechnology*"`,
      miledown: String.raw`tag:MileDown::Biochemistry::Lab\_Techniques`
    },
    "bio-9": { // Biology Ch. 9: Cells: Cell Membrane Overview
      anking: String.raw`tag:#AK\_MCAT\_v2::#KhanAcademy::Foundation02-Cells::F2.01-Cell-Membrane-Overview`,
      captainhook: String.raw`"deck:*Captain*Hook*B)*Biochemistry*::08*Biological*Membranes*"`,
      miledown: String.raw`tag:MileDown::Biochemistry::Cell\_Membrane`
    },
    "bio-10": { // Biology Ch. 10: Cells: Transport Across a Cell Membrane
      anking: String.raw`tag:#AK\_MCAT\_v2::#KhanAcademy::Foundation02-Cells::F2.02-Transport-Across-a-Cell-Membrane`,
      captainhook: String.raw`"deck:*Captain*Hook*B)*Biochemistry*::08*Biological*Membranes*"`,
      miledown: String.raw`tag:MileDown::Biochemistry::Cell\_Membrane`
    },
    "bio-11": { // Biology Ch. 11: Cells: Cell-Cell Interactions
      anking: String.raw`tag:#AK\_MCAT\_v2::#KhanAcademy::Foundation02-Cells::F2.03-Cell-Cell-Interactions`,
      captainhook: String.raw`"deck:*Captain*Hook*A)*Biology*::01*The*Cell*"`,
      miledown: String.raw`tag:MileDown::Biochemistry::Biosignaling`
    },
    "bio-12": { // Biology Ch. 12: Cells: Eukaryotic Cells
      anking: String.raw`tag:#AK\_MCAT\_v2::#KhanAcademy::Foundation02-Cells::F2.04-Eukaryotic-Cells`,
      captainhook: String.raw`"deck:*Captain*Hook*A)*Biology*::01*The*Cell*"`,
      miledown: String.raw`tag:MileDown::Biology::Parts\_of\_Cell`
    },
    "bio-13": { // Biology Ch. 13: Cells: Cytoskeleton
      anking: String.raw`tag:#AK\_MCAT\_v2::#KhanAcademy::Foundation02-Cells::F2.05-Cytoskeleton`,
      captainhook: String.raw`"deck:*Captain*Hook*A)*Biology*::01*The*Cell*"`,
      miledown: String.raw`tag:MileDown::Biology::Cytoskeleton`
    },
    "bio-14": { // Biology Ch. 14: Cells: Prokaryotes & Bacteria
      anking: String.raw`tag:#AK\_MCAT\_v2::#KhanAcademy::Foundation02-Cells::F2.06-Prokaryotes-Bacteria`,
      captainhook: String.raw`"deck:*Captain*Hook*A)*Biology*::01*The*Cell*"`,
      miledown: String.raw`tag:MileDown::Biology::Viruses\_and\_Bacteria`
    },
    "bio-15": { // Biology Ch. 15: Cells: Viruses
      anking: String.raw`tag:#AK\_MCAT\_v2::#KhanAcademy::Foundation02-Cells::F2.07-Viruses`,
      captainhook: String.raw`"deck:*Captain*Hook*A)*Biology*::01*The*Cell*"`,
      miledown: String.raw`tag:MileDown::Biology::Viruses\_and\_Bacteria`
    },
    "bio-16": { // Biology Ch. 16: Cells: Cellular Division
      anking: String.raw`tag:#AK\_MCAT\_v2::#KhanAcademy::Foundation02-Cells::F2.08-Cellular-Division`,
      captainhook: String.raw`"deck:*Captain*Hook*A)*Biology*::02*Reproduction*"`,
      miledown: String.raw`tag:MileDown::Biology::Reproduction::Cell\_Cycle OR tag:MileDown::Biology::Reproduction::Mitosis`
    },
    "bio-17": { // Biology Ch. 17: Cells: Meiosis & Embryology
      anking: String.raw`tag:#AK\_MCAT\_v2::#KhanAcademy::Foundation02-Cells::F2.09-Meiosis-and-Embryology`,
      captainhook: String.raw`"deck:*Captain*Hook*A)*Biology*::02*Reproduction*" OR "deck:*Captain*Hook*A)*Biology*::03*Embryogenesis*and*Development*"`,
      miledown: String.raw`tag:MileDown::Biology::Reproduction::Meiosis OR tag:MileDown::Biology::Development`
    },
    "bio-18": { // Biology Ch. 18: Cells: Cellular Development
      anking: String.raw`tag:#AK\_MCAT\_v2::#KhanAcademy::Foundation02-Cells::F2.10-Cellular-Development`,
      captainhook: String.raw`"deck:*Captain*Hook*A)*Biology*::03*Embryogenesis*and*Development*"`,
      miledown: String.raw`tag:MileDown::Biology::Development`
    },
    "bio-19": { // Biology Ch. 19: Organ Systems: The Nervous System
      anking: String.raw`tag:#AK\_MCAT\_v2::#KhanAcademy::Foundation03-Organ-Systems::F3.01-The-Nervous-System`,
      captainhook: String.raw`"deck:*Captain*Hook*A)*Biology*::04*The*Nervous*System*"`,
      miledown: String.raw`tag:MileDown::Biology::Nervous\_System::Structure`
    },
    "bio-20": { // Biology Ch. 20: Organ Systems: Neural Cells
      anking: String.raw`tag:#AK\_MCAT\_v2::#KhanAcademy::Foundation03-Organ-Systems::F3.02-Neural-Cells`,
      captainhook: String.raw`"deck:*Captain*Hook*A)*Biology*::04*The*Nervous*System*"`,
      miledown: String.raw`tag:MileDown::Biology::Nervous\_System::Structure`
    },
    "bio-21": { // Biology Ch. 21: Organ Systems: Neuron Membrane Potentials
      anking: String.raw`tag:#AK\_MCAT\_v2::#KhanAcademy::Foundation03-Organ-Systems::F3.03-Neuron-Membrane-Potentials`,
      captainhook: String.raw`"deck:*Captain*Hook*A)*Biology*::04*The*Nervous*System*"`,
      miledown: String.raw`tag:MileDown::Biology::Nervous\_System::Action\_Potential`
    },
    "bio-22": { // Biology Ch. 22: Organ Systems: Neuronal Synapses
      anking: String.raw`tag:#AK\_MCAT\_v2::#KhanAcademy::Foundation03-Organ-Systems::F3.04-Neuronal-Synapses`,
      captainhook: String.raw`"deck:*Captain*Hook*A)*Biology*::04*The*Nervous*System*"`,
      miledown: String.raw`tag:MileDown::Biology::Nervous\_System::Synapses OR tag:MileDown::Biology::Nervous\_System::Neurotransmitters`
    },
    "bio-23": { // Biology Ch. 23: Organ Systems: Endocrine System & Hormonal Regulation
      anking: String.raw`tag:#AK\_MCAT\_v2::#KhanAcademy::Foundation03-Organ-Systems::F3.05-Endocrine-System-and-Hormonal-Regulation`,
      captainhook: String.raw`"deck:*Captain*Hook*A)*Biology*::05*The*Endocrine*System*"`,
      miledown: String.raw`tag:MileDown::Biology::Endocrine`
    },
    "bio-24": { // Biology Ch. 24: Organ Systems: Hormonal Regulation of Metabolism
      anking: String.raw`tag:#AK\_MCAT\_v2::#KhanAcademy::Foundation03-Organ-Systems::F3.12-Hormonal-Regulation-of-Metabolism`,
      captainhook: String.raw`"deck:*Captain*Hook*A)*Biology*::05*The*Endocrine*System*" OR "deck:*Captain*Hook*B)*Biochemistry*::12*Bioenergetics*and*Regulation*of*Metabolism*"`,
      miledown: String.raw`tag:MileDown::Biology::Endocrine OR tag:MileDown::Biochemistry::Metabolism::Regulation`
    },
    "bio-25": { // Biology Ch. 25: Organ Systems: Gastrointestinal System
      anking: String.raw`tag:#AK\_MCAT\_v2::#KhanAcademy::Foundation03-Organ-Systems::F3.11-Gastrointestinal-System`,
      captainhook: String.raw`"deck:*Captain*Hook*A)*Biology*::09*The*Digestive*System*"`,
      miledown: String.raw`tag:MileDown::Biology::Digestion`
    },
    "bio-26": { // Biology Ch. 26: Organ Systems: Hematologic System
      anking: String.raw`tag:#AK\_MCAT\_v2::#KhanAcademy::Foundation03-Organ-Systems::F3.08-Hematologic-System`,
      captainhook: String.raw`"deck:*Captain*Hook*A)*Biology*::07*The*Cardiovascular*System*"`,
      miledown: String.raw`tag:MileDown::Biology::Cardiovascular\_System`
    },
    "bio-27": { // Biology Ch. 27: Organ Systems: Lymphatic System
      anking: String.raw`tag:#AK\_MCAT\_v2::#KhanAcademy::Foundation03-Organ-Systems::F3.09-Lymphatic-System`,
      captainhook: String.raw`"deck:*Captain*Hook*A)*Biology*::08*The*Immune*System*"`,
      miledown: String.raw`tag:MileDown::Biology::Immune\_System::Lymphatic\_System`
    },
    "bio-28": { // Biology Ch. 28: Organ Systems: Immune System
      anking: String.raw`tag:#AK\_MCAT\_v2::#KhanAcademy::Foundation03-Organ-Systems::F3.10-Immune-System`,
      captainhook: String.raw`"deck:*Captain*Hook*A)*Biology*::08*The*Immune*System*"`,
      miledown: String.raw`tag:MileDown::Biology::Immune\_System`
    },
    "bio-29": { // Biology Ch. 29: Organ Systems: Circulatory System
      anking: String.raw`tag:#AK\_MCAT\_v2::#KhanAcademy::Foundation03-Organ-Systems::F3.07-Circulatory-System`,
      captainhook: String.raw`"deck:*Captain*Hook*A)*Biology*::07*The*Cardiovascular*System*"`,
      miledown: String.raw`tag:MileDown::Biology::Cardiovascular\_System`
    },
    "bio-30": { // Biology Ch. 30: Organ Systems: Respiratory System
      anking: String.raw`tag:#AK\_MCAT\_v2::#KhanAcademy::Foundation03-Organ-Systems::F3.06-Respiratory-System`,
      captainhook: String.raw`"deck:*Captain*Hook*A)*Biology*::06*The*Respiratory*System*"`,
      miledown: String.raw`tag:MileDown::Biology::Respiratory\_System`
    },
    "bio-31": { // Biology Ch. 31: Organ Systems: Renal System
      anking: String.raw`tag:#AK\_MCAT\_v2::#KhanAcademy::Foundation03-Organ-Systems::F3.13-Renal-System`,
      captainhook: String.raw`"deck:*Captain*Hook*A)*Biology*::10*Homeostasis*"`,
      miledown: String.raw`tag:MileDown::Biology::Kidney`
    },
    "bio-32": { // Biology Ch. 32: Organ Systems: Renal Regulation of Blood Pressure
      anking: String.raw`tag:#AK\_MCAT\_v2::#KhanAcademy::Foundation03-Organ-Systems::F3.14-Renal-Regulation-of-Blood-Pressure`,
      captainhook: String.raw`"deck:*Captain*Hook*A)*Biology*::10*Homeostasis*"`,
      miledown: String.raw`tag:MileDown::Biology::Kidney`
    },
    "bio-33": { // Biology Ch. 33: Organ Systems: Reproductive System
      anking: String.raw`tag:#AK\_MCAT\_v2::#KhanAcademy::Foundation03-Organ-Systems::F3.15-Reproductive-System`,
      captainhook: String.raw`"deck:*Captain*Hook*A)*Biology*::02*Reproduction*"`,
      miledown: String.raw`tag:MileDown::Biology::Reproduction::Organs OR tag:MileDown::Biology::Reproduction::Hormones`
    },
    "bio-34": { // Biology Ch. 34: Organ Systems: Muscular System
      anking: String.raw`tag:#AK\_MCAT\_v2::#KhanAcademy::Foundation03-Organ-Systems::F3.16-Muscular-System`,
      captainhook: String.raw`"deck:*Captain*Hook*A)*Biology*::11*Musculoskeletal*System*"`,
      miledown: String.raw`tag:MileDown::Biology::Muscular\_System`
    },
    "bio-35": { // Biology Ch. 35: Organ Systems: Skeletal System
      anking: String.raw`tag:#AK\_MCAT\_v2::#KhanAcademy::Foundation03-Organ-Systems::F3.17-Skeletal-System`,
      captainhook: String.raw`"deck:*Captain*Hook*A)*Biology*::11*Musculoskeletal*System*"`,
      miledown: String.raw`tag:MileDown::Biology::Muscular\_System::Bones`
    },
    "bio-36": { // Biology Ch. 36: Organ Systems: Integumentary System
      anking: String.raw`tag:#AK\_MCAT\_v2::#KhanAcademy::Foundation03-Organ-Systems::F3.18-Integumentary-System`,
      captainhook: String.raw`"deck:*Captain*Hook*A)*Biology*::10*Homeostasis*"`,
      miledown: String.raw`tag:MileDown::Biology::Skin OR tag:MileDown::Biology::Thermoregulation`
    },
    "ps-1": { // Behavioral Ch. 1: Processing the Environment: Sensory Perception
      anking: String.raw`tag:#AK\_MCAT\_v2::#KhanAcademy::Foundation06-Processing-the-Environment::F6.01-Sensory-Perception`,
      captainhook: String.raw`"deck:*Captain*Hook*Pankow*6A*"`,
      miledown: String.raw`tag:MileDown::Behavioral::Sensation\_and\_Perception`
    },
    "ps-2": { // Behavioral Ch. 2: Processing the Environment: Sight (Vision)
      anking: String.raw`tag:#AK\_MCAT\_v2::#KhanAcademy::Foundation06-Processing-the-Environment::F6.02-Sight-Vision`,
      captainhook: String.raw`"deck:*Captain*Hook*Pankow*6A*"`,
      miledown: String.raw`tag:MileDown::Behavioral::Sensation\_and\_Perception::Visual`
    },
    "ps-3": { // Behavioral Ch. 3: Processing the Environment: Sound (Audition)
      anking: String.raw`tag:#AK\_MCAT\_v2::#KhanAcademy::Foundation06-Processing-the-Environment::F6.03-Sound-Audition`,
      captainhook: String.raw`"deck:*Captain*Hook*Pankow*6A*"`,
      miledown: String.raw`tag:MileDown::Behavioral::Sensation\_and\_Perception::Auditory`
    },
    "ps-4": { // Behavioral Ch. 4: Processing the Environment: Somatosensation
      anking: String.raw`tag:#AK\_MCAT\_v2::#KhanAcademy::Foundation06-Processing-the-Environment::F6.04-Somatosensation`,
      captainhook: String.raw`"deck:*Captain*Hook*Pankow*6A*"`,
      miledown: String.raw`tag:MileDown::Behavioral::Sensation\_and\_Perception::Pain`
    },
    "ps-5": { // Behavioral Ch. 5: Processing the Environment: Taste (Gustation) & Smell (Olfaction)
      anking: String.raw`tag:#AK\_MCAT\_v2::#KhanAcademy::Foundation06-Processing-the-Environment::F6.05-Taste-Gustation-and-Smell-Olfaction`,
      captainhook: String.raw`"deck:*Captain*Hook*Pankow*6A*"`,
      miledown: String.raw`tag:MileDown::Behavioral::Sensation\_and\_Perception::Taste OR tag:MileDown::Behavioral::Sensation\_and\_Perception::Smell`
    },
    "ps-6": { // Behavioral Ch. 6: Processing the Environment: Sleep & Consciousness
      anking: String.raw`tag:#AK\_MCAT\_v2::#KhanAcademy::Foundation06-Processing-the-Environment::F6.06-Sleep-and-Consciousness`,
      captainhook: String.raw`"deck:*Captain*Hook*Pankow*6B*"`,
      miledown: String.raw`tag:MileDown::Behavioral::Consciousness::Sleep`
    },
    "ps-7": { // Behavioral Ch. 7: Processing the Environment: Drug Dependence
      anking: String.raw`tag:#AK\_MCAT\_v2::#KhanAcademy::Foundation06-Processing-the-Environment::F6.07-Drug-Dependence`,
      captainhook: String.raw`"deck:*Captain*Hook*Pankow*6B*"`,
      miledown: String.raw`tag:MileDown::Behavioral::Consciousness::Drugs`
    },
    "ps-8": { // Behavioral Ch. 8: Processing the Environment: Attention
      anking: String.raw`tag:#AK\_MCAT\_v2::#KhanAcademy::Foundation06-Processing-the-Environment::F6.08-Attention`,
      captainhook: String.raw`"deck:*Captain*Hook*Pankow*6B*"`,
      miledown: String.raw`tag:MileDown::Behavioral::Attention`
    },
    "ps-9": { // Behavioral Ch. 9: Processing the Environment: Memory
      anking: String.raw`tag:#AK\_MCAT\_v2::#KhanAcademy::Foundation06-Processing-the-Environment::F6.09-Memory`,
      captainhook: String.raw`"deck:*Captain*Hook*Pankow*6B*"`,
      miledown: String.raw`tag:MileDown::Behavioral::Memory`
    },
    "ps-10": { // Behavioral Ch. 10: Processing the Environment: Cognition
      anking: String.raw`tag:#AK\_MCAT\_v2::#KhanAcademy::Foundation06-Processing-the-Environment::F6.10-Cognition`,
      captainhook: String.raw`"deck:*Captain*Hook*Pankow*6B*"`,
      miledown: String.raw`tag:MileDown::Behavioral::Cognition OR tag:MileDown::Behavioral::Intelligence`
    },
    "ps-11": { // Behavioral Ch. 11: Processing the Environment: Language
      anking: String.raw`tag:#AK\_MCAT\_v2::#KhanAcademy::Foundation06-Processing-the-Environment::F6.11-Language`,
      captainhook: String.raw`"deck:*Captain*Hook*Pankow*6B*"`,
      miledown: String.raw`tag:MileDown::Behavioral::Language`
    },
    "ps-12": { // Behavioral Ch. 12: Processing the Environment: Emotion
      anking: String.raw`tag:#AK\_MCAT\_v2::#KhanAcademy::Foundation06-Processing-the-Environment::F6.12-Emotion`,
      captainhook: String.raw`"deck:*Captain*Hook*Pankow*6C*"`,
      miledown: String.raw`tag:MileDown::Behavioral::Emotion OR tag:MileDown::Behavioral::Emotions`
    },
    "ps-13": { // Behavioral Ch. 13: Processing the Environment: Stress
      anking: String.raw`tag:#AK\_MCAT\_v2::#KhanAcademy::Foundation06-Processing-the-Environment::F6.13-Stress`,
      captainhook: String.raw`"deck:*Captain*Hook*Pankow*6C*"`,
      miledown: String.raw`tag:MileDown::Behavioral::Stress`
    },
    "ps-14": { // Behavioral Ch. 14: Behavior: Biological Basis of Behavior (Nervous System)
      anking: String.raw`tag:#AK\_MCAT\_v2::#KhanAcademy::Foundation07-Behavior::F7.01-Biological-Basis-of-Behavior-Nervous-System`,
      captainhook: String.raw`"deck:*Captain*Hook*Pankow*7A*"`,
      miledown: String.raw`tag:MileDown::Behavioral::Biology\_and\_Behavior`
    },
    "ps-15": { // Behavioral Ch. 15: Behavior: Human Development
      anking: String.raw`tag:#AK\_MCAT\_v2::#KhanAcademy::Foundation07-Behavior::F7.02-Human-Development`,
      captainhook: String.raw`"deck:*Captain*Hook*Pankow*7A*"`,
      miledown: String.raw`tag:MileDown::Behavioral::Development`
    },
    "ps-16": { // Behavioral Ch. 16: Behavior: Behavior & Genetics
      anking: String.raw`tag:#AK\_MCAT\_v2::#KhanAcademy::Foundation07-Behavior::F7.03-Behavior-and-Genetics`,
      captainhook: String.raw`"deck:*Captain*Hook*Pankow*7A*"`,
      miledown: String.raw`tag:MileDown::Behavioral::Biology\_and\_Behavior`
    },
    "ps-17": { // Behavioral Ch. 17: Behavior: Motivation & Attitudes
      anking: String.raw`tag:#AK\_MCAT\_v2::#KhanAcademy::Foundation07-Behavior::F7.04-Motivation-and-Attitudes`,
      captainhook: String.raw`"deck:*Captain*Hook*Pankow*7A*"`,
      miledown: String.raw`tag:MileDown::Behavioral::Motivation OR tag:MileDown::Behavioral::Attitudes`
    },
    "ps-18": { // Behavioral Ch. 18: Behavior: Theories of Personality
      anking: String.raw`tag:#AK\_MCAT\_v2::#KhanAcademy::Foundation07-Behavior::F7.05-Theories-of-Personality`,
      captainhook: String.raw`"deck:*Captain*Hook*Pankow*7A*"`,
      miledown: String.raw`tag:MileDown::Behavioral::Personality`
    },
    "ps-19": { // Behavioral Ch. 19: Behavior: Psychological Disorders
      anking: String.raw`tag:#AK\_MCAT\_v2::#KhanAcademy::Foundation07-Behavior::F7.06-Psychological-Disorders`,
      captainhook: String.raw`"deck:*Captain*Hook*Pankow*7A*"`,
      miledown: String.raw`tag:MileDown::Behavioral::Disorders`
    },
    "ps-20": { // Behavioral Ch. 20: Behavior: Social Psychology
      anking: String.raw`tag:#AK\_MCAT\_v2::#KhanAcademy::Foundation07-Behavior::F7.07-Social-Psychology`,
      captainhook: String.raw`"deck:*Captain*Hook*Pankow*7B*"`,
      miledown: String.raw`tag:MileDown::Behavioral::Social::Social\_Behavior`
    },
    "ps-21": { // Behavioral Ch. 21: Behavior: Normative & Non-Normative Behavior
      anking: String.raw`tag:#AK\_MCAT\_v2::#KhanAcademy::Foundation07-Behavior::F7.08-Normative-and-Non-Normative-Behavior`,
      captainhook: String.raw`"deck:*Captain*Hook*Pankow*7B*"`,
      miledown: String.raw`tag:MileDown::Behavioral::Social::Socialization`
    },
    "ps-22": { // Behavioral Ch. 22: Behavior: Learning
      anking: String.raw`tag:#AK\_MCAT\_v2::#KhanAcademy::Foundation07-Behavior::F7.09-Learning`,
      captainhook: String.raw`"deck:*Captain*Hook*Pankow*7C*"`,
      miledown: String.raw`tag:MileDown::Behavioral::Learning`
    },
    "ps-23": { // Behavioral Ch. 23: Behavior: Theories of Attitude & Behavior Change
      anking: String.raw`tag:#AK\_MCAT\_v2::#KhanAcademy::Foundation07-Behavior::F7.10-Theories-of-Attitude-and-Behavior-Change`,
      captainhook: String.raw`"deck:*Captain*Hook*Pankow*7C*"`,
      miledown: String.raw`tag:MileDown::Behavioral::Attitudes`
    },
    "ps-24": { // Behavioral Ch. 24: Individuals & Society: Self-Identity
      anking: String.raw`tag:#AK\_MCAT\_v2::#KhanAcademy::Foundation08-Individuals-and-Society::F8.01-Self-Identity`,
      captainhook: String.raw`"deck:*Captain*Hook*Pankow*8A*8B*"`,
      miledown: String.raw`tag:MileDown::Behavioral::Identity`
    },
    "ps-25": { // Behavioral Ch. 25: Individuals & Society: Perception, Prejudice, & Bias
      anking: String.raw`tag:#AK\_MCAT\_v2::#KhanAcademy::Foundation08-Individuals-and-Society::F8.02-Perception-Prejudice-and-Bias`,
      captainhook: String.raw`"deck:*Captain*Hook*Pankow*8A*8B*"`,
      miledown: String.raw`tag:MileDown::Behavioral::Social::Social\_Perception`
    },
    "ps-26": { // Behavioral Ch. 26: Individuals & Society: Attributing Behavior to Persons or Situations
      anking: String.raw`tag:#AK\_MCAT\_v2::#KhanAcademy::Foundation08-Individuals-and-Society::F8.03-Attributing-Behavior-to-Persons-or-Situations`,
      captainhook: String.raw`"deck:*Captain*Hook*Pankow*8A*8B*"`,
      miledown: String.raw`tag:MileDown::Behavioral::Social::Social\_Perception`
    },
    "ps-27": { // Behavioral Ch. 27: Individuals & Society: Social Behavior
      anking: String.raw`tag:#AK\_MCAT\_v2::#KhanAcademy::Foundation08-Individuals-and-Society::F8.04-Social-Behavior`,
      captainhook: String.raw`"deck:*Captain*Hook*Pankow*8C::Social*Behavior*"`,
      miledown: String.raw`tag:MileDown::Behavioral::Social::Social\_Behavior`
    },
    "ps-28": { // Behavioral Ch. 28: Individuals & Society: Social Interactions
      anking: String.raw`tag:#AK\_MCAT\_v2::#KhanAcademy::Foundation08-Individuals-and-Society::F8.05-Social-Interactions`,
      captainhook: String.raw`"deck:*Captain*Hook*Pankow*8C::Social*Interactions*"`,
      miledown: String.raw`tag:MileDown::Behavioral::Social::Social\_Interaction`
    },
    "ps-29": { // Behavioral Ch. 29: Individuals & Society: Self-Presentation & Interacting with Others
      anking: String.raw`tag:#AK\_MCAT\_v2::#KhanAcademy::Foundation08-Individuals-and-Society::F8.06-Self-Presentation-and-Interacting-with-Others`,
      captainhook: String.raw`"deck:*Captain*Hook*Pankow*8C::Social*Interactions*"`,
      miledown: String.raw`tag:MileDown::Behavioral::Social::Social\_Interaction`
    },
    "ps-30": { // Behavioral Ch. 30: Individuals & Society: Biological Explanations of Social Behavior in Animals
      anking: String.raw`tag:#AK\_MCAT\_v2::#KhanAcademy::Foundation08-Individuals-and-Society::F8.07-Biological-Explanations-of-Social-Behavior-in-Animals`,
      captainhook: String.raw`"deck:*Captain*Hook*Pankow*8C::Biological*Explanations*of*Social*behavior*in*Animals*"`,
      miledown: String.raw`tag:MileDown::Behavioral::Social::Social\_Behavior`
    },
    "ps-31": { // Behavioral Ch. 31: Individuals & Society: Discrimination
      anking: String.raw`tag:#AK\_MCAT\_v2::#KhanAcademy::Foundation08-Individuals-and-Society::F8.08-Discrimination`,
      captainhook: String.raw`"deck:*Captain*Hook*Pankow*8C*"`,
      miledown: String.raw`tag:MileDown::Behavioral::Social::Social\_Perception`
    },
    "ps-32": { // Behavioral Ch. 32: Society & Culture: Social Structures
      anking: String.raw`tag:#AK\_MCAT\_v2::#KhanAcademy::Foundation09-Society-and-Culture::F9.01-Social-Structures`,
      captainhook: String.raw`"deck:*Captain*Hook*Pankow*9A::Social*Structures*"`,
      miledown: String.raw`tag:MileDown::Behavioral::Social::Social\_Structure`
    },
    "ps-33": { // Behavioral Ch. 33: Society & Culture: Demographics
      anking: String.raw`tag:#AK\_MCAT\_v2::#KhanAcademy::Foundation09-Society-and-Culture::F9.02-Demographics`,
      captainhook: String.raw`"deck:*Captain*Hook*Pankow*9B::Demographics*"`,
      miledown: String.raw`tag:MileDown::Behavioral::Social::Social\_Structure`
    },
    "ps-34": { // Behavioral Ch. 34: Society & Culture: Culture
      anking: String.raw`tag:#AK\_MCAT\_v2::#KhanAcademy::Foundation09-Society-and-Culture::F9.03-Culture`,
      captainhook: String.raw`"deck:*Captain*Hook*Pankow*9B::Culture*"`,
      miledown: String.raw`tag:MileDown::Behavioral::Social::Socialization`
    },
    "ps-35": { // Behavioral Ch. 35: Social Inequality
      anking: String.raw`tag:#AK\_MCAT\_v2::#KhanAcademy::Foundation10-Social-Inequality::F10.01-Social-Inequality`,
      captainhook: String.raw`"deck:*Captain*Hook*Pankow*9C::Social*Inequality*"`,
      miledown: String.raw`tag:MileDown::Behavioral::Social::Social\_Stratification`
    }
  }
};
