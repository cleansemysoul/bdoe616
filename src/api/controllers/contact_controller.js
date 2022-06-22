const admin = require("firebase-admin");

exports.getContacts = async (req, res) => {
  try {
    const userId = req.params.id;
    const query = admin
      .firestore()
      .collection("contacts")
      .where("belongsTo", "==", userId);
    const querySnapshot = await query.get();
    if (querySnapshot.size === 0)
      return res.status(404).send({ data: "Not found" });
    let temp = [];
    querySnapshot.forEach((item) => temp.push(item.data()));
    return res.send({ data: temp });
  } catch (e) {
    return res.status(500).send({ data: "An error occurred" });
  }
};

exports.getContact = async (req, res) => {
  try {
    const contactId = req.params.id;
    const contactRef = admin.firestore().doc(`contacts/${contactId}`);
    const contactDoc = await contactRef.get();
    if (!contactDoc.exists) return res.status(404).send({ data: "Not found" });
    const contactData = contactDoc.data();
    return res.send({ data: contactData });
  } catch (e) {
    return res.status(500).send({ data: "An error occurred" });
  }
};

exports.addContact = async (req, res) => {
  try {
    const newContact = {
      belongsTo: req.body.belongsTo,
      name: req.body.name,
      address: [...req.body.address],
      phone: [...req.body.phone],
      email: [...req.body.email],
      website: [...req.body.website],
    };
    const contactsRef = admin.firestore().collection("contacts");
    const newUser = await contactsRef.add(newContact);
    return res.send({ data: newUser.id });
  } catch (e) {
    console.log(e);
    return res.status(500).send({ data: "An error occurred" });
  }
};

exports.editContact = async (req, res) => {
  try {
    const newContactData = {
      name: req.body.name,
      address: [...req.body.address],
      phone: [...req.body.phone],
      email: [...req.body.email],
      website: [...req.body.website],
    };
    const contactsRef = admin.firestore().doc(`contacts/${req.body.id}`);
    await contactsRef.update(newContactData);
    return res.send({ data: "Success" });
  } catch (e) {
    console.log(e);
    return res.status(500).send({ data: "An error occurred" });
  }
};

exports.deleteContact = async (req, res) => {
  try {
    const contactRef = admin.firestore().doc(`contacts/${req.params.id}`);
    await contactRef.delete();
    return res.send({ data: "Success" });
  } catch (e) {
    console.log(e);
    return res.status(500).send({ data: "An error occurred" });
  }
};
