const gj = require('./gojourn/build.js')
const readline = require('readline-sync')
const dialog = require('./gojourn/dialog.json')
let cur_loc = "main_menu"
let a
let loop = true

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

while (loop) {
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
    if (a.split(' ').splice(1, a.split(' ').length).length > gj[a.split(' ')[0]].me.arg_limit) {
        put(dialog.error.too_many_args)
        ok()
        continue
    }

    //Argument types don't match up
    if (
        gj[a.split(' ')[0]].me.arg_limit >= 1 &&
        a.split(' ').splice(1, a.split(' ').length).length === gj[a.split(' ')[0]].me.arg_limit
    ) {
        for (i = 0; i < gj[a.split(' ')[0]].me.arg_limit; i++) {
            if (
                (
                    gj[a.split(' ')[0]].me.arg_types[i] === "string" &&
                    !isNaN(a.split(' ').splice(1, a.split(' ').length)[i])
                ) ||
                (
                    gj[a.split(' ')[0]].me.arg_types[i] === "number" &&
                    isNaN(a.split(' ').splice(1, a.split(' ').length)[i])
                )
            ) {
                put(dialog.error.incorrect_arg_type)
                ok()
                break
            }
        }
    }

    //Run command check
    switch (a.split(' ')[0]) {
        case "help":
            put(`${dialog.misc.cmd_help_title01}\n`)
            for (i = 0; i < Object.keys(gj.list).length; i++) {
                put(`
                    ${gj[Object.keys(gj.list)[i]].me.name} ${gj[Object.keys(gj.list)[i]].me.valid_args}\n
                    \t${gj[Object.keys(gj.list)[i]].me.desc}
                `)
            }
            ok()
            break
    }
}