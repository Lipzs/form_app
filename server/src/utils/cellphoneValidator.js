function cellphoneValidator(cellphone) {
  if ((cellphone != undefined && cellphone != '')) {
    let RegExp = /\d{2}\d{4,5}-?\d{4}/g;
    let isValidNumber = RegExp.test(cellphone); 

    return isValidNumber;
  }

  return true;
}

export default cellphoneValidator;