function validateEmptyFields(fields) {
  const emptyFields = [];

  for(let field of fields) {
    if(field.value === undefined || field.value === '') {
      emptyFields.push(field.campo);
    }
  }

  return emptyFields;
}

export default validateEmptyFields;