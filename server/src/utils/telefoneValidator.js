function telefoneValidator(telefone) {
  if ((telefone != undefined && telefone != '')) {
    let RegExp = /\+\d{2}\s\(\d{2}\)\s\d{4,5}-?\d{4}/g;
    let isValidNumber = RegExp.test(`+55 ${telefone}`); 

    return isValidNumber;
  }

  return true;
}

export default telefoneValidator;