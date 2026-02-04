import { Router } from 'express';

import { BookController } from '../controllers/BookController.js';
import { HomeController } from '../controllers/HomeController.js';

export class Routes {
  private bookController: BookController;
  private homeController: HomeController;

  public constructor(bookController: BookController, homeController: HomeController) {
    this.bookController = bookController;
    this.homeController = homeController;
  }

  public initializeRoutes(): Router {
    const router = Router();

    router.get('/', this.homeController.index.bind(this.homeController));
    router.get('/about', this.homeController.about.bind(this.homeController));
    router.get('/books', this.bookController.index.bind(this.bookController));
    router.get('/books/:id', this.bookController.show.bind(this.bookController));

    return router;
  }
}