const { parseLines} = require('../parseInput')

const lines = parseLines('./input.txt')

let mostCalories = []
let runningCount = 0
for (const line of lines) {

    if (line != '') {
        runningCount += Number.parseInt(line)
    } else {
        mostCalories.push(runningCount)
        runningCount = 0
    }

}

console.log('top 3 calories', mostCalories.sort((a,b) => a > b ? -1 : 1).slice(0,3).reduce((prev, next) => prev + next, 0))