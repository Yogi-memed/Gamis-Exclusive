import dayjs from "dayjs";
import { Cart } from "./Cart.js";
import { CartItem } from "./CartItem.js";
import { Customer } from "./Customer.js";

export type StatusOrder = "menunggu_bayar" | "dibayar" | "dikirim";

export class Order {
  public readonly tanggal: string;
  public readonly total: number;
  private readonly items: CartItem[];
  private status: StatusOrder = "menunggu_bayar";

  constructor(
    public readonly id: number,
    public readonly pembeli: Customer,
    cart: Cart,
  ) {
    this.items = cart.getItems();
    if (this.items.length === 0) {
      throw new Error("Keranjang kosong");
    }
    this.total = cart.getTotal();
    this.tanggal = dayjs().format("DD-MM-YYYY HH:mm");
  }

  getStatus(): StatusOrder {
    return this.status;
  }

  bayar(): void {
    if (this.status !== "menunggu_bayar") {
      throw new Error("Order tidak bisa dibayar");
    }
    this.items.forEach((i) => i.product.kurangiStok(i.jumlah));
    this.status = "dibayar";
  }

  kirim(): void {
    if (this.status !== "dibayar") {
      throw new Error("Order belum dibayar");
    }
    this.status = "dikirim";
  }
}
