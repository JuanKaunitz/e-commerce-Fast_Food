const Client = require("../models/Client");

const bcrypt = require("bcrypt");

exports.createNewClient = async (req, res, next) => {
  const client = new Client(req.body);
  client.password = await bcrypt.hash(req.body.password, 10);
  try {
    await client.save();
    res.json({
      msg: "Client created correctly ",
      client,
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({ msg: "Error no se pudo crear el cliente" });
    next();
  }
};
exports.getAllClient = async (req, res, next) => {
  try {
    const clients = await Client.find({});
    res.json(clients);
  } catch (error) {
    console.log(error);
    res.status(400).json({ msg: "cliente no encontrado" });
    rext();
  }
};
exports.showClientById = async (req, res, next) => {
  const client = await Client.findById(req.params.id);
  if (!client) {
    res.status(400).json({ msg: "Ese Cliente no existe" });
    return next();
  }
  res.json({ msg: "Cliente encontrado", client });
};

exports.updateClient = async (req, res, next) => {
  try {
    let client = await Client.findOneAndUpdate(
      { _id: req.params.id },
      req.body,
      {
        new: true,
      }
    );
    res.json(client);
  } catch (error) {
    console.log(error);
    return next();
  }
};

exports.deleteClient = async (req, res, next) => {
  try {
    await Client.findOneAndDelete({ _id: req.params.id });
    res.json({ msg: "Cliente  eliminado" });
  } catch (error) {
    console.log(error);
    return next();
  }
};
