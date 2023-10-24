export interface IUser {
  id: number;
  name: string;
  email: string;
  birthday_date: string;
  phone_number: string;
  address: string;
}

export interface IFromUser extends Omit<IUser, "id"> {}
