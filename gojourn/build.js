const objects = require('./object.js')

let main_menu = new objects.Location("main_menu", {name: "mainmenu", desc: ""}, [], {north: "cell01", south: "credits"})
let player = new objects.Actor("player", {name: "player", desc: ""}, [], "main_menu", [], [], 0, 0, 0, false, 0)

let select = new objects.Action("select", "<option>", "Selects an option in the menu.", 1, ["number"])
let help = new objects.Action("help", "", "Display a list of valid commands.", 0, [])

let list = {
    help: delete help,
    select: delete select
}

module.exports = {
    //Objects
    main_menu,
    player,
    
    //Actions
    select,
    help,

    list
}