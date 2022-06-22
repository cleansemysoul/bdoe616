const admin = require("firebase-admin");
exports.getAgenda = async (req, res) => {
  try {
    const userId = req.params.id;
    const query = admin
      .firestore()
      .collection("agendas")
      .where("belongsTo", "==", userId);
    const querySnapshot = await query.get();
    if (querySnapshot.size === 0)
      return res.status(404).send({ data: "Not found" });
    let temp = [];
    querySnapshot.forEach((item) => temp.push(item.data()));
    return res.send({ data: temp });
  } catch (e) {
    console.log(e);
    return res.status(500).send({ data: "An error occurred" });
  }
};

exports.addEvent = async (req, res) => {
  try {
    const newEventData = {
      belongsTo: req.body.belongsTo,
      title: req.body.title,
      createdAt: new Date(),
      date: new Date(req.body.date),
    };
    const agendasRef = admin.firestore().collection("agendas");
    const newEvent = await agendasRef.add(newEventData);
    return res.send({ data: newEvent.id });
  } catch (e) {
    console.log(e);
    return res.status(500).send({ data: "An error occurred" });
  }
};
