import { ExamPaper } from '@/types/quiz';

// 1. Maths Literacy MCQ Test 1
export const MATH_LIT_MCQ_1: ExamPaper = {
  id: 'mcq-math-lit-1',
  subjectId: 'math-lit-p1',
  year: 2024,
  session: 'Preparatory Trial',
  title: 'Maths Literacy MCQ Test 1: Finance, VAT & Tariffs',
  subtitle: 'Rapid-fire objective multiple-choice test on South African financial maths',
  category: 'mcq-test',
  totalMarks: 10,
  timeLimitMinutes: 15,
  instructions: [
    'Select the single most correct answer (A, B, C, or D) for each question.',
    'Use standard DBE rules (15% VAT, standard stepped tariff block calculations).',
    'Review the step-by-step mathematical reasoning after submission.'
  ],
  annexures: [],
  questions: [
    {
      id: 'ml-mcq1-1',
      numberStr: 'QUESTION 1',
      topic: 'Finance: Value Added Tax (VAT)',
      subtopic: 'Calculating price exclusive of 15% VAT',
      marks: 2,
      scenario: 'An invoice shows a total price of R 1 380 inclusive of 15% South African VAT.',
      prompt: 'What is the original price of the item EXCLUDING VAT?',
      type: 'mcq',
      options: [
        'A. R 1 173.00',
        'B. R 1 200.00',
        'C. R 1 150.00',
        'D. R 1 230.00'
      ],
      correctOptionIndex: 1,
      hint: 'To remove 15% VAT, divide the inclusive price by 1.15. Do not just subtract 15% of the total.',
      fullSolutionExplanation: 'Price excluding VAT = Price incl. VAT ÷ 1.15 = R 1 380 ÷ 1.15 = R 1 200.00. (Subtracting 15% directly gives R 1 173, which is a common examination mistake).',
      markingGuide: [{ stepNumber: 1, description: 'Correct price excl. VAT (R1 200)', working: 'R1 380 / 1.15 = R1 200', markCode: 'A', markValue: 2 }]
    },
    {
      id: 'ml-mcq1-2',
      numberStr: 'QUESTION 2',
      topic: 'Tariffs: Stepped Water Blocks',
      subtopic: 'Calculating consumption in tiered municipal brackets',
      marks: 2,
      scenario: 'A municipality charges R0.00 for 0-6 kL, R20.00/kL for >6-15 kL, and R35.00/kL for >15-30 kL. A household uses 18 kL of water.',
      prompt: 'How much water volume is billed at the highest tariff rate of R35.00/kL?',
      type: 'mcq',
      options: [
        'A. 18 kL',
        'B. 12 kL',
        'C. 3 kL',
        'D. 9 kL'
      ],
      correctOptionIndex: 2,
      hint: 'The third step covers usage from 15 kL up to 30 kL. If total is 18 kL, how much exceeds 15 kL?',
      fullSolutionExplanation: 'The first 6 kL falls in Step 1 (0 kL charge). The next 9 kL (from 6 to 15 kL) falls in Step 2. The remaining volume in Step 3 is 18 kL - 15 kL = 3 kL billed at R35.00/kL.',
      markingGuide: [{ stepNumber: 1, description: 'Correct volume in step 3 (3 kL)', working: '18 - 15 = 3 kL', markCode: 'A', markValue: 2 }]
    },
    {
      id: 'ml-mcq1-3',
      numberStr: 'QUESTION 3',
      topic: 'Taxation: SARS Tax Rebates',
      subtopic: 'Application of primary vs secondary tax rebate',
      marks: 2,
      scenario: 'Mr. Khumalo is 54 years old and has calculated his gross tax according to the SARS tax bracket tables.',
      prompt: 'Which tax rebate is Mr. Khumalo legally entitled to deduct from his calculated tax?',
      type: 'mcq',
      options: [
        'A. Primary rebate only',
        'B. Secondary rebate only',
        'C. Both Primary and Secondary rebates',
        'D. Tertiary rebate only'
      ],
      correctOptionIndex: 0,
      hint: 'Under South African tax law, persons under 65 years only qualify for the Primary rebate.',
      fullSolutionExplanation: 'In South Africa, all individual taxpayers qualify for the Primary rebate. Only persons aged 65 and older qualify for the Secondary rebate, and age 75+ for the Tertiary rebate. Since Mr. Khumalo is 54, he only qualifies for the Primary rebate.',
      markingGuide: [{ stepNumber: 1, description: 'Primary rebate only identified', working: 'Age under 65 qualifies for primary rebate', markCode: 'A', markValue: 2 }]
    },
    {
      id: 'ml-mcq1-4',
      numberStr: 'QUESTION 4',
      topic: 'Finance: Breakeven Point',
      subtopic: 'Interpretation of cost and income intersection',
      marks: 2,
      scenario: 'A school tuckshop produces artisanal muffins. Fixed costs are R 600, variable cost per muffin is R 5, and selling price is R 15 each.',
      prompt: 'How many muffins must the tuckshop sell to reach the breakeven point?',
      type: 'mcq',
      options: [
        'A. 40 muffins',
        'B. 60 muffins',
        'C. 120 muffins',
        'D. 15 muffins'
      ],
      correctOptionIndex: 1,
      hint: 'Breakeven quantity = Fixed Costs ÷ (Selling Price - Variable Cost per unit).',
      fullSolutionExplanation: 'Contribution margin per unit = R 15 - R 5 = R 10. Breakeven quantity = Fixed Costs ÷ Contribution Margin = R 600 ÷ R 10 = 60 muffins.',
      markingGuide: [{ stepNumber: 1, description: 'Breakeven quantity (60 muffins)', working: '600 / (15 - 5) = 60', markCode: 'A', markValue: 2 }]
    },
    {
      id: 'ml-mcq1-5',
      numberStr: 'QUESTION 5',
      topic: 'Statistics: Measures of Spread',
      subtopic: 'Interquartile range (IQR)',
      marks: 2,
      scenario: 'A set of test scores has a minimum of 32, Q1 = 48, Median = 65, Q3 = 82, and Maximum = 98.',
      prompt: 'What is the Interquartile Range (IQR) of this dataset?',
      type: 'mcq',
      options: [
        'A. 66',
        'B. 34',
        'C. 17',
        'D. 50'
      ],
      correctOptionIndex: 1,
      hint: 'IQR = Q3 - Q1.',
      fullSolutionExplanation: 'IQR = Upper Quartile (Q3) - Lower Quartile (Q1) = 82 - 48 = 34.',
      markingGuide: [{ stepNumber: 1, description: 'Correct IQR (34)', working: '82 - 48 = 34', markCode: 'A', markValue: 2 }]
    }
  ]
};

