import { Request, Response } from "express";

export default interface IListFileController {
  handle(req: Request, res: Response): Promise<Response>;
}
