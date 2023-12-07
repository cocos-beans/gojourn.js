module.exports = class {
    constructor(
      name,
      identifier,
      integer_id,
      location_id,
      container_id,
      description,
      similar = []
    ) {
      this.name = name
      this.id = identifier
      this.int_id = integer_id
      this.location = location_id
      this.container = container_id
      this.desc = description
      this.similar = similar
      this.inventory = inventory
    }
  
    modify(attribute, value) {
      this[attribute] = value
    }
  }