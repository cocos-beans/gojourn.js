const objects = require('./object.js')

let main_menu = new objects.Location("main_menu", {name: "mainmenu"}, [], {north: "cell01", south: "credits"})
let credits = new objects.Location("credits", {name: "credits"}, [], {north: "main_menu"})
let cell01 = new objects.Location("cell01", {name: "Prisoner Cell", desc: "The cell to which you are bound."}, ["cell", "prisonercell"], {north: "hallway01"})

let player = new objects.Actor("player", {name: "player"}, [], "main_menu", [], [], 100, 0, 0, false, 0)

let help = new objects.Action("help", "", "Display a list of valid commands.", 0, [])
let select = new objects.Action("select", "<option>", "Selects an option in the menu.", 1, ["number"])
let stop = new objects.Action("stop", "", "End the Gojourn process.", 0, [])

let list = {
    help: delete help,
    select: delete select,
    stop: delete stop
}

module.exports = {
    //Objects
    cell01,
    credits,
    main_menu,
    player,
    
    //Actions
    help,
    select,
    stop,

    list
}