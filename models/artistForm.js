const mongoose = require("mongoose");

const artistSchema = new mongoose.Schema(
  {
    artistName: { type: String, required: true },
    dob: { type: String, required: true },
    bio: { type: String, required: true },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = mongoose.model("ArtistsData", artistSchema);
