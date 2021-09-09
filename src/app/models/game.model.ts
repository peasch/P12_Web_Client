import {GameStyleDto} from "./gameStyleDto.model";

export class Game {
  public id!: number;

  name!: string;
  rating!: number;
  ageMin!: number;
  gameStyleDto!: GameStyleDto;
  minPlayers!: number;
  maxPlayers!: number;
  available!: boolean;
  duration!: number;
  rulesLink!: string;
  description!: string;
  coverLink!: string;
  borrowingQuantity!: number;

  constructor() {
  }
}
