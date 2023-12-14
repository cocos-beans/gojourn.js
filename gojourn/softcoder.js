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

    createActorBody(
        init_loc,
        inventory = [],
        equipped = [],
        hp,
        atk,
        def,
        invincible,
        aggression
    ) {
        this.me.actor = {
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

    createContainerBody() {
        this.me.container = {
            location,
            inventory: [],
            locked: false
        }
    }

    createItemBody() {
        this.me.item = {
            weight,
            value,
            stats: {
                damage,
                durability,
                unbreakable: false,
                defense_modifier,
                crit_chance
            }
        }
    }
}

class Action {
    constructor(
        name,
        desc,
        arg_limit,
        arg_types = []
    ) {
        this.me = {
            name: name,
            desc: desc,
            arg_limit: arg_limit,
            arg_types: arg_types
        }
    }
}

module.exports = { Object, Action }