const joi = require('joi');

const _id = joi.string();
const Visitor_ID = joi.string();
const Name = joi.string();
const Visit_Date = joi.date().iso();
const Group_Size = joi.number();
const Contact = joi.string().email();

const CreateVisitor = joi.object({
    Visitor_ID: Visitor_ID.required(),
    Name: Name.required(),
    Visit_Date: Visit_Date.required(),
    Group_Size: Group_Size.required(),
    Contact:Contact.required()
});

const UpdateVisitor = joi.object({
    Visitor_ID: Visitor_ID,
    Name: Name,
    Visit_Date: Visit_Date,
    Group_Size: Group_Size,
    Contact:Contact
})

const GetVisitor = joi.object({
    _id:_id.required()
});

module.exports ={ CreateVisitor, UpdateVisitor, GetVisitor }