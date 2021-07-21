import {Role} from "./role.model";

export class User{

  constructor(public firstname: string,
              public name: string,
              public email: string,
              public password:string,
              public birthDate : Date,
              public username: string,
              public rolesDto: Set<Role>) {
  }

}
