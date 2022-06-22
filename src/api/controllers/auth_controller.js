const admin = require("firebase-admin");

exports.login = (req, res) => {
  return res.send({ data: "Not implemented / Logged in" });
};

exports.logout = (req, res) => {
  return res.send({ data: "Not implemented / Logged out" });
};

exports.create = async (req, res) => {
  try {
    const newUserData = {
      userName: req.body.userName,
    };
    const usersRef = admin.firestore().collection("users");
    const newUser = await usersRef.add(newUserData);
    return res.send({ data: newUser.id });
  } catch (e) {
    console.log(e);
    return res.status(500).send({ data: "An error occurred" });
  }
};

exports.update = async (req, res) => {
  return res.send({ data: "Not implemented / Update account" });
};

exports.delete = (req, res) => {
  return res.send({ data: "Not implemented / Delete account" });
};
