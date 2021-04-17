function validateYear(ano) {
  const regexYear = /^[0-9]{4}$/;
  const currentYear = new Date().getFullYear();

  return regexYear.test(ano) && ano <= currentYear;
}

export default validateYear;