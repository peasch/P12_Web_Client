import {Role} from "./role.model";

export class User {

  constructor(public id: number,
              public firstname: string,
              public name: string,
              public email: string,
              public password: string,
              public birthDate: Date,
              public username: string,
              public free:boolean,
              public rolesDto: Set<Role>) {
  }

}