// 2. Maths Literacy MCQ Test 2
export const MATH_LIT_MCQ_2: ExamPaper = {
  id: 'mcq-math-lit-2',
  subjectId: 'math-lit-p2',
  year: 2024,
  session: 'Preparatory Trial',
  title: 'Maths Literacy MCQ Test 2: Measurement, Maps & Probability',
  subtitle: 'Metric conversions, perimeter, area, scale ratios and probability',
  category: 'mcq-test',
  totalMarks: 10,
  timeLimitMinutes: 15,
  instructions: [
    'Select the single most correct answer (A, B, C, or D) for each question.',
    'Work with official metric conversion rules (1 m = 100 cm = 1 000 mm).'
  ],
  annexures: [],
  questions: [
    {
      id: 'ml-mcq2-1',
      numberStr: 'QUESTION 1',
      topic: 'Maps & Plans: Number Scale Interpretation',
      subtopic: 'Converting distance with a 1 : 50 000 scale map',
      marks: 2,
      scenario: 'On a topographic map with a scale of 1 : 50 000, the measured straight line distance between two water reservoirs is 6 cm.',
      prompt: 'What is the actual ground distance in kilometres (km)?',
      type: 'mcq',
      options: [
        'A. 30 km',
        'B. 3 km',
        'C. 0.3 km',
        'D. 12 km'
      ],
      correctOptionIndex: 1,
      hint: '1 cm on map represents 50 000 cm on ground. Convert cm to metres (÷ 100) and then to km (÷ 1 000).',
      fullSolutionExplanation: 'Ground distance = 6 cm × 50 000 = 300 000 cm. Convert to metres: 300 000 ÷ 100 = 3 000 m. Convert to km: 3 000 ÷ 1 000 = 3 km.',
      markingGuide: [{ stepNumber: 1, description: 'Correct distance (3 km)', working: '6 * 50 000 / 100 000 = 3 km', markCode: 'A', markValue: 2 }]
    },
    {
      id: 'ml-mcq2-2',
      numberStr: 'QUESTION 2',
      topic: 'Measurement: Volume & Capacity',
      subtopic: 'Litres to cubic metres conversion',
      marks: 2,
      scenario: 'A municipal water tanker truck has a cylindrical storage tank with a capacity of 15 000 litres.',
      prompt: 'What is the volume of water in cubic metres (m³)?',
      type: 'mcq',
      options: [
        'A. 15 m³',
        'B. 150 m³',
        'C. 1.5 m³',
        'D. 15 000 m³'
      ],
      correctOptionIndex: 0,
      hint: '1 cubic metre (1 m³) is equal to 1 000 litres.',
      fullSolutionExplanation: '1 m³ = 1 000 L. Therefore, 15 000 L ÷ 1 000 = 15 m³.',
      markingGuide: [{ stepNumber: 1, description: 'Correct volume (15 m³)', working: '15000 / 1000 = 15', markCode: 'A', markValue: 2 }]
    },
    {
      id: 'ml-mcq2-3',
      numberStr: 'QUESTION 3',
      topic: 'Probability: Theoretical Odds',
      subtopic: 'Determining probability of standard outcomes',
      marks: 2,
      scenario: 'A standard six-sided die is rolled once during a classroom probability experiment.',
      prompt: 'What is the probability of rolling a prime number (as a simplified fraction)?',
      type: 'mcq',
      options: [
        'A. 1/6',
        'B. 1/3',
        'C. 1/2',
        'D. 2/3'
      ],
      correctOptionIndex: 2,
      hint: 'The numbers on a die are 1, 2, 3, 4, 5, 6. Which of these are prime numbers? Remember 1 is NOT prime.',
      fullSolutionExplanation: 'The prime numbers on a die are {2, 3, 5} — exactly 3 outcomes out of 6 possible numbers. Probability = 3/6 = 1/2 (50%).',
      markingGuide: [{ stepNumber: 1, description: 'Correct fraction (1/2)', working: '3/6 = 1/2', markCode: 'A', markValue: 2 }]
    },
    {
      id: 'ml-mcq2-4',
      numberStr: 'QUESTION 4',
      topic: 'Measurement: Area and Packaging',
      subtopic: 'Floor tiling area calculation',
      marks: 2,
      scenario: 'A bathroom floor measures 3 metres by 2 metres. Square ceramic tiles measure 50 cm by 50 cm.',
      prompt: 'How many ceramic tiles are needed to cover the floor without waste?',
      type: 'mcq',
      options: [
        'A. 12 tiles',
        'B. 24 tiles',
        'C. 48 tiles',
        'D. 6 tiles'
      ],
      correctOptionIndex: 1,
      hint: 'Floor area = 3 m × 2 m = 6 m². Tile area = 0.5 m × 0.5 m = 0.25 m².',
      fullSolutionExplanation: 'Floor area = 6 m². Area of one tile = 0.5 m × 0.5 m = 0.25 m². Total tiles = 6 ÷ 0.25 = 24 tiles.',
      markingGuide: [{ stepNumber: 1, description: 'Correct tile count (24)', working: '6 / 0.25 = 24', markCode: 'A', markValue: 2 }]
    },
    {
      id: 'ml-mcq2-5',
      numberStr: 'QUESTION 5',
      topic: 'Plans & Elevations: Elevation Recognition',
      subtopic: 'Identifying cardinal view orientations',
      marks: 2,
      scenario: 'An architectural drawing shows a view of a house facing toward the sunrise.',
      prompt: 'Which elevation is represented by this drawing?',
      type: 'mcq',
      options: [
        'A. North Elevation',
        'B. South Elevation',
        'C. East Elevation',
        'D. West Elevation'
      ],
      correctOptionIndex: 2,
      hint: 'The sun always rises in the East.',
      fullSolutionExplanation: 'Because the sun rises in the East, a building elevation facing the sunrise is the East Elevation.',
      markingGuide: [{ stepNumber: 1, description: 'East elevation identified', working: 'Sun rises in the east', markCode: 'A', markValue: 2 }]
    }
  ]
};

// 3. Accounting MCQ Test 1
export const ACCOUNTING_MCQ_1: ExamPaper = {
  id: 'mcq-accounting-1',
  subjectId: 'accounting',
  year: 2024,
  session: 'Preparatory Trial',
  title: 'Accounting MCQ Test 1: GAAP Principles & Financial Statements',
  subtitle: 'Prudence, Matching, Historical Cost and Statement Analysis',
  category: 'mcq-test',
  totalMarks: 10,
  timeLimitMinutes: 15,
  instructions: [
    'Choose the single most appropriate accounting response according to IFRS and SA GAAP principles.'
  ],
  annexures: [],
  questions: [
    {
      id: 'acc-mcq1-1',
      numberStr: 'QUESTION 1',
      topic: 'GAAP Principles: Prudence',
      subtopic: 'Application of conservatism in valuation',
      marks: 2,
      scenario: 'A company values trading inventory at the lower of historical cost or net realizable value.',
      prompt: 'Which fundamental GAAP / IFRS accounting principle is being adhered to?',
      type: 'mcq',
      options: [
        'A. Going Concern principle',
        'B. Prudence (Conservatism) principle',
        'C. Business Entity principle',
        'D. Materiality principle'
      ],
      correctOptionIndex: 1,
      hint: 'Prudence states that assets must never be overstated, and potential losses must be anticipated.',
      fullSolutionExplanation: 'The Prudence (Conservatism) principle requires that assets and income are not overstated and liabilities are not understated. Valuing trading stock at the lower of cost or net realizable value ensures inventory is not overstated on the balance sheet.',
      markingGuide: [{ stepNumber: 1, description: 'Prudence principle identified', working: 'Prudence principle', markCode: 'A', markValue: 2 }]
    },
    {
      id: 'acc-mcq1-2',
      numberStr: 'QUESTION 2',
      topic: 'Financial Ratios: Solvency',
      subtopic: 'Solvency ratio formula and norm',
      marks: 2,
      scenario: 'A firm has Total Assets of R 4 500 000 and Total Liabilities of R 1 500 000.',
      prompt: 'What is the firm’s Solvency Ratio?',
      type: 'mcq',
      options: [
        'A. 3.0 : 1',
        'B. 0.33 : 1',
        'C. 2.0 : 1',
        'D. 1.5 : 1'
      ],
      correctOptionIndex: 0,
      hint: 'Solvency Ratio = Total Assets : Total Liabilities.',
      fullSolutionExplanation: 'Solvency Ratio = Total Assets ÷ Total Liabilities = R 4 500 000 ÷ R 1 500 000 = 3.0 : 1. The firm is comfortably solvent since assets exceed liabilities.',
      markingGuide: [{ stepNumber: 1, description: 'Correct ratio (3.0 : 1)', working: '4.5m / 1.5m = 3 : 1', markCode: 'A', markValue: 2 }]
    },
    {
      id: 'acc-mcq1-3',
      numberStr: 'QUESTION 3',
      topic: 'Financial Statements: Income Statement Adjustments',
      subtopic: 'Treatment of prepaid expenses',
      marks: 2,
      scenario: 'Insurance includes an amount of R 4 000 paid for the first month of the following financial year.',
      prompt: 'How must this R 4 000 prepaid insurance be treated at year-end?',
      type: 'mcq',
      options: [
        'A. Added to Insurance expense in Income Statement',
        'B. Deducted from Insurance in Income Statement and shown as Current Asset in Balance Sheet',
        'C. Shown as Current Liability in Balance Sheet',
        'D. Deducted from Trade and Other Payables'
      ],
      correctOptionIndex: 1,
      hint: 'Prepaid expenses belong to the next period. They reduce the current expense and represent a future benefit (Current Asset).',
      fullSolutionExplanation: 'According to the Matching principle, expenses must relate only to the current period. Prepaid expenses are subtracted from the nominal account (Insurance) in the Income Statement and recorded under Trade and Other Receivables (Current Assets) in the Statement of Financial Position.',
      markingGuide: [{ stepNumber: 1, description: 'Deducted and shown as current asset', working: 'Prepaid expense adjustment', markCode: 'A', markValue: 2 }]
    },
    {
      id: 'acc-mcq1-4',
      numberStr: 'QUESTION 4',
      topic: 'Fixed Assets: Asset Disposal',
      subtopic: 'Calculating profit or loss on asset sale',
      marks: 2,
      scenario: 'Equipment with a cost price of R 80 000 and accumulated depreciation of R 55 000 is sold for R 30 000 cash.',
      prompt: 'What is the financial outcome of this asset disposal?',
      type: 'mcq',
      options: [
        'A. Loss of R 5 000',
        'B. Profit of R 5 000',
        'C. Profit of R 30 000',
        'D. Loss of R 25 000'
      ],
      correctOptionIndex: 1,
      hint: 'Carrying value = Cost - Accumulated Depreciation. Profit = Selling Price - Carrying Value.',
      fullSolutionExplanation: 'Carrying value at date of sale = R 80 000 - R 55 000 = R 25 000. Selling price = R 30 000. Profit on sale of asset = R 30 000 - R 25 000 = R 5 000 (Profit).',
      markingGuide: [{ stepNumber: 1, description: 'Profit of R5 000 identified', working: '30 000 - 25 000 = 5 000 profit', markCode: 'A', markValue: 2 }]
    },
    {
      id: 'acc-mcq1-5',
      numberStr: 'QUESTION 5',
      topic: 'Internal Control: Bank Reconciliation',
      subtopic: 'Outstanding deposits and unpresented cheques',
      marks: 2,
      scenario: 'The Cash Receipts Journal reflects a deposit of R 12 000 made on 31 August that does not appear on the August Bank Statement.',
      prompt: 'Where must this transaction be recorded to reconcile the bank balance?',
      type: 'mcq',
      options: [
        'A. Debited in the Bank Account in the General Ledger',
        'B. Credited in the Cash Receipts Journal',
        'C. Recorded as an Outstanding Deposit on the Bank Reconciliation Statement',
        'D. Deducted as a bank service fee'
      ],
      correctOptionIndex: 2,
      hint: 'Timing differences not yet cleared by the bank go on the Bank Reconciliation Statement.',
      fullSolutionExplanation: 'Deposits recorded by the business but not yet processed by the commercial bank due to cutoff timing are listed as Outstanding Deposits in the Bank Reconciliation Statement until cleared on the subsequent statement.',
      markingGuide: [{ stepNumber: 1, description: 'Outstanding deposit identified', working: 'Bank reconciliation timing item', markCode: 'A', markValue: 2 }]
    }
  ]
};

