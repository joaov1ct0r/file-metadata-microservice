import { Request, Response, Express } from "express";

import ListFileService from "../services/ListFileService";

import IListFileService from "../interfaces/IListFileService";

export default class ListFileController {
  public async handle(req: Request, res: Response): Promise<Response> {
    const file: Express.Multer.File | undefined = req.file;

    const listFileService: IListFileService = new ListFileService();

    try {
      const files: Express.Multer.File = listFileService.execute(file);

      return res.status(200).json({
        name: files.originalname,
        type: files.mimetype,
        size: files.size,
      });
    } catch (err: any) {
      return res.status(err.statusCode).json({ error: err.message });
    }
  }
}
