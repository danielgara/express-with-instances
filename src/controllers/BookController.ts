// external libraries imports
import type { Request, Response } from 'express';

// internal application code imports
import { BookRepository } from '../models/BookRepository.js';

export class BookController {
  // private dependencies
  private bookRepository: BookRepository;

  // constructor
  public constructor(bookRepository: BookRepository) {
    this.bookRepository = bookRepository;
  }

  // methods
  public index(req: Request, res: Response): void {
    const viewData: { [key: string]: any } = {};
    viewData["books"] = this.bookRepository.findAll();

    res.render('book/index', { viewData: viewData });
  }

  public show(req: Request, res: Response): void {
    const viewData: { [key: string]: any } = {};
    viewData["title"] = "Book Details";
    viewData["book"] = this.bookRepository.findById(parseInt(req.params.id as string));

    res.render('book/show', { viewData: viewData });
  }
}