// 4. Accounting MCQ Test 2
export const ACCOUNTING_MCQ_2: ExamPaper = {
  id: 'mcq-accounting-2',
  subjectId: 'accounting',
  year: 2024,
  session: 'Preparatory Trial',
  title: 'Accounting MCQ Test 2: Inventory, VAT & Corporate Capital',
  subtitle: 'Perpetual vs Periodic inventory, VAT Input/Output, and Share Capital',
  category: 'mcq-test',
  totalMarks: 10,
  timeLimitMinutes: 15,
  instructions: [
    'Select the single most correct answer (A, B, C, or D) for each question.'
  ],
  annexures: [],
  questions: [
    {
      id: 'acc-mcq2-1',
      numberStr: 'QUESTION 1',
      topic: 'Inventory Systems: Perpetual vs Periodic',
      subtopic: 'Identifying cost of sales recording timing',
      marks: 2,
      scenario: 'A retail supermarket records Cost of Sales immediately at the point-of-sale terminal for every transaction.',
      prompt: 'Which inventory management system is the supermarket utilizing?',
      type: 'mcq',
      options: [
        'A. Periodic Inventory System',
        'B. Perpetual (Continuous) Inventory System',
        'C. FIFO valuation method',
        'D. Weighted Average method'
      ],
      correctOptionIndex: 1,
      hint: 'In a perpetual system, the Trading Stock and Cost of Sales accounts are continuously updated with every sale.',
      fullSolutionExplanation: 'Under the Perpetual Inventory System, Cost of Sales and the reduction in Trading Stock are recorded concurrently with every sales transaction.',
      markingGuide: [{ stepNumber: 1, description: 'Perpetual inventory system identified', working: 'Perpetual inventory system', markCode: 'A', markValue: 2 }]
    },
    {
      id: 'acc-mcq2-2',
      numberStr: 'QUESTION 2',
      topic: 'VAT: Input vs Output Tax',
      subtopic: 'Determining payable/receivable balance with SARS',
      marks: 2,
      scenario: 'For a two-month VAT cycle, a registered vendor collected R 45 000 in VAT Output and paid R 32 000 in VAT Input on valid business purchases.',
      prompt: 'What is the net VAT position with SARS at the end of the tax period?',
      type: 'mcq',
      options: [
        'A. SARS owes the vendor R 13 000 refund',
        'B. Vendor owes SARS R 13 000',
        'C. Vendor owes SARS R 77 000',
        'D. SARS owes the vendor R 32 000'
      ],
      correctOptionIndex: 1,
      hint: 'VAT Output is collected on behalf of SARS (liability). VAT Input is reclaimed. If Output > Input, vendor pays SARS.',
      fullSolutionExplanation: 'Net VAT = Output VAT - Input VAT = R 45 000 - R 32 000 = R 13 000 payable to SARS.',
      markingGuide: [{ stepNumber: 1, description: 'Vendor owes SARS R13 000', working: 'Output - Input = 13 000 payable', markCode: 'A', markValue: 2 }]
    },
    {
      id: 'acc-mcq2-3',
      numberStr: 'QUESTION 3',
      topic: 'Company Financials: Dividends',
      subtopic: 'Interim vs final dividends',
      marks: 2,
      scenario: 'The directors of a public company pay an interim dividend of 20 cents per share during the year, and declare a final dividend of 35 cents per share at year-end on 500 000 shares.',
      prompt: 'What is the total ordinary dividend amount reflected in the Retained Income note for the financial year?',
      type: 'mcq',
      options: [
        'A. R 100 000',
        'B. R 175 000',
        'C. R 275 000',
        'D. R 75 000'
      ],
      correctOptionIndex: 2,
      hint: 'Total dividends = (Interim dividend + Final dividend) × Number of shares.',
      fullSolutionExplanation: 'Total dividend per share = 20c + 35c = 55c (R 0.55). Total dividends on 500 000 shares = 500 000 × R 0.55 = R 275 000.',
      markingGuide: [{ stepNumber: 1, description: 'R275 000 total dividends', working: '0.55 * 500 000 = 275 000', markCode: 'A', markValue: 2 }]
    },
    {
      id: 'acc-mcq2-4',
      numberStr: 'QUESTION 4',
      topic: 'Auditing: Audit Reports',
      subtopic: 'Qualified vs Unqualified audit opinions',
      marks: 2,
      scenario: 'An independent auditor reviews a company’s financial records and finds they present fairly in all material aspects with no discrepancies.',
      prompt: 'Which type of audit report will the independent auditor issue?',
      type: 'mcq',
      options: [
        'A. Qualified audit opinion',
        'B. Unqualified (clean) audit opinion',
        'C. Disclaimer of opinion',
        'D. Adverse audit opinion'
      ],
      correctOptionIndex: 1,
      hint: 'A "clean" report free of material misstatements is known as an Unqualified report.',
      fullSolutionExplanation: 'An Unqualified audit opinion (often called a clean audit report) is issued when the financial statements are free from material misstatements and fairly represent the company\'s financial position in accordance with IFRS.',
      markingGuide: [{ stepNumber: 1, description: 'Unqualified opinion identified', working: 'Unqualified clean report', markCode: 'A', markValue: 2 }]
    },
    {
      id: 'acc-mcq2-5',
      numberStr: 'QUESTION 5',
      topic: 'Financial Analysis: Debt-Equity Ratio',
      subtopic: 'Assessing financial gearing risk',
      marks: 2,
      scenario: 'A company has a Debt-Equity (gearing) ratio of 0.8 : 1. In the previous year, the ratio was 0.3 : 1.',
      prompt: 'What does this trend signify about the company’s financial risk?',
      type: 'mcq',
      options: [
        'A. The company has reduced its financial risk by paying off loans',
        'B. The company has increased its financial risk by utilizing more borrowed long-term capital',
        'C. The company is completely debt-free',
        'D. The company’s liquidity has tripled'
      ],
      correctOptionIndex: 1,
      hint: 'Higher debt-equity means higher financial gearing and greater interest commitment risk.',
      fullSolutionExplanation: 'An increase in the debt-equity ratio from 0.3 : 1 to 0.8 : 1 indicates that the business is relying more heavily on borrowed long-term loans relative to shareholders\' equity, increasing financial gearing and solvency risk.',
      markingGuide: [{ stepNumber: 1, description: 'Higher gearing/risk identified', working: 'Higher debt reliance increases financial risk', markCode: 'A', markValue: 2 }]
    }
  ]
};

