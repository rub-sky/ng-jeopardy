export class Contestant {
  private _name: string;
  private _score: number = 0;

  constructor(name: string) {
    this._name = name;
  }


  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get score(): number {
    return this._score;
  }

  public addToScore(value: number) {
    this._score += value;
  }
}
