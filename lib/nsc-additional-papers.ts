import { ExamPaper } from '@/types/quiz';

export const BUSINESS_STUDIES_EXAM: ExamPaper = {
  id: 'dbe-business-studies-p1-2024',
  subjectId: 'business-studies',
  year: 2024,
  session: 'November NSC',
  title: 'Business Studies Paper 1 - National Senior Certificate',
  subtitle: 'Business Environments, PESTLE/SWOT Strategies & King IV Corporate Governance',
  category: 'nsc-paper',
  totalMarks: 50,
  timeLimitMinutes: 60,
  instructions: [
    'This question paper consists of structured questions covering Business Environments, King IV principles, and CSR.',
    'Answer ALL questions using concise, coherent business terminology.',
    'Where applicable, provide clear examples relevant to South African commercial environments.'
  ],
  annexures: [
    {
      id: 'annexure-bs-1',
      title: 'ANNEXURE BS-1: Scenario - Khaya Logistics (Pty) Ltd',
      subtitle: 'Macro and Market Environment Challenges in the Transport Sector',
      type: 'financial-statement',
      notes: [
        'Khaya Logistics operates a fleet of 45 heavy freight vehicles across SADC trade routes.',
        'Rising national fuel surcharges and high interest rates have compressed profit margins by 18%.',
        'Frequent port backlogs and border post delays have caused customer delivery dissatisfaction.',
        'The Board of Directors is adopting King IV recommendations on transparency and stakeholder inclusivity.'
      ]
    }
  ],
  questions: [
    {
      id: 'bs-q1-1',
      numberStr: 'QUESTION 1.1',
      topic: 'Business Environments: Macro Environment (PESTLE Analysis)',
      subtopic: 'Impact of economic and technological forces',
      marks: 6,
      scenario: 'Refer to ANNEXURE BS-1. Khaya Logistics faces rising diesel prices, high SARB interest rates, and border post transit congestion.',
      prompt: 'Identify the TWO PESTLE macro-environmental factors evident in the scenario, and recommend ONE practical management strategy for Khaya Logistics to mitigate EACH factor.',
      type: 'qualitative',
      annexureId: 'annexure-bs-1',
      hint: 'Economic factors relate to fuel costs and interest rates; technological/infrastructure factors relate to logistics tracking and border clearance.',
      fullSolutionExplanation: `Official DBE Marking Guidelines:
1. Economic Environment:
   - Impact: Rising diesel fuel surcharges and elevated repo interest rates squeeze profit margins and increase vehicle lease financing costs.
   - Strategy: Implement fuel-hedging contracts, install telematics eco-driving route optimization, or renegotiate fleet finance terms.
2. Technological / Physical Infrastructure Environment:
   - Impact: Severe port congestion and border post administrative delays lead to delivery penalties and client attrition.
   - Strategy: Digitize customs pre-clearance documents via electronic EDI, partner with bonded warehouses, or adopt real-time GPS predictive tracking.`,
      markingGuide: [
        { stepNumber: 1, description: 'Identification of Economic factor + strategy', working: 'Economic factor and mitigation strategy', markCode: 'A', markValue: 3 },
        { stepNumber: 2, description: 'Identification of Technological/Infrastructure factor + strategy', working: 'Technological factor and mitigation strategy', markCode: 'A', markValue: 3 }
      ],
      qualitativeRubric: {
        modelAnswer: 'The two PESTLE factors are Economic and Technological/Infrastructure. For the Economic factor (high fuel prices and interest rates), Khaya Logistics can invest in fuel-efficient fleet engines, install route-planning telematics, or hedge fuel contracts. For the Technological/Infrastructure factor (border delays), they can implement digitized customs clearance and real-time shipment tracking to bypass bottlenecks.',
        keyPoints: [
          'Identifies Economic factor: rising fuel costs, inflation, interest rates',
          'Recommends economic mitigation: telematics route planning, fuel hedging, bulk purchasing',
          'Identifies Technological/Infrastructure factor: border delays, port backlogs',
          'Recommends technological mitigation: electronic customs pre-clearance, automated tracking'
        ],
        acceptedKeywords: ['economic', 'technological', 'fuel', 'interest rates', 'hedging', 'telematics', 'border', 'tracking', 'logistics', 'strategy']
      }
    },
    {
      id: 'bs-q1-2',
      numberStr: 'QUESTION 1.2',
      topic: 'Corporate Governance: King IV Code',
      subtopic: 'Ethical leadership, transparency, and accountability',
      marks: 4,
      scenario: 'The Board of Khaya Logistics wants to ensure full compliance with the King IV Code of Corporate Governance to restore shareholder trust.',
      prompt: 'Discuss TWO King IV principles of corporate governance that the Board of Directors must apply to promote ethical conduct and stakeholder accountability.',
      type: 'qualitative',
      hint: 'Think of Transparency, Accountability, Fairness, and Responsibility (the quadruple bottom line).',
      fullSolutionExplanation: `Official DBE Marking Guidelines:
1. Transparency: The board must disclose complete, accurate, and timely financial and operational information to shareholders and stakeholders, ensuring no concealed conflicts of interest or hidden liabilities.
2. Accountability: Board members and executive directors must take full legal and ethical ownership of corporate decisions, subjecting operations to independent internal and external audit scrutiny.`,
      markingGuide: [
        { stepNumber: 1, description: 'Explanation of Transparency principle with board application', working: 'Transparency disclosure and open reporting', markCode: 'A', markValue: 2 },
        { stepNumber: 2, description: 'Explanation of Accountability principle with board application', working: 'Accountability and audit oversight', markCode: 'A', markValue: 2 }
      ],
      qualitativeRubric: {
        modelAnswer: 'The board must implement Transparency by openly publishing verified financial reports and environmental sustainability audits without withholding adverse findings. Secondly, they must enforce Accountability by accepting direct responsibility for management outcomes and allowing independent audits of executive remuneration and fleet safety.',
        keyPoints: [
          'Transparency: open disclosure of financial results, risks, and stakeholder impacts',
          'Accountability: taking responsibility for corporate actions and submitting to audits',
          'Promotes trust, prevents corruption, and aligns with King IV principles'
        ],
        acceptedKeywords: ['transparency', 'accountability', 'fairness', 'responsibility', 'king iv', 'audit', 'disclosure', 'ethics']
      }
    },
    {
      id: 'bs-q2-1',
      numberStr: 'QUESTION 2.1',
      topic: 'Corporate Social Responsibility (CSR)',
      subtopic: 'Benefits of CSR investments for local communities and enterprises',
      marks: 4,
      scenario: 'Khaya Logistics plans to allocate 2% of annual net profit to driver wellness clinics and local road safety education in surrounding townships.',
      prompt: 'Explain TWO business benefits of Corporate Social Responsibility (CSR) initiatives for Khaya Logistics, beyond pure charity.',
      type: 'qualitative',
      hint: 'Consider company brand reputation, recruitment/retention, BBBEE scorecard ratings, and community goodwill.',
      fullSolutionExplanation: `Official DBE Marking Guidelines:
1. Enhanced brand reputation and customer loyalty: Consumers and commercial clients prefer partnering with socially conscious businesses, creating sustainable competitive advantage.
2. Improved employee morale and retention: Driver health clinics reduce absenteeism, road accidents, and fleet downtime while improving staff productivity and safety records.
3. BBBEE scorecard compliance: Socio-economic development points improve preferential procurement rankings when tendering for corporate contracts.`,
      markingGuide: [
        { stepNumber: 1, description: 'Enhanced brand reputation and client loyalty', working: 'Brand equity and competitive edge', markCode: 'A', markValue: 2 },
        { stepNumber: 2, description: 'Reduced absenteeism / improved employee health or BBBEE points', working: 'Staff productivity and tender qualification', markCode: 'A', markValue: 2 }
      ],
      qualitativeRubric: {
        modelAnswer: 'Investing in CSR builds a positive corporate brand reputation that attracts major corporate clients who value ethical supply chains. Additionally, funding driver wellness clinics directly decreases driver absenteeism, prevents road accidents, improves fleet productivity, and earns valuable BBBEE points for government tenders.',
        keyPoints: [
          'Builds brand equity, public goodwill, and client loyalty',
          'Lowers driver absenteeism, accident liability, and health-related downtime',
          'Assists with BBBEE scorecard compliance for commercial tenders'
        ],
        acceptedKeywords: ['reputation', 'brand', 'loyalty', 'absenteeism', 'bbbee', 'tenders', 'goodwill', 'community', 'productivity']
      }
    }
  ]
};

