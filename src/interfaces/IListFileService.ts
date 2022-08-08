import IFiles from "./IFiles";

export default interface IListFileService {
  execute(file: object): IFiles;
}
