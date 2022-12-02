const { parseLines} = require('../parseInput')

const lines = parseLines('./input.txt')

const oppThrows = {
    'A': 'r',
    'B': 'p',
    'C': 's'
}

const scores = {
    'X': 1,
    'Y': 2,
    'Z': 3
}

const outcomes = {
    'l': 0,
    'd': 3,
    'w': 6
}

const myThrows = {
    'X': 'r',
    'Y': 'p',
    'Z': 's'
}
let score = 0
let winner = 0

for (const [them, space, me] of lines) {

    const theirThrow = oppThrows[them]
    const myThrow = myThrows[me]

    const outcome = calculateWinner(myThrow, theirThrow)
  
    score += scores[me]
    score += outcomes[outcome]

}

console.log(score)

function calculateWinner(throw1, throw2) {
    
    if (throw1 === throw2) {
    
        return 'd'
    }
    const winOutcome1 = throw1 === 'r' && throw2 === 's'
    const winOutcome2 = throw1 === 'p' && throw2 === 'r'
    const winOutcome3 = throw1 === 's' && throw2 === 'p'
    if (winOutcome1 || winOutcome2 || winOutcome3) {
     
        return 'w'
    }

    return 'l'
}