// 5. Business Studies MCQ Test 1
export const BUSINESS_STUDIES_MCQ_1: ExamPaper = {
  id: 'mcq-business-1',
  subjectId: 'business-studies',
  year: 2024,
  session: 'Preparatory Trial',
  title: 'Business Studies MCQ Test 1: Macro & Market Environments',
  subtitle: 'PESTLE forces, Porter\'s Five Forces, and strategic management',
  category: 'mcq-test',
  totalMarks: 10,
  timeLimitMinutes: 15,
  instructions: [
    'Select the single most correct answer (A, B, C, or D) for each question.'
  ],
  annexures: [],
  questions: [
    {
      id: 'bs-mcq1-1',
      numberStr: 'QUESTION 1',
      topic: 'Business Environments: Degree of Control',
      subtopic: 'Distinguishing micro, market, and macro environments',
      marks: 2,
      scenario: 'A clothing manufacturer has no control over changes in the national interest rate or tax legislation.',
      prompt: 'In which business environment do national interest rates and tax legislation reside?',
      type: 'mcq',
      options: [
        'A. Micro environment (Full control)',
        'B. Market environment (Some influence)',
        'C. Macro environment (No control)',
        'D. Internal operating environment'
      ],
      correctOptionIndex: 2,
      hint: 'The macro environment includes broader economic, political, and legal forces where management has zero direct control.',
      fullSolutionExplanation: 'The Macro environment comprises broader PESTLE forces (including fiscal policy, statutory tax rates, and SARB monetary policy) over which the enterprise exerts no direct control and must adapt strategically.',
      markingGuide: [{ stepNumber: 1, description: 'Macro environment identified', working: 'Macro environment', markCode: 'A', markValue: 2 }]
    },
    {
      id: 'bs-mcq1-2',
      numberStr: 'QUESTION 2',
      topic: 'Porter\'s Five Forces Model',
      subtopic: 'Power of buyers and suppliers',
      marks: 2,
      scenario: 'There is only one certified supplier of specialized aircraft components in South Africa.',
      prompt: 'According to Porter’s Five Forces model, what is the competitive effect on aircraft maintenance firms?',
      type: 'mcq',
      options: [
        'A. High bargaining power of buyers',
        'B. High bargaining power of suppliers',
        'C. Low threat of substitute products',
        'D. Reduced rivalry among existing competitors'
      ],
      correctOptionIndex: 1,
      hint: 'When there is only one specialized supplier, that supplier holds strong bargaining leverage over prices and terms.',
      fullSolutionExplanation: 'With a single monopolistic supplier of essential components, supplier bargaining power is exceptionally high because buyers cannot easily switch to alternative vendors.',
      markingGuide: [{ stepNumber: 1, description: 'High supplier bargaining power identified', working: 'Bargaining power of suppliers', markCode: 'A', markValue: 2 }]
    },
    {
      id: 'bs-mcq1-3',
      numberStr: 'QUESTION 3',
      topic: 'Legislation: Basic Conditions of Employment Act (BCEA)',
      subtopic: 'Maximum ordinary working hours',
      marks: 2,
      scenario: 'An employer hires full-time factory machine operators for a 5-day working week.',
      prompt: 'Under the BCEA in South Africa, what is the maximum ordinary working hours per week permitted without overtime?',
      type: 'mcq',
      options: [
        'A. 40 hours',
        'B. 45 hours',
        'C. 50 hours',
        'D. 35 hours'
      ],
      correctOptionIndex: 1,
      hint: 'The statutory ceiling in South Africa under the BCEA is 45 hours per week (or 9 hours per day for a 5-day week).',
      fullSolutionExplanation: 'The Basic Conditions of Employment Act (BCEA) establishes a statutory maximum of 45 ordinary working hours per week (9 hours/day for 5 days or 8 hours/day for 6 days).',
      markingGuide: [{ stepNumber: 1, description: '45 hours identified', working: 'BCEA maximum ordinary hours', markCode: 'A', markValue: 2 }]
    },
    {
      id: 'bs-mcq1-4',
      numberStr: 'QUESTION 4',
      topic: 'Business Strategies: Integration Strategies',
      subtopic: 'Backward vertical integration',
      marks: 2,
      scenario: 'A major supermarket chain purchases a commercial dairy farm to secure its supply of fresh milk and cheese.',
      prompt: 'Which business growth strategy has the supermarket executed?',
      type: 'mcq',
      options: [
        'A. Forward vertical integration',
        'B. Backward vertical integration',
        'C. Horizontal integration',
        'D. Conglomerate diversification'
      ],
      correctOptionIndex: 1,
      hint: 'Buying a supplier upstream in the supply chain is backward vertical integration.',
      fullSolutionExplanation: 'Backward vertical integration involves acquiring or merging with a supplier upstream in the supply chain to secure input supplies, eliminate markup, and guarantee material availability.',
      markingGuide: [{ stepNumber: 1, description: 'Backward vertical integration', working: 'Backward vertical integration', markCode: 'A', markValue: 2 }]
    },
    {
      id: 'bs-mcq1-5',
      numberStr: 'QUESTION 5',
      topic: 'Human Resources: Induction',
      subtopic: 'Purpose of new employee induction programs',
      marks: 2,
      scenario: 'A newly appointed sales manager spends their first week meeting colleagues, reviewing safety guidelines, and understanding corporate values.',
      prompt: 'What is the primary business objective of this induction process?',
      type: 'mcq',
      options: [
        'A. To screen candidates for shortlisting',
        'B. To integrate the new employee smoothly, reducing anxiety and accelerating productivity',
        'C. To determine the employee’s salary notch on the bargaining council scale',
        'D. To terminate the previous employee\'s pension benefits'
      ],
      correctOptionIndex: 1,
      hint: 'Induction familiarizes new staff with work environments, values, and duties to foster confidence and team cohesion.',
      fullSolutionExplanation: 'Induction aims to welcome and orient new employees into the organization, clarifying policies and responsibilities to minimize first-month anxiety and boost performance.',
      markingGuide: [{ stepNumber: 1, description: 'Smooth integration and productivity', working: 'Induction purpose', markCode: 'A', markValue: 2 }]
    }
  ]
};

// 6. Business Studies MCQ Test 2
export const BUSINESS_STUDIES_MCQ_2: ExamPaper = {
  id: 'mcq-business-2',
  subjectId: 'business-studies',
  year: 2024,
  session: 'Preparatory Trial',
  title: 'Business Studies MCQ Test 2: Ethics, King IV & Team Performance',
  subtitle: 'Corporate citizenship, King Code governance, and conflict management',
  category: 'mcq-test',
  totalMarks: 10,
  timeLimitMinutes: 15,
  instructions: [
    'Select the single most correct answer (A, B, C, or D) for each question.'
  ],
  annexures: [],
  questions: [
    {
      id: 'bs-mcq2-1',
      numberStr: 'QUESTION 1',
      topic: 'Corporate Governance: King IV Principles',
      subtopic: 'Triple Bottom Line reporting',
      marks: 2,
      scenario: 'King IV emphasizes integrated reporting evaluating economic, social, and environmental outcomes.',
      prompt: 'What are the three pillars of the Triple Bottom Line?',
      type: 'mcq',
      options: [
        'A. Price, Product, Promotion',
        'B. People, Planet, Profit',
        'C. Production, Purchasing, Public Relations',
        'D. Policy, Procedure, Performance'
      ],
      correctOptionIndex: 1,
      hint: 'The 3 Ps: social equity (People), ecological integrity (Planet), and financial viability (Profit).',
      fullSolutionExplanation: 'The Triple Bottom Line framework measures sustainability across People (social justice), Planet (environmental stewardship), and Profit (economic return).',
      markingGuide: [{ stepNumber: 1, description: 'People, Planet, Profit identified', working: 'Triple Bottom Line pillars', markCode: 'A', markValue: 2 }]
    },
    {
      id: 'bs-mcq2-2',
      numberStr: 'QUESTION 2',
      topic: 'Ethics & Professionalism',
      subtopic: 'Unethical business practices: Price fixing',
      marks: 2,
      scenario: 'Three competing bread bakeries secretly meet to agree on a fixed retail price for a standard loaf of bread.',
      prompt: 'Which prohibited anti-competitive practice is being committed under the Competition Act?',
      type: 'mcq',
      options: [
        'A. Collusive price-fixing / cartel conduct',
        'B. Market skimming',
        'C. Penetration pricing',
        'D. Loss-leader strategy'
      ],
      correctOptionIndex: 0,
      hint: 'Competitors colluding to eliminate price competition form a cartel guilty of price-fixing.',
      fullSolutionExplanation: 'Price-fixing occurs when competing enterprises conspire to set uniform artificial prices, violating South African Competition Commission statutes.',
      markingGuide: [{ stepNumber: 1, description: 'Collusive price-fixing identified', working: 'Cartel price-fixing', markCode: 'A', markValue: 2 }]
    },
    {
      id: 'bs-mcq2-3',
      numberStr: 'QUESTION 3',
      topic: 'Team Dynamics: Tuckman’s Model',
      subtopic: 'Stages of team development',
      marks: 2,
      scenario: 'Team members are experiencing personality conflicts, questioning authority, and disputing leadership roles.',
      prompt: 'According to Tuckman’s model of team development, which stage is the team currently in?',
      type: 'mcq',
      options: [
        'A. Forming',
        'B. Storming',
        'C. Norming',
        'D. Performing'
      ],
      correctOptionIndex: 1,
      hint: 'Tuckman stages: Forming -> Storming (conflict/disagreements) -> Norming -> Performing -> Adjourning.',
      fullSolutionExplanation: 'The Storming stage is characterized by interpersonal friction, role contestation, and disagreements as team members assert their individual working styles.',
      markingGuide: [{ stepNumber: 1, description: 'Storming stage identified', working: 'Tuckman storming phase', markCode: 'A', markValue: 2 }]
    },
    {
      id: 'bs-mcq2-4',
      numberStr: 'QUESTION 4',
      topic: 'Conflict Resolution: Grievance Procedure',
      subtopic: 'First step in formal grievance resolution',
      marks: 2,
      scenario: 'An employee feels they were unfairly passed over for a shift allowance.',
      prompt: 'What is the appropriate FIRST step in a standard company grievance procedure?',
      type: 'mcq',
      options: [
        'A. Lodge an urgent dispute at the CCMA immediately',
        'B. Discuss the matter verbally with their immediate supervisor or line manager',
        'C. Call for an unprotected wildcat strike',
        'D. Report the company to the Department of Labour'
      ],
      correctOptionIndex: 1,
      hint: 'Internal procedures always begin with informal verbal dialogue with the direct line supervisor.',
      fullSolutionExplanation: 'Step 1 of standard South African corporate grievance procedures requires the aggrieved employee to state their concern verbally to their direct immediate supervisor to attempt amicable resolution.',
      markingGuide: [{ stepNumber: 1, description: 'Supervisor verbal discussion', working: 'First step in grievance procedure', markCode: 'A', markValue: 2 }]
    },
    {
      id: 'bs-mcq2-5',
      numberStr: 'QUESTION 5',
      topic: 'Forms of Ownership: Companies',
      subtopic: 'Legal personality of a Private Company (Pty) Ltd',
      marks: 2,
      scenario: 'Apex Logistics (Pty) Ltd incurs substantial debt after an economic downturn.',
      prompt: 'Which statement accurately describes the legal liability of the company’s shareholders?',
      type: 'mcq',
      options: [
        'A. Shareholders have unlimited personal liability for all corporate debts',
        'B. Shareholders enjoy limited liability restricted to the capital amount invested in their shares',
        'C. The company automatically converts into a sole proprietorship',
        'D. Shareholders’ private houses and bank accounts can be seized by company creditors'
      ],
      correctOptionIndex: 1,
      hint: 'Companies have separate legal personality, granting shareholders limited liability.',
      fullSolutionExplanation: 'A Private Company is an independent juristic person. Shareholders enjoy limited liability: their personal assets are protected, and losses are capped at their share capital contribution.',
      markingGuide: [{ stepNumber: 1, description: 'Limited liability identified', working: 'Limited liability of shareholders', markCode: 'A', markValue: 2 }]
    }
  ]
};

