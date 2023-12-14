const gj = require('./gojourn/build.js')
const readline = require('readline-sync')
const dialog = require('./gojourn/dialog.json')
let cur_loc = "main_menu"
let a

function rl(ask = "") { //Shorthand
    return (ask === "")
    ? readline.question()
    : readline.question(ask)
}

function put(str) { //Shorthand
    console.log(str)
}

function ok() {
    rl(dialog.misc.confirm_pause)
}

for (;;) {
    console.clear()

    //Print dialogue
    switch(gj[cur_loc].me.name) {
        case "main_menu":
            put(`
            ${dialog.main_menu.title01}\n
            ${dialog.main_menu.subtext01}\n
            ${dialog.main_menu.subtext02}\n\n
            ${dialog.main_menu.subtext03}\n
            ${dialog.main_menu.option01}\n
            ${dialog.main_menu.option02}\n
            ${dialog.main_menu.option03}\n
            `)
            break
    }
    a = rl()
    
    //No input
    if (a === "") {
        put(dialog.error.no_command)
        ok()
        continue
    }

    //Invalid command
    try {
        if (gj[a.split(' ')[0]].me.name === "WW91IGZvdW5kIG1lISBIb3cgbWFnaWNhbC4=") put("Incredible.")
    } catch {
        put(dialog.error.invalid_command)
        ok()
        continue
    }

    //Too many arguments
    if (a.split(' ').splice(0, 1).length > gj[a.split(' ')[0]].me.arg_limit) {
        put(dialog.error.too_many_args)
        ok()
        continue
    }
}