import {Game} from "./game.model";
import {User} from "./user.model";

export class Advice {

  constructor( public id:number,
               public game:Game,
               public user:User,
               public commentary:string,
               public rating:number,
               public username:string,
               public average:number){}


}


