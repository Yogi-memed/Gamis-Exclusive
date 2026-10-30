import { Product } from "./Product.js";
import { CartItem } from "./CartItem.js";

export class Cart {
  private items: CartItem[] = [];

  tambah(product: Product, jumlah: number): void {
    const ada = this.items.find((i) => i.product.id === product.id);
    const jumlahBaru = (ada ? ada.jumlah : 0) + jumlah;

    if (jumlahBaru > product.getStok()) {
      throw new Error("Stok tidak cukup");
    }

    if (ada) {
      ada.jumlah = jumlahBaru;
    } else {
      this.items.push(new CartItem(product, jumlah));
    }
  }

  hapus(productId: number): void {
    this.items = this.items.filter((i) => i.product.id !== productId);
  }

  getItems(): CartItem[] {
    return [...this.items];
  }

  getTotal(): number {
    return this.items.reduce((total, i) => total + i.getSubtotal(), 0);
  }
}
