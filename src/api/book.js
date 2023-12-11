import api from "../plugins/axios";
import axios from "axios";
class BookService {
    async getBooks() {
        const { data } = await axios.get('/livros/');
        return data;
    }
    async addBook(book) {
        const { data } = await axios.post('/livros/', book);
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
    async getAuthors() {
        const { data } = await axios.get('/autores/');
        return data;
    }
    async getPublishers() {
        const { data } = await axios.get('/editoras/')
        return data;
    }
    async addImage(formData) {
        const { data } = await axios.post('/api/media/images/', formData)
        return data;
    }
}

export default new BookService();