db.products.find();
db.products.find().skip(1); // skip first element 
db.products.find().sort({ qty: 1 }); // increasing order
db.products.find().sort({ qty: -1 }); // decreasing order
db.products.find().limit(2) //limit the number of document in output to 2

db.products.find({ qty: 30 }); 

// And
db.products.find({ $and: [{ item: "stamps" }, { qty: 30 }] })

// or
db.products.or({ $or: [{ item: "stamps" }, { qty: 15 }] });

db.products.findOne({ $or: [{ item: "stamps" }, { qty: 15 }] });


// achieving  pagination using mongodb find out limit
// 1 to 10
no = 8
db.blogs.find().skip((pageNo - 1) * no).limit(no)

// pageno = 1 -> 
db.blogs.find().skip(0).limit(8)

// pageno = 2 ->
db.blogs.find().skip(8).limit(8)
