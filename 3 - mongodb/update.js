db.products.updateOne(
    { item: "stamps" },
    {
        $set: { qty: 15 },
        $currentDate:{lastModified:true}
    }
)


db.products.updateMany(
  { qty: 15 },
  {
    $set: {qty:5000},
    $currentDate: { lastModified: true },
  }
);
