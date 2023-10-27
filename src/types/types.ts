export type userId = number;

export interface User {
  name: string;
  email: string;
  github: string;
}

export interface userWithId extends User {
  id: string;
}
