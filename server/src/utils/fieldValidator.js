function fieldValidator(fields) {
  const emptyFields = [];

  for(let fd of fields) {
    if(fd.value === undefined || fd.value === '') {
      emptyFields.push(fd.field);
    }
  }

  return emptyFields;
}

export default fieldValidator;