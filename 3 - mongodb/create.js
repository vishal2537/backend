db.products.insertOne({ _id: 10, item: "box", qty: 20 });

try {
  db.products.insertMany([
    { item: "card", qty: 15 },
    { item: "envelope", qty: 20 },
    { item: "stamps", qty: 30 },
    { item: "stams", qty: 35 },
    { item: "staps", qty: 29 },
    { item: "stmps", qty: 32 },
  ]);
} catch (e) {
  print(e);
}
