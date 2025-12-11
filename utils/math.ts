
export interface CalculationResult {
    percentageChange: number;
    difference: number;
    type: 'increase' | 'decrease' | 'no change';
}

/**
 * Calculates the percentage change between a start and end value.
 * Formula: ((endValue - startValue) / startValue) * 100
 * @param startValue The initial value.
 * @param endValue The final value.
 * @returns An object containing the percentage change, difference, and type of change.
 */
export const calculatePercentageChange = (startValue: number, endValue: number): CalculationResult => {
    if (startValue === 0) {
        throw new Error("Start value cannot be zero for percentage change calculation.");
    }

    const difference = endValue - startValue;
    const percentageChange = (difference / Math.abs(startValue)) * 100;

    let type: 'increase' | 'decrease' | 'no change';
    if (percentageChange > 0) {
        type = 'increase';
    } else if (percentageChange < 0) {
        type = 'decrease';
    } else {
        type = 'no change';
    }

    return {
        percentageChange,
        difference,
        type,
    };
};
   