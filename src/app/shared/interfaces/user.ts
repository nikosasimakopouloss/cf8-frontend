export interface IPhone {
  type: string; 
  number: string
}

export interface IAddress {
  area?:string;
  street?: string;
  number?: string;
  po?: string;
  municipality?: string;
}

export interface IRole {
  _id: string,
  role: string,
  description: string,
  active: boolean
}

export interface IUser {
  username: string;
  password: string;
  firstname?: string;
  lastname?: string;
  email?: string;
  address?: {
    area?: string;
    street?: string;
    number?: string;
    po?: string;
    municipality?: string;
  },
  phone?: IPhone[],
  roles: IRole[]
}

export interface Credentials {
  username: string;
  password: string;
}

export interface LoggedInUser {
  username: string;
  email: string;
  roles: IRole[]
}