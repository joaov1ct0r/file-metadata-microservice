import { Request } from "express";

export default interface IReq extends Request {
  file: object;
}
