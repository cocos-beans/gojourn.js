const objects = require('./softcoder.js')

let main_menu = new objects.Object("main_menu", {name: "Main Menu", desc: ""}, [])
let player = new objects.Object("player", {name: "player", desc: ""}, []).createActorBody("main_menu", [], [], 0, 0, 0, false, 0)

let select = new objects.Action("select", "Selects an option in the menu.", 1, ["string"])

module.exports = {
    main_menu,
    player
}