export const ENGLISH_EXAM: ExamPaper = {
  id: 'dbe-english-p1-2024',
  subjectId: 'english',
  year: 2024,
  session: 'November NSC',
  title: 'English Home Language / FAL Paper 1 - NSC',
  subtitle: 'Critical Reading, Advertising Techniques, Cartoon Semiotics & Language Editing',
  category: 'nsc-paper',
  totalMarks: 50,
  timeLimitMinutes: 60,
  instructions: [
    'This question paper consists of structured sections: Comprehension, Summary, and Language Structures.',
    'Answer ALL questions in clear, grammatically sound English.',
    'Pay careful attention to register, tone, persuasive rhetoric, and cartoon body language.'
  ],
  annexures: [
    {
      id: 'annexure-eng-1',
      title: 'TEXT A: Print Advertisement for Solar Eco-Kits',
      subtitle: 'Headline: "Power Your Tomorrow Without Dimming The Planet"',
      type: 'tariff-table',
      notes: [
        'Visual: A bright sunbeam illuminating a child doing homework on a laptop, with solar panels neatly mounted on a suburban roof.',
        'Slogan: "SunPower: Clean, Uninterrupted Energy for Every South African Home."',
        'Body Copy: "Tired of rolling blackouts shutting down your livelihood? Our Tier-1 lithium solar kits deliver guaranteed 24/7 power with zero emissions and 0% deposit financing."'
      ]
    }
  ],
  questions: [
    {
      id: 'eng-q1-1',
      numberStr: 'QUESTION 1.1',
      topic: 'Critical Reading: Advertising Rhetoric (AIDA Model)',
      subtopic: 'Target audience and persuasive techniques',
      marks: 4,
      scenario: 'Refer to TEXT A (Solar Eco-Kit Advertisement).',
      prompt: 'Explain how the headline and visual work together to capture the Attention and Desire of the target audience according to the AIDA principle.',
      type: 'qualitative',
      annexureId: 'annexure-eng-1',
      hint: 'Focus on the contrast between power cuts and bright uninterrupted sunlight, and the emotional appeal of child education.',
      fullSolutionExplanation: `Official DBE Marking Guidelines:
1. Attention: The bold, evocative headline "Power Your Tomorrow Without Dimming The Planet" utilizes antithesis (powering vs dimming) and urgency to immediately arrest the reader's gaze.
2. Desire: The visual of a child studying peacefully under steady solar lighting evokes parental responsibility and emotional aspirations, while the body copy addressing load-shedding frustrations and offering 0% deposit financing stimulates an urgent desire to buy.`,
      markingGuide: [
        { stepNumber: 1, description: 'Analysis of headline capturing Attention', working: 'Antithesis and catchy headline captures attention', markCode: 'A', markValue: 2 },
        { stepNumber: 2, description: 'Analysis of visual/copy stimulating Desire', working: 'Emotional appeal to education and load-shedding relief', markCode: 'A', markValue: 2 }
      ],
      qualitativeRubric: {
        modelAnswer: 'The headline captures Attention through the metaphorical contrast between powering one\'s future and not dimming the Earth, appealing to eco-consciousness. The visual of a child successfully doing homework under solar power triggers the audience\'s Desire by providing an emotional, load-shedding-proof solution for their family, reinforced by the promise of 0% deposit financing.',
        keyPoints: [
          'Attention: catchy headline uses contrast/antithesis to hook readers concerned about electricity',
          'Desire: image of studying child appeals to parental care and academic success',
          'Connects to relief from power cuts and accessible financing'
        ],
        acceptedKeywords: ['attention', 'desire', 'aida', 'contrast', 'load shedding', 'child', 'education', 'headline', 'visual', 'persuasive']
      }
    },
    {
      id: 'eng-q1-2',
      numberStr: 'QUESTION 1.2',
      topic: 'Cartoon Analysis & Visual Semiotics',
      subtopic: 'Facial expressions, body language, and verbal irony',
      marks: 4,
      scenario: 'A three-frame editorial cartoon shows a driver trapped in stationary city traffic shouting into his mobile phone: "I will be home early tonight!" while the petrol gauge shows an empty tank.',
      prompt: 'Discuss how the cartoonist uses IRONY and BODY LANGUAGE in the final frame to convey a satirical message about urban commuting.',
      type: 'qualitative',
      hint: 'Irony occurs when the stated words contradict the actual reality. Look at the mouth, sweat drops, and car position.',
      fullSolutionExplanation: `Official DBE Marking Guidelines:
1. Situational Irony: The commuter loudly claims he will be "home early tonight," yet he is completely gridlocked in unmoving rush-hour traffic with an empty fuel tank, creating an absurd contrast between words and physical reality.
2. Body Language & Semiotics: Wide staring eyes, beads of sweat spraying from the forehead, and hands gripping the steering wheel frantically indicate extreme stress, denial, and frustration.`,
      markingGuide: [
        { stepNumber: 1, description: 'Explanation of situational irony (words vs reality)', working: 'Irony of claim vs gridlock reality', markCode: 'A', markValue: 2 },
        { stepNumber: 2, description: 'Interpretation of body language/facial expression', working: 'Sweat drops, strained eyes, tense grip indicating panic', markCode: 'A', markValue: 2 }
      ],
      qualitativeRubric: {
        modelAnswer: 'The cartoonist uses situational irony because the character declares he will arrive home early, yet he is stuck motionless in heavy bumper-to-bumper traffic with an empty fuel tank. His body language—wide bulging eyes, clenched teeth, and sweat droplets flying from his brow—reveals panic and helpless frustration, satirizing how commuters deceive themselves about urban congestion.',
        keyPoints: [
          'Identifies verbal/situational irony between claim of arriving early and gridlock reality',
          'Analyzes body language: sweat drops, wide eyes, clenched teeth, tight steering wheel grip',
          'Explains the satiric critique of urban traffic and commuter denial'
        ],
        acceptedKeywords: ['irony', 'body language', 'sweat', 'traffic', 'facial expression', 'contrast', 'satire', 'gridlock', 'stress']
      }
    },
    {
      id: 'eng-q2-1',
      numberStr: 'QUESTION 2.1',
      topic: 'Language Structures & Conventions: Concord & Syntax',
      subtopic: 'Identifying and correcting grammatical errors',
      marks: 3,
      scenario: 'Consider the sentence: "Neither the principal nor the teachers was aware of the change in schedule."',
      prompt: 'Identify the grammatical error in the sentence, name the rule of grammar violated, and rewrite the sentence correctly.',
      type: 'qualitative',
      hint: 'Look at the subject-verb agreement (concord) with correlative conjunctions "neither ... nor". The verb agrees with the closer subject.',
      fullSolutionExplanation: `Official DBE Marking Guidelines:
1. Error identified: "was" should be "were".
2. Rule: Proximity rule of Concord with correlative conjunctions (neither ... nor). When subjects differ in number, the verb agrees in number with the subject closest to it ("teachers" is plural, so verb must be "were").
3. Correct sentence: "Neither the principal nor the teachers were aware of the change in schedule."`,
      markingGuide: [
        { stepNumber: 1, description: 'Identify error (was -> were)', working: 'was is singular, should be plural were', markCode: 'A', markValue: 1 },
        { stepNumber: 2, description: 'Name grammar rule (Concord / Subject-Verb agreement)', working: 'Concord / proximity rule', markCode: 'A', markValue: 1 },
        { stepNumber: 3, description: 'Correct rewritten sentence', working: 'Neither the principal nor the teachers were aware...', markCode: 'A', markValue: 1 }
      ],
      qualitativeRubric: {
        modelAnswer: 'The error is the singular auxiliary verb "was". The rule violated is Concord (subject-verb agreement with correlative conjunctions "neither ... nor", where the verb must agree with the nearer subject "teachers", which is plural). Corrected sentence: "Neither the principal nor the teachers were aware of the change in schedule."',
        keyPoints: [
          'Identifies incorrect verb "was"',
          'States the rule of Concord / subject-verb proximity',
          'Rewrites sentence correctly with "were"'
        ],
        acceptedKeywords: ['was', 'were', 'concord', 'subject-verb agreement', 'plural', 'teachers', 'neither nor']
      }
    }
  ]
};

