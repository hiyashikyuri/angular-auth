import {Book} from "../shared/book.model";
export class Entry {
  constructor(public id?: number,
              public  title?: string,
              public  content?: string,
              public books?: Book[]) {
  }
}




