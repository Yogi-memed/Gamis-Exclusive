export class Product {
  constructor(
    public readonly id: number,
    public nama: string,
    public harga: number,
    public ukuran: string[],
    public warna: string,
    private stok: number,
  ) {}

  getStok(): number {
    return this.stok;
  }

  kurangiStok(jumlah: number): void {
    if (jumlah > this.stok) {
      throw new Error("Stok tidak cukup");
    }
    this.stok -= jumlah;
  }

  tambahStok(jumlah: number): void {
    this.stok += jumlah;
  }
}
