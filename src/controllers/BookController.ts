import type { Request, Response } from 'express';

import { BookRepository } from '../models/BookRepository.js';

export class BookController {
  public constructor(private bookRepository: BookRepository) {}

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