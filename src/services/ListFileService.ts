import BadRequestError from "../errors/BadRequestError";

import { Express } from "express";

export default class ListFileService {
  public execute(file: Express.Multer.File | undefined): Express.Multer.File {
    if (!file) throw new BadRequestError("Arquivo não encontrado!");

    return file;
  }
}
