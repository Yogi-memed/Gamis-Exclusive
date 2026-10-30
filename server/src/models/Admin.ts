import { User } from "./User.js";

export class Admin extends User {
  getRole(): string {
    return "admin";
  }
}
