import { Response } from "express";

import IReq from "../interfaces/IReq";

import ListFileService from "../services/ListFileService";

import IListFileService from "../interfaces/IListFileService";

import IFiles from "../interfaces/IFiles";

export default class ListFileController {
  public async handle(req: IReq, res: Response): Promise<Response> {
    const file: object = req.file;

    const listFileService: IListFileService = new ListFileService();

    try {
      const files: IFiles = listFileService.execute(file);

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