// 7. Economics MCQ Test 1
export const ECONOMICS_MCQ_1: ExamPaper = {
  id: 'mcq-economics-1',
  subjectId: 'economics',
  year: 2024,
  session: 'Preparatory Trial',
  title: 'Economics MCQ Test 1: Circular Flow & National Aggregates',
  subtitle: 'GDP, GNI, leakages, injections, and multiplier analysis',
  category: 'mcq-test',
  totalMarks: 10,
  timeLimitMinutes: 15,
  instructions: [
    'Select the single most correct answer (A, B, C, or D) for each question.'
  ],
  annexures: [],
  questions: [
    {
      id: 'econ-mcq1-1',
      numberStr: 'QUESTION 1',
      topic: 'Circular Flow Model: Leakages & Injections',
      subtopic: 'Classifying economic flows',
      marks: 2,
      scenario: 'Economists track capital movement between the financial, government, and foreign sectors.',
      prompt: 'Which combination correctly lists all THREE leakages from the circular flow of income?',
      type: 'mcq',
      options: [
        'A. Investment (I), Government Expenditure (G), Exports (X)',
        'B. Savings (S), Taxation (T), Imports (M)',
        'C. Savings (S), Investment (I), Exports (X)',
        'D. Taxation (T), Government Expenditure (G), Imports (M)'
      ],
      correctOptionIndex: 1,
      hint: 'Leakages withdraw money from domestic consumption: S + T + M.',
      fullSolutionExplanation: 'Leakages (withdrawals) from the circular flow comprise Savings (S), Taxes (T), and Imports (M). Injections are Investment (I), Government Spending (G), and Exports (X).',
      markingGuide: [{ stepNumber: 1, description: 'Savings, Taxes, Imports identified', working: 'S + T + M leakages', markCode: 'A', markValue: 2 }]
    },
    {
      id: 'econ-mcq1-2',
      numberStr: 'QUESTION 2',
      topic: 'National Accounts: GDP vs GNI',
      subtopic: 'Reconciling Domestic and National income',
      marks: 2,
      scenario: 'Statisticians convert Gross Domestic Product (GDP) to Gross National Income (GNI).',
      prompt: 'Which adjustment converts GDP to GNI?',
      type: 'mcq',
      options: [
        'A. Add Depreciation (Consumption of Fixed Capital)',
        'B. Add Primary Income from the rest of the world and subtract Primary Income paid to the rest of the world',
        'C. Subtract Subsidies on production',
        'D. Add Value Added Tax (VAT)'
      ],
      correctOptionIndex: 1,
      hint: 'GNI = GDP + Net Primary Income from abroad.',
      fullSolutionExplanation: 'GDP measures economic production within geographical borders. GNI accounts for income earned by permanent residents, requiring the addition of primary income earned abroad and subtraction of foreign income repatriated overseas.',
      markingGuide: [{ stepNumber: 1, description: 'Net primary income adjustment', working: 'GNI = GDP + Net primary income', markCode: 'A', markValue: 2 }]
    },
    {
      id: 'econ-mcq1-3',
      numberStr: 'QUESTION 3',
      topic: 'Macroeconomics: The Multiplier Effect',
      subtopic: 'Calculating multiplier value from MPC / MPS',
      marks: 2,
      scenario: 'In an open economy, the Marginal Propensity to Save (MPS) is 0.20 and Marginal Propensity to Import is 0.05 (total marginal leakage = 0.25).',
      prompt: 'What is the value of the expenditure multiplier (k)?',
      type: 'mcq',
      options: [
        'A. 2.0',
        'B. 4.0',
        'C. 5.0',
        'D. 0.25'
      ],
      correctOptionIndex: 1,
      hint: 'Multiplier k = 1 ÷ Marginal Leakage (or 1 ÷ (1 - MPC)). 1 ÷ 0.25 = ?',
      fullSolutionExplanation: 'Multiplier k = 1 ÷ (Marginal Propensity to Leak) = 1 ÷ 0.25 = 4.0. Every R1 increase in investment creates R4 in national income.',
      markingGuide: [{ stepNumber: 1, description: 'Multiplier k = 4.0', working: 'k = 1 / 0.25 = 4', markCode: 'A', markValue: 2 }]
    },
    {
      id: 'econ-mcq1-4',
      numberStr: 'QUESTION 4',
      topic: 'Business Cycles: Economic Indicators',
      subtopic: 'Leading vs Lagging economic indicators',
      marks: 2,
      scenario: 'The Reserve Bank analyses economic data series to forecast upcoming turning points in the business cycle.',
      prompt: 'Which of the following is classified as a LEADING economic indicator?',
      type: 'mcq',
      options: [
        'A. Unemployment rate',
        'B. Commercial bankruptcies',
        'C. Number of building plans passed',
        'D. Total value of retail sales'
      ],
      correctOptionIndex: 2,
      hint: 'Leading indicators change direction BEFORE the aggregate economy does. Building plans indicate future construction.',
      fullSolutionExplanation: 'Building plans passed are a classic leading indicator: architects and developers get plans approved months before physical construction, hiring, and capital expenditure begin.',
      markingGuide: [{ stepNumber: 1, description: 'Building plans passed identified', working: 'Leading economic indicator', markCode: 'A', markValue: 2 }]
    },
    {
      id: 'econ-mcq1-5',
      numberStr: 'QUESTION 5',
      topic: 'Public Sector: Fiscal Policy Instruments',
      subtopic: 'Expansionary fiscal policy during recession',
      marks: 2,
      scenario: 'South Africa experiences negative economic growth across two consecutive quarters (technical recession).',
      prompt: 'Which fiscal policy combination would the National Treasury use to stimulate aggregate demand?',
      type: 'mcq',
      options: [
        'A. Increase personal income tax rates and decrease government spending',
        'B. Decrease taxes and increase government infrastructure expenditure',
        'C. Raise the repo rate and sell government bonds',
        'D. Restrict import quotas and increase corporate taxes'
      ],
      correctOptionIndex: 1,
      hint: 'Expansionary fiscal policy injects stimulus by cutting taxes (putting more cash into consumer hands) and increasing public spending.',
      fullSolutionExplanation: 'Expansionary fiscal policy entails decreasing taxes (to enhance household disposable income and investment) and elevating government expenditure (G) to directly stimulate aggregate demand.',
      markingGuide: [{ stepNumber: 1, description: 'Decrease taxes and increase expenditure', working: 'Expansionary fiscal policy', markCode: 'A', markValue: 2 }]
    }
  ]
};

// 8. Economics MCQ Test 2
export const ECONOMICS_MCQ_2: ExamPaper = {
  id: 'mcq-economics-2',
  subjectId: 'economics',
  year: 2024,
  session: 'Preparatory Trial',
  title: 'Economics MCQ Test 2: Monetary Policy & Foreign Exchange',
  subtitle: 'SARB repo rates, exchange rate fluctuations, and trade policy',
  category: 'mcq-test',
  totalMarks: 10,
  timeLimitMinutes: 15,
  instructions: [
    'Select the single most correct answer (A, B, C, or D) for each question.'
  ],
  annexures: [],
  questions: [
    {
      id: 'econ-mcq2-1',
      numberStr: 'QUESTION 1',
      topic: 'Monetary Policy: SARB Inflation Targeting',
      subtopic: 'South African headline inflation target band',
      marks: 2,
      scenario: 'The South African Reserve Bank conducts monetary policy according to a formal inflation-targeting framework.',
      prompt: 'What is the official SARB inflation target range for headline CPI?',
      type: 'mcq',
      options: [
        'A. 1% – 3%',
        'B. 3% – 6%',
        'C. 5% – 8%',
        'D. 0% – 2%'
      ],
      correctOptionIndex: 1,
      hint: 'The South African Reserve Bank targets a headline inflation corridor of 3% to 6%.',
      fullSolutionExplanation: 'SARB operates within a statutory inflation targeting range of 3% to 6% per annum, aiming particularly for the 4.5% midpoint.',
      markingGuide: [{ stepNumber: 1, description: '3% - 6% target range identified', working: 'SARB 3% - 6% target', markCode: 'A', markValue: 2 }]
    },
    {
      id: 'econ-mcq2-2',
      numberStr: 'QUESTION 2',
      topic: 'Foreign Exchange: Currency Depreciation',
      subtopic: 'Consequences of a weaker South African Rand (ZAR)',
      marks: 2,
      scenario: 'The South African Rand depreciates against the US Dollar from $1 = R 17.50 to $1 = R 19.00.',
      prompt: 'What is the immediate direct impact on South African exporters and importers?',
      type: 'mcq',
      options: [
        'A. Exports become cheaper/more competitive abroad; imports become more expensive locally',
        'B. Both exports and imports become cheaper',
        'C. Exports become uncompetitive; imports become cheaper',
        'D. Domestic inflation drops immediately'
      ],
      correctOptionIndex: 0,
      hint: 'When local currency weakens, foreign buyers need fewer dollars to buy SA goods (boosts exports), but SA buyers need more Rands to buy foreign goods (imports cost more).',
      fullSolutionExplanation: 'A weaker Rand boosts price competitiveness for South African agricultural and mining exporters in global markets, while making foreign imports (like crude oil and electronics) more expensive in Rand terms.',
      markingGuide: [{ stepNumber: 1, description: 'Exports cheaper abroad / imports more expensive', working: 'Currency depreciation effect', markCode: 'A', markValue: 2 }]
    },
    {
      id: 'econ-mcq2-3',
      numberStr: 'QUESTION 3',
      topic: 'International Trade: Balance of Payments (BoP)',
      subtopic: 'Components of Current Account vs Financial Account',
      marks: 2,
      scenario: 'Foreign portfolio investors purchase shares on the Johannesburg Stock Exchange (JSE).',
      prompt: 'In which account of the Balance of Payments is this financial transaction recorded?',
      type: 'mcq',
      options: [
        'A. Current Account',
        'B. Financial Account',
        'C. Capital Transfer Account',
        'D. Trade Balance of Merchandise'
      ],
      correctOptionIndex: 1,
      hint: 'Purchases of equities, bonds, and direct business acquisitions are financial asset flows (Financial Account).',
      fullSolutionExplanation: 'Portfolio investments (purchases of shares and government bonds by foreigners) are documented in the Financial Account of the Balance of Payments.',
      markingGuide: [{ stepNumber: 1, description: 'Financial Account identified', working: 'BoP Financial account portfolio investment', markCode: 'A', markValue: 2 }]
    },
    {
      id: 'econ-mcq2-4',
      numberStr: 'QUESTION 4',
      topic: 'Protectionism vs Free Trade',
      subtopic: 'Tariffs vs Import Quotas',
      marks: 2,
      scenario: 'The government restricts the physical number of imported poultry units entering the country to 100 000 tons per year.',
      prompt: 'Which trade policy instrument has been implemented?',
      type: 'mcq',
      options: [
        'A. Ad valorem import tariff',
        'B. Specific customs duty',
        'C. Import quota',
        'D. Export subsidy'
      ],
      correctOptionIndex: 2,
      hint: 'A physical quantity limit placed on imports is an import quota.',
      fullSolutionExplanation: 'An import quota imposes a direct quantitative ceiling on the volume of a specific good that may enter the country over a given timeframe.',
      markingGuide: [{ stepNumber: 1, description: 'Import quota identified', working: 'Quantitative import limit', markCode: 'A', markValue: 2 }]
    },
    {
      id: 'econ-mcq2-5',
      numberStr: 'QUESTION 5',
      topic: 'Market Failure: Public Goods',
      subtopic: 'Non-rivalry and non-excludability',
      marks: 2,
      scenario: 'National defense and municipal street lighting protect all citizens regardless of who paid taxes.',
      prompt: 'Which economic characteristics define these pure public goods?',
      type: 'mcq',
      options: [
        'A. Rival and Excludable',
        'B. Non-rival and Non-excludable',
        'C. Demerit and Rival',
        'D. Monopolistic and Divisible'
      ],
      correctOptionIndex: 1,
      hint: 'One person’s consumption doesn’t reduce another’s (non-rival), and non-payers cannot be prevented from benefiting (non-excludable).',
      fullSolutionExplanation: 'Pure public goods are Non-rival (one person using street lighting does not diminish light for others) and Non-excludable (impossible or inefficient to exclude free riders from benefiting).',
      markingGuide: [{ stepNumber: 1, description: 'Non-rival and non-excludable identified', working: 'Public good properties', markCode: 'A', markValue: 2 }]
    }
  ]
};

