const songForm = require("../models/songForm");
const artistForm = require("../models/artistForm");


// CREATE FORM 

const CreateSongForm = async (req, res)=> {
    const newForm = new songForm(req.body);

    try {
        const savedForm = await newForm.save()
        return res.status(200).json(savedForm);
    } catch (error) {
        return res.status(500).json(error);
    }
};

// CREATE ARTISTS

const CreateArtistForm = async (req, res)=> {
    const newForm = new artistForm(req.body);

    try {
        const savedForm = await newForm.save()
        return res.status(200).json(savedForm);
    } catch (error) {
        return res.status(500).json(error);
    }
};


module.exports = {
    CreateSongForm,
    CreateArtistForm
}