'use client';

import React, { useState } from 'react';
import { 
  FileText, 
  Droplet, 
  Receipt, 
  TrendingUp, 
  Info,
  Compass,
  Building2,
  DollarSign
} from 'lucide-react';
import { AnnexureData } from '@/types/quiz';

interface AnnexureViewerProps {
  annexures: AnnexureData[];
  selectedAnnexureId?: string;
}

export function AnnexureViewer({
  annexures,
  selectedAnnexureId,
}: AnnexureViewerProps) {
  const [userSelectedId, setUserSelectedId] = useState<string | null>(null);

  // If user selected an id that exists in current annexures, use it; otherwise fallback to prop or first annexure
  const activeId = userSelectedId && annexures.some(a => a.id === userSelectedId)
    ? userSelectedId
    : (selectedAnnexureId && annexures.some(a => a.id === selectedAnnexureId))
      ? selectedAnnexureId
      : (annexures[0]?.id || '');

  const activeAnnexure = annexures.find(a => a.id === activeId) || annexures[0];

  // Interactive helper for Annexure A (Domestic water tariffs)
  const [waterVolumeInput, setWaterVolumeInput] = useState<number>(24);

  const calculateWaterTiers = (volume: number) => {
    let remaining = Math.max(0, volume);
    const step1 = Math.min(6, remaining);
    remaining = Math.max(0, remaining - step1);

    const step2 = Math.min(9, remaining);
    remaining = Math.max(0, remaining - step2);

    const step3 = Math.min(15, remaining);
    remaining = Math.max(0, remaining - step3);

    const step4 = Math.min(15, remaining);
    const step5 = Math.max(0, remaining - step4);

    const cost1 = step1 * 0;
    const cost2 = step2 * 22.40;
    const cost3 = step3 * 34.80;
    const cost4 = step4 * 48.50;
    const cost5 = step5 * 64.00;

    const subtotal = cost1 + cost2 + cost3 + cost4 + cost5;
    const vat = subtotal * 0.15;
    const total = subtotal + vat;

    return { step1, step2, step3, step4, step5, cost1, cost2, cost3, cost4, cost5, subtotal, vat, total };
  };

  const waterSim = calculateWaterTiers(waterVolumeInput);

  return (
    <div className="bg-white rounded-2xl border border-rose-200/90 shadow-xs overflow-hidden flex flex-col">
      {/* Annexure Tabs with Signature Light Red Active Style */}
      <div className="bg-rose-50/70 p-2.5 border-b border-rose-200/80 flex items-center justify-between gap-2 overflow-x-auto">
        <div className="flex items-center space-x-1.5 min-w-0">
          <div className="flex items-center gap-1.5 px-2 py-1 text-xs font-bold text-rose-900 uppercase tracking-wider shrink-0">
            <FileText className="w-4 h-4 text-rose-600" />
            <span>Official Annexures:</span>
          </div>

          <div className="flex items-center space-x-1.5">
            {annexures.map((annexure) => {
              const isActive = annexure.id === activeId;
              return (
                <button
                  key={annexure.id}
                  onClick={() => setUserSelectedId(annexure.id)}
                  className={`text-xs px-3 py-1.5 rounded-xl font-semibold transition-all shrink-0 ${
                    isActive
                      ? 'bg-rose-600 text-white shadow-xs shadow-rose-200'
                      : 'bg-white text-rose-950 hover:bg-rose-100/80 border border-rose-200'
                  }`}
                >
                  {annexure.title.split(':')[0]}
                </button>
              );
            })}
          </div>
        </div>

        <span className="hidden lg:inline text-[11px] text-rose-800 font-semibold px-2 shrink-0 bg-rose-100/60 py-0.5 rounded-md border border-rose-200">
          DBE Exam Reference Sheet
        </span>
      </div>

      {/* Annexure Header */}
      {activeAnnexure && (
        <div className="p-4 sm:p-5 border-b border-rose-100 bg-gradient-to-r from-rose-50/50 via-white to-rose-50/30">
          <div className="flex items-start justify-between gap-3">
            <div>
              <span className="inline-block text-[11px] font-bold tracking-wider px-2.5 py-0.5 rounded-full bg-rose-100 text-rose-800 border border-rose-200 mb-1.5">
                {activeAnnexure.title.split(':')[0]}
              </span>
              <h3 className="font-bold text-gray-900 text-sm sm:text-base">
                {activeAnnexure.title.split(':')[1] || activeAnnexure.title}
              </h3>
              <p className="text-xs text-rose-700/80 mt-0.5 font-medium">
                {activeAnnexure.subtitle}
              </p>
            </div>
            {activeAnnexure.type === 'tariff-table' && (
              <span className="p-2.5 rounded-xl bg-rose-100 text-rose-700 shrink-0 border border-rose-200 shadow-2xs">
                <Droplet className="w-5 h-5" />
              </span>
            )}
            {activeAnnexure.type === 'tax-brackets' && (
              <span className="p-2.5 rounded-xl bg-rose-100 text-rose-700 shrink-0 border border-rose-200 shadow-2xs">
                <Receipt className="w-5 h-5" />
              </span>
            )}
            {activeAnnexure.type === 'breakeven-chart' && (
              <span className="p-2.5 rounded-xl bg-rose-100 text-rose-700 shrink-0 border border-rose-200 shadow-2xs">
                <TrendingUp className="w-5 h-5" />
              </span>
            )}
            {activeAnnexure.type === 'floor-plan' && (
              <span className="p-2.5 rounded-xl bg-rose-100 text-rose-700 shrink-0 border border-rose-200 shadow-2xs">
                <Compass className="w-5 h-5" />
              </span>
            )}
            {activeAnnexure.type === 'financial-statement' && (
              <span className="p-2.5 rounded-xl bg-rose-100 text-rose-700 shrink-0 border border-rose-200 shadow-2xs">
                <DollarSign className="w-5 h-5" />
              </span>
            )}
          </div>
        </div>
      )}

      {/* Content Area */}
      <div className="p-4 sm:p-5 space-y-4">
        {/* Render Table Data if available */}
        {activeAnnexure?.dataRows && activeAnnexure.dataRows.length > 0 && (
          <div className="overflow-x-auto rounded-xl border border-rose-200 shadow-2xs">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-rose-100/80 border-b border-rose-200 text-rose-950 font-bold">
                  {Object.keys(activeAnnexure.dataRows[0]).map((headerKey) => (
                    <th key={headerKey} className="px-3.5 py-2.5 whitespace-nowrap">
                      {headerKey}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-rose-100 bg-white">
                {activeAnnexure.dataRows.map((row, rowIdx) => (
                  <tr 
                    key={rowIdx} 
                    className={`hover:bg-rose-50/50 transition-colors ${
                      rowIdx % 2 === 0 ? 'bg-white' : 'bg-rose-50/25'
                    }`}
                  >
                    {Object.values(row).map((val, cellIdx) => (
                      <td key={cellIdx} className="px-3.5 py-2.5 font-medium text-gray-800 whitespace-nowrap">
                        {String(val)}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* Special SVG Architectural Floor Plan for Annexure P2-A */}
        {activeAnnexure?.id === 'annexure-p2-a' && (
          <div className="p-4 bg-white rounded-xl border border-rose-200 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-rose-950 flex items-center gap-1.5">
                <Compass className="w-3.5 h-3.5 text-rose-600" />
                Architectural Floor Plan Blueprint (Scale 1:100):
              </span>
              <span className="text-[11px] font-semibold text-rose-700 bg-rose-50 px-2.5 py-0.5 rounded-full border border-rose-200">
                1 cm = 1 m (1000 mm)
              </span>
            </div>

            <div className="w-full bg-rose-50/30 p-4 rounded-xl border border-rose-200/80 flex flex-col items-center">
              <svg viewBox="0 0 460 260" className="w-full max-w-lg h-56 bg-white rounded-lg border border-rose-200 shadow-2xs">
                {/* Outer hall boundary */}
                <rect x="40" y="30" width="360" height="200" fill="#fff5f6" stroke="#e11d48" strokeWidth="2.5" />
                
                {/* Main Hall text */}
                <text x="220" y="145" textAnchor="middle" fill="#881337" fontSize="13" fontWeight="bold">
                  MAIN HALL FLOOR (15 m × 9 m = 135 m²)
                </text>
                <text x="220" y="165" textAnchor="middle" fill="#9f1239" fontSize="10">
                  Parquet Wood Flooring (Requires 2 Coats Polyurethane Sealant)
                </text>

                {/* Stage Platform */}
                <rect x="40" y="30" width="120" height="80" fill="#fecdd3" stroke="#be123c" strokeWidth="2" strokeDasharray="3 3" />
                <text x="100" y="65" textAnchor="middle" fill="#881337" fontSize="10" fontWeight="bold">
                  STAGE (5m × 3.5m)
                </text>
                <text x="100" y="80" textAnchor="middle" fill="#9f1239" fontSize="9">
                  Elevated 0.8m
                </text>

                {/* Storeroom */}
                <rect x="300" y="30" width="100" height="70" fill="#ffe4e6" stroke="#be123c" strokeWidth="1.5" />
                <text x="350" y="65" textAnchor="middle" fill="#881337" fontSize="9" fontWeight="bold">
                  STOREROOM (4m × 3m)
                </text>

                {/* North arrow */}
                <circle cx="375" cy="195" r="16" fill="#fff" stroke="#fda4af" strokeWidth="1.5" />
                <line x1="375" y1="205" x2="375" y2="183" stroke="#e11d48" strokeWidth="2" />
                <polygon points="375,181 371,189 379,189" fill="#e11d48" />
                <text x="375" y="177" textAnchor="middle" fill="#be123c" fontSize="9" fontWeight="bold">N</text>

                {/* Dimension Arrows */}
                {/* Top dimension: 15 000 mm */}
                <line x1="40" y1="18" x2="400" y2="18" stroke="#f43f5e" strokeWidth="1.5" />
                <line x1="40" y1="12" x2="40" y2="24" stroke="#f43f5e" strokeWidth="1.5" />
                <line x1="400" y1="12" x2="400" y2="24" stroke="#f43f5e" strokeWidth="1.5" />
                <text x="220" y="14" textAnchor="middle" fill="#be123c" fontSize="10" fontWeight="bold">Length = 15 000 mm (15 m)</text>

                {/* Left dimension: 9 000 mm */}
                <line x1="24" y1="30" x2="24" y2="230" stroke="#f43f5e" strokeWidth="1.5" />
                <line x1="18" y1="30" x2="30" y2="30" stroke="#f43f5e" strokeWidth="1.5" />
                <line x1="18" y1="230" x2="30" y2="230" stroke="#f43f5e" strokeWidth="1.5" />
                <text x="20" y="135" textAnchor="middle" transform="rotate(-90 20 135)" fill="#be123c" fontSize="10" fontWeight="bold">Width = 9 000 mm (9 m)</text>
              </svg>
            </div>
          </div>
        )}

        {/* Special Interactive Section for Water Tariffs (Annexure A) */}
        {activeAnnexure?.id === 'annexure-a' && (
          <div className="p-4 bg-rose-50/70 rounded-xl border border-rose-200 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-rose-900 flex items-center gap-1.5">
                <Droplet className="w-3.5 h-3.5 text-rose-600" />
                Interactive Water Tariff Tier Visualizer (Test Your Calculations):
              </span>
              <div className="flex items-center gap-2">
                <span className="text-xs text-rose-800 font-medium">Consumption:</span>
                <input
                  type="number"
                  min="0"
                  max="60"
                  value={waterVolumeInput}
                  onChange={(e) => setWaterVolumeInput(Number(e.target.value) || 0)}
                  className="w-16 px-2 py-1 text-xs font-bold text-center rounded border border-rose-300 bg-white text-rose-950 focus:outline-none focus:ring-1 focus:ring-rose-500"
                />
                <span className="text-xs text-gray-600 font-medium">kL</span>
              </div>
            </div>

            {/* Stepped Water Blocks Display in Light Red Tints */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-[11px]">
              <div className="bg-white p-2.5 rounded-lg border border-rose-200 shadow-2xs">
                <span className="text-gray-500 block">Step 1 (0-6 kL)</span>
                <span className="font-bold text-rose-900">{waterSim.step1} kL</span>
                <span className="text-rose-700 font-semibold block">Free (R0.00)</span>
              </div>
              <div className="bg-white p-2.5 rounded-lg border border-rose-200 shadow-2xs">
                <span className="text-gray-500 block">Step 2 (6-15 kL)</span>
                <span className="font-bold text-rose-900">{waterSim.step2} kL × R22.40</span>
                <span className="text-emerald-700 font-semibold block">R{waterSim.cost2.toFixed(2)}</span>
              </div>
              <div className="bg-white p-2.5 rounded-lg border border-rose-200 shadow-2xs">
                <span className="text-gray-500 block">Step 3 (15-30 kL)</span>
                <span className="font-bold text-rose-900">{waterSim.step3} kL × R34.80</span>
                <span className="text-emerald-700 font-semibold block">R{waterSim.cost3.toFixed(2)}</span>
              </div>
              <div className="bg-rose-100/80 p-2.5 rounded-lg border border-rose-300 shadow-2xs">
                <span className="text-rose-900 font-bold block">Total + 15% VAT:</span>
                <span className="font-black text-sm text-rose-900 block num-tabular">
                  R{waterSim.total.toFixed(2)}
                </span>
                <span className="text-[10px] text-rose-800 font-medium block">Excl. VAT: R{waterSim.subtotal.toFixed(2)}</span>
              </div>
            </div>
          </div>
        )}

        {/* Special SVG Breakeven Graph for Annexure C */}
        {activeAnnexure?.id === 'annexure-c' && (
          <div className="p-4 bg-white rounded-xl border border-rose-200 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-gray-900 flex items-center gap-1.5">
                <TrendingUp className="w-3.5 h-3.5 text-rose-600" />
                Breakeven Graph: Cost vs Revenue Lines
              </span>
              <span className="text-[11px] font-semibold text-rose-700 bg-rose-50 px-2 py-0.5 rounded border border-rose-200">
                Breakeven = 103 Sandwiches
              </span>
            </div>

            <div className="w-full bg-rose-50/20 p-2 rounded-lg border border-rose-100 flex justify-center">
              <svg viewBox="0 0 450 200" className="w-full max-w-md h-44">
                {/* Axis lines */}
                <line x1="40" y1="170" x2="420" y2="170" stroke="#cbd5e1" strokeWidth="2" />
                <line x1="40" y1="170" x2="40" y2="20" stroke="#cbd5e1" strokeWidth="2" />
                
                {/* Y-axis label */}
                <text x="45" y="30" fill="#64748b" fontSize="10" fontWeight="bold">Amount (R)</text>
                {/* X-axis label */}
                <text x="360" y="165" fill="#64748b" fontSize="10" fontWeight="bold">Units (n)</text>

                {/* Fixed Cost Line (R1800 flat) */}
                <line x1="40" y1="130" x2="420" y2="130" stroke="#94a3b8" strokeDasharray="3 3" strokeWidth="1.5" />
                <text x="45" y="125" fill="#64748b" fontSize="9">Fixed Cost = R1 800</text>

                {/* Total Cost Line (Starts at R1800) */}
                <line x1="40" y1="130" x2="400" y2="50" stroke="#f43f5e" strokeWidth="2.5" />
                <text x="330" y="45" fill="#f43f5e" fontSize="10" fontWeight="bold">Cost Line (C)</text>

                {/* Revenue Line (Starts at 0) */}
                <line x1="40" y1="170" x2="400" y2="30" stroke="#059669" strokeWidth="2.5" />
                <text x="330" y="25" fill="#059669" fontSize="10" fontWeight="bold">Revenue (R)</text>

                {/* Breakeven intersection point (approx x=220, y=90) */}
                <circle cx="215" cy="91" r="5" fill="#e11d48" stroke="#fff" strokeWidth="2" />
                <text x="225" y="94" fill="#881337" fontSize="10" fontWeight="bold">Breakeven (103 units, R3 296)</text>
                
                {/* Dropline to X-axis */}
                <line x1="215" y1="91" x2="215" y2="170" stroke="#e11d48" strokeDasharray="2 2" strokeWidth="1" />
                <text x="208" y="185" fill="#881337" fontSize="9" fontWeight="bold">n=103</text>
              </svg>
            </div>
          </div>
        )}

        {/* Annexure Notes with Light Red Bullet Accent */}
        {activeAnnexure?.notes && activeAnnexure.notes.length > 0 && (
          <div className="bg-rose-50/60 p-3.5 rounded-xl border border-rose-200 text-xs text-gray-700 space-y-1.5">
            <span className="font-bold text-rose-900 flex items-center gap-1">
              <Info className="w-3.5 h-3.5 text-rose-600" />
              Official Examination Notes & Tariffs:
            </span>
            <ul className="list-disc pl-5 space-y-0.5 text-rose-950 font-medium">
              {activeAnnexure.notes.map((note, nIdx) => (
                <li key={nIdx}>{note}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
