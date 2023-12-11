module.exports = class {
  constructor() {
    this.character = require('./objects/character.js')
    this.item = require('./objects/item.js')
    this.location = require('./objects/location.js')
    this.player = require('./objects/player.js')
    this.action = require('./action.js')
  }
}