import { Product } from "./models/Product";

const gamis = new Product(1, "Gamis Silk Navy", 450000, ["M", "L"], "Navy", 10);
gamis.kurangiStok(2);
console.log(gamis.nama, "- sisa stok:", gamis.getStok());

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
