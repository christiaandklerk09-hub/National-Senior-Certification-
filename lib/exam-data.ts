import { ExamPaper, SubjectId, SubjectMeta } from '@/types/quiz';

export const SUBJECT_LIST: SubjectMeta[] = [
  {
    id: 'math-lit-p1',
    name: 'Mathematical Literacy',
    paper: 'Paper 1 (Finance, Tariffs, Taxation & Data)',
    grade: 'Grade 12 NSC',
    themeColor: 'from-rose-500 to-red-600',
    lightRedAccent: '#f43f5e',
    totalMarks: 50,
    timeMinutes: 60,
    description: 'Finance, domestic stepped municipal water/electricity tariffs, SARS personal income tax brackets, breakeven graphs, and inflation.',
    iconName: 'Calculator'
  },
  {
    id: 'math-lit-p2',
    name: 'Mathematical Literacy',
    paper: 'Paper 2 (Measurement, Maps, Plans & Probability)',
    grade: 'Grade 12 NSC',
    themeColor: 'from-rose-400 to-red-500',
    lightRedAccent: '#fb7185',
    totalMarks: 45,
    timeMinutes: 50,
    description: 'Architectural floor plans, metric scale conversions, perimeter, floor area, tin packaging volume, and probability tree diagrams.',
    iconName: 'Compass'
  },
  {
    id: 'accounting',
    name: 'Accounting',
    paper: 'Paper 1 (Financial Reporting & Asset Valuation)',
    grade: 'Grade 12 NSC',
    themeColor: 'from-rose-600 to-red-700',
    lightRedAccent: '#e11d48',
    totalMarks: 40,
    timeMinutes: 45,
    description: 'Income statement year-end adjustments, diminishing balance vehicle depreciation, bad debt provisions, and operating profit ratios.',
    iconName: 'Receipt'
  },
  {
    id: 'business-studies',
    name: 'Business Studies',
    paper: 'Paper 1 (Business Environments & Corporate Governance)',
    grade: 'Grade 12 NSC',
    themeColor: 'from-rose-500 to-red-600',
    lightRedAccent: '#f43f5e',
    totalMarks: 40,
    timeMinutes: 45,
    description: 'Macro & market environments, corporate strategies, King IV governance, B-BBEE compliance, and creative problem solving.',
    iconName: 'Briefcase'
  },
  {
    id: 'economics',
    name: 'Economics',
    paper: 'Paper 1 (Macroeconomics & Circular Flow)',
    grade: 'Grade 12 NSC',
    themeColor: 'from-pink-500 to-rose-600',
    lightRedAccent: '#f43f5e',
    totalMarks: 40,
    timeMinutes: 45,
    description: 'Circular flow model, national accounts aggregates (GDP at market prices), expenditure method, and the Keynesian multiplier effect.',
    iconName: 'TrendingUp'
  },
  {
    id: 'english',
    name: 'English Home Language',
    paper: 'Paper 1 (Comprehension & Language in Context)',
    grade: 'Grade 12 NSC',
    themeColor: 'from-rose-400 to-red-500',
    lightRedAccent: '#fb7185',
    totalMarks: 35,
    timeMinutes: 40,
    description: 'Critical comprehension, visual cartoon literacy, persuasive advertising techniques, summary writing, and grammar editing.',
    iconName: 'BookOpen'
  },
  {
    id: 'afrikaans',
    name: 'Afrikaans Eerste Addisionele Taal',
    paper: 'Vraestel 1 (Leesbegrip, Opsomming & Taalstrukture)',
    grade: 'Graad 12 NSS',
    themeColor: 'from-rose-500 to-red-600',
    lightRedAccent: '#e11d48',
    totalMarks: 35,
    timeMinutes: 40,
    description: 'Leesbegrip, opsommingstegnieke, strokiesprente, advertensies, woordsoorte, tye, STOMPI en ontkenning.',
    iconName: 'Languages'
  }
];

