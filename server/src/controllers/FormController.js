import validateEmptyFields from '../utils/fieldValidator.js';
import validateDate from '../utils/dateValidator.js';

export default class FormController {
  async doSchedule(req, res) {
    const errorMessage = 'Não foi possível agendar pois existem campos vazios';

    const { nome, marca, modelo, placa, data } = req.body;

    const fields = [nome, marca, modelo, placa];
    const emptyFields = validateEmptyFields(fields);
    const isValidDate = validateDate(data);

    if(!isValidDate) {
      return res.status(400).json({error: 'Não é possivel agendar nesse horário'});
    }

    if(emptyFields.length > 0) {
      return res.status(400).json({ error: errorMessage, campos: emptyFields });
    }
    
    return res.status(200).json({ dados: req.body });
  }
}