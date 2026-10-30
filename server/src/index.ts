import { Product } from "./models/Product";
import { Order } from "./models/Order.js";

const gamis = new Product(1, "Gamis Silk Navy", 450000, ["M", "L"], "Navy", 10);
gamis.kurangiStok(2);
console.log(gamis.nama, "- sisa stok:", gamis.getStok());

import { Cart } from "./models/Cart.js";

const keranjang = new Cart();
const gamis2 = new Product(
  2,
  "Gamis Brokat Maroon",
  520000,
  ["S", "M"],
  "Maroon",
  5,
);

keranjang.tambah(gamis, 1);
keranjang.tambah(gamis2, 2);

console.log("Jumlah baris:", keranjang.getItems().length);
console.log("Total:", keranjang.getTotal());
import { Customer } from "./models/Customer.js";
import { Admin } from "./models/Admin.js";

const pembeli = new Customer(
  1,
  "Siti",
  "siti@mail.com",
  "rahasia123",
  "Jakarta",
);
const bos = new Admin(2, "Yogi", "yogi@mail.com", "admin123");

console.log(pembeli.nama, "-", pembeli.getRole(), "-", pembeli.alamat);
console.log(bos.nama, "-", bos.getRole());
console.log("Password benar?", pembeli.cekPassword("rahasia123"));

const pesanan = new Order(1, pembeli, keranjang);
console.log(
  "Order",
  pesanan.id,
  "|",
  pesanan.tanggal,
  "|",
  pesanan.getStatus(),
  "|",
  pesanan.total,
);

pesanan.bayar();
console.log(pesanan.getStatus(), "| stok gamis:", gamis.getStok());

pesanan.kirim();
console.log(pesanan.getStatus());
