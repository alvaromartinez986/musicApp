'use strict'

let moongose = require('moongose');
let Schema = moongose.Schema;

let AlbumSchema = Schema({
  title: String,
  description: String,
  year: String,
  image: String,
  artist: {
    type: Schema.ObjectId,
    ref: 'Artist'
  }
});

module.exports = moongose.model('Album', AlbumSchema);
