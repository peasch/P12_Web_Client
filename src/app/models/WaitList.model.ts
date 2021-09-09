import {Game} from "./game.model";
import {User} from "./user.model";

export class WaitList {
  public id!: number;
  game!: Game;
  waiter!: User;
  date!: Date;
  returnDate!: Date;

  constructor() {
  }
}
