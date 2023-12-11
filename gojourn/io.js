const rls = require('readline-sync')

module.exports = class {
  in(ask = "", newln = true) {
    if (ask != "") return rls.question(
      (newln) ? (`${ask}\n`) : ask
    )
    else return rls.question()
  }
}