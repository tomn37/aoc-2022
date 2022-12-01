const fs = require('fs')

function parse(path) {
    return fs.readFileSync(path).toString('utf-8')
}

 function parseLines(path) {
    return parse(path).split('\n')
}

module.exports = {
    parse,
    parseLines
}