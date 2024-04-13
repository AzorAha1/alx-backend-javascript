function getCurrentYear() {
  const date = new Date();
  return date.getFullYear();
}

export default function getBudgetForCurrentYear(income, gdp, capita) {
  const budget = {
    [`income-${getCurrentYear()}`] : income,
    [`gdp-${getCurrentYear()}`] : gdp,
    [`capita-${getCurrentYear()}`] : capita,
  };
    // ES5 way of doing it
    // budget[`income-${getCurrentYear()}`] = income;
    // budget[`gdp-${getCurrentYear()}`] = gdp;
    // budget[`capita-${getCurrentYear()}`] = capita;

  return budget;
}
