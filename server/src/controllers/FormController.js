import validateEmptyFields from '../utils/fieldValidator.js';
import validateDate from '../utils/dateValidator.js';
import validateCellphone from '../utils/cellphoneValidator.js';
import validatelicensePlate from '../utils/licensePlateValidator.js';
import validateYear from '../utils/yearValidator.js';
import formatDate from '../utils/formatDate.js';

export default class FormController {
  async doSchedule(req, res) {
    const errorMessage = 'Não foi possível agendar pois os seguintes estão campos vazios:';
    const { name, brand, model, licensePlate, date } = req.body;
    const isCellNumber = validateCellphone(req.body.cellphone);

    const fields = [
      { 'field': 'nome', 'value': name },
      { 'field': 'marca','value': brand },
      { 'field': 'modelo', 'value': model },
      { 'field': 'placa', 'value': licensePlate }
    ];

    const emptyFields = validateEmptyFields(fields);
    const isValidDate = validateDate(date);
    const isValidLicensePlate = validatelicensePlate(licensePlate);
    const isValidYear = validateYear(req.body.year);

    if(!isValidDate) {
      return res.status(400).json({
        errors: 'Não é possivel agendar nesse horário'
      });
    }

    if(!isCellNumber) {
      return res.status(400).json({
        errors: 'Número de telefone inválido'
      });
    }

    if(!isValidLicensePlate) {
      return res.status(400).json({
        errors: 'Placa inválida'
      });
    }

    if (!isValidYear) {
      return res.status(400).json({
        errors: 'Ano do veículo é inválido'
      });
    }

    if(emptyFields.length > 0) {
      console.log(emptyFields);
      return res.status(400).json({
        errors: errorMessage, campos: emptyFields 
      });
    }
    
    return res.status(200).json({ 
      data: req.body,
      formatedDate: formatDate(date)
     });
  }
}