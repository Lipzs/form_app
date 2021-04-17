import validateEmptyFields from '../utils/fieldValidator.js';
import validateDate from '../utils/dateValidator.js';
import validateTelefone from '../utils/telefoneValidator.js';
import validatePlaca from '../utils/placaValidator.js';
import validateYear from '../utils/anoValidate.js';

export default class FormController {
  async doSchedule(req, res) {
    const errorMessage = 'Não foi possível agendar pois existem campos vazios';
    const { nome, marca, modelo, placa, data } = req.body;
    const isCellNumber = validateTelefone(req.body.telefone);

    const fields = [
      {'campo': 'nome', 'value': nome},
      {'campo':'marca','value': marca},
      {'campo':'modelo', 'value': modelo},
      {'campo':'placa', 'value': placa}
    ];
    const emptyFields = validateEmptyFields(fields);
    const isValidDate = validateDate(data);
    const isValidPlaca = validatePlaca(placa);
    const isValidYear = validateYear(req.body.ano);

    if(!isValidDate) {
      return res.status(400).json({error: 'Não é possivel agendar nesse horário'});
    }

    if(!isCellNumber) {
      return res.status(400).json({error: 'Número de telefone inválido'});
    }

    if(!isValidPlaca) {
      return res.status(400).json({error: 'Placa inválida'});
    }

    if (!isValidYear) {
      return res.status(400).json({error: 'Ano do veículo é inválido'});
    }

    if(emptyFields.length > 0) {
      console.log(emptyFields);
      return res.status(400).json({ error: errorMessage, campos: emptyFields });
    }
    
    return res.status(200).json({ dados: req.body });
  }
}