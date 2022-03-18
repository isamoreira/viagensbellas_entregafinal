import axios from 'axios';

const PACOTE_API_URL = "https://viagensbellas.herokuapp.com/pacote/pacotes";

class PacoteService {
  getAllPacotes() {
    return axios.get(PACOTE_API_URL);
  }

  createPacote(pacote) {
    return axios.post(PACOTE_API_URL, pacote);
  }

  getPacoteById(id) {
    return axios.get(PACOTE_API_URL + "/" + id);
  }

  updatePacote(id, pacote) {
    return axios.put(PACOTE_API_URL + "/" + id, pacote);
  }

  deletePacote(id) {
    return axios.delete(PACOTE_API_URL + "/" + id);
  }
}

export default new PacoteService();
