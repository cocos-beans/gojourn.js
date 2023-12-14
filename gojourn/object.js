class Action {
    constructor(
        name,
        valid_args,
        desc,
        arg_limit,
        arg_types = []
    ) {
        this.me = {
            name: name,
            valid_args: valid_args,
            desc: desc,
            arg_limit: arg_limit,
            arg_types: arg_types
        }
    }
}

class Actor {
    constructor(
        name,
        display = {
            name,
            desc
        },
        aliases,
        init_loc,
        inventory = [],
        equipped = [],
        hp,
        atk,
        def,
        invincible,
        aggression
    ) {
        this.me = {
            name: name,
            display: {
                name: display.name,
                desc: display.desc
            },
            aliases: aliases,
            actor: {
                location: init_loc,
                inventory: inventory,
                equipped: equipped,
                stats: {
                    hp: hp,
                    atk: atk,
                    def: def,
                    invincible: invincible,
                    aggression: aggression
                }
            }
        }
    }
}

class Container {
    constructor(
    name,
    display = {
        name,
        desc
    },
    aliases,
    location,
    inventory,
    locked
    ) {
        this.me = {
            name: name,
            display: {
                name: display.name,
                desc: display.desc
            },
            aliases: aliases,
            container: {
                location: location,
                inventory: inventory,
                locked: locked
            }
        }
    }
}

class Item {
    constructor(
        name,
        display = {
            name,
            desc
        },
        aliases,
        weight,
        value,
        damage,
        durability,
        unbreakable,
        defense_modifier,
        crit_chance
    ) {
        this.me = {
            name: name,
            display: {
                name: display.name,
                desc: display.desc
            },
            aliases: aliases,
            item: {
                weight: weight,
                value: value,
                stats: {
                    damage: damage,
                    durability: durability,
                    unbreakable: unbreakable,
                    defense_modifier: defense_modifier,
                    crit_chance: crit_chance
                }
            }
        }
    }
}

class Location {
    constructor(
        name,
        display = {
            name,
            desc
        },
        aliases,
        joins = {
            north: "",
            south: "",
            west: "",
            east: ""
        }
    ) {
        this.me = {
            name: name,
            display: {
                name: display.name,
                desc: display.desc
            },
            aliases: aliases,
            adjacent: {
                north: joins.north,
                south: joins.south,
                west: joins.west,
                east: joins.east
            }
        }
    }
}

class Object {
    constructor(
        name,
        display = {
            name,
            desc
        },
        aliases
    ) {
        this.me = {
            name: name,
            display: {
                name: display.name,
                desc: display.desc
            },
            aliases: aliases
        }
    }
}

module.exports = { 
    Action,
    Actor,
    Container,
    Item,
    Location,
    Object
}