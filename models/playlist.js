const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// const passportLocalMongoose = require('passport-local-mongoose');

const Playlist = new Schema({
    username: String,
    song: String,
    artist: String,
    album: String
});

// Account.plugin(passportLocalMongoose);

module.exports = mongoose.model('playlist', Playlist);
