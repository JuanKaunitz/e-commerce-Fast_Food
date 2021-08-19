const Types = require("../models/Types");

exports.createNewType = async (req, res, next) => {
  const type = new Types(req.body);
  try {
    await type.save();
    res.json(type);
  } catch (error) {
    console.log(error);
    return next();
  }
};

exports.getAllTypes = async (req, res, next) => {
  try {
    const types = await Types.find({});
    res.json(types);
  } catch (error) {
    console.log(error);
    return next();
  }
};
exports.getTpeById = async (req, res, next) => {
  const type = await Types.findById(req.params.id);
  if (!type) {
    res.status(400).json({ msg: "Ese type no existe" });
    return next();
  }
  res.json(type);
};
exports.updateType = async (req, res, next) => {
  try {
    let type = await Types.findOneAndUpdate({ _id: req.params.id }, req.body, {
      new: true,
    });
    res.json({
      msg: "types aupdate success",
      type,
    });
  } catch (error) {
    console.log(error);
    return next();
  }
};

exports.deleteType = async (req, res, next) => {
  try {
    await Types.findOneAndDelete({ _id: req.params.id });
    res.json({ msg: "type  deleted" });
  } catch (error) {
    console.log(error);
    return next();
  }
};
