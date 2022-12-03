const { parseLines} = require('../parseInput')

const lines = parseLines('./input.txt')
const letters = [];
let group = []
for (let j = 0; j < lines.length; j++) {
    const line = lines[j]
    if (j % 3 === 0) {
        group = [line]
    } else {
        group.push(line)
    }
    const [item1,item2,item3] = group
    if (j % 3 === 2) {
        for (let char of item1) {
            if (item2.includes(char) && item3.includes(char)) {
                letters.push(char)
                break
            }
        }
    }
}

console.log(letters.reduce((accum,prev) => accum + score(prev)  , 0))

function score(char) {
    if (char.toLowerCase() === char) {
        return char.charCodeAt(0) - 96
    } else {
        return char.charCodeAt(0) - 38
    }
}