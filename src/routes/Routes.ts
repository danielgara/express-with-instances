// external libraries imports
import { Router } from 'express';

// internal application code imports
import type { BookController } from '../controllers/BookController.js';
import type { HomeController } from '../controllers/HomeController.js';

export class Routes {
  // private dependencies
  private bookController: BookController;
  private homeController: HomeController;
  private router: Router;

  // constructor
  public constructor(bookController: BookController, homeController: HomeController, router: Router) {
    this.bookController = bookController;
    this.homeController = homeController;
    this.router = router;
  }

  // methods
  public initializeRoutes(): Router {
    this.router.get('/', this.homeController.index.bind(this.homeController));
    this.router.get('/about', this.homeController.about.bind(this.homeController));
    this.router.get('/books', this.bookController.index.bind(this.bookController));
    this.router.get('/books/:id', this.bookController.show.bind(this.bookController));

    return this.router;
  }
}