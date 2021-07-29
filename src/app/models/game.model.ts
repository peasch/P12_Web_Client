import {GameStyleDto} from "./gameStyleDto.model";

export class Game {
  private id!: number;

  name!: string;

  ageMin!: number;
  private gameStyleDto!: GameStyleDto;
  minPlayers!: number;
  maxPlayers!: number;
  private available!: boolean;
  duration!: number;
  rulesLink!: string;
description!:string;

  constructor() {
  }
}