// 9. English MCQ Test 1
export const ENGLISH_MCQ_1: ExamPaper = {
  id: 'mcq-english-1',
  subjectId: 'english',
  year: 2024,
  session: 'Preparatory Trial',
  title: 'English FAL/HL MCQ Test 1: Parts of Speech & Syntax',
  subtitle: 'Concord, active/passive voice, punctuation and figurative devices',
  category: 'mcq-test',
  totalMarks: 10,
  timeLimitMinutes: 15,
  instructions: [
    'Select the single most correct answer (A, B, C, or D) for each question.'
  ],
  annexures: [],
  questions: [
    {
      id: 'eng-mcq1-1',
      numberStr: 'QUESTION 1',
      topic: 'Syntax & Grammar: Concord',
      subtopic: 'Collective nouns and verb agreement',
      marks: 2,
      scenario: 'Read the sentence: "The committee _______ unable to reach a unanimous verdict on the matter yesterday."',
      prompt: 'Which verb correctly completes the sentence according to standard formal English grammar?',
      type: 'mcq',
      options: [
        'A. was',
        'B. were',
        'C. are',
        'D. is'
      ],
      correctOptionIndex: 0,
      hint: 'In formal South African DBE grammar, collective nouns acting as a singular unit take a singular past-tense verb.',
      fullSolutionExplanation: 'The collective noun "committee" acts as a singular institutional entity in this sentence and describes a past event ("yesterday"), requiring the singular past-tense auxiliary verb "was".',
      markingGuide: [{ stepNumber: 1, description: 'was identified', working: 'Singular concord with collective noun', markCode: 'A', markValue: 2 }]
    },
    {
      id: 'eng-mcq1-2',
      numberStr: 'QUESTION 2',
      topic: 'Voice: Active to Passive Transformation',
      subtopic: 'Maintaining tense in passive voice',
      marks: 2,
      scenario: 'Given active sentence: "The paramedic treated the injured swimmer."',
      prompt: 'What is the correct PASSIVE VOICE form of this sentence?',
      type: 'mcq',
      options: [
        'A. The injured swimmer is treated by the paramedic.',
        'B. The injured swimmer was treated by the paramedic.',
        'C. The injured swimmer had been treated by the paramedic.',
        'D. The injured swimmer has been treated by the paramedic.'
      ],
      correctOptionIndex: 1,
      hint: 'The original verb "treated" is in the simple past tense. Passive simple past requires "was/were + past participle".',
      fullSolutionExplanation: 'Simple past tense ("treated") converts to "was treated by" in passive voice while placing the original object ("the injured swimmer") in the subject position.',
      markingGuide: [{ stepNumber: 1, description: 'was treated by identified', working: 'Passive past tense', markCode: 'A', markValue: 2 }]
    },
    {
      id: 'eng-mcq1-3',
      numberStr: 'QUESTION 3',
      topic: 'Figurative Language: Figures of Speech',
      subtopic: 'Personification and Metaphor',
      marks: 2,
      scenario: 'Consider the poetic line: "The relentless wind howled through the barren valley."',
      prompt: 'Which figure of speech is demonstrated by the phrase "wind howled"?',
      type: 'mcq',
      options: [
        'A. Simile',
        'B. Personification',
        'C. Hyperbole',
        'D. Euphemism'
      ],
      correctOptionIndex: 1,
      hint: 'Giving human or animal vocal actions (howling) to an inanimate natural force (the wind) is personification.',
      fullSolutionExplanation: 'Personification attributes human or animal characteristics and behaviors (howling) to non-human or inanimate entities (the wind).',
      markingGuide: [{ stepNumber: 1, description: 'Personification identified', working: 'Personification figure of speech', markCode: 'A', markValue: 2 }]
    },
    {
      id: 'eng-mcq1-4',
      numberStr: 'QUESTION 4',
      topic: 'Punctuation: Apostrophes',
      subtopic: 'Differentiating possession vs contraction',
      marks: 2,
      scenario: 'Read the phrase: "The dog wagged _______ tail."',
      prompt: 'Which spelling correctly indicates possession without an unnecessary contraction?',
      type: 'mcq',
      options: [
        'A. it\'s',
        'B. its',
        'C. its\'',
        'D. it\''
      ],
      correctOptionIndex: 1,
      hint: 'Possessive pronoun: its. Contraction for "it is": it\'s.',
      fullSolutionExplanation: '"Its" is the possessive pronoun indicating ownership (like his or her). "It\'s" is a contraction for "it is" or "it has".',
      markingGuide: [{ stepNumber: 1, description: 'its identified', working: 'Possessive pronoun its', markCode: 'A', markValue: 2 }]
    },
    {
      id: 'eng-mcq1-5',
      numberStr: 'QUESTION 5',
      topic: 'Direct to Indirect Speech',
      subtopic: 'Pronoun and tense shifting',
      marks: 2,
      scenario: 'Direct sentence: Brenda said, "I will submit the assignment tomorrow."',
      prompt: 'What is the correct reported (indirect) speech form of this statement?',
      type: 'mcq',
      options: [
        'A. Brenda said that I would submit the assignment tomorrow.',
        'B. Brenda said that she would submit the assignment the following day.',
        'C. Brenda said that she will submit the assignment tomorrow.',
        'D. Brenda says that she would submit the assignment the next day.'
      ],
      correctOptionIndex: 1,
      hint: 'Tense shift: "will" becomes "would". Time shift: "tomorrow" becomes "the following day / the next day". Pronoun shift: "I" becomes "she".',
      fullSolutionExplanation: 'In indirect speech, the 1st person pronoun shifts ("I" -> "she"), the future auxiliary shifts ("will" -> "would"), and time indicators adjust ("tomorrow" -> "the following day").',
      markingGuide: [{ stepNumber: 1, description: 'Correct indirect speech transformation', working: 'Reported speech rules', markCode: 'A', markValue: 2 }]
    }
  ]
};

