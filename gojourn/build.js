const objects = require('./object.js')

let main_menu = new objects.Location("main_menu", {name: "mainmenu", desc: ""}, [], {north: "cell01", south: "credits"})
let player = new objects.Actor("player", {name: "player", desc: ""}, [], "main_menu", [], [], 0, 0, 0, false, 0)

let select = new objects.Action("select", "Selects an option in the menu.", 1, ["string"])


module.exports = {
    main_menu,
    player,
    select
}