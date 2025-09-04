const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://poojasolanki3183_db_user:POOJA3183@cluster0.jswfxvp.mongodb.net/pooja", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const songSchema = new mongoose.Schema({
  title: String,
  artist: String,
  category: String,
  album: String,
  url: String,
  photo: String,
  year: Number,
});

const Song = mongoose.model("Song", songSchema);
console.log("Song model created successfully");

// Song.find()
//   .then((allSongs) => {
//     console.log("All songs retrieved successfully:", allSongs);
//   })
//   .catch((error) => {
//     console.error("Error retrieving songs:", error);
//   });

Song.find({ category: "Bollywood" })
  .then((allSongs) => {
    console.log("All songs retrieved successfully:", allSongs);
  })
  .catch((error) => {
    console.error("Error retrieving songs:", error);
  });

// const newSong = new Song({
//   title: "Preet Re",
//   artist: "Gurpreet Saini, Darshan Raval, Rochak Kohli, Jonita Gandhi",
//   category: "Bollywood",
//   album: " Dhadak 2",
//   url: "https://bajaao.pendujatt.com.se/load/128/66780039/2136806/Aavan Jaavan.mp3",
//   photo:
//     "https://pendujatt.com.se/uploads/album/aavan-jaavan-from-war-2-pritam.webp",
//   year: 2025,
// });

// newSong
//   .save()
//   .then(() => {
//     console.log("New song added successfully");
//   })
//   .catch((error) => {
//     console.error("Error adding new song:", error);
//   });
