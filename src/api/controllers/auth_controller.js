exports.login = (req, res) => {
  return res.send({ message: "logged in" });
};

exports.logout = (req, res) => {
  return res.send({ message: "logged out" });
};

exports.delete = (req, res) => {
  return res.send({ message: "delete account" });
};
