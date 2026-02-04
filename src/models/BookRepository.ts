// internal application code imports
import { Book } from './Book.js';
import { books } from '../data/books.js';

export class BookRepository {
  // private properties
  private books: Book[];

  // constructor
  public constructor() {
    this.books = books;
  }

  // methods
  public findAll(): Book[] {
    return this.books;
  }

  public findById(id: number): Book {
    const book = this.books.find(book => book.getId() === id);

    if (!book) {
      throw new Error(`Book with id ${id} not found`);
    }

    return book;
  }
}