const express = require('express')
const path = require('path')
const app = express()

// setup static and middleware
app.use(exprees.static('../public'))

// app.get("/", (req, res) => {
//   res.sendFile(path.resolve(__dirname, "../navbar-app/index.html"));
//   adding to static assests
//   ssr
// });

app.all("*", (req, res) => {
  res.status(404).send("resouce not found");
});

app.listen(5000, () => {
  console.log("server listening on port 5000....");
});