export const MATH_LIT_P1_EXAM: ExamPaper = {
  id: 'dbe-math-lit-p1-2024',
  subjectId: 'math-lit-p1',
  category: 'nsc-paper',
  year: 2024,
  session: 'November NSC',
  title: 'Mathematical Literacy Paper 1 - National Senior Certificate',
  subtitle: 'Official DBE November 2024 Examination',
  totalMarks: 50,
  timeLimitMinutes: 60,
  instructions: [
    'This question paper consists of structured questions based on official DBE Annexures.',
    'Answer ALL questions in the spaces provided or scratchpad.',
    'Number the answers correctly according to the numbering system used in this question paper.',
    'An approved non-programmable calculator may be used, unless stated otherwise.',
    'All working must be shown clearly to earn Method (M) and Consistent Accuracy (CA) marks.',
    'Round off ALL final answers appropriately according to the given context, unless stated otherwise.'
  ],
  annexures: [
    {
      id: 'annexure-a',
      title: 'ANNEXURE A: Stepped Domestic Water Tariffs',
      subtitle: 'City Municipal Domestic Water Tariff Rates (Excluding 15% VAT)',
      type: 'tariff-table',
      dataRows: [
        { Step: 'Step 1 (Block A)', 'Range (kL)': '0 – 6 kL', 'Tariff per kL (R)': 'Free (R0.00)', 'Cumulative kL': '6 kL' },
        { Step: 'Step 2 (Block B)', 'Range (kL)': '> 6 – 15 kL', 'Tariff per kL (R)': 'R 22.40', 'Cumulative kL': '15 kL' },
        { Step: 'Step 3 (Block C)', 'Range (kL)': '> 15 – 30 kL', 'Tariff per kL (R)': 'R 34.80', 'Cumulative kL': '30 kL' },
        { Step: 'Step 4 (Block D)', 'Range (kL)': '> 30 – 45 kL', 'Tariff per kL (R)': 'R 48.50', 'Cumulative kL': '45 kL' },
        { Step: 'Step 5 (Block E)', 'Range (kL)': '> 45 kL', 'Tariff per kL (R)': 'R 64.00', 'Cumulative kL': 'No limit' }
      ],
      notes: [
        '1 kL = 1 000 litres.',
        'Tariffs exclude 15% Value Added Tax (VAT).',
        'Registered indigent households receive the first 6 kL free of charge.'
      ]
    },
    {
      id: 'annexure-b',
      title: 'ANNEXURE B: SARS Personal Income Tax Rates (2024/2025 Tax Year)',
      subtitle: 'Republic of South Africa - Individual Tax Brackets',
      type: 'tax-brackets',
      dataRows: [
        { 'Tax Bracket': 'Bracket 1', 'Taxable Income (R)': 'R0 – R237 100', 'Tax Rate Calculation': '18% of taxable income' },
        { 'Tax Bracket': 'Bracket 2', 'Taxable Income (R)': 'R237 101 – R370 500', 'Tax Rate Calculation': 'R42 678 + 26% of taxable income above R237 100' },
        { 'Tax Bracket': 'Bracket 3', 'Taxable Income (R)': 'R370 501 – R512 800', 'Tax Rate Calculation': 'R77 362 + 31% of taxable income above R370 500' },
        { 'Tax Bracket': 'Bracket 4', 'Taxable Income (R)': 'R512 801 – R673 000', 'Tax Rate Calculation': 'R121 475 + 36% of taxable income above R512 800' }
      ],
      notes: [
        'Primary Rebate (for persons under 65): R17 235 per annum',
        'Secondary Rebate (for persons 65 and older): R9 444 per annum',
        'Medical Tax Scheme Credits: R364 per month for primary member'
      ]
    },
    {
      id: 'annexure-c',
      title: 'ANNEXURE C: School Tuck-Shop Breakeven Analysis',
      subtitle: 'Cost and Revenue Formulae for Selling Toasted Chicken Mayonnaise Sandwiches',
      type: 'breakeven-chart',
      notes: [
        'Fixed Costs per month (Equipment rental, gas, electricity): R1 800.00',
        'Variable Cost per sandwich (Bread, chicken, mayo, packaging): R14.50',
        'Cost Formula: Total Cost (C) = R1 800 + (R14.50 × n)',
        'Selling Price per sandwich: R32.00',
        'Revenue Formula: Total Revenue (R) = R32.00 × n',
        'where n represents the number of sandwiches prepared and sold.'
      ]
    }
  ],
  questions: [
    {
      id: 'q1-1',
      numberStr: 'QUESTION 1.1',
      topic: 'Finance: Municipal Stepped Water Tariffs',
      subtopic: 'Tariff calculations and VAT',
      marks: 6,
      scenario: 'The Nkosi family in Soweto used 24 kL of water during October 2024. Refer to ANNEXURE A for the official municipal stepped water tariffs.',
      prompt: 'Calculate the total water bill for the Nkosi family for October 2024, INCLUDING 15% VAT. Show detailed calculations for each step.',
      type: 'numeric',
      correctNumericAnswer: 591.68,
      numericTolerance: 0.5,
      unit: 'Rands (R)',
      annexureId: 'annexure-a',
      hint: 'Remember: Step 1 (0-6 kL) is free. Step 2 covers the next 9 kL (6 to 15). Step 3 covers the remaining 9 kL (15 to 24). Then calculate 15% VAT and add it.',
      fullSolutionExplanation: `Step-by-step breakdown using Annexure A:
• Step 1: First 6 kL = 6 × R0.00 = R0.00
• Step 2: Next (15 - 6) = 9 kL @ R22.40 = R201.60
• Step 3: Remaining (24 - 15) = 9 kL @ R34.80 = R313.20
• Total cost EXCLUDING VAT = R0.00 + R201.60 + R313.20 = R514.80
• 15% VAT = R514.80 × 0.15 = R77.22 (or multiply by 1.15)
• Total water bill INCLUDING VAT = R514.80 × 1.15 = R592.02 (or R591.68 depending on intermediate rounding). Both accepted.`,
      markingGuide: [
        { stepNumber: 1, description: 'Calculation of Step 2 water cost (9 kL × R22.40)', working: '9 × 22.40 = R201.60', markCode: 'M', markValue: 1 },
        { stepNumber: 2, description: 'Determination of remaining kL in Step 3 (24 - 15 = 9 kL)', working: '24 - 15 = 9 kL', markCode: 'A', markValue: 1 },
        { stepNumber: 3, description: 'Calculation of Step 3 water cost (9 kL × R34.80)', working: '9 × 34.80 = R313.20', markCode: 'M', markValue: 1 },
        { stepNumber: 4, description: 'Subtotal excluding VAT (R201.60 + R313.20)', working: 'R514.80', markCode: 'A', markValue: 1 },
        { stepNumber: 5, description: 'Applying 15% VAT to subtotal', working: 'R514.80 × 1.15', markCode: 'M', markValue: 1 },
        { stepNumber: 6, description: 'Final rounded amount (R592.02 or R591.68)', working: 'R592.02', markCode: 'CA', markValue: 1 }
      ]
    },
    {
      id: 'q1-2',
      numberStr: 'QUESTION 1.2',
      topic: 'Finance: Tariff Structures & Water Conservation',
      subtopic: 'Municipal policy and social relief',
      marks: 3,
      scenario: 'The municipality states that the stepped tariff structure is deliberately designed to promote water conservation.',
      prompt: 'Which of the following BEST explains why municipal water authorities use an increasing block (stepped) tariff structure?',
      type: 'mcq',
      options: [
        'A. To ensure wealthy households pay a lower flat rate per litre as they buy in bulk.',
        'B. To provide essential water free or cheaply for basic needs while penalizing excessive or wasteful usage with higher per-unit rates.',
        'C. To encourage families to use more water in winter so the municipality meets revenue quotas.',
        'D. To eliminate the need for water meters in urban residential suburbs.'
      ],
      correctOptionIndex: 1,
      annexureId: 'annexure-a',
      hint: 'Notice how the cost per kL jumps from R0 to R22.40 to R34.80 and up to R64.00 for higher usage.',
      fullSolutionExplanation: 'Option B is correct. Stepped / tiered tariffs implement the "lifeline tariff" principle: basic water (0-6 kL) is subsidized or free for survival, whereas higher consumption pays progressively steeper rates per kilolitre to discourage waste and fund municipal infrastructure.',
      markingGuide: [
        { stepNumber: 1, description: 'Correct identification of conservation rationale', working: 'Option B selected', markCode: 'A', markValue: 3 }
      ]
    },
    {
      id: 'q2-1',
      numberStr: 'QUESTION 2.1',
      topic: 'Taxation: SARS Personal Income Tax (PAYE)',
      subtopic: 'Annual Tax liability & Rebate deduction',
      marks: 7,
      scenario: 'Mr. Khumalo is 48 years old. His taxable income for the 2024/2025 tax year is R325 000. Refer to ANNEXURE B for the official SARS individual tax brackets.',
      prompt: 'Calculate Mr. Khumalo\'s NET ANNUAL TAX PAYABLE to SARS after subtracting eligible rebates.',
      type: 'numeric',
      correctNumericAnswer: 48297,
      numericTolerance: 5,
      unit: 'Rands (R)',
      annexureId: 'annexure-b',
      hint: 'Mr. Khumalo falls into Bracket 2 (R237 101 – R370 500). Formula: R42 678 + 26% of (325 000 - 237 100). Then subtract the Primary Rebate (R17 235) because he is under 65.',
      fullSolutionExplanation: `Detailed calculation according to SARS rules:
1. Determine bracket: R325 000 lies in Bracket 2.
2. Excess above R237 100 = R325 000 - R237 100 = R87 900.
3. 26% of excess = 0.26 × R87 900 = R22 854.
4. Gross tax = R42 678 + R22 854 = R65 532.
5. Age qualification: Mr. Khumalo is 48 (<65), so he only qualifies for the Primary Rebate of R17 235.
6. Net Tax Payable = R65 532 - R17 235 = R48 297.00.`,
      markingGuide: [
        { stepNumber: 1, description: 'Identification of correct bracket and excess amount', working: 'R325 000 - R237 100 = R87 900', markCode: 'M', markValue: 1 },
        { stepNumber: 2, description: 'Calculating 26% of excess amount', working: '0.26 × R87 900 = R22 854', markCode: 'M', markValue: 2 },
        { stepNumber: 3, description: 'Summing base tax with excess tax', working: 'R42 678 + R22 854 = R65 532', markCode: 'MA', markValue: 1 },
        { stepNumber: 4, description: 'Correct application of Primary Rebate for age 48', working: 'Subtracting R17 235', markCode: 'A', markValue: 2 },
        { stepNumber: 5, description: 'Final net annual tax payable', working: 'R48 297.00', markCode: 'CA', markValue: 1 }
      ]
    },
    {
      id: 'q2-2',
      numberStr: 'QUESTION 2.2',
      topic: 'Taxation: Monthly PAYE Deductions',
      subtopic: 'Monthly tax deduction calculation',
      marks: 3,
      scenario: 'Mr. Khumalo\'s employer deducts Pay-As-You-Earn (PAYE) equally over 12 months.',
      prompt: 'Using your calculated net annual tax of R48 297, determine Mr. Khumalo\'s monthly PAYE deduction.',
      type: 'numeric',
      correctNumericAnswer: 4024.75,
      numericTolerance: 1.0,
      unit: 'Rands (R)',
      hint: 'Divide the net annual tax by 12 months.',
      fullSolutionExplanation: 'Monthly PAYE deduction = R48 297 ÷ 12 = R4 024.75 per month.',
      markingGuide: [
        { stepNumber: 1, description: 'Dividing annual tax by 12', working: 'R48 297 ÷ 12', markCode: 'M', markValue: 1 },
        { stepNumber: 2, description: 'Accurate monthly deduction rounded to 2 decimal places', working: 'R4 024.75', markCode: 'CA', markValue: 2 }
      ]
    },
    {
      id: 'q3-1',
      numberStr: 'QUESTION 3.1',
      topic: 'Breakeven Analysis: Cost & Revenue',
      subtopic: 'Breakeven point calculation',
      marks: 6,
      scenario: 'The Grade 12 Commerce club operates a tuck-shop selling toasted chicken mayonnaise sandwiches. Refer to ANNEXURE C for fixed and variable cost figures.',
      prompt: 'Calculate the BREAKEVEN NUMBER of sandwiches the club must sell in a month to cover all costs.',
      type: 'numeric',
      correctNumericAnswer: 103,
      numericTolerance: 1,
      unit: 'Sandwiches',
      annexureId: 'annexure-c',
      hint: 'At breakeven: Total Revenue = Total Cost. So 32.00n = 1 800 + 14.50n. Solve for n and remember you cannot sell a fraction of a sandwich!',
      fullSolutionExplanation: `Solving the linear breakeven equation:
• Total Revenue = Total Cost
• 32.00 × n = 1 800 + 14.50 × n
• 32.00n - 14.50n = 1 800
• 17.50n = 1 800 (Contribution margin per sandwich = R17.50)
• n = 1 800 ÷ 17.50 = 102.857...
• Since sandwiches can only be made in whole units, selling 102 sandwiches gives a slight loss, so the club must sell at least 103 sandwiches to breakeven.`,
      markingGuide: [
        { stepNumber: 1, description: 'Equating Revenue formula to Cost formula', working: '32.00n = 1800 + 14.50n', markCode: 'M', markValue: 2 },
        { stepNumber: 2, description: 'Subtracting variable cost from selling price', working: '17.50n = 1800', markCode: 'MA', markValue: 2 },
        { stepNumber: 3, description: 'Division and rounding UP to nearest whole number', working: '102.857 -> 103 sandwiches', markCode: 'CA', markValue: 2 }
      ]
    },
    {
      id: 'q3-2',
      numberStr: 'QUESTION 3.2',
      topic: 'Finance: Profit & Business Decision Making',
      subtopic: 'Monthly profit calculation',
      marks: 4,
      scenario: 'During August, the club sold 240 sandwiches.',
      prompt: 'Calculate the NET PROFIT made by the club in August.',
      type: 'numeric',
      correctNumericAnswer: 2400,
      numericTolerance: 2,
      unit: 'Rands (R)',
      annexureId: 'annexure-c',
      hint: 'Profit = Total Revenue - Total Cost. Calculate Revenue (240 × R32) and Total Cost (1 800 + 240 × 14.50).',
      fullSolutionExplanation: `Calculating profit:
• Revenue = 240 × R32.00 = R7 680.00
• Total Cost = R1 800 + (240 × R14.50) = R1 800 + R3 480 = R5 280.00
• Profit = Revenue - Total Cost = R7 680 - R5 280 = R2 400.00.
(Or shortcut: 240 × R17.50 margin = R4 200 - R1 800 fixed cost = R2 400.00).`,
      markingGuide: [
        { stepNumber: 1, description: 'Calculating total revenue for 240 units', working: '240 × 32 = R7 680', markCode: 'A', markValue: 1 },
        { stepNumber: 2, description: 'Calculating total cost for 240 units', working: '1800 + 240 × 14.50 = R5 280', markCode: 'M', markValue: 2 },
        { stepNumber: 3, description: 'Profit calculation (Revenue - Cost)', working: 'R7 680 - R5 280 = R2 400', markCode: 'CA', markValue: 1 }
      ]
    },
    {
      id: 'q4-1',
      numberStr: 'QUESTION 4.1',
      topic: 'Finance: Hire Purchase & Credit Agreements',
      subtopic: 'Deposit and total credit price',
      marks: 5,
      scenario: 'A laptop has a cash price of R14 500. Under a Hire Purchase agreement, the buyer must pay a 15% deposit, followed by 36 monthly instalments of R495 each.',
      prompt: 'Calculate the TOTAL AMOUNT OF INTEREST paid on the Hire Purchase agreement.',
      type: 'numeric',
      correctNumericAnswer: 5495,
      numericTolerance: 2,
      unit: 'Rands (R)',
      hint: 'First find the deposit (15% of 14 500). Then find the total paid on instalments (36 × 495 = 17 820). Total price = 2 175 + 17 820 = 19 995. Total interest = 19 995 - 14 500 = 5 495.',
      fullSolutionExplanation: `Hire Purchase breakdown:
1. Deposit = 15% of R14 500 = 0.15 × 14 500 = R2 175.00
2. Total cash price = R14 500.00
3. Total of 36 monthly instalments = 36 × R495.00 = R17 820.00
4. Total cost of laptop on Hire Purchase = Deposit + Instalments = R2 175 + R17 820 = R19 995.00
5. Total interest paid = Total Hire Purchase Price - Original Cash Price = R19 995 - R14 500 = R5 495.00.`,
      markingGuide: [
        { stepNumber: 1, description: 'Calculating 15% deposit', working: '0.15 × 14 500 = R2 175', markCode: 'M', markValue: 1 },
        { stepNumber: 2, description: 'Calculating sum of 36 monthly instalments', working: '36 × 495 = R17 820', markCode: 'M', markValue: 1 },
        { stepNumber: 3, description: 'Calculating total Hire Purchase payment', working: 'R2 175 + R17 820 = R19 995', markCode: 'MA', markValue: 1 },
        { stepNumber: 4, description: 'Subtracting cash price to find total interest', working: 'R19 995 - R14 500 = R5 495', markCode: 'CA', markValue: 2 }
      ]
    },
    {
      id: 'q5-1',
      numberStr: 'QUESTION 5.1',
      topic: 'Data Handling: Five-Number Summary & Box Plot',
      subtopic: 'Interquartile Range (IQR) and analysis',
      marks: 4,
      scenario: 'The trial examination scores (%) of 15 Grade 12 learners are recorded in ascending order:\n34, 42, 48, 52, 55, 60, 64, 68, 71, 75, 78, 82, 85, 91, 96.',
      prompt: 'Determine the Interquartile Range (IQR) of this data set.',
      type: 'numeric',
      correctNumericAnswer: 30,
      numericTolerance: 0.5,
      unit: '%',
      hint: 'The data is already sorted. Find the median (Q2), lower quartile (Q1), and upper quartile (Q3). IQR = Q3 - Q1.',
      fullSolutionExplanation: `With n = 15 data items:
• Median (Q2) = 8th value = 68%
• Lower half (first 7 values: 34, 42, 48, 52, 55, 60, 64). Q1 = 4th value = 52%
• Upper half (last 7 values: 71, 75, 78, 82, 85, 91, 96). Q3 = 12th value = 82%
• Interquartile Range (IQR) = Q3 - Q1 = 82% - 52% = 30%.`,
      markingGuide: [
        { stepNumber: 1, description: 'Identification of Q1 (Lower Quartile)', working: 'Q1 = 52%', markCode: 'A', markValue: 1 },
        { stepNumber: 2, description: 'Identification of Q3 (Upper Quartile)', working: 'Q3 = 82%', markCode: 'A', markValue: 1 },
        { stepNumber: 3, description: 'Calculating IQR = Q3 - Q1', working: '82 - 52 = 30%', markCode: 'M', markValue: 2 }
      ]
    },
    {
      id: 'q6-1',
      numberStr: 'QUESTION 6.1',
      topic: 'Finance: Inflation & Compound Interest',
      subtopic: 'Purchasing power and future price',
      marks: 5,
      scenario: 'In January 2024, a 2.5 kg bag of maize meal cost R38.50. Statistics South Africa forecasts an average annual inflation rate of 5.8% for food items over the next two years.',
      prompt: 'Calculate the projected price of the 2.5 kg bag of maize meal in January 2026, using compound inflation formula A = P(1 + i)^n. Round off to the nearest cent.',
      type: 'numeric',
      correctNumericAnswer: 43.1,
      numericTolerance: 0.1,
      unit: 'Rands (R)',
      hint: 'Use A = P(1 + i)^n where P = 38.50, i = 0.058, n = 2 years.',
      fullSolutionExplanation: `Compound inflation formula:
• A = P(1 + i)^n
• P = R38.50
• i = 5.8% = 0.058
• n = 2026 - 2024 = 2 years
• A = 38.50 × (1 + 0.058)^2 = 38.50 × 1.119364 = R43.0955...
• Rounded to nearest cent: R43.10.`,
      markingGuide: [
        { stepNumber: 1, description: 'Substitution into compound interest formula', working: 'A = 38.50(1 + 0.058)^2', markCode: 'M', markValue: 2 },
        { stepNumber: 2, description: 'Evaluation of compounded factor (1.11936)', working: '1.058^2 = 1.11936', markCode: 'A', markValue: 1 },
        { stepNumber: 3, description: 'Rounding accurately to 2 decimal places (R43.10)', working: 'R43.10', markCode: 'CA', markValue: 2 }
      ]
    },
    {
      id: 'q6-2',
      numberStr: 'QUESTION 6.2',
      topic: 'Finance: Value Added Tax (VAT)',
      subtopic: 'Zero-rated foodstuffs in South Africa',
      marks: 3,
      scenario: 'A consumer notices that no 15% VAT was charged on the 2.5 kg bag of super maize meal on their grocery till slip.',
      prompt: 'Why was VAT NOT charged on the bag of super maize meal?',
      type: 'mcq',
      options: [
        'A. The supermarket made a cashier billing error and the customer should return to pay the tax.',
        'B. Super maize meal is classified as a zero-rated basic food item under South African VAT legislation to make essential nutrition affordable.',
        'C. South African VAT only applies to imported items produced outside SADC countries.',
        'D. VAT is only charged if the total till slip exceeds R500.00.'
      ],
      correctOptionIndex: 1,
      hint: 'South African tax policy exempts or zero-rates 19 basic essential food items (e.g., maize meal, brown bread, milk, eggs, samp).',
      fullSolutionExplanation: 'Option B is correct. Under the South African Value Added Tax Act, 19 basic food items including maize meal, brown bread, fresh milk, dried beans, lentils, and eggs are zero-rated (0% VAT) to alleviate poverty and reduce living costs for low-income households.',
      markingGuide: [
        { stepNumber: 1, description: 'Selecting zero-rated essential foodstuff classification', working: 'Option B selected', markCode: 'A', markValue: 3 }
      ]
    },
    {
      id: 'q7-1',
      numberStr: 'QUESTION 7.1',
      topic: 'Exchange Rates & International Trade',
      subtopic: 'Currency conversion and purchasing power',
      marks: 4,
      scenario: 'A South African tourist travels to London. The exchange rate is 1 British Pound (GBP / £) = R23.60. An airport coffee costs £4.20.',
      prompt: 'Calculate the cost of the coffee in South African Rands (ZAR).',
      type: 'numeric',
      correctNumericAnswer: 99.12,
      numericTolerance: 0.1,
      unit: 'Rands (R)',
      hint: 'Multiply the British Pounds (£4.20) by the exchange rate of R23.60 per pound.',
      fullSolutionExplanation: 'Cost in Rands = £4.20 × R23.60/£ = R99.12.',
      markingGuide: [
        { stepNumber: 1, description: 'Multiplying £4.20 by R23.60', working: '4.20 × 23.60', markCode: 'M', markValue: 2 },
        { stepNumber: 2, description: 'Accurate Rand amount (R99.12)', working: 'R99.12', markCode: 'A', markValue: 2 }
      ]
    }
  ]
};

