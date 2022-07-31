const story = require("../models/stories.models");

const getstories = async(req,res)=>{
    try{
        const stories = await story.find();
        return res.json(stories);
    }catch{
        return res.json(err);
    }
};

const createstory = async(req,res)=>{
  try{
    const mystory = new story({
           title : req.body.title ,
           description : req.body.description ,
           chapters : req.body.chapters
    });
    const addstory = await mystory.save();
    return res.json(addstory);
}catch{
    return res.json(error);
}
};

const addstorybyID = async(req,res)=>{
    const id = req.params.storyid;
    try{
        const onestory = await story.findById(id);
        return res.json(onestory);
    }catch {
        return res.json(error)
    }
};

const deletestory = async (req,res)=>{
    const id = req.params.storyid;
    try{
        const storytodelete = await story.findByIdAndDelete(id);
        return res.json(storytodelete);
    }catch{
        return res.json(error);
    }
};

const updatestory = async(req, res)=>{
    const id = req.params.storyid;
    const theupdate = req.body;
    try{
        const thenewversion = await story.findByIdAndUpdate(id, theupdate ,{new : true});
        return res.json(thenewversion);
    }catch{
        return res.json(error);
    }
};



module.exports.getstories = getstories;
module.exports.createstory  = createstory;
module.exports.addstorybyID = addstorybyID;
module.exports.adeletestory = deletestory;
module.exports.updatestory = updatestory;