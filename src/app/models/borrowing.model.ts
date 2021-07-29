import {User} from "./user.model";
import {Copy} from "./copy.model";

export class Borrowing{

  private  id!:number;

  private borrowerDto!: User;

  private copyDto!:Copy;

  private date!:Date;
  private returnDate!:Date;

constructor() {
}
}
