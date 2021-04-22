function yearValidator(year) {
  if (year !== undefined && year !== '') {
    const regexYear = /^[0-9]{4}$/;
    const currentYear = new Date().getFullYear();
    
    return regexYear.test(year) && year <= currentYear;
  }

  return true
}

export default yearValidator;