import IUsers from "./IUsers";

export default interface IBarbecue {
  reason: string;
  date: string;
  valueWithoutDrink: string;
  valueWithDrinkIncluded: string;
  description: string;
  observation: string;
  users: IUsers[];
}
