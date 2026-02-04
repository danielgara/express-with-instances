// external libraries imports
import type { Application } from 'express';
import express from 'express';
import expressLayouts from 'express-ejs-layouts';
import path from 'path';
import { Router } from 'express';

// internal application code imports
import { BookController } from './controllers/BookController.js';
import { BookRepository } from './models/BookRepository.js';
import { HomeController } from './controllers/HomeController.js';
import { Routes } from './routes/Routes.js';

class Index {
  // private dependencies
  private app: Application;
  private routes: Routes;

  // constructor
  public constructor(app: Application, routes: Routes) {
    this.app = app;
    this.routes = routes;
  }

  // methods
  public startServer(): void {
    const PORT = process.env.PORT || 3000;

    this.app.set('view engine', 'ejs');
    this.app.set('views', path.join(process.cwd(), 'src/views'));
    this.app.use(express.static('src/public'));

    this.app.use(expressLayouts);
    this.app.set('layout', 'layouts/app');
    
    this.app.use(this.routes.initializeRoutes());
    
    this.app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  }
}

// initialize dependencies
const app = express();
const bookController = new BookController(new BookRepository());
const homeController = new HomeController();
const router = Router();
const routes = new Routes(bookController, homeController, router);
const index = new Index(app, routes);

// start server
index.startServer();