// 10. English MCQ Test 2
export const ENGLISH_MCQ_2: ExamPaper = {
  id: 'mcq-english-2',
  subjectId: 'english',
  year: 2024,
  session: 'Preparatory Trial',
  title: 'English FAL/HL MCQ Test 2: Persuasive Techniques & Cartoons',
  subtitle: 'Advertising appeals, tone, register, and cartoon visual cues',
  category: 'mcq-test',
  totalMarks: 10,
  timeLimitMinutes: 15,
  instructions: [
    'Select the single most correct answer (A, B, C, or D) for each question.'
  ],
  annexures: [],
  questions: [
    {
      id: 'eng-mcq2-1',
      numberStr: 'QUESTION 1',
      topic: 'Advertising: Emotive Language',
      subtopic: 'Appealing to maternal and safety instincts',
      marks: 2,
      scenario: 'An insurance advertisement displays the slogan: "Protect your defenseless little ones from life’s unforeseen storms."',
      prompt: 'Which advertising technique is primarily utilized in this slogan?',
      type: 'mcq',
      options: [
        'A. Statistical proof',
        'B. Emotive language',
        'C. Celebrity endorsement',
        'D. Jargon / technical terminology'
      ],
      correctOptionIndex: 1,
      hint: 'Words like "defenseless", "little ones", and "unforeseen storms" trigger powerful emotional reactions.',
      fullSolutionExplanation: 'Emotive words deliberately elicit deep feelings of protective instinct and parental anxiety to persuade the reader to purchase insurance.',
      markingGuide: [{ stepNumber: 1, description: 'Emotive language identified', working: 'Persuasive emotive appeal', markCode: 'A', markValue: 2 }]
    },
    {
      id: 'eng-mcq2-2',
      numberStr: 'QUESTION 2',
      topic: 'Cartoon Analysis: Visual Conventions',
      subtopic: 'Speech bubble shapes and meanings',
      marks: 2,
      scenario: 'In a comic strip frame, a character\'s speech bubble is drawn with jagged, zigzag lightning-bolt edges.',
      prompt: 'What does a jagged or spiky speech bubble conventionally signify in cartoon semiotics?',
      type: 'mcq',
      options: [
        'A. The character is whispering quietly',
        'B. The character is thinking internally to themselves',
        'C. The character is shouting loudly, screaming, or speaking in intense anger',
        'D. The character is singing a melody'
      ],
      correctOptionIndex: 2,
      hint: 'Smooth bubbles indicate normal speech, cloud-like bubbles indicate thoughts, and jagged spiky bubbles represent shouts or explosive sounds.',
      fullSolutionExplanation: 'Jagged, saw-toothed speech bubbles visually symbolize high volume, screaming, panic, or violent explosive dialogue.',
      markingGuide: [{ stepNumber: 1, description: 'Shouting / intense anger identified', working: 'Cartoon bubble convention', markCode: 'A', markValue: 2 }]
    },
    {
      id: 'eng-mcq2-3',
      numberStr: 'QUESTION 3',
      topic: 'Tone & Register: Nuance',
      subtopic: 'Sarcastic vs sincere tone',
      marks: 2,
      scenario: 'After dropping a tray of glasses that shatters across the kitchen floor, a waiter remarks: "Well, that was brilliant."',
      prompt: 'What is the tone of the waiter\'s remark?',
      type: 'mcq',
      options: [
        'A. Sarcastic / ironic',
        'B. Celebratory',
        'C. Objective',
        'D. Nostalgic'
      ],
      correctOptionIndex: 0,
      hint: 'Saying "brilliant" when a disaster just occurred is irony/sarcasm.',
      fullSolutionExplanation: 'The statement expresses the direct opposite of literal meaning to mock the mistake, exhibiting a sarcastic and dryly ironic tone.',
      markingGuide: [{ stepNumber: 1, description: 'Sarcastic / ironic tone identified', working: 'Sarcastic tone', markCode: 'A', markValue: 2 }]
    },
    {
      id: 'eng-mcq2-4',
      numberStr: 'QUESTION 4',
      topic: 'Vocabulary: Malapropism',
      subtopic: 'Identifying incorrect word substitution',
      marks: 2,
      scenario: 'A speaker announces: "Our company has reached the pinnacle of financial extinguished achievement."',
      prompt: 'The incorrect use of "extinguished" instead of "distinguished" is an example of a:',
      type: 'mcq',
      options: [
        'A. Euphemism',
        'B. Malapropism',
        'C. Oxymoron',
        'D. Tautology'
      ],
      correctOptionIndex: 1,
      hint: 'Using an incorrect word in place of a similar-sounding word is a malapropism.',
      fullSolutionExplanation: 'A malapropism is the humorous or erroneous misuse of a word that sounds similar to the intended word ("extinguished" instead of "distinguished").',
      markingGuide: [{ stepNumber: 1, description: 'Malapropism identified', working: 'Malapropism definition', markCode: 'A', markValue: 2 }]
    },
    {
      id: 'eng-mcq2-5',
      numberStr: 'QUESTION 5',
      topic: 'Critical Reading: Bias vs Fact',
      subtopic: 'Differentiating verifiable data from subjective bias',
      marks: 2,
      scenario: 'Read the following four newspaper statements.',
      prompt: 'Which statement represents an objective FACT rather than an opinion or subjective bias?',
      type: 'mcq',
      options: [
        'A. "This is without a doubt the most thrilling soccer final in history."',
        'B. "Bafana Bafana defeated their opponents 2–1 at FNB Stadium yesterday."',
        'C. "The referee was blatantly unfair throughout the entire second half."',
        'D. "Our national team coach is the most talented strategist in Africa."'
      ],
      correctOptionIndex: 1,
      hint: 'A fact can be independently verified with concrete historical or statistical evidence.',
      fullSolutionExplanation: 'The scoreline 2–1 at FNB Stadium is an objectively verifiable statistical fact. The other options express subjective qualitative judgments and value opinions.',
      markingGuide: [{ stepNumber: 1, description: 'Verifiable scoreline fact identified', working: 'Objective fact vs opinion', markCode: 'A', markValue: 2 }]
    }
  ]
};

// 11. Afrikaans MCQ Test 1
export const AFRIKAANS_MCQ_1: ExamPaper = {
  id: 'mcq-afrikaans-1',
  subjectId: 'afrikaans',
  year: 2024,
  session: 'Preparatory Trial',
  title: 'Afrikaans EAT MCQ Toets 1: Woordsoorte & Tye',
  subtitle: 'Selfstandige naamwoorde, byvoeglike naamwoorde, verlede tyd en STOMPI',
  category: 'mcq-test',
  totalMarks: 10,
  timeLimitMinutes: 15,
  instructions: [
    'Kies die enkele korrekte antwoord (A, B, C of D) vir elke vraag.'
  ],
  annexures: [],
  questions: [
    {
      id: 'afr-mcq1-1',
      numberStr: 'VRAAG 1',
      topic: 'Tye: Verlede Tyd',
      subtopic: 'Gebruik van het + ge-werkwoord',
      marks: 2,
      scenario: 'Gegee die sin in die teenwoordige tyd: "Die leerders skryf vandag hulle eksamen."',
      prompt: 'Wat is die korrekte VERLEDE TYD van hierdie sin?',
      type: 'mcq',
      options: [
        'A. Die leerders sal gister hulle eksamen geskryf het.',
        'B. Die leerders het gister hulle eksamen geskryf.',
        'C. Die leerders geskryf gister hulle eksamen.',
        'D. Die leerders het gister hulle eksamen skryf.'
      ],
      correctOptionIndex: 1,
      hint: 'In die verlede tyd skuif die hulpwerkwoord "het" na die werkwoord 1-posisie en die hoofwerkwoord kry "ge-" aan die einde van die sin.',
      fullSolutionExplanation: 'STOMPI in die verlede tyd: Onderwerp (Die leerders) + Hulpwerkwoord (het) + Tyd (gister) + Voorwerp (hulle eksamen) + Hoofwerkwoord met ge- (geskryf).',
      markingGuide: [{ stepNumber: 1, description: 'het gister geskryf korrek', working: 'Verlede tyd reël', markCode: 'A', markValue: 2 }]
    },
    {
      id: 'afr-mcq1-2',
      numberStr: 'VRAAG 2',
      topic: 'Voegwoorde: Groepe en Woordorde',
      subtopic: 'Groep 3 voegwoorde (dat, omdat, aangesien)',
      marks: 2,
      scenario: 'Verbind die sinne met die Groep 3 voegwoord "omdat": Sin 1: "Johan bly by die huis." Sin 2: "Hy is siek."',
      prompt: 'Wat is die korrekte woordorde?',
      type: 'mcq',
      options: [
        'A. Johan bly by die huis, omdat hy siek is.',
        'B. Johan bly by die huis, omdat is hy siek.',
        'C. Johan bly by die huis, omdat hy is siek.',
        'D. Johan bly by die huis, want hy is siek.'
      ],
      correctOptionIndex: 0,
      hint: 'Groep 3 voegwoorde (omdat, dat, sodat) stoot die werkwoord na die heel einde van die sin.',
      fullSolutionExplanation: 'Groep 3 voegwoorde veroorsaak dat die gekoepelde werkwoord ("is") heel na die einde van die bysin skuif: "...omdat hy siek is."',
      markingGuide: [{ stepNumber: 1, description: 'Werkwoord skuif na die einde (is)', working: 'Groep 3 voegwoord reël', markCode: 'A', markValue: 2 }]
    },
    {
      id: 'afr-mcq1-3',
      numberStr: 'VRAAG 3',
      topic: 'Woordsoorte: Byvoeglike Naamwoorde',
      subtopic: 'Attributiewe verbuiging met \'n \'e\'',
      marks: 2,
      scenario: 'Gee die korrekte vorm van die byvoeglike naamwoord tussen hakies: "Dit is \'n (oud) gebou."',
      prompt: 'Watter verbuiging is korrek?',
      type: 'mcq',
      options: [
        'A. ouer',
        'B. ou',
        'C. oude',
        'D. oudste'
      ],
      correctOptionIndex: 1,
      hint: 'Die attributiewe vorm van "oud" voor \'n selfstandige naamwoord is "ou" (bv. \'n ou man, \'n ou gebou).',
      fullSolutionExplanation: 'In Afrikaans verbuig die byvoeglike naamwoord "oud" na "ou" wanneer dit direk voor die selfstandige naamwoord staan (\'n ou gebou).',
      markingGuide: [{ stepNumber: 1, description: 'ou gebou korrek', working: 'Attributiewe verbuiging van oud', markCode: 'A', markValue: 2 }]
    },
    {
      id: 'afr-mcq1-4',
      numberStr: 'VRAAG 4',
      topic: 'Voornaamwoorde: Betreklike Voornaamwoord',
      subtopic: 'Mense vs dinge (wie vs wat)',
      marks: 2,
      scenario: 'Lees die sin: "Die dokter van _______ ek die medisyne gekry het, is baie vriendelik."',
      prompt: 'Watter betreklike voornaamwoord pas korrek in die spasie na die voorsetsel?',
      type: 'mcq',
      options: [
        'A. wat',
        'B. wie',
        'C. wie se',
        'D. waarom'
      ],
      correctOptionIndex: 1,
      hint: 'Vir mense ná \'n voorsetsel (van, aan, vir, met) gebruik ons "wie" (van wie, aan wie, met wie).',
      fullSolutionExplanation: 'Wanneer \'n mens aangedui word ná \'n voorsetsel ("van"), is die korrekte betreklike voornaamwoord "wie" ("van wie"). As dit na \'n ding verwys het, sou dit "waarvan" wees.',
      markingGuide: [{ stepNumber: 1, description: 'wie geïdentifiseer', working: 'Betreklike voornaamwoord na voorsetsel', markCode: 'A', markValue: 2 }]
    },
    {
      id: 'afr-mcq1-5',
      numberStr: 'VRAAG 5',
      topic: 'Woordbou: Samestellings',
      subtopic: 'Tussenklanke (-e-, -s-)',
      marks: 2,
      scenario: 'Kombineer "hond" en "hok" om een saamgestelde woord te vorm.',
      prompt: 'Wat is die korrekte spelling van die samestelling?',
      type: 'mcq',
      options: [
        'A. hondehok',
        'B. hondhok',
        'C. hondeshok',
        'D. hond-hok'
      ],
      correctOptionIndex: 0,
      hint: 'Die meervoudsvorm of tussenklank "-e-" word gebruik: hond + e + hok = hondehok.',
      fullSolutionExplanation: 'Die korrekte Afrikaanse samestelling neem die tussenklank "-e-": hond + e + hok = hondehok.',
      markingGuide: [{ stepNumber: 1, description: 'hondehok korrek', working: 'Samestelling met tussenklank -e-', markCode: 'A', markValue: 2 }]
    }
  ]
};

