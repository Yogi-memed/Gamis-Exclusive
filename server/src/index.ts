import { Product } from "./models/Product";

const gamis = new Product(1, "Gamis Silk Navy", 450000, ["M", "L"], "Navy", 10);
gamis.kurangiStok(2);
console.log(gamis.nama, "- sisa stok:", gamis.getStok());
