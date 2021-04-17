function validateEmptyFields(fields) {
  const emptyFields = [];

  for(let field of fields) {
    if(field === undefined || field === '') {
      emptyFields.push(field);
    }
  }

  return emptyFields;
}

export default validateEmptyFields;