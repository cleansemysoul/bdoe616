const express = require("express");
const PORT = 8000;
const app = express();

require("./api/routes")(app);

app.listen(PORT, () => {
  console.log(`App is listening on port localhost:${PORT}`);
});
