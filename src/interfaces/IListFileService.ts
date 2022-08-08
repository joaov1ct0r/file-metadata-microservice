import { Express } from "express";

export default interface IListFileService {
  execute(file: Express.Multer.File | undefined): Express.Multer.File;
}
