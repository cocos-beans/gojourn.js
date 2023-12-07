module.exports = class {
    constructor(
      name,
      identifier,
      integer_id,
      location_id,
      description,
      similar = [],
      inventory = {},
      stats = {
        health: 100,
        defense: 0,
        aggression: 0,
        invincible: true,
        attack_bonus: 0
      }
    ) {
      this.name = name
      this.id = identifier
      this.int_id = integer_id
      this.location = location_id
      this.desc = description
      this.similar = similar
      this.inventory = inventory
      this.stats = stats
    }
  
    modify(attribute, value) {
      this[attribute] = value
    }
  
    containerNearDesc(desc) {
      this.desc_close = desc
    }
  }