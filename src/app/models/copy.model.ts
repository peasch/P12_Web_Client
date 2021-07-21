import {Game} from "./game.model";

export class Copy{

  constructor(public code:string,
              public available: boolean,
              public game:Game)  {
  }
}