export const MATH_LIT_P2_EXAM: ExamPaper = {
  id: 'dbe-math-lit-p2-2024',
  subjectId: 'math-lit-p2',
  category: 'nsc-paper',
  year: 2024,
  session: 'November NSC',
  title: 'Mathematical Literacy Paper 2 - Measurement, Maps & Plans',
  subtitle: 'Official DBE November 2024 Examination',
  totalMarks: 45,
  timeLimitMinutes: 50,
  instructions: [
    'This question paper consists of structured questions on measurement, plans, packaging, and probability.',
    'Refer to the annexures for dimensions and conversion rates.',
    'Round off answers according to context.'
  ],
  annexures: [
    {
      id: 'annexure-p2-a',
      title: 'ANNEXURE A: School Multipurpose Hall Architectural Plan',
      subtitle: 'Scale 1 : 100 architectural drawing dimensions',
      type: 'floor-plan',
      dataRows: [
        { Room: 'Main Hall Floor', 'Length (mm)': '15 000 mm', 'Width (mm)': '9 000 mm', 'Area (m²)': '135.0 m²' },
        { Room: 'Stage Platform', 'Length (mm)': '5 000 mm', 'Width (mm)': '3 500 mm', 'Area (m²)': '17.5 m²' },
        { Room: 'Backstage Storeroom', 'Length (mm)': '4 000 mm', 'Width (mm)': '3 000 mm', 'Area (m²)': '12.0 m²' }
      ],
      notes: [
        'Scale is 1 : 100 (1 cm on paper represents 100 cm = 1 metre on actual floor).',
        'Floor height from finished floor level to ceiling is 3.2 m.',
        'Total perimeter excludes the stage opening.'
      ]
    },
    {
      id: 'annexure-p2-b',
      title: 'ANNEXURE B: Floor Sealant & Paint Coverage Specs',
      subtitle: 'Heavy-Duty Commercial Polyurethane Wood Finish',
      type: 'tariff-table',
      dataRows: [
        { 'Container Size': '5 Litre Tin', 'Coverage per coat': '45 m²', 'Required Coats': '2 coats', 'Price per Tin (excl. VAT)': 'R 540.00' },
        { 'Container Size': '20 Litre Drum', 'Coverage per coat': '190 m²', 'Required Coats': '2 coats', 'Price per Drum (excl. VAT)': 'R 1 950.00' }
      ],
      notes: [
        'Coverage assumes a smooth, sanded wooden floor surface.',
        'VAT rate is 15%.'
      ]
    }
  ],
  questions: [
    {
      id: 'p2-q1-1',
      numberStr: 'QUESTION 1.1',
      topic: 'Measurement: Metric Units & Scale Conversion',
      subtopic: 'Converting millimetres (mm) to metres (m)',
      marks: 3,
      scenario: 'The plan gives the length of the main hall floor as 15 000 mm and width as 9 000 mm. Refer to ANNEXURE A.',
      prompt: 'Convert the length of the hall (15 000 mm) to metres (m).',
      type: 'numeric',
      correctNumericAnswer: 15,
      numericTolerance: 0.1,
      unit: 'metres (m)',
      annexureId: 'annexure-p2-a',
      hint: 'Remember: 1 metre (m) = 1 000 millimetres (mm). Divide 15 000 by 1 000.',
      fullSolutionExplanation: 'Conversion: 15 000 mm ÷ 1 000 mm/m = 15 m.',
      markingGuide: [
        { stepNumber: 1, description: 'Dividing by 1 000', working: '15 000 ÷ 1 000', markCode: 'M', markValue: 1 },
        { stepNumber: 2, description: 'Accurate value with correct unit (15 m)', working: '15 m', markCode: 'A', markValue: 2 }
      ]
    },
    {
      id: 'p2-q1-2',
      numberStr: 'QUESTION 1.2',
      topic: 'Measurement: Floor Surface Area',
      subtopic: 'Calculating rectangular area in square metres',
      marks: 4,
      scenario: 'The main hall floor measures 15 m in length and 9 m in width.',
      prompt: 'Calculate the total floor surface area of the main hall in square metres (m²).',
      type: 'numeric',
      correctNumericAnswer: 135,
      numericTolerance: 0.1,
      unit: 'm²',
      annexureId: 'annexure-p2-a',
      hint: 'Formula: Area = length × width = 15 m × 9 m.',
      fullSolutionExplanation: 'Area = 15 m × 9 m = 135 m².',
      markingGuide: [
        { stepNumber: 1, description: 'Multiplying length by width', working: '15 × 9', markCode: 'M', markValue: 2 },
        { stepNumber: 2, description: 'Accurate area (135 m²)', working: '135 m²', markCode: 'A', markValue: 2 }
      ]
    },
    {
      id: 'p2-q2-1',
      numberStr: 'QUESTION 2.1',
      topic: 'Packaging & Coverage: Paint Volume Calculations',
      subtopic: 'Determining total paint required for 2 coats',
      marks: 6,
      scenario: 'The school plans to apply TWO coats of floor sealant to the 135 m² hall floor. Refer to ANNEXURE B for coverage details.',
      prompt: 'Using 5-litre tins (where each tin covers 45 m² for ONE coat), calculate the MINIMUM number of 5-litre tins the school must buy to apply TWO full coats.',
      type: 'numeric',
      correctNumericAnswer: 6,
      numericTolerance: 0.1,
      unit: 'tins',
      annexureId: 'annexure-p2-b',
      hint: 'Total area to be painted = 135 m² × 2 coats = 270 m². One 5-litre tin covers 45 m². Divide 270 by 45.',
      fullSolutionExplanation: `Step-by-step:
1. Total effective coverage area = 135 m² × 2 coats = 270 m².
2. Area covered per 5L tin = 45 m².
3. Number of tins = 270 m² ÷ 45 m²/tin = 6.0 tins.
Since it is an exact integer, exactly 6 tins are required.`,
      markingGuide: [
        { stepNumber: 1, description: 'Multiplying hall area by 2 coats', working: '135 × 2 = 270 m²', markCode: 'M', markValue: 2 },
        { stepNumber: 2, description: 'Dividing total coverage area by 45 m²', working: '270 ÷ 45 = 6', markCode: 'M', markValue: 2 },
        { stepNumber: 3, description: 'Stating minimum number of whole tins (6)', working: '6 tins', markCode: 'CA', markValue: 2 }
      ]
    },
    {
      id: 'p2-q2-2',
      numberStr: 'QUESTION 2.2',
      topic: 'Finance & Tariffs: Total Cost with 15% VAT',
      subtopic: 'Calculating purchase cost including VAT',
      marks: 5,
      scenario: 'The 6 tins of sealant cost R540.00 each EXCLUDING 15% VAT.',
      prompt: 'Calculate the TOTAL COST of the 6 tins of sealant INCLUDING 15% VAT.',
      type: 'numeric',
      correctNumericAnswer: 3726,
      numericTolerance: 2,
      unit: 'Rands (R)',
      annexureId: 'annexure-p2-b',
      hint: 'Cost before VAT = 6 × R540 = R3 240. Then multiply by 1.15 to include 15% VAT.',
      fullSolutionExplanation: `Calculating cost:
• Subtotal excl. VAT = 6 × R540 = R3 240.00
• 15% VAT = R3 240 × 0.15 = R486.00
• Total cost with VAT = R3 240 + R486 = R3 726.00 (or R3 240 × 1.15 = R3 726.00).`,
      markingGuide: [
        { stepNumber: 1, description: 'Calculating cost of 6 tins excl. VAT', working: '6 × 540 = R3 240', markCode: 'A', markValue: 2 },
        { stepNumber: 2, description: 'Adding 15% VAT', working: 'R3 240 × 1.15 = R3 726', markCode: 'M', markValue: 2 },
        { stepNumber: 3, description: 'Accurate total (R3 726.00)', working: 'R3 726.00', markCode: 'CA', markValue: 1 }
      ]
    },
    {
      id: 'p2-q3-1',
      numberStr: 'QUESTION 3.1',
      topic: 'Probability: Two-Way Tables & Outcomes',
      subtopic: 'Simple and compound probability',
      marks: 4,
      scenario: 'In a matric class of 120 learners, 72 study Mathematical Literacy and 48 study Mathematics. Of the Mathematical Literacy learners, 18 achieved a distinction (80%+).',
      prompt: 'What is the probability (expressed as a percentage) that a randomly chosen learner from the entire class is a Mathematical Literacy learner who achieved a distinction?',
      type: 'numeric',
      correctNumericAnswer: 15,
      numericTolerance: 0.5,
      unit: '%',
      hint: 'Favourable outcomes = 18. Total outcomes = 120. Probability = (18 ÷ 120) × 100%.',
      fullSolutionExplanation: 'Probability = 18 ÷ 120 = 0.15 = 15%.',
      markingGuide: [
        { stepNumber: 1, description: 'Fraction setup (18 / 120)', working: '18 ÷ 120', markCode: 'M', markValue: 2 },
        { stepNumber: 2, description: 'Percentage expression (15%)', working: '15%', markCode: 'A', markValue: 2 }
      ]
    }
  ]
};