// 12. Afrikaans MCQ Test 2
export const AFRIKAANS_MCQ_2: ExamPaper = {
  id: 'mcq-afrikaans-2',
  subjectId: 'afrikaans',
  year: 2024,
  session: 'Preparatory Trial',
  title: 'Afrikaans EAT MCQ Toets 2: Ontkenning & Direkte/Indirekte Rede',
  subtitle: 'Die negatief, sinsbou, voorsetsels en idiome',
  category: 'mcq-test',
  totalMarks: 10,
  timeLimitMinutes: 15,
  instructions: [
    'Kies die enkele korrekte antwoord (A, B, C of D) vir elke vraag.'
  ],
  annexures: [],
  questions: [
    {
      id: 'afr-mcq2-1',
      numberStr: 'VRAAG 1',
      topic: 'Die Ontkenning (Negatief)',
      subtopic: 'Iemand en iewers ontkenning',
      marks: 2,
      scenario: 'Gegee die sin: "Daar is iemand in die klaskamer."',
      prompt: 'Wat is die korrekte ONTKENNENDE VORM van hierdie sin?',
      type: 'mcq',
      options: [
        'A. Daar is nie iemand in die klaskamer.',
        'B. Daar is niemand in die klaskamer nie.',
        'C. Daar is geen mens in die klaskamer.',
        'D. Daar is nie niemand in die klaskamer nie.'
      ],
      correctOptionIndex: 1,
      hint: '"Iemand" verander na "niemand ... nie". Moenie vergeet om die slot-nie aan die einde te plaas nie.',
      fullSolutionExplanation: 'Die woord "iemand" verander in die ontkenning na "niemand" en vereis die verpligte slot-"nie" aan die einde van die sin: "Daar is niemand in die klaskamer nie."',
      markingGuide: [{ stepNumber: 1, description: 'niemand ... nie korrek', working: 'Iemand word niemand ... nie', markCode: 'A', markValue: 2 }]
    },
    {
      id: 'afr-mcq2-2',
      numberStr: 'VRAAG 2',
      topic: 'Lydende en Bedrywende Vorm',
      subtopic: 'Teenwoordige tyd in die passief',
      marks: 2,
      scenario: 'Bedrywende sin: "Die brandweer blus die vlamme."',
      prompt: 'Wat is die korrekte LYDENDE VORM in die TEENWOORDIGE TYD?',
      type: 'mcq',
      options: [
        'A. Die vlamme is deur die brandweer geblus.',
        'B. Die vlamme word deur die brandweer geblus.',
        'C. Die vlamme sal deur die brandweer geblus word.',
        'D. Die vlamme was deur die brandweer geblus.'
      ],
      correctOptionIndex: 1,
      hint: 'In die teenwoordige tyd gebruik die lydende vorm die hulpwerkwoord "word" (nie "is" nie; "is" is vir verlede tyd).',
      fullSolutionExplanation: 'Teenwoordige tyd in die passiewe vorm gebruik "word + deur + ge-werkwoord": "Die vlamme word deur die brandweer geblus."',
      markingGuide: [{ stepNumber: 1, description: 'word deur ... geblus korrek', working: 'Passief in teenwoordige tyd', markCode: 'A', markValue: 2 }]
    },
    {
      id: 'afr-mcq2-3',
      numberStr: 'VRAAG 3',
      topic: 'Direkte en Indirekte Rede',
      subtopic: 'Vraagsin sonder vraagwoord',
      marks: 2,
      scenario: 'Direkte rede: Paul vra vir Lisa: "Het jy jou huiswerk gedoen?"',
      prompt: 'Wat is die korrekte INDIREKTE REDE van Paul se vraag?',
      type: 'mcq',
      options: [
        'A. Paul vra vir Lisa dat sy haar huiswerk gedoen het.',
        'B. Paul vra vir Lisa of sy haar huiswerk gedoen het.',
        'C. Paul vra vir Lisa as sy haar huiswerk gedoen het.',
        'D. Paul vra vir Lisa het sy haar huiswerk gedoen.'
      ],
      correctOptionIndex: 1,
      hint: '\'n Ja/Nee-vraagsin begin in die indirekte rede met die voegwoord "of".',
      fullSolutionExplanation: 'Wanneer \'n direkte vraagsin met \'n werkwoord begin (geen vraagwoord soos wie/wat/waar nie), word die voegwoord "of" gebruik en skuif die werkwoord "het" na die einde: "Paul vra vir Lisa of sy haar huiswerk gedoen het."',
      markingGuide: [{ stepNumber: 1, description: 'of sy haar huiswerk gedoen het', working: 'Indirekte rede van ja/nee-vraag', markCode: 'A', markValue: 2 }]
    },
    {
      id: 'afr-mcq2-4',
      numberStr: 'VRAAG 4',
      topic: 'Vaste Uitdrukkings en Idiome',
      subtopic: 'Betekenis van bekende Afrikaanse idiome',
      marks: 2,
      scenario: 'Mnr. Dlamini sê sy span het vandag "die spyker op die kop geslaan".',
      prompt: 'Wat beteken die idioom "die spyker op die kop slaan"?',
      type: 'mcq',
      options: [
        'A. Hulle het baie harde handewerk in die werkswinkel gedoen.',
        'B. Hulle het presies die regte ding gesê of die saak korrek opgesom.',
        'C. Hulle het \'n baie ernstige fout begaan.',
        'D. Hulle het kwaad geword en baklei.'
      ],
      correctOptionIndex: 1,
      hint: 'Om die spyker op die kop te slaan beteken jy is 100% in die kol.',
      fullSolutionExplanation: 'Die figuurlike idioom "om die spyker op die kop te slaan" beteken om presies reg te wees of die kern van die saak akkuraat raak te vat.',
      markingGuide: [{ stepNumber: 1, description: 'Presies reg wees geïdentifiseer', working: 'Idioom betekenis', markCode: 'A', markValue: 2 }]
    },
    {
      id: 'afr-mcq2-5',
      numberStr: 'VRAAG 5',
      topic: 'Vaste Voorsetsels',
      subtopic: 'Voorsetsels by werkwoorde',
      marks: 2,
      scenario: 'Voltooi die sin met die korrekte vaste voorsetsel: "Die matrikulante sien uit _______ die vakansie."',
      prompt: 'Watter voorsetsel pas by "uitsien"?',
      type: 'mcq',
      options: [
        'A. vir',
        'B. na',
        'C. oor',
        'D. aan'
      ],
      correctOptionIndex: 1,
      hint: 'In Afrikaans sien \'n mens uit "na" iets.',
      fullSolutionExplanation: 'Die vaste voorsetselverbinding is "uitsien na" (Die matrikulante sien uit na die vakansie).',
      markingGuide: [{ stepNumber: 1, description: 'na korrek geïdentifiseer', working: 'Vaste voorsetsel uitsien na', markCode: 'A', markValue: 2 }]
    }
  ]
};
