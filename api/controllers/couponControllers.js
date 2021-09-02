// const Coupon = require("../models/Coupon");

// exports.createCoupon = async (req, res, next) => {
//   const coupon = new Coupon(req.body);

//   try {
//     console.log(coupon);
//     await coupon.save();
//     res.json({ msg: "Coupon created", coupon });
//   } catch (error) {
//     console.log(error);
//     return next();
//   }
// };

// exports.getCoupons = async (req, res, next) => {
//   try {
//     const coupons = await Coupon.find({});
//     res.json(coupons);
//   } catch (error) {
//     console.log(error);
//     return next();
//   }
// };

// exports.deleteCoupon = async (req, res, next) => {
//   try {
//     await Coupon.findOneAndDelete({ _id: req.params.id });
//     res.json({ msg: "Cupon eliminado" });
//   } catch (error) {
//     console.log(error);
//     return next();
//   }
// };

// exports.searchCoupon = async (req, res, next) => {
//   try {
//     const codeSearch = await Coupon.find({ code: req.params.code });

//     codeSearch ? res.json(codeSearch) : res.json({ msg: "Coupon not found" });
//   } catch (error) {
//     console.log(error);
//     return next();
//   }
// };