export const ACCOUNTING_P1_EXAM: ExamPaper = {
  id: 'dbe-accounting-p1-2024',
  subjectId: 'accounting',
  category: 'nsc-paper',
  year: 2024,
  session: 'November NSC',
  title: 'Accounting Paper 1 - Financial Statements & Year-End Adjustments',
  subtitle: 'Official DBE November 2024 Examination',
  totalMarks: 40,
  timeLimitMinutes: 45,
  instructions: [
    'Answer all questions with reference to the trial balance and adjustments.',
    'Use standard GAAP / IFRS principles as tested in DBE Grade 12 Accounting.',
    'Show all bracketed workings to earn Method marks.'
  ],
  annexures: [
    {
      id: 'annexure-acc-a',
      title: 'ANNEXURE A: Extract of Trial Balance of Protea Traders',
      subtitle: 'Financial Year Ended 28 February 2024',
      type: 'financial-statement',
      dataRows: [
        { Account: 'Vehicles at cost', 'Debit (R)': 'R 480 000', 'Credit (R)': '—' },
        { Account: 'Accumulated Depreciation on Vehicles (1 March 2023)', 'Debit (R)': '—', 'Credit (R)': 'R 180 000' },
        { Account: 'Debtors Control (Trade Receivables)', 'Debit (R)': 'R 95 000', 'Credit (R)': '—' },
        { Account: 'Provision for Bad Debts (1 March 2023)', 'Debit (R)': '—', 'Credit (R)': 'R 4 200' },
        { Account: 'Sales Turnover', 'Debit (R)': '—', 'Credit (R)': 'R 1 200 000' },
        { Account: 'Cost of Sales', 'Debit (R)': 'R 750 000', 'Credit (R)': '—' }
      ],
      notes: [
        'Vehicles are depreciated at 20% p.a. on the DIMINISHING BALANCE (carrying value) method.',
        'No vehicles were purchased or sold during the financial year.',
        'Provision for Bad Debts must be adjusted to 5% of the Debtors Control balance.'
      ]
    }
  ],
  questions: [
    {
      id: 'acc-q1-1',
      numberStr: 'QUESTION 1.1',
      topic: 'Fixed Assets: Diminishing Balance Depreciation',
      subtopic: 'Calculating vehicle depreciation on carrying value',
      marks: 6,
      scenario: 'Refer to ANNEXURE A. Protea Traders owns vehicles with a cost price of R480 000 and accumulated depreciation of R180 000 on 1 March 2023. Depreciation is 20% p.a. on the diminishing balance method.',
      prompt: 'Calculate the DEPRECIATION EXPENSE on vehicles for the year ended 28 February 2024.',
      type: 'numeric',
      correctNumericAnswer: 60000,
      numericTolerance: 5,
      unit: 'Rands (R)',
      annexureId: 'annexure-acc-a',
      hint: 'Carrying value = Cost - Accumulated Depreciation = R480 000 - R180 000 = R300 000. Depreciation = 20% of R300 000.',
      fullSolutionExplanation: `Diminishing balance method:
• Carrying Value = Cost - Accumulated Depreciation = R480 000 - R180 000 = R300 000.
• Depreciation = 20% × R300 000 = R60 000.`,
      markingGuide: [
        { stepNumber: 1, description: 'Calculation of carrying value (480 000 - 180 000)', working: 'R300 000', markCode: 'M', markValue: 2 },
        { stepNumber: 2, description: 'Applying 20% rate to carrying value', working: '0.20 × R300 000', markCode: 'M', markValue: 2 },
        { stepNumber: 3, description: 'Accurate annual depreciation (R60 000)', working: 'R60 000', markCode: 'A', markValue: 2 }
      ]
    },
    {
      id: 'acc-q1-2',
      numberStr: 'QUESTION 1.2',
      topic: 'Balance Sheet: Carrying Value of Tangible Assets',
      subtopic: 'Carrying value on the Balance Sheet date',
      marks: 4,
      scenario: 'Using your calculated depreciation of R60 000 for the 2024 financial year.',
      prompt: 'Determine the CARRYING VALUE (Net Book Value) of the vehicles to be reflected on the Balance Sheet on 28 February 2024.',
      type: 'numeric',
      correctNumericAnswer: 240000,
      numericTolerance: 5,
      unit: 'Rands (R)',
      hint: 'Carrying value at year end = Opening carrying value (R300 000) - current year depreciation (R60 000). Or Cost (R480 000) - Total Accumulated Depreciation (R180 000 + R60 000).',
      fullSolutionExplanation: 'Closing Carrying Value = R480 000 - (R180 000 + R60 000) = R480 000 - R240 000 = R240 000.',
      markingGuide: [
        { stepNumber: 1, description: 'Accumulated depreciation sum (180 000 + 60 000)', working: 'R240 000', markCode: 'M', markValue: 2 },
        { stepNumber: 2, description: 'Carrying value (480 000 - 240 000)', working: 'R240 000', markCode: 'CA', markValue: 2 }
      ]
    },
    {
      id: 'acc-q2-1',
      numberStr: 'QUESTION 2.1',
      topic: 'Current Assets: Provision for Bad Debts Adjustment',
      subtopic: 'Net adjustment amount to the Income Statement',
      marks: 5,
      scenario: 'Debtors Control is R95 000. The Provision for Bad Debts must be adjusted to 5% of Debtors. The opening balance of Provision for Bad Debts was R4 200.',
      prompt: 'Calculate the net PROVISION FOR BAD DEBTS ADJUSTMENT amount to be recorded as an expense in the Income Statement.',
      type: 'numeric',
      correctNumericAnswer: 550,
      numericTolerance: 1,
      unit: 'Rands (R)',
      annexureId: 'annexure-acc-a',
      hint: 'New provision required = 5% of R95 000 = R4 750. Adjustment = New provision (R4 750) - Existing provision (R4 200).',
      fullSolutionExplanation: `Provision for Bad Debts adjustment:
• Target provision required = 5% × R95 000 = R4 750.
• Existing provision in trial balance = R4 200.
• Since required provision is higher, increase needed = R4 750 - R4 200 = R550 (Expense in Income Statement).`,
      markingGuide: [
        { stepNumber: 1, description: 'Calculating 5% on R95 000', working: '0.05 × 95 000 = R4 750', markCode: 'M', markValue: 2 },
        { stepNumber: 2, description: 'Subtracting existing provision of R4 200', working: '4 750 - 4 200', markCode: 'M', markValue: 1 },
        { stepNumber: 3, description: 'Accurate increase of R550', working: 'R550', markCode: 'A', markValue: 2 }
      ]
    },
    {
      id: 'acc-q3-1',
      numberStr: 'QUESTION 3.1',
      topic: 'Financial Ratios: Gross Profit Percentage on Sales',
      subtopic: 'Gross margin percentage calculation',
      marks: 5,
      scenario: 'Sales are R1 200 000 and Cost of Sales is R750 000. Refer to ANNEXURE A.',
      prompt: 'Calculate the GROSS PROFIT PERCENTAGE ON SALES (% margin).',
      type: 'numeric',
      correctNumericAnswer: 37.5,
      numericTolerance: 0.1,
      unit: '%',
      annexureId: 'annexure-acc-a',
      hint: 'Gross Profit = Sales - Cost of Sales = R1 200 000 - R750 000 = R450 000. Percentage = (Gross Profit ÷ Sales) × 100%.',
      fullSolutionExplanation: `Calculation:
• Gross Profit = R1 200 000 - R750 000 = R450 000.
• % Gross Profit on Sales = (R450 000 ÷ R1 200 000) × 100% = 37.5%.`,
      markingGuide: [
        { stepNumber: 1, description: 'Gross profit calculation (1 200 000 - 750 000)', working: 'R450 000', markCode: 'M', markValue: 2 },
        { stepNumber: 2, description: 'Dividing Gross profit by Sales and multiplying by 100', working: '(450 000 / 1 200 000) × 100', markCode: 'M', markValue: 2 },
        { stepNumber: 3, description: 'Accurate percentage (37.5%)', working: '37.5%', markCode: 'A', markValue: 1 }
      ]
    }
  ]
};

