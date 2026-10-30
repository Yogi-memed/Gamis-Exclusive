import { Product } from "./Product.js";

export class CartItem {
  constructor(
    public readonly product: Product,
    public jumlah: number,
  ) {}

  getSubtotal(): number {
    return this.product.harga * this.jumlah;
  }
}
