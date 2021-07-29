import {GameStyleDto} from "./gameStyleDto.model";

export class Game {
  private id!: number;

  name!: string;

  private ageMin!: number;
  private gameStyleDto!: GameStyleDto;
  private minPlayers!: number;
  private maxPlayers!: number;
  private available!: boolean;
  private duration!: number;
  private rulesLink!: string;


  constructor() {
  }
}