export const AFRIKAANS_EXAM: ExamPaper = {
  id: 'dbe-afrikaans-p1-2024',
  subjectId: 'afrikaans',
  year: 2024,
  session: 'November NSC',
  title: 'Afrikaans Eerste Addisionele Taal Vraestel 1 - KABV',
  subtitle: 'Leesbegrip, Advertensie-ontleding, Opsomming & Taalstrukture',
  category: 'nsc-paper',
  totalMarks: 50,
  timeLimitMinutes: 60,
  instructions: [
    'Hierdie vraestel bestaan uit afdelings: Leesbegrip, Advertensie en Taalstrukture.',
    'Beantwoord AL die vrae in korrekte Afrikaans.',
    'Gee deeglike aandag aan woordorde (STOMPI), ontkenning, en betreklike voornaamwoorde.'
  ],
  annexures: [
    {
      id: 'annexure-afr-1',
      title: 'TEKS A: Leesbegrip - Die Krag van Jong Entrepreneurs',
      subtitle: 'Uittreksel oor Suid-Afrikaanse jeug wat innoverende besighede begin',
      type: 'financial-statement',
      notes: [
        'Anika van Zyl (18) het tydens die skoolvakansie \'n herwinningsonderneming begin.',
        'Sy samel plastiekbottels by skole in en verwerk dit tot duursame potlode en liniale.',
        'Haar projek skep nie net werksgeleenthede vir plaaslike werklose jeug nie, maar bevorder ook omgewingsbewustheid in haar gemeenskap.'
      ]
    }
  ],
  questions: [
    {
      id: 'afr-q1-1',
      numberStr: 'VRAAG 1.1',
      topic: 'Leesbegrip: Feite en Interpretasie',
      subtopic: 'Voordele van die herwinningsprojek',
      marks: 4,
      scenario: 'Verwys na TEKS A (Die herwinningsprojek van Anika van Zyl).',
      prompt: 'Noem TWEE maniere waarop Anika se onderneming \'n positiewe verskil in haar gemeenskap maak, volgens die teks.',
      type: 'qualitative',
      annexureId: 'annexure-afr-1',
      hint: 'Kyk na werkskepping vir werklose jeug en die bevordering van omgewingsbewustheid.',
      fullSolutionExplanation: `Amptelike KABV Riglyne:
1. Werkskepping: Die projek verskaf werksgeleenthede en inkomste vir plaaslike werklose jeugdiges wat help met die insameling en verwerking.
2. Omgewingsbewaring: Deur plastiekbottels te herwin en nuttige skoolskryfbehoeftes soos liniale en potlode te maak, verminder dit plastiekbesoedeling en bevorder omgewingsbewustheid in skole.`,
      markingGuide: [
        { stepNumber: 1, description: 'Werksgeleenthede vir plaaslike jeug', working: 'Werkskepping vir werklose jeug', markCode: 'A', markValue: 2 },
        { stepNumber: 2, description: 'Omgewingsbewustheid en minder plastiekbesoedeling', working: 'Verminder plastiek en herwin', markCode: 'A', markValue: 2 }
      ],
      qualitativeRubric: {
        modelAnswer: 'Eerstens skep Anika se projek werksgeleenthede vir plaaslike werklose jeug wat help met die insameling van plastiek. Tweedens bevorder dit omgewingsbewustheid en verminder dit plastiekbesoedeling deur afval te herwin in nuttige potlode en liniale vir skole.',
        keyPoints: [
          'Skep werksgeleenthede vir werklose jeug in die gemeenskap',
          'Bevorder omgewingsbewustheid en verminder plastiekafval',
          'Vervaardig nuttige skryfbehoeftes uit herwinde plastiek'
        ],
        acceptedKeywords: ['werk', 'werksgeleenthede', 'jeug', 'plastiek', 'herwinning', 'omgewing', 'besoedeling', 'skryfbehoeftes']
      }
    },
    {
      id: 'afr-q2-1',
      numberStr: 'VRAAG 2.1',
      topic: 'Taalstrukture: Die Dubbele Ontkenning (Negatief)',
      subtopic: 'Ontkennende vorm in saamgestelde sinne',
      marks: 3,
      scenario: 'Gegee die sin: "Die leerders gooi altyd hulle vullis in die vullisdrom."',
      prompt: 'Herskryf die sin in die ONTKENNENDE VORM (begin met: "Die leerders...").',
      type: 'qualitative',
      hint: '"Altyd" verander na "nooit ... nie", of gebruik "nie ... nie". Onthou die slot-nie aan die einde van die sin.',
      fullSolutionExplanation: `Amptelike KABV Nasienriglyn:
"Die leerders gooi nooit hulle vullis in die vullisdrom nie."
OF
"Die leerders gooi nie altyd hulle vullis in die vullisdrom nie."
Reël: Die dubbele ontkenning vereis 'n ontkenningswoord ("nooit" of eerste "nie") en die slot-"nie" aan die einde van die sin.`,
      markingGuide: [
        { stepNumber: 1, description: 'Korrekte verandering van altyd na nooit / invoeging van nie', working: 'nooit / nie', markCode: 'A', markValue: 2 },
        { stepNumber: 2, description: 'Slot-nie aan die einde van die sin', working: 'nie aan die einde', markCode: 'A', markValue: 1 }
      ],
      qualitativeRubric: {
        modelAnswer: 'Die leerders gooi nooit hulle vullis in die vullisdrom nie.',
        keyPoints: [
          'Verander "altyd" na "nooit" of voeg "nie" in na die hoofwerkwoord',
          'Voeg die verpligte slot-"nie" aan die heel einde van die sin by',
          'Behou die korrekte STOMPI-woordorde'
        ],
        acceptedKeywords: ['nooit', 'nie', 'vullisdrom nie', 'gooi nie']
      }
    },
    {
      id: 'afr-q2-2',
      numberStr: 'VRAAG 2.2',
      topic: 'Taalstrukture: Lydende Vorm (Passief)',
      subtopic: 'Omskakeling na lydende vorm in die verlede tyd',
      marks: 3,
      scenario: 'Gegee die sin: "Anika het die nuwe herwinningsprojek geloods."',
      prompt: 'Herskryf die sin in die LYDENDE VORM (Passief), begin met: "Die nuwe herwinningsprojek..."',
      type: 'qualitative',
      hint: 'In die verlede tyd verander die werkwoord na "is deur ... geloods".',
      fullSolutionExplanation: `Amptelike KABV Nasienriglyn:
"Die nuwe herwinningsprojek is deur Anika geloods."
Reël: Lydende vorm in die verlede tyd gebruik die hulpwerkwoord "is" en "deur [onderwerp]" gevolg deur die ge-werkwoord.`,
      markingGuide: [
        { stepNumber: 1, description: 'Gebruik van hulpwerkwoord is', working: 'is', markCode: 'A', markValue: 1 },
        { stepNumber: 2, description: 'Gebruik van deur + onderwerp (deur Anika)', working: 'deur Anika', markCode: 'A', markValue: 1 },
        { stepNumber: 3, description: 'Hoofwerkwoord aan die einde (geloods)', working: 'geloods', markCode: 'A', markValue: 1 }
      ],
      qualitativeRubric: {
        modelAnswer: 'Die nuwe herwinningsprojek is deur Anika geloods.',
        keyPoints: [
          'Begin met die voorwerp: Die nuwe herwinningsprojek',
          'Hulpwerkwoord "is" vir verlede tyd in die lydende vorm',
          'Voeg "deur Anika" by en plaas die werkwoord "geloods" aan die einde'
        ],
        acceptedKeywords: ['is', 'deur anika', 'geloods']
      }
    }
  ]
};