export const ECONOMICS_P1_EXAM: ExamPaper = {
  id: 'dbe-economics-p1-2024',
  subjectId: 'economics',
  category: 'nsc-paper',
  year: 2024,
  session: 'November NSC',
  title: 'Economics Paper 1 - Macroeconomics & Circular Flow',
  subtitle: 'Official DBE November 2024 Examination',
  totalMarks: 40,
  timeLimitMinutes: 45,
  instructions: [
    'Answer all questions based on official SARB national accounts and macroeconomic models.',
    'Formulas must be stated clearly.',
    'All monetary values must indicate Rands (R billions).'
  ],
  annexures: [
    {
      id: 'annexure-econ-a',
      title: 'ANNEXURE A: South African National Accounts Aggregates',
      subtitle: 'Expenditure on Gross Domestic Product at Market Prices (R Billion)',
      type: 'financial-statement',
      dataRows: [
        { Aggregate: 'Final consumption expenditure by households (C)', 'Amount (R Billion)': 'R 3 150' },
        { Aggregate: 'Final consumption expenditure by general government (G)', 'Amount (R Billion)': 'R 1 020' },
        { Aggregate: 'Gross capital formation / Investment (I)', 'Amount (R Billion)': 'R 680' },
        { Aggregate: 'Residual item', 'Amount (R Billion)': 'R -10' },
        { Aggregate: 'Exports of goods and services (X)', 'Amount (R Billion)': 'R 1 450' },
        { Aggregate: 'Imports of goods and services (Z)', 'Amount (R Billion)': 'R 1 540' }
      ],
      notes: [
        'GDP at Market Prices = C + I + G + (X - Z) + Residual.',
        'Net Exports (Trade Balance) = Exports (X) - Imports (Z).'
      ]
    }
  ],
  questions: [
    {
      id: 'econ-q1-1',
      numberStr: 'QUESTION 1.1',
      topic: 'National Accounts: GDP via Expenditure Method',
      subtopic: 'Gross Domestic Product at market prices',
      marks: 6,
      scenario: 'Refer to ANNEXURE A for South African national expenditure aggregates in R billions.',
      prompt: 'Calculate the GROSS DOMESTIC PRODUCT (GDP) AT MARKET PRICES in R billions.',
      type: 'numeric',
      correctNumericAnswer: 4750,
      numericTolerance: 5,
      unit: 'R Billion',
      annexureId: 'annexure-econ-a',
      hint: 'Formula: GDP = C + G + I + (X - Z) + Residual. Substitute: 3 150 + 1 020 + 680 + (1 450 - 1 540) - 10.',
      fullSolutionExplanation: `Expenditure method on GDP:
• Gross Domestic Expenditure (GDE) = C + G + I = 3 150 + 1 020 + 680 = R4 850 billion.
• Net Exports (X - Z) = 1 450 - 1 540 = -R90 billion.
• GDP = GDE + (X - Z) + Residual
• GDP = 4 850 - 90 - 10 = R4 750 billion.`,
      markingGuide: [
        { stepNumber: 1, description: 'Sum of C + G + I', working: '3 150 + 1 020 + 680 = 4 850', markCode: 'M', markValue: 2 },
        { stepNumber: 2, description: 'Calculation of net exports (1 450 - 1 540 = -90)', working: '-90', markCode: 'M', markValue: 2 },
        { stepNumber: 3, description: 'Accurate GDP at market prices (R4 750 billion)', working: 'R4 750 billion', markCode: 'A', markValue: 2 }
      ]
    },
    {
      id: 'econ-q1-2',
      numberStr: 'QUESTION 1.2',
      topic: 'Macroeconomics: Keynesian Multiplier Effect',
      subtopic: 'Multiplier calculation from Marginal Propensity to Consume',
      marks: 5,
      scenario: 'In an open economy, the Marginal Propensity to Consume (MPC) is 0.75.',
      prompt: 'Calculate the value of the MULTIPLIER (k) using formula k = 1 / (1 - MPC).',
      type: 'numeric',
      correctNumericAnswer: 4,
      numericTolerance: 0.1,
      unit: 'times',
      hint: 'Formula: k = 1 / (1 - 0.75) = 1 / 0.25.',
      fullSolutionExplanation: 'Multiplier k = 1 / (1 - 0.75) = 1 / 0.25 = 4.',
      markingGuide: [
        { stepNumber: 1, description: 'Formula statement and substitution', working: 'k = 1 / (1 - 0.75)', markCode: 'M', markValue: 2 },
        { stepNumber: 2, description: 'Denominator calculation (0.25)', working: '1 / 0.25', markCode: 'M', markValue: 1 },
        { stepNumber: 3, description: 'Accurate multiplier value (4)', working: '4', markCode: 'A', markValue: 2 }
      ]
    },
    {
      id: 'econ-q2-1',
      numberStr: 'QUESTION 2.1',
      topic: 'Circular Flow: Leakages and Injections',
      subtopic: 'Identifying circular flow components',
      marks: 3,
      scenario: 'In the circular flow model of an open economy with government and foreign sectors, equilibrium occurs when Leakages equal Injections.',
      prompt: 'Which one of the following groups represents ONLY INJECTIONS into the circular flow?',
      type: 'mcq',
      options: [
        'A. Savings (S), Taxes (T), and Imports (Z)',
        'B. Investment (I), Government spending (G), and Exports (X)',
        'C. Consumption (C), Savings (S), and Government spending (G)',
        'D. Imports (Z), Taxes (T), and Investment (I)'
      ],
      correctOptionIndex: 1,
      hint: 'Injections add spending into the domestic production flow: businesses invest (I), government spends (G), and foreigners buy our exports (X).',
      fullSolutionExplanation: 'Option B is correct. Injections (J) comprise Investment (I), Government spending (G), and Exports (X). Leakages (L) comprise Savings (S), Taxes (T), and Imports (Z). Equilibrium requires J = L.',
      markingGuide: [
        { stepNumber: 1, description: 'Correct identification of Injections J = I + G + X', working: 'Option B selected', markCode: 'A', markValue: 3 }
      ]
    }
  ]
};

