import {User} from "./user.model";
import {Copy} from "./copy.model";

export class Borrowing{

  private  id!:number;

  private borrowerDto!: User;

  copyDto!:Copy;

  private date!:Date;
  returnDate!:Date;

constructor() {
}
}
