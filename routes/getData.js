const express = require("express");
const router = express.Router();
const getHotelBySlug=require("../controllers/getHotelBySlug");
//get the hotel information and rooms information using the hotelName as parameter
router.get("/hotels/:hotel_slug", getHotelBySlug);

module.exports=router;