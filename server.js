const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 8080;
const app = express();
const seeders = require('./seeders/seed');


app.use(logger("dev"));


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// mongoose.connect(process.env.MONGODB_URI || process.env.PROD_MONGODB || 'mongodb://localhost/workout', {
//   useNewUrlParser: true
// },
// { server: { auto_reconnect: true } });

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout-tracker", { useNewUrlParser: true, useUnifiedTopology: true });

// mongodb.MongoClient.connect(uri, { server: { auto_reconnect: true } }, function (err, db) {
//   /* adventure! */
// });


// routes
app.use(require("./routes/api.js"));
app.use(require("./routes/html.js"));
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});