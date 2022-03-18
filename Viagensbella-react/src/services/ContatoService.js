import axios from 'axios';

const CONTATO_API_URL = "https://viagensbellas.herokuapp.com/contato/contatos";

class ContatoService {
  getAllContatos() {
    return axios.get(CONTATO_API_URL);
  }

  createContato(contato) {
    return axios.post(CONTATO_API_URL, contato);
  }

  getContatoById(id) {
    return axios.get(CONTATO_API_URL + "/" + id);
  }

  updateContato(id, contato) {
    return axios.put(CONTATO_API_URL + "/" + id, contato);
  }

  deleteContato(id) {
    return axios.delete(CONTATO_API_URL + "/" + id);
  }
}

export default new ContatoService();
