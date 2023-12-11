import { defineStore } from "pinia";
import bookService from "@/api/book.js";

export const useBookStore = defineStore("book", {
  state: () => {
    return {
      books: [],
      categories: [],
      authors: [],
      publishers: [],
    };
  },
  actions: {
    async getBooks() {
      const data = await bookService.getBooks();
      this.books = data;
      console.log(this.books);
    },
    async addBook(book, formData) {
      try {
        const image = await bookService.addImage(formData);
        console.log(image)
        book.capa = image.id;
        const data = await bookService.addBook(book);
        await this.getBooks();
        console.log(this.books);
      } catch (e) {
        console.log(e);
      }
    },
    async getCategories() {
      const data = await bookService.getCategories();
      this.categories = data;
      console.log(this.categories);
    },
    async addCategorie(categorie) {
      const data = await bookService.addCategorie(categorie);
      await this.getCategories();
      console.log(this.categories);
    },
    async deleteCategorie(id) {
      try {
        const data = await bookService.deleteCategorie(id);
        await this.getCategories();
        console.log(this.categories);
        return {
          message: "Categoria deletada com sucesso",
          status: "complete",
        };
      } catch (err) {
        console.log(err);
        if (err.code == "ERR_BAD_RESPONSE")
          return {
            message: "Delete todos os livros com essa categoria para continuar",
            status: "error",
          };
      }
    },
    async getAuthors() {
      const data = await bookService.getAuthors();
      this.authors = data;
    },
    async getPublishers() {
        const data = await bookService.getPublishers()
        this.publishers = data;
    }
  },
});
