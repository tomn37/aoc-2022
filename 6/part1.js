const _ = require('lodash')
const { parse} = require('../parseInput')

const text = parse('./input.txt')

let last4  = []
for (let i = 4; i < text.length; i++) {
    last4 = text.slice(i-4, i )
    const letters = []
    let valid = true
    for (const letter of last4) {
        if (letters.includes(letter)) {
            valid = false
        }
        letters.push(letter)
    }

    if (valid) {
        console.log(i)
        break;
    }
}

