const { parseLines} = require('../parseInput')

const lines = parseLines('./input.txt')
const inBoth = [];

for (let j = 0; j < lines.length; j++) {
    const line = lines[j]
    const medianIndex = (line.length /2)
    const part1 = []
    for (let i = 0; i < line.length; i++) {
        const char = line[i]
        if (i < medianIndex) {
            part1.push(char)
        } else {
            if (inBoth.length === j && part1.includes(char)) {
                inBoth.push(char)
            }
        }

    }

}

console.log(inBoth.reduce((accum,prev) => accum + score(prev)  , 0))

function score(char) {
    if (char.toLowerCase() === char) {
        return char.charCodeAt(0) - 96
    } else {
        return char.charCodeAt(0) - 38
    }
}