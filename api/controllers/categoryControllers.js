const Category = require('../models/Category');



exports.createNewCategory = async(req,res,next)=>{
    const category = new Category(req.body);
    try {
        await category.save()
        res.json({
            msg:'Category create susses',
            category
        });
    } catch (error) {
        console.log(error);
        return next();
    }
};

exports.getAllCategories = async(req,res,next)=>{
    try {
      const categories = await Category.find({})
     
      res.json(categories);
  } catch (error) {
      console.log(error);
      return next();
  }
}

  exports.updateCategori = async(req,res,next)=>{
    try {
        let category = await Category.findOneAndUpdate({_id:req.params.id},
            req.body,{
                new:true
            });
            res.json({
                msg:'category aupdate success',
                category
            });
    } catch (error) {
        console.log(error);
        return next();
    }
  
  };

  exports.deleteCategori = async(req,res,next)=>{
    try {
        await Category.findOneAndDelete({_id: req.params.id});
        res.json({msg:'Category  deleted'});
    } catch (error) {
        console.log(error);
        return next();
    }
  };

  