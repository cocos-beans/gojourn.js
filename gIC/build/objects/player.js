module.exports = class {
  constructor(
    initial_location = 0,
    inventory = {},
    stats = {
      health: 100,
      defense: 0,
      aggression: 0,
      attack_bonus: 0
    }
  ) {
    this.init_loc = initial_location
    this.inventory = inventory
    this.stats = stats
  }

  modify(attribute, value) {
    this[attribute] = value
  }
}