// external libraries imports
import type { Request, Response } from 'express';

export class HomeController {
  // constructor
  public constructor() {}

  // methods
  public index(req: Request, res: Response): void {
    const viewData: { [key: string]: any } = {};
    viewData["title"] = "Home";

    res.render('home/index', { viewData: viewData });
  }

  public about(req: Request, res: Response): void {
    const viewData: { [key: string]: any } = {};
    viewData["title"] = "About";

    res.render('home/about', { viewData: viewData });
  }
}