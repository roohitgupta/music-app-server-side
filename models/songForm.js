const mongoose = require("mongoose");

const songSchema = new mongoose.Schema(
  {
    soneName: { type: String, required: true },
    dateReleased: { type: String, required: true },
    artWork: { type: String, required: true },
    artists: { type: String, required: true },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = mongoose.model("SongData", songSchema);