function validatePlaca(placa) {
  const regexPlaca = /^[a-zA-Z]{3}[0-9]{4}$/;

  return regexPlaca.test(placa);
}

export default validatePlaca;