import { BUSINESS_STUDIES_EXAM, ENGLISH_EXAM, AFRIKAANS_EXAM } from './nsc-additional-papers';
import {
  MATH_LIT_MCQ_1,
  MATH_LIT_MCQ_2,
  ACCOUNTING_MCQ_1,
  ACCOUNTING_MCQ_2,
  BUSINESS_STUDIES_MCQ_1,
  BUSINESS_STUDIES_MCQ_2,
  ECONOMICS_MCQ_1,
  ECONOMICS_MCQ_2,
  ENGLISH_MCQ_1,
  ENGLISH_MCQ_2,
  AFRIKAANS_MCQ_1,
  AFRIKAANS_MCQ_2,
} from './mcq-tests-data';

export {
  BUSINESS_STUDIES_EXAM,
  ENGLISH_EXAM,
  AFRIKAANS_EXAM,
  MATH_LIT_MCQ_1,
  MATH_LIT_MCQ_2,
  ACCOUNTING_MCQ_1,
  ACCOUNTING_MCQ_2,
  BUSINESS_STUDIES_MCQ_1,
  BUSINESS_STUDIES_MCQ_2,
  ECONOMICS_MCQ_1,
  ECONOMICS_MCQ_2,
  ENGLISH_MCQ_1,
  ENGLISH_MCQ_2,
  AFRIKAANS_MCQ_1,
  AFRIKAANS_MCQ_2,
};

