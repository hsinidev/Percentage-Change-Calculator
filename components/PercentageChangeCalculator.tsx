
import React, { useState, useMemo } from 'react';
import { calculatePercentageChange, CalculationResult } from '../utils/math';

const PercentageChangeCalculator: React.FC = () => {
    const [startValue, setStartValue] = useState<string>('');
    const [endValue, setEndValue] = useState<string>('');
    const [result, setResult] = useState<CalculationResult | null>(null);
    const [error, setError] = useState<string>('');

    const handleCalculate = () => {
        const start = parseFloat(startValue);
        const end = parseFloat(endValue);

        if (isNaN(start) || isNaN(end)) {
            setError('Please enter valid numbers for both values.');
            setResult(null);
            return;
        }

        if (start === 0) {
            setError('Start Value cannot be zero for percentage change calculation.');
            setResult(null);
            return;
        }

        setError('');
        const calculation = calculatePercentageChange(start, end);
        setResult(calculation);
    };

    const resultColorClass = useMemo(() => {
        if (!result) return 'text-slate-400';
        switch (result.type) {
            case 'increase': return 'text-green-400';
            case 'decrease': return 'text-red-400';
            default: return 'text-slate-400';
        }
    }, [result]);

    const resultText = useMemo(() => {
        if (!result) return 'N/A';
        const sign = result.type === 'increase' ? '+' : '';
        const typeText = result.type.charAt(0).toUpperCase() + result.type.slice(1);
        return `${sign}${result.percentageChange.toFixed(2)}% ${typeText}`;
    }, [result]);

    return (
        <section id="calculator" className="max-w-2xl mx-auto mb-16">
            <div className="bg-slate-800/50 backdrop-blur-md border border-slate-700 rounded-2xl shadow-2xl p-6 md:p-8">
                <div className="text-center mb-6">
                    <h1 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-500">
                        Percentage Change Calculator
                    </h1>
                    <p className="text-slate-400 mt-2">Instantly find the percentage increase or decrease.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div>
                        <label htmlFor="startValue" className="block text-sm font-medium text-slate-300 mb-1">Start Value (Old)</label>
                        <input
                            type="number"
                            id="startValue"
                            value={startValue}
                            onChange={(e) => setStartValue(e.target.value)}
                            placeholder="e.g., 100"
                            className="w-full bg-slate-900/50 border border-slate-600 rounded-md py-2 px-3 text-white placeholder-slate-500 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition"
                        />
                    </div>
                    <div>
                        <label htmlFor="endValue" className="block text-sm font-medium text-slate-300 mb-1">End Value (New)</label>
                        <input
                            type="number"
                            id="endValue"
                            value={endValue}
                            onChange={(e) => setEndValue(e.target.value)}
                            placeholder="e.g., 150"
                            className="w-full bg-slate-900/50 border border-slate-600 rounded-md py-2 px-3 text-white placeholder-slate-500 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition"
                        />
                    </div>
                </div>

                {error && <p className="text-red-400 text-center text-sm mb-4">{error}</p>}

                <div className="text-center">
                    <button
                        onClick={handleCalculate}
                        className="w-full md:w-auto bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-600 hover:to-indigo-700 text-white font-bold py-3 px-10 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300 ease-in-out"
                    >
                        Calculate Change
                    </button>
                </div>
                
                {result && (
                     <div className="mt-8 pt-6 border-t border-slate-700 text-center animate-fade-in">
                        <h3 className="text-lg text-slate-400 mb-2">Result</h3>
                        <p className={`text-5xl font-bold ${resultColorClass} transition-colors duration-300`}>
                            {resultText}
                        </p>
                        <p className="text-slate-300 mt-2">
                            The raw numeric difference is <span className="font-semibold text-white">{result.difference.toFixed(2)}</span>.
                        </p>
                    </div>
                )}
            </div>
        </section>
    );
};

export default PercentageChangeCalculator;
   