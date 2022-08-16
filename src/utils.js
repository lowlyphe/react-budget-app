export const currencyFormatter = new Intl.NumberFormat(undefined, {
    currency: "usd",
    style: "currency",
    minimumFractionDigits: 0
});

export const getProgressBarVarient = (amount, max) => {
    const ratio = amount / max;
    if (ratio < 0.5) return "blue";
    if (ratio < 0.75) return "yellow";
    return "red";

}

export const getRatio = (amount, max) => {
    const ratio = (amount / max) * 100;
    if (ratio > 100) return '100%';
    return `${ratio}%`
}

export const overload = (amount, max) => {
     const ratio = getRatio(amount,max);
     if (ratio === '100%') return '#ffb3b3'
     else return '#ffffff'
}