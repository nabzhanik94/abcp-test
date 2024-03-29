export type Company = {
  bs: string;
  catchPhrase: string;
  name: string;
};

export type Geo = {
  lat: string;
  lng: string;
};

export type Address = {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
};

export type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
};

export interface IButtonProps {
  onClick(): void;
}
export interface UserInfoProps {
  user: User;
}
