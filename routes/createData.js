
const express = require("express");
 const insertHotelData=require("../controllers/insertHotelData");
 const insertRoomData=require("../controllers/insertRoomData");
 const router = express.Router();
 router.post("/createHotel",insertHotelData);

 // insert data into a specific hotel using that hotel Id

 router.post("/createRoom/:hotel_slug",insertRoomData)



 module.exports=router;