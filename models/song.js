'use strict'

let moongose = require('moongose');
let Schema = moongose.Schema;

let SongSchema = Schema({
  number: String,
  name: String,
  duration: String,
  file: String,
  album: {
    type: Schema.ObjectId,
    ref: 'Album'
  }
});

module.exports = moongose.model('Song', SongSchema);
