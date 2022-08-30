const songForm = require("../models/songForm");



// CREATE FORM 

const createForm = async (req, res)=> {
    const newForm = new songForm(req.body);

    try {
        const savedForm = await newForm.save()
        return res.status(200).json(savedForm);
    } catch (error) {
        return res.status(500).json(error);
    }
};


module.exports = {
    createForm
}