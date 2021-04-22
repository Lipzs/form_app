function licensePlateValidator(licensePlate) {
  const regexLicensePlate = /^[a-zA-Z]{3}[0-9]{4}$/;
  return regexLicensePlate.test(licensePlate);
}

export default licensePlateValidator;