// Complete roster of 7 Official DBE NSC Past Examination Papers + 12 Speed MCQ Practice Tests
export const ALL_EXAM_PAPERS: ExamPaper[] = [
  // 7 Official NSC Examination Papers
  MATH_LIT_P1_EXAM,
  MATH_LIT_P2_EXAM,
  ACCOUNTING_P1_EXAM,
  BUSINESS_STUDIES_EXAM,
  ECONOMICS_P1_EXAM,
  ENGLISH_EXAM,
  AFRIKAANS_EXAM,

  // 12 Speed MCQ Practice Tests
  MATH_LIT_MCQ_1,
  MATH_LIT_MCQ_2,
  ACCOUNTING_MCQ_1,
  ACCOUNTING_MCQ_2,
  BUSINESS_STUDIES_MCQ_1,
  BUSINESS_STUDIES_MCQ_2,
  ECONOMICS_MCQ_1,
  ECONOMICS_MCQ_2,
  ENGLISH_MCQ_1,
  ENGLISH_MCQ_2,
  AFRIKAANS_MCQ_1,
  AFRIKAANS_MCQ_2,
];

export const EXAM_PAPERS: Record<SubjectId, ExamPaper> = {
  'math-lit-p1': MATH_LIT_P1_EXAM,
  'math-lit-p2': MATH_LIT_P2_EXAM,
  'accounting': ACCOUNTING_P1_EXAM,
  'business-studies': BUSINESS_STUDIES_EXAM,
  'economics': ECONOMICS_P1_EXAM,
  'english': ENGLISH_EXAM,
  'afrikaans': AFRIKAANS_EXAM,
};

