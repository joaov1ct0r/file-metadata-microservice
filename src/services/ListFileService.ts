import BadRequestError from "../errors/BadRequestError";

import IFiles from "../interfaces/IFiles";

export default class ListFileService {
  public execute(file: object): IFiles {
    if (!file) throw new BadRequestError("Arquivo não encontrado!");

    return file as IFiles;
  }
}
