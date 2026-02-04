import { Router } from 'express';

import { BookController } from '../controllers/BookController.js';
import { BookRepository } from '../models/BookRepository.js';
import { HomeController } from '../controllers/HomeController.js';

export default class Routes {
  static initializeRoutes(): Router {
    const router = Router();
    const bookController = new BookController(new BookRepository());
    const homeController = new HomeController();
    
    router.get('/', homeController.index.bind(homeController));
    router.get('/about', homeController.about.bind(homeController));
    router.get('/books', bookController.index.bind(bookController));
    router.get('/books/:id', bookController.show.bind(bookController));

    return router;
  }
}