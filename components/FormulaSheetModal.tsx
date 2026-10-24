'use client';

import React from 'react';
import { X, BookOpen, Copy, Check } from 'lucide-react';
import { FORMULA_SHEET_SECTIONS } from '@/lib/exam-data';

interface FormulaSheetModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function FormulaSheetModal({ isOpen, onClose }: FormulaSheetModalProps) {
  const [copiedFormula, setCopiedFormula] = React.useState<string | null>(null);

  if (!isOpen) return null;

  const handleCopy = (formula: string) => {
    navigator.clipboard.writeText(formula);
    setCopiedFormula(formula);
    setTimeout(() => setCopiedFormula(null), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-xs animate-in fade-in duration-200">
      <div 
        className="bg-white rounded-2xl max-w-2xl w-full max-h-[85vh] flex flex-col shadow-2xl border border-rose-200 overflow-hidden"
        role="dialog"
        aria-modal="true"
      >
        {/* Modal Header with Light Red Accent */}
        <div className="px-6 py-4 bg-gradient-to-r from-rose-500 to-rose-600 text-white flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <BookOpen className="w-5 h-5 text-rose-100" />
            <div>
              <h2 className="font-bold text-base sm:text-lg">
                DBE NSC Official Formula Sheet
              </h2>
              <p className="text-xs text-rose-100">
                Mathematical Literacy Paper 1 & 2 Examination References
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6 bg-slate-50/50">
          <div className="bg-rose-50 border border-rose-200 rounded-xl p-3 text-xs text-rose-800">
            <p className="font-semibold mb-1">📌 DBE Exam Formula Guidelines:</p>
            <p>
              Candidates are expected to select and substitute into the correct formula correctly. Always write down the base formula before substituting to earn Method (M) marks.
            </p>
          </div>

          {FORMULA_SHEET_SECTIONS.map((section, idx) => (
            <div key={idx} className="space-y-3">
              <div className="flex items-center space-x-2 border-b border-rose-200 pb-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500"></span>
                <h3 className="font-bold text-gray-900 text-sm tracking-wide">
                  {section.category}
                </h3>
              </div>

              <div className="grid grid-cols-1 gap-3">
                {section.items.map((item, itemIdx) => (
                  <div
                    key={itemIdx}
                    className="p-3.5 bg-white rounded-xl border border-rose-100 hover:border-rose-300 transition-all shadow-2xs group"
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <span className="text-xs font-semibold text-rose-700 bg-rose-50 px-2 py-0.5 rounded-md border border-rose-100">
                          {item.name}
                        </span>
                        <div className="mt-2 font-mono text-sm font-bold text-gray-900 whitespace-pre-line bg-rose-50/40 p-2 rounded-lg border border-rose-100/60">
                          {item.formula}
                        </div>
                        <p className="text-xs text-gray-500 mt-1.5">
                          {item.desc}
                        </p>
                      </div>
                      <button
                        onClick={() => handleCopy(item.formula)}
                        className="text-gray-400 hover:text-rose-600 p-1.5 rounded-md hover:bg-rose-50 transition-colors shrink-0"
                        title="Copy formula"
                      >
                        {copiedFormula === item.formula ? (
                          <Check className="w-4 h-4 text-emerald-600" />
                        ) : (
                          <Copy className="w-4 h-4" />
                        )}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-3 bg-white border-t border-gray-100 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl text-xs font-semibold bg-rose-50 text-rose-700 border border-rose-200 hover:bg-rose-100 transition-colors"
          >
            Close Formula Sheet
          </button>
        </div>
      </div>
    </div>
  );
}
