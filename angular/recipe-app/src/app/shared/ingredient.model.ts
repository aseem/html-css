export class Ingredient {
  // by defining these params as public, ts automatically
  // creates the member variables and assigns them the passed
  // in values!
  constructor(public name: string, public amount: number) {}
}