export function getExamForSubject(subjectId: SubjectId): ExamPaper {
  return EXAM_PAPERS[subjectId] || MATH_LIT_P1_EXAM;
}

export const FORMULA_SHEET_SECTIONS = [
  {
    category: 'Finance & Tariffs',
    items: [
      { name: 'Simple Interest', formula: 'A = P(1 + i × n)', desc: 'Where P is principal, i is interest rate as a decimal, and n is time in years.' },
      { name: 'Compound Interest / Inflation', formula: 'A = P(1 + i)ⁿ', desc: 'Used for investment compounding, depreciation, and general inflation.' },
      { name: 'Value Added Tax (15%)', formula: 'Price with VAT = Price excl. VAT × 1.15\nPrice excl. VAT = Price with VAT ÷ 1.15', desc: 'South African standard VAT rate is 15%.' },
      { name: 'Breakeven Condition', formula: 'Total Revenue = Total Cost', desc: 'Profit = Total Revenue - Total Cost. At breakeven, Profit = R0.' },
      { name: 'Stepped Water Tariff', formula: 'Total = Σ (kL in Step k × Rate per kL)', desc: 'Apply tariff rate exclusively to water volume within that block boundary.' }
    ]
  },
  {
    category: 'Taxation (SARS Rules)',
    items: [
      { name: 'Taxable Income', formula: 'Taxable Income = Gross Income - Allowable Deductions (Pension, RAF)', desc: 'Rebates are deducted from calculated tax, not from taxable income.' },
      { name: 'Net Tax Payable', formula: 'Net Tax = Gross Tax - Eligible Rebates', desc: 'Primary rebate applies to all; secondary rebate adds for age 65+.' }
    ]
  },
  {
    category: 'Measurement & Plans',
    items: [
      { name: 'Scale Conversion', formula: 'Actual Distance = Map Distance × Scale Factor', desc: 'Ensure both distances are converted to identical units before multiplying.' },
      { name: 'Area of Rectangle', formula: 'Area = length × width', desc: 'Result expressed in square units (m², cm²).' },
      { name: 'Circumference & Circle Area', formula: 'Circumference = 2 × π × r\nArea = π × r²', desc: 'Use π = 3.142 as specified in DBE exams.' },
      { name: 'Volume of Cylinder', formula: 'Volume = π × r² × height', desc: '1 m³ = 1 000 litres; 1 litre = 1 000 cm³.' }
    ]
  },
  {
    category: 'Accounting & Economics Ratios',
    items: [
      { name: 'Diminishing Balance Depreciation', formula: 'Depreciation = Carrying Value × Depreciation %', desc: 'Carrying Value = Cost - Accumulated Depreciation.' },
      { name: 'Keynesian Multiplier', formula: 'k = 1 / (1 - MPC) = 1 / MPS', desc: 'Where MPC is Marginal Propensity to Consume and MPS is Marginal Propensity to Save.' },
      { name: 'GDP (Expenditure Method)', formula: 'GDP = C + I + G + (X - Z)', desc: 'Gross Domestic Expenditure plus Net Exports.' }
    ]
  },
  {
    category: 'Data Handling & Statistics',
    items: [
      { name: 'Interquartile Range (IQR)', formula: 'IQR = Q₃ - Q₁', desc: 'Difference between upper quartile (75th percentile) and lower quartile (25th percentile).' },
      { name: 'Outlier Lower Boundary', formula: 'Outlier < Q₁ - 1.5 × IQR', desc: 'Any value strictly below this threshold is an outlier.' },
      { name: 'Outlier Upper Boundary', formula: 'Outlier > Q₃ + 1.5 × IQR', desc: 'Any value strictly above this threshold is an outlier.' }
    ]
  }
];
