const { parse} = require('../parseInput')

const text = parse('./input.txt')
let last14  = []
for (let i = 14; i < text.length; i++) {
    last14 = text.slice(i-14, i )
    const letters = []
    let valid = true
    for (const letter of last14) {
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
