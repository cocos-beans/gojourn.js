module.exports = class {
  process(command) {
    return {
      command: command.split(" ")[0],
      args: String(command.split(" ").slice(1, command.split(" ").length))
        .replace(/,/g, " ")
        .replace(/  /g, ", "),
    }
  }
}