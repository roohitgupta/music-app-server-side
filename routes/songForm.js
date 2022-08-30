const songForm = require("../models/songForm");



// CREATE FORM 

const createForm = async (req, res)=> {
    const newForm = new songForm(req.body);

    try {
        const savedForm = await newForm.save()
    } catch (error) {
        return res.send(500).json(error);
    }
};