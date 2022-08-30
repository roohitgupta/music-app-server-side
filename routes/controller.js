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

//GET ARTIST DATA
const getArtistData = async (req, res)=> {
    try {     
        const allData = await artistForm.find()
        return res.json(allData);
    } catch (error) {
        return res.json(error);
    }
}

//GET SONG DATA
const getSongData = async (req, res)=> {
    try {
        const allData = await songForm.find()
        return res.json(allData);
    } catch (error) {
        return res.json(error);
    }
}


module.exports = {
    CreateSongForm,
    CreateArtistForm,
    getArtistData,
    getSongData
}