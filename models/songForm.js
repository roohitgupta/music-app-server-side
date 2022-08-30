const mongoose = require("mongoose");

const songSchema = new mongoose.Schema(
  {
    songName: { type: String, required: true },
    dateReleased: { type: String, required: true },
    artWork: { type: String, required: true },
    artists: { type: String, required: true },
    // user_Id: { type:mongoose.Schema.Types.ObjectId, ref: "ArtistsData", required: true }
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = mongoose.model("SongData", songSchema);
