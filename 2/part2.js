const { parseLines} = require('../parseInput')

const lines = parseLines('./input.txt')

const oppThrows = {
    'A': 'r',
    'B': 'p',
    'C': 's'
}

const scores = {
    'r': 1,
    'p': 2,
    's': 3
}

const outcomes = {
    'l': 0,
    'd': 3,
    'w': 6
}

const results = {
    'X': 'l',
    'Y': 'd',
    'Z': 'w'
}

const wins = {
    'r': 'p',
    'p': 's',
    's': 'r'
}

const losses = {
    'r': 's',
    'p': 'r',
    's': 'p'
}

let score = 0

for (const [them, space, res] of lines) {

    const theirThrow = oppThrows[them]
    const result = results[res]
    const myThrow = calculateSymbol(theirThrow, result)
    score += scores[myThrow]
    score += outcomes[result]

}

console.log(score)



function calculateSymbol(theirThrow, res) {
    if (res === 'd') {
        return theirThrow
    }
    if (res === 'l') {
        return losses[theirThrow]
    }
    if (res === 'w') {
        return wins[theirThrow]
    }
}