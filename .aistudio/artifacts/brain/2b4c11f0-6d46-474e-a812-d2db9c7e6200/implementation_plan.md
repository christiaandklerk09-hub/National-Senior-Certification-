# Complete Grade 12 Matric Examination & MCQ Test Library Restoration

Restore all core South African Department of Basic Education (DBE) Grade 12 National Senior Certificate (NSC) examination papers and MCQ practice tests across six academic subjects, organized with clean tabbed navigation and the signature light red theme with the Qualitative Answer Studio.

## User Review & Critical Decisions

> [!IMPORTANT]
> The following architectural decisions were confirmed by the user:

- **Restoration Scope**: Restore all Grade 12 Matric academic subjects and MCQ test papers across the 6 core subjects:
  1. **Mathematical Literacy** (Paper 1, Paper 2, MCQ Test 1, MCQ Test 2)
  2. **Accounting** (Paper 1, MCQ Test 1, MCQ Test 2)
  3. **Business Studies** (Paper 1, MCQ Test 1, MCQ Test 2)
  4. **Economics** (Paper 1, MCQ Test 1, MCQ Test 2)
  5. **English Home Language / FAL** (Paper 1, MCQ Test 1, MCQ Test 2)
  6. **Afrikaans Eerste Addisionele Taal** (Vraestel 1, MCQ Toets 1, MCQ Toets 2)
- **Exclusion of Lifesaving**: Exclude lifeguard and swimming certification chapters completely, focusing 100% on the Grade 12 National Senior Certificate (NSC) syllabus.
- **Library Organization**: Homepage categorized with two clean tabs:
  - **Tab 1: Official NSC Past Papers** (Full-length structured exams with annexures, calculation steps, and qualitative rubric questions)
  - **Tab 2: Objective MCQ Practice Tests** (Fast-paced 4-option multiple-choice tests with instant feedback)
  - Plus quick-filter subject chips (`All`, `Maths Lit`, `Accounting`, `Business Studies`, `Economics`, `English`, `Afrikaans`).
- **Unified Visual Identity**: Apply the soft rose and coral red theme (`#FB7185`, `#F43F5E`, `#EF4444`) and the Qualitative Answer Studio across all restored subjects.

---

## 1. Overview & Core Concept

- **What It Does**: Provides Matric candidates with an exhaustive, authentic digital revision hub featuring full Grade 12 NSC past examination papers and MCQ drills.
- **Intelligent Input Adaptation**:
  - **Multiple Choice**: Instant option cards with keyboard shortcuts (A–D).
  - **Qualitative & Conceptual**: Dedicated Qualitative Written Answer Studio with DBE rubric criteria and Gemini semantic grading.
  - **Mathematical & Financial Calculations**: Dedicated numeric answer form with formula hints, units, and tolerance checks.
- **Target Audience**: Grade 12 Matric students preparing for preliminary (trial) and final NSC exams.

---

## 2. User Experience & Visual Design

### Homepage Library Layout (Two-Zone Tabbed Navigation)

```
┌────────────────────────────────────────────────────────────────────────┐
│   Apex Papers DBE Grade 12 Examination Hub                             │
│   Signature Soft Rose & Coral Red Light Red Theme                      │
├────────────────────────────────────────────────────────────────────────┤
│  [ Tab 1: Official NSC Past Papers ]   [ Tab 2: MCQ Practice Tests ]   │
│                                                                        │
│  Filters: [ All ] [ Maths Lit ] [ Accounting ] [ Business Studies ]   │
│           [ Economics ] [ English HL/FAL ] [ Afrikaans EAT ]           │
├────────────────────────────────────────────────────────────────────────┤
│  ┌─────────────────────────┐   ┌─────────────────────────┐             │
│  │ Mathematical Literacy   │   │ Accounting P1           │             │
│  │ Paper 1 (Finance & Tax) │   │ Financial Statements    │             │
│  │ 18 Questions · 70 Marks │   │ 12 Questions · 50 Marks │             │
│  │ [Start Exam]            │   │ [Start Exam]            │             │
│  └─────────────────────────┘   └─────────────────────────┘             │
└────────────────────────────────────────────────────────────────────────┘
```

### Visual Styling Details
- **Tabs**: Clean segmented pill-less tabs with subtle active rose background (`bg-rose-50 text-rose-800 border-rose-300`).
- **Cards**: Single-elevation cards with top light red accent gradient bar, unboxed metadata (`·` separator), subject icon, and start action.
- **Exam Session**: Seamless split view with official DBE annexures on the left and question cards on the right.

---

## 3. Technical Architecture & File Plan

1. **`types/quiz.ts`**:
   - Expand `SubjectId` to include `'math-lit-p1' | 'math-lit-p2' | 'accounting' | 'business-studies' | 'economics' | 'english' | 'afrikaans'`.
   - Add `examCategory: 'nsc-paper' | 'mcq-test'` to `ExamPaper` for tab filtering.
2. **`lib/exam-data.ts`**:
   - Export full exam papers for all 6 subjects and both categories (past papers & MCQ tests).
   - Update `SUBJECT_LIST` to encompass all 6 subjects.
   - Implement `getAllExamPapers()` and `getExamPaperById(paperId: string)`.
3. **`components/TopicSelector.tsx`**:
   - Add top-level category tabs: `Official NSC Papers` vs `MCQ Practice Tests`.
   - Add subject chip filter (`All`, `Maths Lit`, `Accounting`, `Business Studies`, etc.).
   - Display card grid filtered dynamically by selected tab and subject.
4. **`app/page.tsx`**:
   - Support selecting any exam paper by `paperId` or subject.
   - Maintain time tracking, question palette, and result reviews.
5. **`components/ExamResults.tsx`**:
   - Seamlessly compute grades and display subject-specific performance across all paper types.

---

## 4. Verification Plan

- Run `compile_applet` to verify all imports, types, and build outputs.
- Test tab switching between NSC Papers and MCQ Practice Tests.
- Test subject filtering across all 6 subjects.
- Verify that qualitative questions open the Qualitative Answer Studio and calculations open the numeric calculation form.
