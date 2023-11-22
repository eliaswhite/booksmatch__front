import axios from "axios";

class BookService {
    async getBooks() {
        const { data } = await axios.get('/livros');
        return data;
    }
    async getCategories() {
        const { data } = await axios.get('/categorias/');
        return data;
    }
    async addCategorie(categorie) {
        const { data } = await axios.post('/categorias/', categorie);
        return data;
    }
    async deleteCategorie(id) {
        const { data } = await axios.delete(`/categorias/${id}/`)
        return data;
    }
}

export default new BookService();