const joi = require('joi');
const { models } = require('mongoose');

const _id = joi.string();
const Purchase_ID = joi.string();
const Visitor_ID = joi.string();
const Purchase_Date_and_Time = joi.date().iso();
const Total_Amount = joi.number();
const Purchased_Items = joi.array();

const CreatePurchase = joi.object({
    Purchase_ID: Purchase_ID.required(),
    Visitor_ID : Visitor_ID.required(),
    Purchase_Date_and_Time: Purchase_Date_and_Time.required(),
    Total_Amount: Total_Amount.required(),
    Purchased_Items:Purchased_Items.required()
})
const UpdatePurchase = joi.object({
    Purchase_ID: Purchase_ID,
    Visitor_ID : Visitor_ID,
    Purchase_Date_and_Time: Purchase_Date_and_Time,
    Total_Amount: Total_Amount,
    Purchased_Items:Purchased_Items
})

const GetPurchase = joi.object({
    _id:_id.required()
});

module.exports = { CreatePurchase, UpdatePurchase, GetPurchase }