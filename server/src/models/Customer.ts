import { User } from "./User.js";

export class Customer extends User {
  constructor(
    id: number,
    nama: string,
    email: string,
    password: string,
    public alamat: string,
  ) {
    super(id, nama, email, password);
  }

  getRole(): string {
    return "customer";
  }
}
