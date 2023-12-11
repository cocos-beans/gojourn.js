const _gic = require('../gIC/build/index.js')
const gIC = new _gic()

class Locations {
  constructor() {
    
    this.main_menu = new gIC.location(
      "Main Menu",
      "mainmenu",
      -1,
      {
        north: "credits",
        south: "options"
      },
      {
        in_description: "Welcome to Gojourn."
      }
    )
    
  }
}

module.exports = {
  Locations
}