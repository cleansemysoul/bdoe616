exports.getContacts = (req, res) => {
  return res.send({ message: "all contacts" });
};

exports.getContact = (req, res) => {
  return res.send({ message: "single contact" });
};

exports.addContact = (req, res) => {
  return res.send({ message: "contact added" });
};

exports.editContact = (req, res) => {
  return res.send({ message: "coordinate modified" });
};

exports.deleteContact = (req, res) => {
  return res.send({ message: "contact deleted" });
};
