const router = require("express").Router();
const { getstories , createstory , addstorybyID , adeletestory , updatestory} = require("../controllers/stories.controllers");
const controller = require("../controllers/stories.controllers");

router.get("/", controller.getstories, getstories);
router.post("/" , controller.createstory , createstory );
router.get("/:storyid",controller.addstorybyID , controller.addstorybyID);
router.delete("/:storyid", controller.adeletestory ,adeletestory );
router.put("/:storyid", controller.updatestory, updatestory);

module.exports=router;