module.exports = class {
    constructor(
      name,
      identifier,
      integer_id,
      joins = {
        north: "NONE",
        south: "NONE",
        west: "NONE",
        east: "NONE"
      },
      info = {
        join_description: "NONE",
        in_description: "NONE",
      },
      similar = []
    ) {
      this.name = name
      this.id = identifier
      this.int_id = integer_id
      this.adjacent = joins
      this.info = {
        join_desc: info['join_description'],
        in_desc: info['in_description']
      }
      this.similar = similar
    }
  
    modify(attribute, value) {
      this[attribute] = value
    }
  }