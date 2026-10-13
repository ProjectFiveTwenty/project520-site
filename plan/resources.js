/* Project 520 — content review resources.
   Copied from the "MCAT Master Sheet" resource tabs (Kaplan_27-28, UWorld, KhanAcademy).
   Row format: [chapter, topic, tier, classicOrder, integratedOrder, hybridOrder]
   Tier: I = Intro, M = Intermediate, A = Advanced.
   Anki searches for each chapter live in anki-tags.js, keyed by the chapter ID (e.g. "gc-5"). */
(function () {
  const RAW = {
    kaplan: {
      label: "Kaplan",
      subjects: [
        ["General Chemistry", [
          [1, "Atomic Structure", "I", 13, 1, 1],
          [2, "Periodic Table", "I", 14, 7, 3],
          [3, "Bonding & Chemical Interactions", "I", 15, 13, 5],
          [4, "Compounds & Stoichiometry", "I", 16, 19, 8],
          [5, "Chemical Kinetics", "M", 17, 25, 10],
          [6, "Equilibrium", "M", 18, 31, 13],
          [7, "Thermochemistry", "M", 19, 37, 15],
          [8, "The Gas Phase", "M", 20, 43, 17],
          [9, "Solutions", "A", 21, 49, 20],
          [10, "Acids & Bases", "A", 22, 55, 22],
          [11, "Oxidation-Reduction", "A", 23, 61, 25],
          [12, "Electrochemistry", "A", 24, 67, 27]
        ]],
        ["Biology", [
          [1, "The Cell", "I", 50, 5, 58],
          [2, "Reproduction", "I", 51, 11, 59],
          [3, "Embryogenesis & Development", "I", 52, 17, 61],
          [4, "Nervous System", "I", 53, 23, 62],
          [5, "Endocrine System", "M", 54, 29, 63],
          [6, "Respiratory System", "M", 55, 35, 64],
          [7, "Cardiovascular System", "M", 56, 41, 65],
          [8, "Immune System", "M", 57, 47, 67],
          [9, "Digestive System", "A", 58, 53, 68],
          [10, "Homeostasis", "A", 59, 59, 69],
          [11, "Musculoskeletal System", "A", 60, 65, 70],
          [12, "Genetics & Evolution", "A", 25, 71, 71]
        ]],
        ["Organic Chemistry", [
          [1, "Nomenclature", "I", 26, 3, 29],
          [2, "Isomers", "I", 27, 9, 32],
          [3, "Bonding", "I", 28, 15, 34],
          [4, "Analyzing Organic Reactions", "I", 29, 21, 37],
          [5, "Alcohols", "M", 30, 27, 39],
          [6, "Aldehydes and Ketones I", "M", 31, 33, 41],
          [7, "Aldehydes and Ketones II", "M", 32, 39, 44],
          [8, "Carboxylic Acids", "M", 33, 45, 46],
          [9, "Carboxylic Acid Derivative", "A", 34, 51, 49],
          [10, "Nitrogen & Phosphorous Compounds", "A", 35, 57, 51],
          [11, "Spectroscopy", "A", 36, 63, 53],
          [12, "Separations & Purifications", "A", 37, 69, 56]
        ]],
        ["Biochemistry", [
          [1, "Amino Acids, Peptides, & Proteins", "I", 38, 4, 30],
          [2, "Enzymes", "I", 39, 10, 33],
          [3, "Nonenzymatic Protein Function", "I", 40, 16, 35],
          [4, "Carbohydrates", "I", 41, 22, 38],
          [5, "Lipids", "M", 42, 28, 40],
          [6, "DNA & Biotechnology", "M", 43, 34, 42],
          [7, "RNA & Genetic Code", "M", 44, 40, 45],
          [8, "Biological Membranes", "M", 45, 46, 47],
          [9, "Carbohydrate Metabolism I", "A", 46, 52, 50],
          [10, "Carbohydrate Metabolism II", "A", 47, 58, 52],
          [11, "Lipid & Amino Acid Metabolism", "A", 48, 64, 54],
          [12, "Bioenergetics & Regulation of Metabolism", "A", 49, 70, 57]
        ]],
        ["Behavioral", [
          [1, "Biology & Behavior", "I", 61, 6, 6],
          [2, "Sensation & Perception", "I", 62, 12, 12],
          [3, "Learning & Memory", "I", 63, 18, 18],
          [4, "Cognition, Consciousness, & Language", "I", 64, 24, 24],
          [5, "Motivation, Emotion, Stress", "M", 65, 30, 31],
          [6, "Identity & Personality", "M", 66, 36, 36],
          [7, "Psychological Disorders", "M", 67, 42, 43],
          [8, "Social Processes, Attitudes, & Behavior", "M", 68, 48, 48],
          [9, "Social Interaction", "A", 69, 54, 55],
          [10, "Social Thinking", "A", 70, 60, 60],
          [11, "Social Structure & Demographics", "A", 71, 66, 66],
          [12, "Social Stratification", "A", 72, 72, 72]
        ]],
        ["Physics", [
          [1, "Kinematics & Dynamics", "I", 2, 2, 2],
          [2, "Work & Energy", "I", 3, 8, 4],
          [3, "Thermodynamics", "I", 4, 14, 7],
          [4, "Fluids", "M", 5, 26, 9],
          [5, "Electrostatics & Magnetism", "M", 6, 32, 11],
          [6, "Circuits", "M", 7, 38, 14],
          [7, "Waves & Sound", "M", 8, 44, 16],
          [8, "Light & Optics", "A", 9, 50, 19],
          [9, "Atomic & Nuclear Phenomena", "A", 10, 56, 21],
          [10, "Mathematics", "I", 1, 20, 23],
          [11, "Reasoning & Research", "A", 11, 62, 26],
          [12, "Statistics", "A", 12, 68, 28]
        ]]
      ]
    },

    uworld: {
      label: "UWorld",
      subjects: [
        ["Biology", [
          [1, "DNA Structure, Synthesis, & Repair", "I", 43, 5, 74],
          [2, "Gene Expression", "I", 44, 9, 76],
          [3, "Designing and Interpreting Experiments", "I", 45, 14, 78],
          [4, "Biotechnology", "I", 46, 19, 79],
          [5, "Eukaryotic Cells", "I", 47, 24, 81],
          [6, "Prokaryotes & Viruses", "I", 48, 28, 83],
          [7, "Genetics", "I", 49, 34, 84],
          [8, "Evolution", "M", 50, 40, 86],
          [9, "Reproductive Systems", "M", 51, 44, 88],
          [10, "Pregnancy, Development, Aging", "M", 52, 49, 90],
          [11, "Endocrine System", "M", 53, 56, 91],
          [12, "Nervous System", "M", 54, 59, 93],
          [13, "Circulation", "M", 55, 65, 95],
          [14, "Respiration", "M", 56, 72, 97],
          [15, "Digestion", "A", 57, 78, 98],
          [16, "Excretion", "A", 58, 82, 100],
          [17, "Muscular System", "A", 59, 88, 102],
          [18, "Skeletal System", "A", 60, 94, 104],
          [19, "Skin System", "A", 61, 100, 105],
          [20, "Immune System", "A", 62, 107, 107]
        ]],
        ["Biochemistry", [
          [1, "Amino Acids", "I", 29, 3, 25],
          [2, "Peptides & Proteins", "I", 30, 13, 29],
          [3, "Nonenzymatic Protein Activity", "I", 31, 23, 32],
          [4, "Enzyme Activity", "I", 32, 32, 36],
          [5, "Enzyme Kinetics", "M", 33, 38, 39],
          [6, "Enzyme Regulation", "M", 34, 46, 43],
          [7, "Carbohydrates", "M", 35, 54, 46],
          [8, "Nucleotides & Nucleic Acids", "M", 36, 62, 50],
          [9, "Lipids", "M", 37, 70, 53],
          [10, "Catabolism & Anabolism", "A", 38, 76, 57],
          [11, "Carbohydrate Metabolism", "A", 39, 84, 60],
          [12, "Aerobic Respiration", "A", 40, 91, 64],
          [13, "Noncarbohydrate Metabolism", "A", 41, 98, 67],
          [14, "Purification & Characterization", "A", 42, 105, 71]
        ]],
        ["General Chemistry", [
          [1, "Structure & Properties of Atoms", "I", 6, 1, 1],
          [2, "Chemical Bonding, Reactions & Stoichiometry", "I", 7, 17, 4],
          [3, "Thermodynamics", "I", 8, 31, 6],
          [4, "Kinetics", "M", 9, 36, 10],
          [5, "Chemical Equilibrium", "M", 10, 53, 11],
          [6, "Gas Laws", "M", 11, 68, 15],
          [7, "Solutions", "A", 12, 74, 18],
          [8, "Acid-Base Chemistry", "A", 13, 90, 20],
          [9, "Redox Reactions & Electrochemistry", "A", 14, 103, 24]
        ]],
        ["Organic Chemistry", [
          [1, "Chemical Bonding", "I", 15, 4, 26],
          [2, "Structure of Organic Molecules", "I", 16, 11, 30],
          [3, "Isomers", "I", 17, 18, 33],
          [4, "Organic Nomenclature", "I", 18, 26, 37],
          [5, "Overview of Organic Reactions", "I", 19, 33, 40],
          [6, "Hydrocarbons", "M", 20, 39, 44],
          [7, "Alkyl Halides, Ethers, & Sulfur-Containing Groups", "M", 21, 47, 47],
          [8, "Alcohols", "M", 22, 55, 51],
          [9, "Aldehydes & Ketones", "M", 23, 63, 54],
          [10, "Carboxylic Acids", "M", 24, 71, 58],
          [11, "Carboxylic Acid Derivatives", "A", 25, 77, 61],
          [12, "Amines & Amides", "A", 26, 86, 65],
          [13, "Separations & Purification Methods", "A", 27, 96, 68],
          [14, "Spectroscopy & Analysis", "A", 28, 106, 72]
        ]],
        ["Physics", [
          [1, "Motion, Force, & Energy", "I", 1, 2, 3],
          [2, "Fluid Dynamics", "M", 2, 37, 8],
          [3, "Electricity & Magnetism", "M", 3, 69, 13],
          [4, "Waves, Sound, & Light", "A", 4, 75, 17],
          [5, "Thermodynamics & Gases", "A", 5, 104, 22]
        ]],
        ["Behavioral", [
          [1, "Theoretical Approach in Psychology", "I", 63, 6, 2],
          [2, "Research in Psychology", "I", 64, 7, 5],
          [3, "Statistics in Psychology", "I", 65, 8, 7],
          [4, "The Nervous & Endocrine System", "I", 66, 10, 9],
          [5, "Heredity & the Environment", "I", 67, 12, 12],
          [6, "Human Physiological Development", "I", 68, 15, 14],
          [7, "Studying the Brain", "I", 69, 16, 16],
          [8, "Sensation", "I", 70, 20, 19],
          [9, "Perception", "I", 71, 21, 21],
          [10, "Vision", "I", 72, 22, 23],
          [11, "Hearing", "I", 73, 25, 27],
          [12, "Other Senses", "I", 74, 27, 28],
          [13, "Consciousness & Sleep", "I", 75, 29, 31],
          [14, "Consciousness-Altering Substances", "I", 76, 30, 34],
          [15, "Attention", "I", 77, 35, 35],
          [16, "Non-Associative Learning", "M", 78, 41, 38],
          [17, "Associative Learning", "M", 79, 42, 41],
          [18, "Observational Learning", "M", 80, 43, 42],
          [19, "Memory", "M", 81, 45, 45],
          [20, "Cognition", "M", 82, 48, 48],
          [21, "Problem-Solving & Decision Making", "M", 83, 50, 49],
          [22, "Language", "M", 84, 51, 52],
          [23, "Motivation", "M", 85, 52, 55],
          [24, "Emotion", "M", 86, 57, 56],
          [25, "Attitudes", "M", 87, 58, 59],
          [26, "Personality Theories", "M", 88, 60, 62],
          [27, "Stress", "M", 89, 61, 63],
          [28, "Theories of Attitude & Behavior Change", "M", 90, 64, 66],
          [29, "Psychological Disorders", "M", 91, 66, 69],
          [30, "The Biological Underpinnings of Psychological & Neurological Disorders", "M", 92, 67, 70],
          [31, "Treatment of Psychological & Neurological Disorders", "M", 93, 73, 73],
          [32, "Theoretical Approach in Sociology", "A", 94, 79, 75],
          [33, "Research in Sociology", "A", 95, 80, 77],
          [34, "Culture", "A", 96, 81, 80],
          [35, "Identities & Identity Formation", "A", 97, 83, 82],
          [36, "Interaction with Others", "A", 98, 85, 85],
          [37, "Attraction, Aggression, & Attachment", "A", 99, 87, 87],
          [38, "Social Behavior in Animals", "A", 100, 89, 89],
          [39, "Attributing Behavior to Others", "A", 101, 92, 92],
          [40, "Prejudice, Stereotypes, & Discrimination", "A", 102, 93, 94],
          [41, "Group Processes & Behavior", "A", 103, 95, 96],
          [42, "Normative & Non-normative Behavior", "A", 104, 97, 99],
          [43, "Social Institutions", "A", 105, 99, 101],
          [44, "Demographic Structure of Society", "A", 106, 101, 103],
          [45, "Social Class & Inequality", "A", 107, 102, 106],
          [46, "Social Change", "A", 108, 108, 108]
        ]]
      ]
    },

    khanacademy: {
      label: "Khan Academy",
      subjects: [
        ["Physics", [
          [1, "Physical Processes: Vectors & Scalars", "I", 1, 2, 1],
          [2, "Physical Processes: Translational Motion & Calculations", "I", 2, 12, 3],
          [3, "Physical Processes: Force & Newton's Laws of Motion", "I", 3, 20, 6],
          [4, "Physical Processes: Vector Analysis & Forces acting on an Object", "I", 4, 30, 9],
          [5, "Physical Processes: Work & Energy", "I", 5, 38, 12],
          [6, "Physical Processes: Fluids at Rest", "I", 6, 46, 13],
          [7, "Physical Processes: Fluids in Motion", "M", 7, 52, 16],
          [8, "Physical Processes: Gas Phase", "M", 8, 59, 18],
          [9, "Physical Processes: Kinetic Molecular Theory of Gases", "M", 9, 65, 21],
          [10, "Physical Processes: Electrostatics", "M", 10, 71, 23],
          [11, "Physical Processes: Current & Resistance", "M", 11, 77, 25],
          [12, "Physical Processes: Capacitors", "M", 12, 83, 28],
          [13, "Physical Processes: Magnetism", "A", 13, 89, 31],
          [14, "Physical Processes: Sound", "A", 14, 98, 34],
          [15, "Physical Processes: Light & Electromagnetic Radiation", "A", 15, 105, 35],
          [16, "Physical Processes: Thin Lenses", "A", 16, 112, 38],
          [17, "Physical Processes: Spherical Mirrors", "A", 17, 119, 40],
          [18, "Physical Processes: Reflection & Refraction", "A", 18, 126, 43]
        ]],
        ["General Chemistry", [
          [1, "Physical Processes: Atomic Nucleus", "I", 19, 1, 2],
          [2, "Physical Processes: Electronic Structure", "I", 20, 15, 5],
          [3, "Physical Processes: Periodic Table", "I", 21, 24, 8],
          [4, "Physical Processes: Stoichiometry", "I", 22, 36, 10],
          [5, "Physical Processes: Balancing Chemical Equations", "I", 23, 45, 14],
          [6, "Chemical Processes: Dot Structures", "M", 24, 51, 17],
          [7, "Chemical Processes: Stereochemistry", "M", 25, 63, 20],
          [8, "Chemical Processes: Covalent Bonds", "M", 26, 75, 24],
          [9, "Physical Processes: Redox Reactions", "M", 27, 82, 27],
          [10, "Chemical Processes: Acid/Base Equilibria", "A", 28, 88, 29],
          [11, "Chemical Processes: Titrations", "A", 29, 100, 32],
          [12, "Chemical Processes: Solubility Equilibria", "A", 30, 109, 36],
          [13, "Chemical Processes: Thermochemistry", "A", 31, 118, 39],
          [14, "Physical Processes: Electrochemistry", "A", 32, 125, 42]
        ]],
        ["Organic Chemistry", [
          [1, "Chemical Processes: Separations & Purifications", "I", 33, 3, 46],
          [2, "Chemical Processes: Alpha-Carbon Chemistry", "I", 34, 25, 51],
          [3, "Chemical Processes: Aldehydes & Ketones", "I", 35, 47, 55],
          [4, "Chemical Processes: Alcohols & Phenols", "M", 36, 53, 60],
          [5, "Chemical Processes: Carboxylic Acids", "M", 37, 69, 65],
          [6, "Chemical Processes: Carboxylic Acid Derivatives", "M", 38, 84, 69],
          [7, "Physical Processes: Infrared & Ultraviolet/Visible Spectroscopy", "A", 39, 90, 73],
          [8, "Physical Processes: Proton Nuclear Magnetic Resonance", "A", 40, 127, 79]
        ]],
        ["Biochemistry", [
          [1, "Chemical Processes: Nucleic Acids, Lipids, & Carbohydrates", "I", 41, 4, 44],
          [2, "Chemical Processes: Amino Acids, Peptides, Proteins", "I", 42, 10, 47],
          [3, "Chemical Processes: Proteins", "I", 43, 18, 49],
          [4, "Chemical Processes: Carbohydrates", "I", 44, 26, 50],
          [5, "Biomolecules: Amino Acids & Proteins", "I", 45, 33, 53],
          [6, "Biomolecules: Protein Analysis Techniques", "I", 46, 41, 54],
          [7, "Chemical Processes: Enzymes", "I", 47, 48, 57],
          [8, "Chemical Processes: Reaction Rates", "M", 48, 54, 58],
          [9, "Chemical Processes: Equilibrium", "M", 49, 60, 61],
          [10, "Chemical Processes: Bioenergetics", "M", 50, 66, 62],
          [11, "Chemical Processes: Thermodynamics", "M", 51, 72, 64],
          [12, "Biomolecules: Enzyme Structure & Function", "M", 52, 78, 66],
          [13, "Biomolecules: Enzyme Kinetics", "M", 53, 85, 68],
          [14, "Biomolecules: Bioenergetics", "A", 54, 91, 70],
          [15, "Biomolecules: Overview of Metabolism", "A", 55, 99, 72],
          [16, "Biomolecules: Carbohydrates", "A", 56, 106, 75],
          [17, "Biomolecules: Carbohydrate Metabolism", "A", 57, 113, 76],
          [18, "Biomolecules: Krebs (Citric Acid) Cycle and Oxidative Phosphorylation", "A", 58, 120, 77],
          [19, "Biomolecules: Fat & Protein Metabolism", "A", 59, 128, 80]
        ]],
        ["Biology", [
          [1, "Biomolecules: DNA and DNA Replication", "I", 60, 5, 81],
          [2, "Biomolecules: Transcription & Translation", "I", 61, 7, 83],
          [3, "Biomolecules: Gene Control", "I", 62, 9, 84],
          [4, "Biomolecules: Genetic Mutations", "I", 63, 11, 86],
          [5, "Biomolecules: Mendelian Genetics", "I", 64, 14, 87],
          [6, "Biomolecules: Meiosis & Inheritance", "I", 65, 16, 88],
          [7, "Biomolecules: Evolution & Population Dynamics", "I", 66, 19, 90],
          [8, "Biomolecules: DNA Technology", "I", 67, 22, 91],
          [9, "Cells: Cell Membrane Overview", "I", 68, 23, 92],
          [10, "Cells: Transport Across a Cell Membrane", "I", 69, 28, 94],
          [11, "Cells: Cell-Cell Interactions", "I", 70, 29, 95],
          [12, "Cells: Eukaryotic Cells", "I", 71, 32, 96],
          [13, "Cells: Cytoskeleton", "I", 72, 35, 98],
          [14, "Cells: Prokaryotes & Bacteria", "I", 73, 37, 99],
          [15, "Cells: Viruses", "I", 74, 40, 101],
          [16, "Cells: Cellular Division", "I", 75, 42, 102],
          [17, "Cells: Meiosis & Embryology", "I", 76, 44, 103],
          [18, "Cells: Cellular Development", "I", 77, 49, 105],
          [19, "Organ Systems: The Nervous System", "M", 78, 55, 106],
          [20, "Organ Systems: Neural Cells", "M", 79, 61, 107],
          [21, "Organ Systems: Neuron Membrane Potentials", "M", 80, 67, 109],
          [22, "Organ Systems: Neuronal Synapses", "M", 81, 73, 110],
          [23, "Organ Systems: Endocrine System & Hormonal Regulation", "M", 82, 79, 112],
          [24, "Organ Systems: Hormonal Regulation of Metabolism", "M", 83, 86, 113],
          [25, "Organ Systems: Gastrointestinal System", "A", 84, 92, 114],
          [26, "Organ Systems: Hematologic System", "A", 85, 94, 116],
          [27, "Organ Systems: Lymphatic System", "A", 86, 96, 117],
          [28, "Organ Systems: Immune System", "A", 87, 101, 118],
          [29, "Organ Systems: Circulatory System", "A", 88, 103, 120],
          [30, "Organ Systems: Respiratory System", "A", 89, 107, 121],
          [31, "Organ Systems: Renal System", "A", 90, 110, 122],
          [32, "Organ Systems: Renal Regulation of Blood Pressure", "A", 91, 114, 124],
          [33, "Organ Systems: Reproductive System", "A", 92, 116, 125],
          [34, "Organ Systems: Muscular System", "A", 93, 121, 127],
          [35, "Organ Systems: Skeletal System", "A", 94, 123, 128],
          [36, "Organ Systems: Integumentary System", "A", 95, 129, 129]
        ]],
        ["Behavioral", [
          [1, "Processing the Environment: Sensory Perception", "I", 96, 6, 4],
          [2, "Processing the Environment: Sight (Vision)", "I", 97, 8, 7],
          [3, "Processing the Environment: Sound (Audition)", "I", 98, 13, 11],
          [4, "Processing the Environment: Somatosensation", "I", 99, 17, 15],
          [5, "Processing the Environment: Taste (Gustation) & Smell (Olfaction)", "I", 100, 21, 19],
          [6, "Processing the Environment: Sleep & Consciousness", "I", 101, 27, 22],
          [7, "Processing the Environment: Drug Dependence", "I", 102, 31, 26],
          [8, "Processing the Environment: Attention", "I", 103, 34, 30],
          [9, "Processing the Environment: Memory", "I", 104, 39, 33],
          [10, "Processing the Environment: Cognition", "I", 105, 43, 37],
          [11, "Processing the Environment: Language", "I", 106, 50, 41],
          [12, "Processing the Environment: Emotion", "M", 107, 56, 45],
          [13, "Processing the Environment: Stress", "M", 108, 57, 48],
          [14, "Behavior: Biological Basis of Behavior (Nervous System)", "M", 109, 58, 52],
          [15, "Behavior: Human Development", "M", 110, 62, 56],
          [16, "Behavior: Behavior & Genetics", "M", 111, 64, 59],
          [17, "Behavior: Motivation & Attitudes", "M", 112, 68, 63],
          [18, "Behavior: Theories of Personality", "M", 113, 70, 67],
          [19, "Behavior: Psychological Disorders", "M", 114, 74, 71],
          [20, "Behavior: Social Psychology", "M", 115, 76, 74],
          [21, "Behavior: Normative & Non-Normative Behavior", "M", 116, 80, 78],
          [22, "Behavior: Learning", "M", 117, 81, 82],
          [23, "Behavior: Theories of Attitude & Behavior Change", "M", 118, 87, 85],
          [24, "Individuals & Society: Self-Identity", "A", 119, 93, 89],
          [25, "Individuals & Society: Perception, Prejudice, & Bias", "A", 120, 95, 93],
          [26, "Individuals & Society: Attributing Behavior to Persons or Situations", "A", 121, 97, 97],
          [27, "Individuals & Society: Social Behavior", "A", 122, 102, 100],
          [28, "Individuals & Society: Social Interactions", "A", 123, 104, 104],
          [29, "Individuals & Society: Self-Presentation & Interacting with Others", "A", 124, 108, 108],
          [30, "Individuals & Society: Biological Explanations of Social Behavior in Animals", "A", 125, 111, 111],
          [31, "Individuals & Society: Discrimination", "A", 126, 115, 115],
          [32, "Society & Culture: Social Structures", "A", 127, 117, 119],
          [33, "Society & Culture: Demographics", "A", 128, 122, 123],
          [34, "Society & Culture: Culture", "A", 129, 124, 126],
          [35, "Social Inequality", "A", 130, 130, 130]
        ]]
      ]
    }
  };

  const TIER = { I: "Intro", M: "Intermediate", A: "Advanced" };
  // Short, stable chapter IDs (e.g. "gc-5") used to record progress. Don't change these
  // when re-ordering chapters; order lives in the three order numbers.
  const CODE = { "General Chemistry": "gc", "Physics": "ph", "Organic Chemistry": "oc", "Biochemistry": "bc", "Biology": "bio", "Behavioral": "ps" };
  const RESOURCES = {};
  for (const [key, r] of Object.entries(RAW)) {
    const chapters = [];
    for (const [subject, rows] of r.subjects) {
      for (const [ch, topic, tier, classic, integrated, hybrid] of rows) {
        const id = CODE[subject] + "-" + ch;
        const tags = ((window.P520_ANKI_TAGS || {})[key] || {})[id] || {};
        chapters.push({
          id, subject, ch, topic, tier: TIER[tier],
          order: { Classic: classic, Integrated: integrated, Hybrid: hybrid },
          label: subject + " Ch. " + ch + ": " + topic,
          tags,                         // { anking, captainhook, miledown } Anki searches
          tag: tags.anking || ""        // AnKing search (kept for older code)
        });
      }
    }
    RESOURCES[key] = { key, label: r.label, chapters };
  }
  window.P520_RESOURCES = RESOURCES;
})();
