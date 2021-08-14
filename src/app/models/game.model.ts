import {GameStyleDto} from "./gameStyleDto.model";

export class Game {
  public id!: number;

  name!: string;

  ageMin!: number;
   gameStyleDto!: GameStyleDto;
  minPlayers!: number;
  maxPlayers!: number;
  private available!: boolean;
  duration!: number;
  rulesLink!: string;
  description!: string;
  coverLink!: string;

  constructor() {
  }
}
