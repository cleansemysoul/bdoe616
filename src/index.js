const express = require("express");
const PORT = 8000;
const app = express();
const admin = require("firebase-admin");
const serviceAccount = require("../service_account.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
require("./api/routes")(app);

app.listen(PORT, () => {
  console.log(`App is listening on port localhost:${PORT}`);
});
