'use client';

import React, { useState } from 'react';
import { X, Trash2, Calculator, Edit3, Check } from 'lucide-react';

interface ScratchpadModalProps {
  isOpen: boolean;
  onClose: () => void;
  notes: string;
  onNotesChange: (notes: string) => void;
}

export function ScratchpadModal({
  isOpen,
  onClose,
  notes,
  onNotesChange,
}: ScratchpadModalProps) {
  const [calcInput, setCalcInput] = useState('');
  const [calcResult, setCalcResult] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleEvaluateCalc = () => {
    try {
      // Safely evaluate simple arithmetic expressions
      const sanitized = calcInput.replace(/[^0-9+\-*/.() ]/g, '');
      if (!sanitized) return;
      const res = Function(`'use strict'; return (${sanitized})`)();
      const formatted = Number.isInteger(res) ? String(res) : Number(res).toFixed(2);
      setCalcResult(formatted);
    } catch {
      setCalcResult('Error in expression');
    }
  };

  const handleAppendResultToNotes = () => {
    if (!calcResult || calcResult === 'Error in expression') return;
    const appendText = `\n[Calc: ${calcInput} = ${calcResult}]`;
    onNotesChange(notes + appendText);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-xs animate-in fade-in duration-200">
      <div 
        className="bg-white rounded-2xl max-w-2xl w-full max-h-[85vh] flex flex-col shadow-2xl border border-rose-200 overflow-hidden"
        role="dialog"
        aria-modal="true"
      >
        {/* Header with Light Red Accent */}
        <div className="px-6 py-4 bg-gradient-to-r from-rose-500 to-rose-600 text-white flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Edit3 className="w-5 h-5 text-rose-100" />
            <div>
              <h2 className="font-bold text-base sm:text-lg">
                Candidate Working Scratchpad
              </h2>
              <p className="text-xs text-rose-100">
                Feint-and-margin rough work pad with instant arithmetic evaluation
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

        {/* Quick Calculator Strip */}
        <div className="bg-rose-50/70 border-b border-rose-100 px-6 py-3 flex flex-wrap items-center gap-2">
          <div className="flex items-center space-x-1.5 text-xs font-semibold text-rose-800">
            <Calculator className="w-4 h-4 text-rose-600" />
            <span>Quick Calculator:</span>
          </div>
          <div className="flex items-center gap-1.5 flex-1 min-w-[200px]">
            <input
              type="text"
              value={calcInput}
              onChange={(e) => setCalcInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleEvaluateCalc()}
              placeholder="e.g. 514.80 * 1.15 or 1800 / 17.50"
              className="text-xs font-mono px-3 py-1.5 rounded-lg border border-rose-200 bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-rose-400 w-full"
            />
            <button
              onClick={handleEvaluateCalc}
              className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-rose-600 hover:bg-rose-700 text-white shrink-0 transition-colors"
            >
              =
            </button>
          </div>
          {calcResult && (
            <div className="flex items-center gap-1.5 bg-white border border-rose-200 px-2.5 py-1 rounded-lg text-xs font-mono font-bold text-rose-700">
              <span>{calcResult}</span>
              <button
                onClick={handleAppendResultToNotes}
                className="text-[10px] bg-rose-100 hover:bg-rose-200 px-1.5 py-0.5 rounded text-rose-800 transition-colors"
                title="Paste result into scratchpad notes"
              >
                + Insert
              </button>
            </div>
          )}
        </div>

        {/* Notebook Body with Iconic Light Red Left Margin Line */}
        <div className="relative flex-1 p-4 bg-exam-grid min-h-[300px] flex flex-col">
          <div className="relative flex-1 bg-white rounded-xl shadow-xs border border-rose-100 flex overflow-hidden">
            {/* The Famous South African School Notebook Light Red Margin */}
            <div className="w-10 sm:w-12 border-r-2 border-rose-300 bg-rose-50/30 flex flex-col items-center pt-3 text-[11px] font-mono text-rose-400 select-none">
              <span>Q#</span>
            </div>

            {/* Note Area */}
            <textarea
              value={notes}
              onChange={(e) => onNotesChange(e.target.value)}
              placeholder="Write your rough step calculations, intermediate values, or question notes here...&#10;&#10;e.g.&#10;Q1.1 Water Tariff:&#10;Step 1 = 6 kL free&#10;Step 2 = 9 kL * 22.40 = 201.60&#10;Step 3 = 9 kL * 34.80 = 313.20&#10;Total excl VAT = 514.80&#10;Total with 15% VAT = 592.02"
              className="flex-1 p-3 text-xs sm:text-sm font-mono text-gray-800 focus:outline-none resize-none leading-relaxed bg-transparent"
              rows={12}
            />
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-3 bg-white border-t border-gray-100 flex items-center justify-between text-xs">
          <button
            onClick={() => onNotesChange('')}
            className="flex items-center gap-1 text-gray-500 hover:text-rose-600 transition-colors"
          >
            <Trash2 className="w-3.5 h-3.5" />
            <span>Clear Scratchpad</span>
          </button>
          <div className="flex items-center space-x-2">
            <span className="text-gray-400 text-[11px]">
              Notes auto-saved in this exam session
            </span>
            <button
              onClick={onClose}
              className="px-4 py-1.5 rounded-xl font-semibold bg-rose-50 text-rose-700 border border-rose-200 hover:bg-rose-100 transition-colors"
            >
              Done Working
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
