import express from "express";

import multer from "multer";

import ListFileController from "../controllers/ListFileController";

import IListFileController from "../interfaces/IListFileController";

const upload: multer.Multer = multer();

const userRouter: express.Router = express.Router();

const listFileController: IListFileController = new ListFileController();

userRouter.post(
  "/fileanalyse",
  upload.single("file"),
  listFileController.handle
);

export default userRouter;
