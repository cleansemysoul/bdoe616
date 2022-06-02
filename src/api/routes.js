const auth = require("./routes/auth");
const agenda = require("./routes/agenda");
const contact = require("./routes/contact");

module.exports = (app) => {
  app.use("/auth", auth);
  app.use("/agenda", agenda);
  app.use("/contacts", contact);
};
