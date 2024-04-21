/**
 * Loan calculation per month
 * @param {number} amount
 * @param {number} interest
 * @param {number} duration
 * @returns {number}
 */
export function loanPerMonth(amount, interest, duration) {
    const monthly_rate = (interest * 0.01) / 12;
    // using the annuity formula
    let emi = (amount * monthly_rate) / (1 - Math.pow(1 + monthly_rate, -duration));
    // Round the result to two decimal places
    emi = Math.round(emi * 100) / 100;
    if (isNaN(emi) || !isFinite(emi)) {
        return 0;
    }
    return emi;
}
/**
 * Loan calculation per Year
 * @param {number} amount
 * @param {number} interest
 * @param {number} duration
 * @returns {number}
 */
export function loanPerYear(amount, interest, duration) {
    const principle = amount;
    const monthly_rate = interest / 1200;
    const monthlyTenure = duration * 12; // monthly tenure
    let emi = monthly_rate === 0
        ? principle / monthlyTenure
        : (principle * monthly_rate * Math.pow(1 + monthly_rate, monthlyTenure)) /
            (Math.pow(1 + monthly_rate, monthlyTenure) - 1);
    if (isNaN(emi) || !isFinite(emi)) {
        return 0;
    }
    emi = Math.round(emi * 100) / 100;
    return parseFloat((emi * 12).toFixed(2));
}
/**
 *
 * @param {number} amount
 * @param {number} interest
 * @param {number} duration
 * @returns {number}
 */
export function loanPerday(amount, interest, duration) {
    const daily_rate = (interest * 0.01) / 365;
    // using the annuity formula
    let emi = (amount * daily_rate) / (1 - Math.pow(1 + daily_rate, -duration));
    if (isNaN(emi) || !isFinite(emi)) {
        return 0;
    }
    emi = Math.round(emi * 100) / 100;
    return emi;
}
