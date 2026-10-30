export class User {
  constructor(
    public readonly id: number,
    public nama: string,
    public email: string,
    private password: string,
  ) {}

  cekPassword(input: string): boolean {
    return this.password === input;
  }

  getRole(): string {
    return "user";
  }
}
