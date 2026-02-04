import type { Application } from 'express';
import express from 'express';
import expressLayouts from 'express-ejs-layouts';
import path from 'path';

import { BookController } from './controllers/BookController.js';
import { BookRepository } from './models/BookRepository.js';
import { HomeController } from './controllers/HomeController.js';
import { Routes } from './routes/Routes.js';

class Index {
  private routes: Routes;

  public constructor(routes: Routes) {
    this.routes = routes;
  }

  public startServer(): void {
    const app: Application = express();
    const PORT = process.env.PORT || 3000;

    app.set('view engine', 'ejs');
    app.set('views', path.join(process.cwd(), 'src/views'));
    app.use(express.static('src/public'));

    app.use(expressLayouts);
    app.set('layout', 'layouts/app');
    
    app.use(this.routes.initializeRoutes());
    
    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  }
}

const bookController = new BookController(new BookRepository());
const homeController = new HomeController();
const routes = new Routes(bookController, homeController);
const index = new Index(routes);

index.startServer();